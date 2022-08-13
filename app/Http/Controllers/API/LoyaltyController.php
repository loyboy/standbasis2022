<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Store;
use App\Models\User;
use App\Models\Deal;
use App\Models\Merchant;
use App\Models\Voucher;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Models\DealTransactions;
use App\Models\GiftCardsVendor;
use App\Models\GiftCards;
use App\Models\Enquiry;
use App\Models\UserMerchant;
use App\Traits\ApiResponser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use App\Mail\DealsNotifyAdmin;
use App\Mail\DealsNotifyMerchant;
use App\Models\CustomerTransactionsLog;
use Illuminate\Support\Facades\URL;
use App\Mail\GeneralEmails;
use App\Mail\PointCreditMail;
use App\Models\TranStats;
class LoyaltyController extends Controller
{
    use ApiResponser;
    private $ADMIN_EMAIL = "plenti.africa@gmail.com";

    public function index()
    {
        $store = Store::where('active', 1)->get();
        if (count($store)) {
            return $this->success('record found', $store);
        }else{
            return $this->success('record not found', []);
        }
    }

    public function getMerchantId(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|string',
        ]);
        
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_merchant = User::where('id',$request->id)->with("merchant")->first();

        if ($current_merchant) {
            return $this->success('record found', $current_merchant->merchant ? $current_merchant->merchant->id : null);
        } else {
            return $this->success('record not found');
        }
    }

    public function getMerchantStore(Request $request){

        if ($request->id !== null && $request->id !== "null"){
            $current_merchant = Store::where('merchant_id',$request->id)->get();
            if ( count($current_merchant) > 0 ) {
                return $this->success('record found', $current_merchant );
            } else {
                return $this->success('record not found');
            }
        }
        else{
            $current_merchant = Store::get();
            if ( count($current_merchant) > 0 ) {
                return $this->success('record found', $current_merchant );
            } else {
                return $this->success('record not found');
            }
        } 
    }

    public function updateDeal(Request $request){
     
        $active = intval($request->input('status')) === 1 ? 1 : 0;
        $response = Deal::where('id', $request->input('id'))->update([ "status" => $request->input('status'), "active" => $active  ]);

        if ($response === 1){ 
            
            $deal_given = Deal::where('id', $request->input('id'))->with("merchant")->first();
            $user_given = User::where('merchant_id', $deal_given->merchant->id)->first();
            
            //$user_given->email;
            
            if (  intval($request->input('status')) === 1 ) {     //Approved           
                $deal_id = $deal_given->id;
                $deal_title = $deal_given->title;
                $deal_start_date = date ( "F j, Y", strtotime($deal_given->start_date) );
                $deal_end_date = date ( "F j, Y", strtotime($deal_given->end_date) );

                $details = [
                    'title' => 'Plenti Deal Approval - Merchant Notification',
                    'status' => "APPROVED",
                    'link' => URL::to('/')."/deals/". $deal_id,
                    'deal' =>  " <ul> <li> <b> Title  </b> : $deal_title </li> <li>  <b> Start Date  </b> : $deal_start_date </li> <li>  <b> End Date  </b> : $deal_end_date </li> </ul> "
                ];
               Mail::to($user_given->email)->send(new DealsNotifyMerchant($details));
            }  

            else if (  intval($request->input('status')) === 7 ) {     //Paused           
                $deal_id = $deal_given->id;
                $deal_title = $deal_given->title;
                $deal_start_date = date ( "F j, Y", strtotime($deal_given->start_date) );
                $deal_end_date = date ( "F j, Y", strtotime($deal_given->end_date) );

                $details = [
                    'title' => 'Plenti Deal Paused - Merchant Notification',
                    'status' => "PAUSED",
                    'link' => URL::to('/') . "/deals/". $deal_id,
                    'deal' =>  " <ul> <li> <b> Title  </b> : $deal_title </li> <li>  <b> Start Date  </b> : $deal_start_date </li> <li>  <b> End Date  </b> : $deal_end_date </li> </ul> "
                ];
                Mail::to($user_given->email)->send(new DealsNotifyMerchant($details));
            }  
            
            else if (  intval($request->input('status')) === 8 ) {     //Stopped           
                $deal_id = $deal_given->id;
                $deal_title = $deal_given->title;
                $deal_start_date = date ( "F j, Y", strtotime($deal_given->start_date) );
                $deal_end_date = date ( "F j, Y", strtotime($deal_given->end_date) );

                $details = [
                    'title' => 'Plenti Deal Stopped - Merchant Notification',
                    'status' => "STOPPED",
                    'link' => URL::to('/') . "/deals/". $deal_id,
                    'deal' =>  " <ul> <li> <b> Title  </b> : $deal_title </li> <li>  <b> Start Date  </b> : $deal_start_date </li> <li>  <b> End Date  </b> : $deal_end_date </li> </ul> "
                ];
                Mail::to($user_given->email)->send(new DealsNotifyMerchant($details));
            }            
            
            else if (  intval($request->input('status')) === 9 ) {     //Ended           
                $deal_id = $deal_given->id;
                $deal_title = $deal_given->title;
                $deal_start_date = date ( "F j, Y", strtotime($deal_given->start_date) );
                $deal_end_date = date ( "F j, Y", strtotime($deal_given->end_date) );

                $details = [
                    'title' => 'Plenti Deal terminated - Merchant Notification',
                    'status' => "TERMINATED",
                    'link' => URL::to('/'). "/deals/". $deal_id,
                    'deal' =>  " <ul> <li> <b> Title  </b> : $deal_title </li> <li>  <b> Start Date  </b> : $deal_start_date </li> <li>  <b> End Date  </b> : $deal_end_date </li> </ul> "
                ];
                Mail::to($user_given->email)->send(new DealsNotifyMerchant($details));
            } 
              
            return $this->success('Updated deal status', true );
        }
        else{
            return $this->success('Error while Updating deal status', true );
        }
    }   

    public function setMerchantProfile(Request $request){
        $data =  $request->all();
        $response = Merchant::where('id', $request->input('id') )->update($data);

        if ($response === 1){            
            return $this->success('Updated merchant profile', true );
        }
        else{
            return $this->success('Error while Updating merchant profile', true );
        }
    }

    public function getMerchantList(Request $request)
    {
       
        $all_merchant = User::where('role',"merchant")->with("merchant")->get();

        if ( count($all_merchant) > 0 )  {
            $merchants = [];
            foreach ($all_merchant as $mer ) { 
                if($mer->merchant){
                    $name = $mer->merchant->merchant_name;
                    $merchants[$name] = $mer->merchant->id;
                }       
                
            }
            return $this->success('record found', $merchants  );
        } else {
            return $this->success('record not found');
        }
    }
    
    public function getDeals(Request $request)
    {
    
        if( $request->input('id') !== null && $request->input('type') !== null  ) {
           
            if ($request->input('type') === "merchant"){
                $dealMerchant = Deal::where([ 'id'=>$request->input('id'), 'merchant_id'=>$request->input('merchant_id') ])->with('status')->with('merchant')->with('category')->first(); 
                if ( $dealMerchant !== null)  {
                    $stats = [
                        "total_deals"=> Deal::where(['merchant_id'=> $request->input('merchant_id') ])->count(),
                        "active_deals"=>  Deal::where(['merchant_id'=> $request->input('merchant_id'), 'active' => 1])->count(),
                        "inactive_deals"=> Deal::where(['merchant_id'=> $request->input('merchant_id'), 'active' => 0])->count()
                    ];
                    return ['data' => $dealMerchant, 'stats' => $stats];
                } else {
                    return $this->success('record not found');
                }    
            }
            else if ($request->input('type') === "admin"){
                $dealAdmin = Deal::where([ 'id'=>$request->input('id') ])->with('status')->with('merchant')->with('category')->first(); 
                if ( $dealAdmin !== null)  {
                    $stats = [
                        "total_deals"=> Deal::count(),
                        "active_deals"=>  Deal::where([ 'active' => 1])->count(),
                        "inactive_deals"=> Deal::where([ 'active' => 0])->count()
                    ];
                    return ['data' => $dealAdmin, 'stats' => $stats];
                } else {
                    return $this->success('record not found');
                }  
            }
            
        } else if ( $request->input('type') !== null  ) {

            if ($request->input('type') === "merchant"){
                $dealsMerchant = Deal::where([ 'merchant_id'=>$request->input('merchant_id')])->with('status')->with('merchant')->with('category')->get(); 
                if (count($dealsMerchant) > 0) {
                    $stats = [
                        "total_deals"=> Deal::where(['merchant_id'=> $request->input('merchant_id') ])->count(),
                        "active_deals"=>  Deal::where(['merchant_id'=> $request->input('merchant_id'), 'active' => 1])->count(),
                        "inactive_deals"=> Deal::where(['merchant_id'=> $request->input('merchant_id'), 'active' => 0])->count()
                    ];
                    return ['data' => $dealsMerchant, 'stats' => $stats];
                } else {
                    return $this->success('record not found');
                }
            }
            else if ($request->input('type') === "admin"){
                $dealsAdmmin = Deal::with('status')->with('merchant')->with('category')->get(); 
                if (count($dealsAdmmin) > 0) {
                    $stats = [
                        "total_deals"=> Deal::count(),
                        "active_deals"=>  Deal::where([ 'active' => 1])->count(),
                        "inactive_deals"=> Deal::where([ 'active' => 0])->count()
                    ];
                    return ['data' => $dealsAdmmin, 'stats' => $stats];
                } else {
                    return $this->success('record not found');
                }
            }

        }
      
    }

    public function uploadDeals(Request $request){
   
      $dealDates =  explode(' to ', $request->rangeDate);
        
        try{
        
            if($request->file('image') != null){
                $file = $request->file('image');
                $coverImage = $request->file('coverImage');
                $fileName = time().'.'.Str::random(20).".jpg";
                $fileCover = time().'.'.Str::random(20).".jpg";
                $file->move(public_path('deals_ads/thumb_nail'), $fileName);
                $coverImage->move(public_path('deals_ads/cover'), $fileCover);   
            }
            $new_entry = false;
            $deal = Deal::find($request->id);
            if(!$deal){
                $deal =  new Deal;
                $new_entry = true;
            }
            
            
            if($request->file('image') != null){
                $deal->image = $fileName;
                $deal->large = $fileCover;
            }
            
            $deal->title = $request->dealTitle;
            $deal->subtitle = $request->dealSubTitle;
            $deal->point_value = $request->pointValue; 
            $deal->deal_cost = $request->dealCost;
            $deal->category = $request->category;
            $deal->stores = $request->store;  
            $deal->merchant_id = $request->merchantId;     
            $deal->description = $request->dealsDescription;
            $deal->tandc = $request->tandc;
            $deal->firebase_id = $request->firebaseId;
            $deal->start_date = current($dealDates);
            $deal->end_date = last($dealDates);
            $deal->timestamps = true;
            if ($new_entry){
                $deal->active = 0 ;
                $deal->status = 3 ;
            }

            $deal->save();

            $deal_given = Deal::where('id', $deal->id )->with("merchant")->first();
            $user = User::where('email', 'plenti.africa@gmail.com' )->first();

            if ( $new_entry === true ) {     //New           
               
                $deal_id = $deal_given->id;
                $deal_title = $deal_given->title;
                $deal_start_date = date ( "F j, Y", strtotime($deal_given->start_date) );
                $deal_end_date = date ( "F j, Y", strtotime($deal_given->end_date) );

                $details = [
                    'title' => 'Plenti Deal Creation Admin Notification',
                    'link' => URL::to('/') . "/deals/". $deal_id,
                    'deal' =>  " <ul> <li> <b> Title  </b> : $deal_title </li> <li>  <b> Start Date  </b> : $deal_start_date </li> <li>  <b> End Date  </b> : $deal_end_date </li> </ul> ",
                    'status' => "PENDING"
                ];
                Mail::to( $user->email )->send(new DealsNotifyAdmin($details));
            }        
            return $this->success('record saved',$deal);
            
        }catch(\Exception $ex){
            return [
                'message' -> $ex->messge()
            ];
        }
    }    

    public function campaigns($store_id = null)
    {
        if ($store_id != null) {
            $campaign = Campaign::where('date_to', '>=', Carbon::now())->where('store_id', $store_id)->get();
            if (count($campaign)) {
                return $this->success('record found', $campaign);
            } else {
                return $this->success('record not found', []);
            }
        }
    }
    
     public function getMerchants()
    {
        $merchants = UserMerchant::with('store')->where(['id'=>4587])->orderBy('id', "desc")->get(); 
        if (count($merchants)) {
            return $this->success('record found', $merchants);
        } else {
            return $this->success('record not found');
        }
    }
    
    public function getGiftCardsByBrand(Request $request)
    {
        $plans = [];
        $vendors = ($request->input('q') != '') ? 
        GiftCardsVendor::where('vendor', 'like', '%'.$request->input('q').'%')
        ->get()->toArray() : GiftCardsVendor::get()->toArray();
        $giftCards = GiftCards::get()->toArray();
        

        foreach ($vendors as $key => $vendor) {
            $vendors[$key]['cards'] = $giftCards;
        }
        return $this->success('success', $vendors);
    }
    
    public function suggestStore(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'store_name' => 'required',
                'store_mobile_number' => 'required',
                'store_address' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }
            
            $param = [
                 'store_name' => $request->store_name,
                'store_mobile_number' => $request->store_mobile_number,
                'store_address' => $request->store_address
            ];
            $user = Enquiry::create([
                'text' => json_encode($param),
                'type'=>"add_new_store"
            ]);

            return $this->success('Your store creation request was successful', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

     public function dashboard(Request $request)
     {
       
        $columns = ['id', 'amount_spent', 'point_deducted', 'commission','transactioncode', 'ctype', 'paid_for', 'deducted_by', 'deducted_date', 'created_at'];   
        $length = $request->input('length');
        $column = $request->input('column'); //Index
        $dir = $request->input('dir');
        $searchValue = $request->input('search');
        $dateFrom = $request->input('dateFrom');
        $dateTo = $request->input('dateTo');
        
        $mobile = $request->input('mobile');
        $store = $request->input('store');
        $customer = $request->input('customer');

        $amount = $request->input('amount');
        $point_deducted = $request->input('pointdeducted');       
        $commission = $request->input('commission');
        $transaction = $request->input('transaction');
        $transactioncode = $request->input('transactioncode');
        $ctype = $request->input('ctype'); 
        
        $merchant = $request->input('merchant'); 

        $query = ($merchantId) ?
         CustomerTransactionsLog::where(["merchant_id" => $merchantId])->with("customer")->with("store") : 
         CustomerTransactionsLog::with("customer")->with("store");

        if ( $merchant !== null && $merchant !== "" ) {
            $query = $query->whereHas('merchant', function (Builder $queryBuilder) use ($merchant) {
                ($merchant) ?  $queryBuilder->where('id', $merchant) : false;
            });
        }

        if ( $mobile !== null && $mobile !== "" ) {
            $query = $query->whereHas('customer', function (Builder $queryBuilder) use ($mobile) {
                ($mobile) ?  $queryBuilder->where('mobile', $mobile) : false;
            });
        }

        if ( $customer !== null && $customer !== "" ) {
            $query = $query->whereHas('customer', function (Builder $queryBuilder) use ($customer) {
                ($customer) ?  $queryBuilder->where('first_name', $customer)->orWhere('last_name',$customer) : false;
            });
        }

        if ( $store !== null && $store !== "" ) {
            $query = $query->whereHas('store', function (Builder $queryBuilder) use ($store) {
                ($store) ?  $queryBuilder->where('store_name', 'like', '%' . $store . '%') : false;
            });
        }
        
        if ($transactioncode !== null && $transactioncode !== ""){
            $query->where('transaction_code', $transactioncode);
        }

        if ($transaction !== null && $transaction !== ""){
            $query->where('transaction', $transaction);
        }
        
        if ($ctype !== null && $ctype !== ""){
            $query->where('ctype', $ctype);
        }

       /* if ($deducted_date !== null && $deducted_date !== ""){
            $query->where('deducted_date','<=', date($deducted_date) );
        }*/

        if ($amount !== null && $amount !== ""){
            $query->where('amount_spent', $amount);
        }

        if ($point_deducted !== null && $point_deducted !== ""){
            $query->where('point_deducted', $point_deducted);
        }

        if ($commission !== null && $commission !== ""){
            $query->where('commission', $commission);
        }
        
        if ($dateFrom && $dateTo ) {
            $query->whereBetween('created_at', [ date($dateFrom), date($dateTo) ]);
        }         

        if ($searchValue) {
            $query->where(function($queryBuilder) use ($searchValue) {
                $queryBuilder->where('transaction_code', 'like', '%' . $searchValue . '%')
                 ->orWhere('ctype', '=', $searchValue )
                 ->orWhere('amount_spent', '=', $searchValue )
                 ->orWhere('commission', '=', $searchValue );
            });
        }        
        $stats = [
            "total_transactions"=> CustomerTransactionsLog::count(),
            "burn_transactions"=> CustomerTransactionsLog::where(['transaction'=> "burn"])->count(),
            "earn_transactions"=> CustomerTransactionsLog::where(['transaction'=> "earn"])->count()
        ];
        $logs = $query->orderBy("created_at", $dir)->paginate($length); 
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=> $stats  ];
    }

    function earnPoints(Request $request)
    {   
      $validator = Validator::make($request->all(),  [
            'amount' => 'required|max:255',
            'store_id' => 'required|max:255',
            'receipt' => 'required|unique:customer_transactions_log,receipt',
          //  'data' => 'required',
            ]);
        
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 422);
        }
       
        $isGiftCard = (isset($request->isGiftCard)) ? $request->isGiftCard : false;  
        $isDeal = (isset($request->isDeals)) ? $request->isDeals : false; 
        
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
        try {
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
                                        Mail::to($user->email)->send(new PointCreditMail($details));
                                        return $this->successResponseV3(["user"=>$user],'Your wallet has been credited with '.$points_received.'Pts', ["user"=>$user],200);
                                    }
                                    
                                    }
                                }else{
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
                                    return $this->successResponseV3( ["user"=>$user], 'Your wallet will be credited with '.$points_received.'Pts in 24hrs', 200);

                                }                                  
                                    
                            } catch (exception $ex) {  
                                return $this->errorResponse('This transaction id already exist please use another one', 400);        
                            }

                        
                        } else {
                            return $this->errorResponse('Invalid transaction you must spend at 100NGN least  to earn points', 400); 
                            if (!$store_setting_data) {
                                    return $this->error('Invalid Merchant credentials', 400); 
                            }
                        }
                    
                } else {
                        return $this->errorResponse('Invalid customer credentials', 400); 
                }
            }else{
                return $this->error('This  receipt has been used', 400); 
            }
        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 500);
        }
    }

}