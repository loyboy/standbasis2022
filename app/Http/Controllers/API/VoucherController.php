<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Voucher;
use App\Models\Wallet;
use App\Models\CustomerTransactionsLog;
use Carbon\Carbon;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\TranStats;
use App\Models\Transaction; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Mail\GeneralEmails;
use Illuminate\Support\Facades\Mail;
use Illuminate\Database\Eloquent\Builder;

class VoucherController extends Controller
{
    use ApiResponser;

    public function get_voucher_by_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_voucher = Voucher::where('id',$request->id)->with("customer")->first();

        if ($current_voucher) {
            return $this->success('record found', $current_voucher);
        } else {
            return $this->success('record not found');
        }
    }

    public function validate_voucher(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_voucher = Voucher::where('id',$request->id)->update([ 'validated' => 1 ]);

        if ($current_voucher === 1) {
            return $this->success('record updated', $current_voucher);
        } else {
            return $this->success('record not found');
        }
    }

    public function dashboard(Request $request){
        $columns = ['id', 'amount_spent', 'point_deducted', 'commission','transactioncode', 'ctype', 'paid_for', 'deducted_by', 'deducted_date', 'created_at'];   

        $length = $request->input('length');
        $column = $request->input('column'); //Index
        $dir = $request->input('dir');
        $searchValue = $request->input('search');
        $dateFrom = $request->input('dateFrom');
        $dateTo = $request->input('dateTo');
        
        $mobile = $request->input('mobile');
        $store_name = $request->input('store_name');
        $store_email = $request->input('store_email');
        $store_mobile = $request->input('store_mobile');

        $receipt = $request->input('receipt');
        $validated = $request->input('validated');
        $amount = $request->input('amount');       
        $points = $request->input('points');
        $address = $request->input('address');

        $query = Voucher::with("customer");

        if ( $mobile !== null && $mobile !== "" ) {
            $query = $query->whereHas('customer', function (Builder $queryBuilder) use ($mobile) {
                ($mobile) ?  $queryBuilder->where('mobile', $mobile) : false;
            });
        }
        
        if ($store_name !== null && $store_name !== ""){
            $query->where('store_name', 'like' , '%' . $store_name . '%');
        }
        
        if ($store_email !== null && $store_email !== ""){
            $query->where('store_email', 'like', '%' . $store_email . '%');
        }

        if ($store_mobile !== null && $store_mobile !== ""){
            $query->where('store_mobile', $store_mobile);
        }
        
        if ($receipt !== null && $receipt !== ""){
            $query->where('reciept', 'like', '%' . $receipt . '%');
        }

        if ($validated !== null && $validated !== ""){
            $query->where('validated', intval( $validated ) );
        }

        if ($amount !== null && $amount !== ""){
            $query->where('amount', $amount);
        }

        if ($points !== null && $points !== ""){
            $query->where('points', $points);
        }

        if ($address !== null && $address !== ""){
            $query->where('address', $address);
        }
        
        if ($dateFrom && $dateTo ) {
            $query->whereBetween('created_at', [ date($dateFrom), date($dateTo) ]);
        }         

        if ($searchValue) {
            $query->where(function($queryBuilder) use ($searchValue) {
                $queryBuilder->where('address', 'like', '%' . $searchValue . '%')
                 ->orWhere('reciept', 'like', '%' . $searchValue . '%' )
                 ->orWhere('amount', '=', $searchValue );                 
            });
        }        
        $stats = [
            "total_vouchers"=>  Voucher::count(),
            "success_vouchers"=>  Voucher::where(['validated'=> 1])->count(),
            "unsuccess_vouchers"=> Voucher::where(['validated'=> 0])->count()
        ];
        
        $logs = $query->orderBy("created_at", $dir)->paginate($length); 
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=>$stats];
    }
    
    function createVoucher(Request $request)
    {   
        
        $validator = Validator::make($request->all(),  [
        'amount' => 'required|max:255',
        'store_id' => 'required|max:255',
        ]);
        if ($validator->fails()) {
        return $this->error($validator->errors()->first(), 400);
        }
        $data = [];  
        $response = []; 
        $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
        $store_setting_data = User::Where(['store_id' =>$request->store_id ])->with("store")->with("merchant")->first();
        // calculating point
        $points_to_burn = $this->pointEngine($store_setting_data, $request->amount , 'burn');                       
        $daalu_commision = $this->commission($store_setting_data, $request->amount);         

        if ($user) {
        //  if ($user->status == 1) {
            if ($user->transStat->customer_balance >=$points_to_burn && $user->transStat->customer_balance >= 1000) {
                $reciept = "Plenti-Voucher" . "-" . time();
                $store_setting_data['amount'] = $request->amount;
                $data['CustomerTransactionsLog']['ref'] = 'mobile';
                $data['CustomerTransactionsLog']['receipt'] = $request->receipt;
                $data['CustomerTransactionsLog']['ref_id'] = '1';
                $data['CustomerTransactionsLog']['customer_id'] = $user->id;
                $data['CustomerTransactionsLog']['card_no'] = $user->username;
                $data['CustomerTransactionsLog']['mobile_no'] = $user->username;
                $data['CustomerTransactionsLog']['transaction_code'] =   $reciept;
                $data['CustomerTransactionsLog']['creds'] = $points_to_burn;
                $data['CustomerTransactionsLog']['time'] = time() + 3600;
                $data['CustomerTransactionsLog']['ctype'] = 'offline';
                $data['CustomerTransactionsLog']['amount_spent'] = $request->amount;
                $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                $data['CustomerTransactionsLog']['transaction'] = 'burn';
                $data['CustomerTransactionsLog']['merchant_id'] = $store_setting_data->merchant_id;
                $data['CustomerTransactionsLog']['store_id'] = $store_setting_data->store_id;
                $data['CustomerTransactionsLog']['status_id'] = 3;
                $data['CustomerTransactionsLog']['pstatus_id'] = 1;
                $data['CustomerTransactionsLog']['created_at'] = Carbon::now();
                $data['CustomerTransactionsLog']['entry'] = 'Points deducted from ' . $store_setting_data->store->store_name . ' (Amount spent: ' . $request->amount . ')';
                try {
                    $CustomerTransactionsLog =  new CustomerTransactionsLog;
                    $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);
                    if ($lastTransactionId ) {
                        if($user->transStat->customer_balance ){
                            $balance = $user->transStat->customer_balance - $points_to_burn;
                            $data['TransStat']['customer_id'] =$user->id;
                            $data['TransStat']['burn_point'] = $user->transStat->burn_point + $points_to_burn;
                            $data['TransStat']['burn_amount'] = $user->transStat->earn_amount + $request->amount;
                            $data['TransStat']['deducted_point'] = $points_to_burn;
                            $data['TransStat']['total'] = $user->transStat->total + $request->amount;
                            $data['TransStat']['total_transaction'] = $user->transStat->total_transaction + 1;
                            $data['TransStat']['customer_balance'] = $balance;
                            $data['TransStat']['last_reciept_id'] =   $reciept;
                            $response = TranStats::where('id', $user->transStat->id )->update($data['TransStat']);

                            // inserting into voucher table
                            Voucher::create([
                            'user_id' => $user->id,
                            'reciept' =>   $reciept,
                            'amount' => $request->amount,
                            'store_name' => $store_setting_data->store->store_name,
                            'store_email' => $store_setting_data->email ,
                            'store_mobile' => $store_setting_data->mobile ,
                            'points' => $points_to_burn,
                            'image' =>$store_setting_data->store->image,
                            'address'=>$store_setting_data->store->address,
                            'validated' =>false,
                            ]);

                            if ($response == 1) {
                                $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                                $user->transStat->burn_point = $points_to_burn;
                                $user->transStat->last_reciept_id = $reciept ;
                                //notify user
                                $details = [
                                    'subject' => "New voucher generation mail",
                                    'user' => $user->first_name,
                                    'content' => "<p>You've received this email because you just generated a voucher worth ".$points_to_burn." points. If you did not generate this voucher.contact admin at  09041110904</p>",
                                ];
                                Mail::to($user->email)->send(new GeneralEmails($details));
                                return $this->success('Transaction was successful', ["user"=>$user]);
                            }
                        }
                    }   
                } catch (exception $ex) {  
                    return $this->errorResponseWithoutData('This receipt has been used', 400);        
                }    

            } else {
                return $this->errorResponseWithoutData('Insufficient Balance', 400); 
                if (!$store_setting_data) {
                    return  $this->errorResponseWithoutData('Invalid Merchant credentials', 400);
                    return $this->errorResponseWithoutData('Invalid Merchant credentials', 400); 
                }    
            }
        } else {
             return $this->errorResponseWithoutData('Invalid customer credentials', 400); 
        }
         
    }

    function reverseVoucher(Request $request)
    {   
        $validator = Validator::make($request->all(),  [
            'customer_trans_log_id' => 'required|integer',
            'reason' => 'required|max:255'
        ]);

		$data = [];  
        $response = []; 
            $user_trans_log = CustomerTransactionsLog::where('id',$request->customer_trans_log_id)->with("store")->first();  
                if ($user_trans_log) {
                    $user = User::where('id', $user_trans_log->customer_id)->with("transStat")->with("card")->first();               
                         if ( $user->transStat->customer_balance >= 10 ) {                             
                            $reciept = $user_trans_log->receipt. "-" . "Reversed";                             
                            $data['CustomerTransactionsLog']['ref'] = 'mobile';
                            $data['CustomerTransactionsLog']['receipt'] = $reciept;
                            $data['CustomerTransactionsLog']['ref_id'] = '1';
                            $data['CustomerTransactionsLog']['customer_id'] = $user_trans_log->customer_id;
                            $data['CustomerTransactionsLog']['card_no'] = $user->username;
                            $data['CustomerTransactionsLog']['mobile_no'] = $user->username;
                            $data['CustomerTransactionsLog']['transaction_code'] =   $user_trans_log->transaction_code . "-" . "Reversed";
                            $data['CustomerTransactionsLog']['creds'] = $user_trans_log->creds;
                            $data['CustomerTransactionsLog']['time'] = time() + 3600;
                            $data['CustomerTransactionsLog']['ctype'] = 'offline';
                            $data['CustomerTransactionsLog']['amount_spent'] = $user_trans_log->amount_spent;
                            $data['CustomerTransactionsLog']['commission'] = $user_trans_log->commission;
                            $data['CustomerTransactionsLog']['transaction'] = 'burn';
                            $data['CustomerTransactionsLog']['merchant_id'] = $user_trans_log->merchant_id;
                            $data['CustomerTransactionsLog']['store_id'] = $user_trans_log->store_id;
                            $data['CustomerTransactionsLog']['status_id'] = $user_trans_log->status_id;
                            $data['CustomerTransactionsLog']['pstatus_id'] = $user_trans_log->pstatus_id;
                            $data['CustomerTransactionsLog']['created_at'] = Carbon::now();
                            $data['CustomerTransactionsLog']['entry'] = 'Points reversed from ' . $user_trans_log->store->store_name . ' because ---> ' . $request->reason . ')';                          
                            try {
                                $CustomerTransactionsLog =  new CustomerTransactionsLog;
                                $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);
                                if ($lastTransactionId ) {                                
                                    
                                    if($user->transStat->customer_balance ){
                                        $points_to_burn = $user_trans_log->creds;
                                        $balance = $user->transStat->customer_balance - $points_to_burn;                                        
                                        $data['TransStat']['customer_id'] =$user->id;
                                        $data['TransStat']['burn_point'] = $user->transStat->burn_point + $points_to_burn;
                                        $data['TransStat']['burn_amount'] = $user->transStat->earn_amount + $user_trans_log->amount_spent;
                                        $data['TransStat']['deducted_point'] = $points_to_burn;
                                        $data['TransStat']['total'] = $user->transStat->total + $user_trans_log->amount_spent;
                                        $data['TransStat']['total_transaction'] = $user->transStat->total_transaction + 1;
                                        $data['TransStat']['customer_balance'] = $balance;
                                        $data['TransStat']['last_reciept_id'] =   $reciept;
                                        $response = TranStats::where('id', $user->transStat->id )->update($data['TransStat']);                  
                                        if ($response == 1) {
                                            $user = User::where('id', $user_trans_log->customer_id )->with("transStat")->with("card")->first();
                                            $user->transStat->burn_point = $points_to_burn;
                                            $user->transStat->last_reciept_id = $reciept;                                       
                                          
                                            return $this->success('Transaction was successful', ["user"=>$user]);
                                        }
                                    
                                    }
                                }                                   
                                  
                            } catch (\Throwable $th) {  
                                return $this->error($th->getMessage(), 400);        
                            }   
                     
                        } else {
                            return $this->error('Insufficient Balance', 400);                            
                        }
                
                } else {
                     return $this->error('Invalid customer Transaction Log ID', 400); 
                }
       
    }
    
    public function getVoucher(Request $request)
    {
        try {
            $result = Voucher::where(['user_id'=> Auth::id()])->where(['validated'=> 0])->orderBy('id',"Desc")->get();
            if(count($result)){
                return $this->success('Transaction was successful', $result);
            }else{
                return $this->errorResponseWithEmptyArray('No voucher found', 400);     
            }
        } catch (\Throwable $th) {
              return $this->error($th->getMessage(), 422);
        }
    }
}
