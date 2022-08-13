<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\verifyAccountmail;
use App\Mail\PointCreditMail;
use App\Mail\WalkingCustomerMail;
use App\Mail\GeneralEmails;

use App\Models\User;
use App\Models\UserData;
use App\Models\Voucher;
use App\Models\Card;
use App\Models\PlentiCredit;
use App\Models\Customer;
use App\Models\GiftCardTransactions;
use App\Models\DealTransactions;
use App\Models\TranStats;
use App\Models\GiftCards;
use App\Models\Transaction;
use App\Models\PlentiLoanRepayments;
use App\Models\CustomerTransactionsLog;
use App\Notifications\GeneralNotification;
use App\Traits\ApiResponser;
use App\Traits\Settings;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Passport;
use Spatie\Newsletter\Newsletter;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;


class PlentiCreditController extends Controller
{
    use ApiResponser;
    use Settings;
    private $PLENTI_STORE = null;
    private $Active_STATUS = 1;
    private $PENDING_STATUS = 2;
    private $BLOCKED_STATUS = 5;
    private $VERIFIED = 1;
    private $UNVERIFIED = 0;   
    private $appSettings= null;

    public function __construct()
    {
        $this->appSettings = $this->appSettings();
       
    }
    
    function checkAccountValidity(Request $request)
    {  
        $validator = Validator::make($request->all(),  [
            'amount' => 'required',
            'months' => 'required',
            'code' => 'required',
        ]);
        
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        
        $code = $request->input('code'); //code_rgWOJIudqJOjxq5tCgs9
        $amount = $request->input('amount'); 
        $months = $request->input('months');
        $firstInstallmentDate = Carbon::now()->addMonths(1)->toDateTimeString(); //2022-06-01


        $secretKey = env('MONO_SK');
        $user = Auth::user();
            
        $authCredentials = json_decode(
            Http::withHeaders([
            'Content-type' => 'application/json',
            'mono-sec-key' => $secretKey 
        ])
        ->withOptions(['verify' => false])
        ->post( env('MONO_URL') . '/account/auth', [
             "code"=>$code 
        ]));       

        //------------------------------------------------------------------

        //Get account 
        $account = json_decode(Http::withHeaders([
            'mono-sec-key' => $secretKey 
        ])
        ->withOptions(['verify' => false])
              ->get( env('MONO_URL') . '/accounts/'.$authCredentials->id, [
        ]));

        //-------------------------------------------------------------------

        //Get Details
        $transactions = json_decode(Http::withHeaders([
            'mono-sec-key' => $secretKey 
        ])
        ->withOptions(['verify' => false])
             ->get( env('MONO_URL') . '/accounts/'.$authCredentials->id.'/statement?period=last6months', [
        ]));

        $convertedTransactions = json_decode(json_encode($transactions->data), true);

        $indicinaCredentials = json_decode(Http::withOptions(['verify' => false])
        ->post('https://api.indicina.co/api/v2/client/api/login', [
            "client_id"=>"tvio",
             "client_secret"=> env('INDICINA_SK')
        ]));

        //-------------------------------------------------------------------

        $loadAdvise = json_decode(Http::withToken($indicinaCredentials->data->token)
        ->withOptions(['verify' => false])
        ->post('https://api.indicina.co/api/v2/client/bsp', [
            "customer"=>[
                "id"=> $authCredentials->id,
                "email"=>  $user->email,
                "lastName"=> $user->last_name,
                "firstName"=> $user->first_name,
                "phone"=> $user->mobile
            ],
            "bankStatement"=>[
                "type"=>"mono",
                "content"=>[
                    "paging"=> [
                    "total"=> 250,
                    "page"=> 1,
                    "previous"=> null,
                    "next"=> env('MONO_URL'). "/accounts/".$authCredentials->id."/transactions?page=2"
                ],
                    "data"=>$convertedTransactions
                ]
        ]
        ]));

        //calculating installments
       $installment_amount = round((($this->appSettings->loan_rates /100) * $amount) + ($amount/$months),2);

       $loadResponse = PlentiCredit::create([
            'user_id' => Auth::id(),
            'account_payload' =>  json_encode($account),
            'load_advise' =>  json_encode($loadAdvise),
            'pay_date' => $firstInstallmentDate,                                           
            'status' => 'pending',
            'months' => $months,
            'collected'=> 0,
            'intrest_rate'=>$this->appSettings->loan_rates,
            'inital_payment'=>$installment_amount,
            'point_to_receive'=> $amount * 2,
            'charges'=>$this->appSettings->loan_charges,
            'loan_amount'=>$amount
       ]);
       
       // generate installments     
       for($i = 0; $i < $months; $i++){
            $y = $i +1;
            PlentiLoanRepayments::create([
                'user_id' => Auth::id(),
                'loan_id' =>  $loadResponse->id,
                'amount' =>  $installment_amount,
                'installment' =>  $y,
                'payment_date' =>  Carbon::now()->addMonths($y)->toDateTimeString()                                   
            ]);
        }       

        $response = PlentiCredit::with('plentiLoanRepayments')->find($loadResponse->id);
        return $this->success('Transaction was successful', ["loan_response"=>$response]);
    }

    function getCurrentLoanStatus(){
        $response = PlentiCredit::with('plentiLoanRepayments')
        ->where(['user_id'=>Auth::id() ,'collected'=> false])
        ->orderBy('id', 'DESC')
        ->first();
        if($response != null){
            return $this->success('Please pay up existing loan', ["loan_response"=>$response]);
        }
        return $this->success('Proceed to get loan', ["loan_response"=>null]);
    }

    public function sendReminder(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer' //ID of plent_loan_repayment row
        ]);
        
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }

        $plentiloans = PlentiLoanRepayments::where('id', $request->input('id'))->with('user')->first();

        $details = [
            'subject' => "Reminder - Please Pay your pending loan",
            'user' => $plentiloans->user->first_name,
            'content' => "<p>You've received this email because you have a pending loan that is still unpaid. <br/> The date for repaying this loan is/was: <b>". "$plentiloans->payment_date" ."</b> <br/> This installment has the amount of: ". "$plentiloans->amount" . " <br/> If you have any issue making your loan repayment, please contact our Admin at 09041110904</p>",
        ];

        Mail::to($plentiloans->user->email)->send(new GeneralEmails($details));
        return $this->success('Sent mail to recipient', true);
    }

    public function update_loan_status(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'status' => 'required|string',
                'id' => 'required|integer',
                'earn' => 'boolean'
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        if ( $request->input('earn') !== null && $request->input('earn') === true ){
            $plenti = PlentiCredit::where('id', $request->input('id'))->first();
            $receipt = "PLENTICREDIT-" . time();
            $store_id = 61;
            $point_to_receive = $plenti->loan_amount * 2;
            $this->earnPointsInternal($plenti->loan_amount,$plenti->user_id, $store_id, $receipt, $point_to_receive);
        }       

        $response = PlentiCredit::where('id', $request->input('id'))->update([ "status" => $request->input('status') ]);
        if ($response === 1) {
            return $this->success('plenti credit status updated', true);
        } else {
            return $this->success('record not found');
        }
    }
    
    public function update_loan_installment(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'status' => 'required|string',
                'id' => 'required|integer'
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }

        $response = PlentiLoanRepayments::where('id', $request->input('id'))->where('user_id', Auth::id() )->update([ "status" => $request->input('status') ]);
        if ($response === 1) {
            return $this->success('plenti credit Installment for user has been updated', true);
        } else {
            return $this->success('record not found');
        }
    }
    public function get_item_by_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_item = PlentiCredit::where('id',$request->id)->with("user")->with('plentiLoanRepayments')->first();

        if ($current_item) {
            return $this->success('record found', $current_item);
        } else {
            return $this->success('record not found');
        }
    }

    public function dashboard(Request $request)
    {  
        // account_payload, pay_date, user_id, status, collected, contacts, picture,  created_at, updated_at
        $length = $request->input('length');
        $column = $request->input('column'); //Index
        $dir = $request->input('dir');
        $searchValue = $request->input('search');
        $dateFrom = $request->input('dateFrom');
        $dateTo = $request->input('dateTo');
        
        $mobile = $request->input('mobile');

        $account_id = $request->input('account_id');
        $pay_date = $request->input('pay_date');
        $status = $request->input('status');        
        $collected = $request->input('collected');

        $query = PlentiCredit::with("user")->without('cat_list');
       
        if ( $mobile !== null && $mobile !== "" ) {
            $query = $query->whereHas('user', function (Builder $queryBuilder) use ($mobile) {
                ($mobile) ? $queryBuilder->where('mobile', $mobile) : false;
            }); 
        }
        
        if ($dateFrom && $dateTo) {
            $query->whereBetween('created_at', [ date($dateFrom), date($dateTo) ]);
        }        
        
        if ($account_id) {
            $query->where("account_payload",$account_id);
        }

        if ($status) {
            $query->where("status", $status);
        }

        if ($pay_date) {
            $query->where("pay_date", date($pay_date) );
        }

        if ($collected) {
            $query->where("collected", intval($collected) );
        }

        if ($searchValue) {
            $query->where(function($query) use ($searchValue) {
                $query->where('account_payload', 'like', '%' . $searchValue . '%')
                ->orWhere('status', 'like', '%' . $searchValue . '%');
            });
        }     

        $stats = [
            "total_plentcredit_req"=>  PlentiCredit::count(),
            "collected_plentcredit_req"=>  PlentiCredit::where(['collected'=>1])->count(),
            "uncollected_plentcredit_req"=>  PlentiCredit::where(['collected'=>0 ])->count(),
        ];
        
        $logs = $query->orderBy("created_at", $dir)->paginate($length);
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=>$stats];
    }

    public function earnPoints(Request $request)
    {   

      $validator = Validator::make($request->all(),  [
            'amount' => 'required|max:255',
            'store_id' => 'required|max:255',
            'customer_id' => 'required',
            'receipt' => 'required',
          //  'data' => 'required',
            ]);
        
        $isGiftCard = (isset($request->isGiftCard)) ? $request->isGiftCard : false;  
        $isDeal = (isset($request->isDeals)) ? $request->isDeals : false;
         
        $plentiId = (isset($request->plentiId)) ? $request->plentiId : 0;
        $contacts = (isset($request->contacts)) ? json_decode($request->contacts) : [];
        
        $recieptType =  '';
        $receipt = explode('-', $request->receipt);

        if(in_array('Deals' , $receipt)){
            $recieptType =  'Mobile-Deals';
        }
        
        if(in_array('GiftCards' , $receipt)){
            $recieptType =  'Mobile-GiftCards';
        }
        
        if(in_array('QR' , $receipt)){
            $recieptType =  'Mobile-QR';
        }
        
        if(in_array('Manual' , $receipt)){
            $recieptType =  'Mobile-Manual';
        }
    

		$data = [];  
        $response = []; 
            $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
            $customerTransactionsLog = CustomerTransactionsLog::Where(['receipt'=>$request->receipt ])->first(); 
            if($customerTransactionsLog == null){
                $store_setting_data = User::Where(['store_id' =>$request->store_id ])->with("store")->with("merchant")->first();
                if ($user) {
                        if ($store_setting_data && $user && ($request->amount >= 100)) {
                            $store_setting_data['amount'] = $request->amount;
                            // calculating point
                            $points_received = $this->pointEngine($store_setting_data, $request->amount);                       
                            $daalu_commision = $this->commission($store_setting_data, $request->amount);

                            $data['CustomerTransactionsLog']['ref'] = 'pos';
                            $data['CustomerTransactionsLog']['receipt'] = $request->receipt;
                            $data['CustomerTransactionsLog']['ref_id'] = '1';
                            $data['CustomerTransactionsLog']['customer_id'] = $user->id;
                            $data['CustomerTransactionsLog']['card_no'] = $user->username;
                            $data['CustomerTransactionsLog']['mobile_no'] = $user->username;
                            $data['CustomerTransactionsLog']['transaction_code'] = $request->receipt . "-" . time();
                            $data['CustomerTransactionsLog']['creds'] = $points_received;
                            $data['CustomerTransactionsLog']['time'] = time() + 3600;
                            $data['CustomerTransactionsLog']['ctype'] = $recieptType;
                            $data['CustomerTransactionsLog']['amount_spent'] = $request->amount;
                            $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                            $data['CustomerTransactionsLog']['transaction'] = 'earn';
                            $data['CustomerTransactionsLog']['merchant_id'] = $store_setting_data->merchant_id;
                            $data['CustomerTransactionsLog']['store_id'] = $store_setting_data->store_id;
                            $data['CustomerTransactionsLog']['status_id'] = ($recieptType != 'Mobile-Manual') ? 1 : 3;
                            $data['CustomerTransactionsLog']['pstatus_id'] = ($recieptType != 'Mobile-Manual') ? 1 : 3;
                          //  $data['CustomerTransactionsLog']['created_at'] = Carbon::now();
                            $data['CustomerTransactionsLog']['entry'] = 'Points accumulated from ' . $store_setting_data->store->store_name . ' (Amount spent: ' . $request->amount . ')';
                            
                            try {
                                $CustomerTransactionsLog =  new CustomerTransactionsLog;
                                $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);
                                if  ($recieptType != 'Mobile-Manual') {
                                
                                    $transaction_data = TranStats::where(['customer_id' =>  $user->id])->first();
                                    if($transaction_data ){
                                        $balance = $transaction_data->customer_balance + $points_received;

                                        $transaction_data->customer_id = $user->id;
                                        $transaction_data->earn_point = $transaction_data->earn_point + $points_received;
                                        $transaction_data->earn_amount = $transaction_data->earn_amount + $request->amount;
                                        $transaction_data->total = $transaction_data->total + $request->amount;
                                        $transaction_data->total_transaction =$transaction_data->total_transaction + 1;
                                        $transaction_data->customer_balance = $balance;
                                    
                                            if ($transaction_data->save()) {                                        
                                                
                                                if($isGiftCard){
                                                    $extracInformation = json_decode($request->extra_info);
                                                    // Log gift card transactions
                                                    $giftCardTransactions = GiftCardTransactions::create([
                                                    'title' =>  $request->receipt ,
                                                    'amount' => $request->amount,
                                                    'point' =>  $points_received,
                                                    'extra_info' =>$request->extra_info,
                                                    'gift_card_id'=>$extracInformation->gift_card_id,
                                                    'store_id'=>61,
                                                    'user_id' => $user->id,
                                                    ]);
                                                }
                                                
                                                if($isDeal){
                                                $extracInformation = json_decode($request->extra_info);
                                                // Log gift card transactions
                                                    $dealsransactions = DealTransactions::create([
                                                    'receipt_no' =>  $request->receipt ,
                                                    'amount' => $request->amount,
                                                    'point' =>  $points_received,
                                                    'extra_info' =>$request->extra_info,
                                                    'deal_id'=>$extracInformation->deal_id,
                                                    'store_id'=>61,
                                                    'user_id' => $user->id,
                                                    ]);
                                                }
                                                
                                                $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                                                $user->transStat->earn_point = $points_received;
                                                $details = [
                                                    'title' => 'Plenti new point credit alert',
                                                    'description' => "Thank for shopping at ". $store_setting_data->store->store_name.". We hope you enjoyed your shopping",
                                                    'customer' => $user->first_name,
                                                    'points' =>  $points_received,
                                                    'pendingPoints' =>  0,
                                                    'balance' =>  $balance
                                                ];
                                                //Update the Plenti credit table, with a new status of Loan Status " processing | processed "
                                      
                                                // account_payload, pay_date, user_id, status, collected, contacts, picture,  created_at, updated_at
                                                
                                                $plentiCredit = PlentiCredit::where('id',  $plentiId )->update( ['status' => 'processed'] );
                                                if( count($contacts) > 0 ){
                                                    $plentiCredit2 = PlentiCredit::where('id',  $plentiId )->update( ['contacts' => json_encode( $contacts ) ] );
                                                }

                                                Mail::to($user->email)->send(new PointCreditMail($details));
                                                return $this->success('Transaction was successful', ["user"=>$user]);
                                            }
                                    
                                    }
                                }
                                else{
                                         $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                                         $user->transStat->earn_point = $points_received;
                                         $details = [
                                            'title' => 'Plenti pending credit alert',
                                            'description' => "Thank for shopping at ". $store_setting_data->store->store_name.". We hope you enjoyed your shopping",
                                            'customer' => $user->first_name,
                                            'pendingPoints' =>  $points_received,
                                            'points' =>  0
                                        ];
                                       
                                        Mail::to($user->email)->send(new PointCreditMail($details));
                                        return $this->success('Transaction was successful', ["user"=>$user]);
                                }
                                   
                                  
                            } catch (exception $ex) {  
                                return $this->error('This transaction id already exist please use another one', 400);        
                            }
    
                     
                        } else {
                            return $this->error('Invalid transaction you must spend at 100NGN least  to earn points', 400); 
                            if (!$store_setting_data) {
                                 return $this->error('Invalid Merchant credentials', 400); 
                            }
                        }
                  
                } else {
                     return $this->error('Invalid customer credentials', 400); 
                }
            }else{
                return $this->error('This  receipt has been used', 400); 
            }
       
    }

    private function earnPointsInternal($param_amount, $param_customer_id, $param_store_id, $param_receipt, $param_points )
    {  
        
        $recieptType =  '';
        $param_receipt_array = explode('-', $param_receipt);

        if(in_array('PLENTICREDIT' , $param_receipt_array)){
            $recieptType =  'Plenti-Credit-Loan';
        }
        
        if(in_array('GiftCards' , $param_receipt_array)){
            $recieptType =  'Mobile-GiftCards';
        }
        
        if(in_array('QR' , $param_receipt_array)){
            $recieptType =  'Mobile-QR';
        }
        
        if(in_array('Manual' , $param_receipt_array)){
            $recieptType =  'Mobile-Manual';
        }   

		$data = [];  
        $response = []; 
            $user = User::where('id', $param_customer_id)->with("transStat")->with("card")->first();
            $customerTransactionsLog = CustomerTransactionsLog::Where(['receipt'=> $param_receipt ])->first(); 
            if($customerTransactionsLog == null){
                $store_setting_data = User::Where(['store_id' => $param_store_id ])->with("store")->with("merchant")->first();                
                if ($user) {
                        if ($store_setting_data && $user && ( intval($param_amount) >= 100)) {
                            $store_setting_data['amount'] = intval($param_amount);
                            // calculating point
                            $points_received = $param_points;                       
                            $daalu_commision = $this->commission($store_setting_data, intval($param_amount));
                            $data['CustomerTransactionsLog']['ref'] = 'Admin Loan';
                            $data['CustomerTransactionsLog']['receipt'] = $param_receipt;
                            $data['CustomerTransactionsLog']['ref_id'] = '1';
                            $data['CustomerTransactionsLog']['customer_id'] = $user->id;
                            $data['CustomerTransactionsLog']['card_no'] = $user->username;
                            $data['CustomerTransactionsLog']['mobile_no'] = $user->username;
                            $data['CustomerTransactionsLog']['transaction_code'] = $param_receipt ;
                            $data['CustomerTransactionsLog']['creds'] = $points_received;
                            $data['CustomerTransactionsLog']['time'] = time() + 3600;
                            $data['CustomerTransactionsLog']['ctype'] = $recieptType;
                            $data['CustomerTransactionsLog']['amount_spent'] = $param_amount;
                            $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                            $data['CustomerTransactionsLog']['transaction'] = 'earn';
                            $data['CustomerTransactionsLog']['merchant_id'] = $store_setting_data->merchant_id;
                            $data['CustomerTransactionsLog']['store_id'] = $store_setting_data->store_id;
                            $data['CustomerTransactionsLog']['status_id'] = ($recieptType != 'Mobile-Manual') ? 1 : 3;
                            $data['CustomerTransactionsLog']['pstatus_id'] = ($recieptType != 'Mobile-Manual') ? 1 : 3;
                            $data['CustomerTransactionsLog']['entry'] = 'Points accumulated from ' . $store_setting_data->store->store_name . ' (Amount spent: ' . $param_amount . ')';
                            
                            try {
                                $CustomerTransactionsLog =  new CustomerTransactionsLog;
                                $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);
                                if  ($recieptType != 'Mobile-Manual') {
                                
                                    $transaction_data = TranStats::where(['customer_id' =>  $user->id])->first();
                                    if($transaction_data){
                                        $balance = $transaction_data->customer_balance + $points_received;
                                        $transaction_data->customer_id = $user->id;
                                        $transaction_data->earn_point = $transaction_data->earn_point + $points_received;
                                        $transaction_data->earn_amount = $transaction_data->earn_amount + intval($param_amount);
                                        $transaction_data->total = $transaction_data->total + intval($param_amount);
                                        $transaction_data->total_transaction =$transaction_data->total_transaction + 1;
                                        $transaction_data->customer_balance = $balance;
                                    
                                        if ($transaction_data->save()) {                                      
                                            
                                            $user = User::where('id',  $param_customer_id,)->with("transStat")->with("card")->first();
                                            $user->transStat->earn_point = $points_received;                                              
                                            $details = [
                                                'subject' => "Plenti Loan Approved",
                                                'user' => $user->first_name,
                                                'content' => "<p>Your loan with ID {$param_receipt} have been processed sucessfully and your account have been credited with {$points_received} points</p>",
                                                'cta_text' => "",
                                                'cta_url' => "",
                                            ];
                                            Mail::to($user->email)->send(new GeneralEmails($details));
                                            return $this->success('Transaction was successful', ["user"=>$user]);
                                        }
                                    
                                    }
                                }                                   
                                  
                            } catch (exception $ex) {  
                                return $this->error('This transaction id already exist please use another one', 400);        
                            }
                     
                        } else {
                            return $this->error('Invalid transaction you must borrow at least 100NGN to earn points', 400); 
                            if (!$store_setting_data) {
                                 return $this->error('Invalid Merchant credentials', 400); 
                            }
                        }
                  
                } else {
                     return $this->error('Invalid customer credentials', 400); 
                }
            }else{
                return $this->error('This  receipt has been used', 400); 
            }
       
    }
    
    
    function cvfConvertObjectToArray($data) {
        if (is_object($data)) { $data = get_object_vars($data); }
        if (is_array($data)) { return array_map(__FUNCTION__, $data);}
        else { return $data; }
    }
}
