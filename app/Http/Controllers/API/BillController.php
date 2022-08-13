<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\TranStats;
use App\Models\Vtu;
use App\Models\VtuLog;
use App\Models\BillLog;
use App\Models\User;
use App\Mail\PointCreditMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use App\Models\CustomerTransactionsLog;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Builder;

class BillController extends Controller
{
    use ApiResponser;
    private $PLENTI_STORE = 61;
    private $TRANSACTION_STATUS = 1;
    private $POINT_STATUS = 1;
    private $GET_CREDIT_URL = "http://132.145.231.191/VTUAPI/v4/getCredit";

    public function all_bills()
    {
        $bills = [
            ['id' => 1, 'icon' => env('APP_URL') . '/icon/call.svg', 'name' => 'Airtime', 'slug' => 'airtime'],
            ['id' => 2, 'icon' => env('APP_URL') . '/icon/data_bundle.svg', 'name' => 'Data Bundle', 'slug' => 'data-bundle'],
            ['id' => 3, 'icon' => env('APP_URL') . '/icon/electricity.svg', 'name' => 'Electricity', 'slug' => 'electricity'],
            // ['id' => 4, 'icon' => env('APP_URL') . '/icon/cabletv.svg', 'name' => 'Cable TV', 'slug' => 'cable-tv'],
            ['id' => 5, 'icon' => env('APP_URL') . '/icon/cabletv.svg', 'name' => 'Plenti Credit', 'slug' => 'insurance', 'url' => 'https://daalu.com.ng/mobile/#/credit/'. Auth::user()->mobile]
        ];

        return $this->success('success', $bills);
    }

    public function get_bill_by_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_bill = VtuLog::where('id',$request->id)->with("customer")->with("store")->first();

        if ($current_bill) {
            return $this->success('record found', $current_bill);
        } else {
            return $this->success('user not found');
        }
    }
    
    public function dashboard(Request $request){
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
        $network = $request->input('network');       
        $requestType = $request->input('requestType');
        $status = $request->input('status');     
       
        $query = VtuLog::with("customer")->with("store");

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
        
        if ($amount !== null && $amount !== ""){
            $query->where('amount', $amount);
        }

        if ($network !== null && $network !== ""){
            $query->where('newtwork', $network);
        }

        if ($requestType !== null && $requestType !== "" ){
            $query->where('request_type', $requestType);
        }

        if ($status !== null && $status !== ""){
            $query->where('status', $status);
        }
        
        if ($dateFrom !== null  && $dateTo !== null ) {
            $query->whereBetween('updated_at', [ date($dateFrom), date($dateTo) ]);
        }         

        if ($searchValue) {
            $query->where(function($queryBuilder) use ($searchValue) {
                $queryBuilder->where('newtwork', 'like', '%' . $searchValue . '%')
                 ->orWhere('amount', 'like', '%' . $searchValue . '%')
                 ->orWhere('requestType', '=', $searchValue )
                 ->orWhere('status', '=', $searchValue );
            });
        }        
        $stats = [
            "total_bills"=>  VtuLog::count(),
            "success_bills"=>  VtuLog::where(['status'=> "Success"])->count(),
            "unsuccess_bills"=> VtuLog::where(['status'=> "Fail"])->count()
        ];
        
        $logs = $query->orderBy("updated_at", $dir)->paginate($length); 
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=>$stats];
    }

    public function dashboardV1(Request $request){
        // N/B:  PLEASE the Table (vtu_logs) has a column "newtwork" that is spelt wrongly, so I used it as it is
        try {
            $validator = Validator::make($request->all(),  [
                'mobileNumber' => 'regex:/^[a-zA-Z0-9_\-]*$/|required',
                'fromDate' => 'date|date_format:Y-m-d',
                'toDate' => 'date|date_format:Y-m-d|after:fromDate',  
                'requestType' => 'string|in:airtime,data',             
                'amount' => 'numeric',
                'status' => 'string|max:10',
                'network' => 'string|max:8'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $vtuLogs = array();
            $mobileNumber = $request->input('mobileNumber'); 
            $fromDate  = $amount = $status = $network = $requestType = null;
            $toDate = date('Y-m-d');
            $queryFilter = array(); 

            if ( $request->input('amount') != null ){  $amount = $request->input('amount');  array_push($queryFilter, [ 'amount', '=', $amount ]); }
            if ( $request->input('status') != null ){  $status = $request->input('status');  array_push($queryFilter, [ 'status', 'like', '%'.$status.'%'  ]); }
            if ( $request->input('network') != null ){  $network = strtoupper($request->input('network'));  array_push($queryFilter, [ 'newtwork', '=', $network ]); }
            if ( $request->input('requestType') != null ) { $requestType = $request->input('requestType');  array_push($queryFilter, [ 'requestType', '=', $requestType  ]);  }

            if ( $request->input('fromDate') != null ){
                $fromDate = date($request->input('fromDate'));
                
                if ( $request->input('toDate') != null ){
                    $toDate = date($request->input('toDate'));
                }

                if ( $request->input('mobileNumber') !== "all" ){
                  
                    if ( count($queryFilter) > 0 ){
                        $vtuLogs = VtuLog::whereHas('customer', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ])
                        ->where($queryFilter)->with("customer")->paginate(10);
                    }
                 
                    else{
                        $vtuLogs = VtuLog::whereHas('customer', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ])
                        ->with("customer")->paginate(10);
                    }
                }
                else{
                   
                    if ( count($queryFilter) > 0 ){
                        $vtuLogs = VtuLog::whereBetween('updated_at', [ $fromDate, $toDate ])
                        ->where($queryFilter)->with("customer")->paginate(10);
                    }
                   
                    else{
                        $vtuLogs = VtuLog::whereBetween('updated_at', [ $fromDate, $toDate ])
                        ->with("customer")->paginate(10);
                    }                 

                }

            }else{
                if ( $request->input('mobileNumber') === "vas2net" ){
                    $vtuLogs = Vtu::get();
                }

                else if ( $request->input('mobileNumber') !== "all" ){

                  
                    if ( count($queryFilter) > 0 ){
                        $vtuLogs = VtuLog::whereHas('customer', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->where($queryFilter)->with("customer")->paginate(10);
                    }
                    
                    else{
                        $vtuLogs = VtuLog::whereHas('customer', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->with("customer")->paginate(10);
                    }

                } else{
                    if ( count($queryFilter) > 0 ){
                        $vtuLogs = VtuLog::where($queryFilter)->with("customer")->paginate(10);
                    }
                   
                    else{                       
                        $vtuLogs = VtuLog::with("customer")->with("customer.transStat")->get();                                            
                    }
                }
            }       
         

            return $this->success("Your search result(s)", ["results"=>$vtuLogs]);

        }
        catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }

    }


    public function airtime(Request $request)
    {
        try {
            $validator = Validator::make($request->all(),  [
                'mobile' => 'required|max:255',
                'network' => 'required',
                'amount' => 'required',
                'reward'=>'required'
            ]);
            

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
            if ($user ) {    

                $url = "http://132.145.231.191/VTUAPI/v4/getCredit";

                $mobile = $request->input('mobile');
                $network = $request->input('network');
                $amount = $request->input('amount');
                $uniqueCode = "Airtime" . "-" . str_replace('-', "", date('Y-m-d')) . "-" . time() . "-" . unique_code(9);

                $mydata = json_encode(array(
                    "username" => "tvioSolutions", "password" => "stuV232n!iI1", "amount" => $amount,
                    "msisdn" =>  $mobile, "network" => $network, "requestId" => $uniqueCode
                ));
                $result1 = json_decode(httpPost($url, $mydata));
                //$result1 = json_decode('{"status":"Success","referenceID":"1515323579802","balance":"9703"}');   
                if (isset($result1->status) && $result1->status== 'Failed') {
                    return $this->error('Transaction failed, Kindly try again please', 400);
                }else{
                    $store_setting_data = User::Where(['store_id' =>$this->PLENTI_STORE])->with("store")->with("merchant")->first();
                    $points_received = $this->rewardFormular((int)$request->amount, (int)$request->reward);
                    $daalu_commision = $this->commission($store_setting_data, (int)$request->amount);
                    
                    //Creating transaction log
                    $data['CustomerTransactionsLog']['ref'] = 'Airtime';
                    $data['CustomerTransactionsLog']['receipt'] = $uniqueCode;
                    $data['CustomerTransactionsLog']['ref_id'] = '1';
                    $data['CustomerTransactionsLog']['customer_id'] = Auth::id();
                    $data['CustomerTransactionsLog']['card_no'] = $user->card->card;
                    $data['CustomerTransactionsLog']['mobile_no'] = $user->mobile;
                    $data['CustomerTransactionsLog']['transaction_code'] =    $uniqueCode;
                    $data['CustomerTransactionsLog']['creds'] = $points_received;
                    $data['CustomerTransactionsLog']['time'] = time() + 3600;
                    $data['CustomerTransactionsLog']['ctype'] = 'Mobile-Airtime';
                    $data['CustomerTransactionsLog']['amount_spent'] =(int)$request->amount;
                    $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                    $data['CustomerTransactionsLog']['transaction'] = 'VTU '.$network;
                    $data['CustomerTransactionsLog']['merchant_id'] =1;
                    $data['CustomerTransactionsLog']['store_id'] = $this->PLENTI_STORE;
                    $data['CustomerTransactionsLog']['status_id'] = $this->TRANSACTION_STATUS;
                    $data['CustomerTransactionsLog']['pstatus_id'] = $this->POINT_STATUS;
                    $data['CustomerTransactionsLog']['entry'] = 'Points accumulated from buying ' . $network . ' airtime (Amount spent: ' . $request->amount . ')';
                    
                    $balance = $user->transStat->customer_balance + (int)$points_received;

                    //Updating stats
                    TranStats::where('customer_id', Auth::id())->update([
                        'total' => (int)$user->transStat->total - (int)$request->amount,
                        'total_transaction' => (int)$user->transStat->total_transaction + 1,
                        'earn_point' => (int)$user->transStat->earn_point + (int)$points_received,
                        'earn_amount' => (int)$user->transStat->earn_amount - (int)$request->amount,
                        'customer_balance'=> $balance
                    ]);
                    
                    //Updating VTU balance
                    $vtu = Vtu::updateOrCreate(
                        ['integration'=>"Data"],
                        ['balance' => $result1->balance]
                    );
                    
                    //Updating VTU logs
                    VtuLog::create([
                        'vtu_id' => 1,
                        'request' =>  $mydata,
                        'response' => json_encode($result1),
                        'request_type'=>"airtime",
                        'user_id' => Auth::id(),
                        'store_id'=> $this->PLENTI_STORE,
                        'amount' => $amount ,
                        'points_earn' => (int)$points_received,
                        'newtwork' => $network,
                        'status' =>  $result1->status
                    ]);
                    
                    $details = [
                    'title' => 'Plenti new point credit for airtime purchase',
                    'description' => "Thank for purchasing your airtime from Plenti ",
                    'customer' => $user->first_name,
                    'points' =>  $points_received,
                    'pendingPoints' =>  0,
                    'balance' =>  $balance
                    ];
                    Mail::to($user->email)->send(new PointCreditMail($details));                    
                    //Refetch user details
                    $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                    $user->transStat->earn_point = $points_received;
                    return $this->success("You have earned {$points_received} points", ["user"=>$user]);
                }
            } else {
                return $this->error('Insufficient balance', 400);
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function airtimeRequery(Request $request){
        $validator = Validator::make($request->all(),  [
            'mobile' => 'required|max:255',
            'network' => 'required',
            'amount' => 'required',
        ]);
        $url = "http://132.145.231.191/VTUAPI/v4/getCredit";

        $mobile = $request->input('mobile');
        $network = $request->input('network');
        $amount = $request->input('amount');
        $uniqueCode = "Airtime" . "-" . str_replace('-', "", date('Y-m-d')) . "-" . time() . "-" . unique_code(9);

        $mydata = json_encode(array(
            "username" => "tvioSolutions", "password" => "stuV232n!iI1", "amount" => $amount,
            "msisdn" =>  $mobile, "network" => $network, "requestId" => $uniqueCode
        ));

       $result1 = json_decode(httpPost($url, $mydata));
       //$result1 = json_decode('{"status":"Success","referenceID":"1515323579802","balance":"9703"}');
        
       //Updating VTU balance
        $vtu = Vtu::updateOrCreate(
            ['integration'=>"Data"],
            ['balance' => $result1->balance]
        );
        //Updating VTU logs
       return  VtuLog::create([
            'vtu_id' => 1,
            'request' =>  $mydata,
            'response' => json_encode($result1),
            'request_type'=>"airtime",
            //'user_id' => Auth::id(),
            'store_id'=> $this->PLENTI_STORE,
            'amount' => $amount ,
            'points_earn' => 0,
            'newtwork' => $network,
            'status' =>  $result1->status
        ]);
            
    }   


    public function shagoOperators(Request $request){
        $bet = [
            ['id' => 1, 'name' => 'Bet9ja'],
            ['id' => 2, 'name' => 'BangBet'],
            ['id' => 3, 'name' => 'NairaBet'],
            ['id' => 4, 'name' => 'SupaBet'],
            ['id' => 5, 'name' => 'CloudBet'],
            ['id' => 6, 'name' => 'BetLion'],
            ['id' => 7, 'name' => '1xBet'],
            ['id' => 8, 'name' => 'MerryBet'],
            ['id' => 9, 'name' => 'BetWay'],
            ['id' => 10, 'name' => 'BetLand'],
            ['id' => 11, 'name' => 'BetKing'],
            ['id' => 12, 'name' => 'LiveScoreBet'],
            ['id' => 13, 'name' => 'NaijaBet']
        ];

        $tv = [
            ['id' => 1, 'name' => 'DSTV'],
            ['id' => 2, 'name' => 'GOTV'],
            ['id' => 3, 'name' => 'STARTIMES']
        ];

        return $this->success('success', ['bet' => $bet, 'tv' => $tv]);
    }

    public function shagoPayment(Request $request){

        try {
            $validator = Validator::make($request->all(),  [
                'serviceCode' => 'required',
                'amount' => 'required|integer',
                'request_id' => 'required',
                'reward' => 'required'
            ]);            

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
            if ($user ) {    
                
                $url = env('SHAGO_URL'); 
                $hashKey =  env('SHAGO_HASHKEY');
                $headers = array('Content-Type:application/json', "hashKey: $hashKey" );

                $serviceCodes =  ['AOB' => "Disco", 'GDB' => 'TV Subscription', 'BEP' => 'Bet Collection', 'LUP' => 'Insurance' ];
                $type = $serviceCodes[ $request->input('serviceCode') ];

                $myrequest = $request->all();
                $body =  json_encode($myrequest);
        
                $result1 = json_decode(httpPostWithHeader($url, $body, $headers));          
          
                if (isset($result1->status) && $result1->status != '200') {                   
                    return $this->error("Transaction failed, Kindly try again please. Here is the Error --> $result1->message", 400);
                }else{
                    $type_of_purchase = $result1->type ? $result1->type : $result1->insurance_type ;
                    $store_setting_data = User::Where(['store_id' =>$this->PLENTI_STORE])->with("store")->with("merchant")->first();

                    $points_received = $this->rewardFormular((int)$request->amount, (int)$request->reward); //$this->pointEngine($store_setting_data, (int)$request->amount);                       
                    $daalu_commision = $this->commission($store_setting_data, (int)$request->amount);
                    
                    //Creating transaction log
                    $data['CustomerTransactionsLog']['ref'] = $type;
                    $data['CustomerTransactionsLog']['receipt'] = $request->request_id;
                    $data['CustomerTransactionsLog']['ref_id'] = '1';
                    $data['CustomerTransactionsLog']['customer_id'] = Auth::id();
                    $data['CustomerTransactionsLog']['card_no'] = $user->card->card;
                    $data['CustomerTransactionsLog']['mobile_no'] = $user->mobile;
                    $data['CustomerTransactionsLog']['transaction_code'] =   $result1->transId;
                    $data['CustomerTransactionsLog']['creds'] = $points_received;
                    $data['CustomerTransactionsLog']['time'] = time() + 3600;
                    $data['CustomerTransactionsLog']['ctype'] =  $type_of_purchase;
                    $data['CustomerTransactionsLog']['amount_spent'] =(int)$request->amount;
                    $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                    $data['CustomerTransactionsLog']['transaction'] = $type;
                    $data['CustomerTransactionsLog']['merchant_id'] =1;
                    $data['CustomerTransactionsLog']['store_id'] = $this->PLENTI_STORE;
                    $data['CustomerTransactionsLog']['status_id'] = $this->TRANSACTION_STATUS;
                    $data['CustomerTransactionsLog']['pstatus_id'] = $this->POINT_STATUS;
                    $data['CustomerTransactionsLog']['entry'] = 'Points accumulated from buying ' . $type_of_purchase . ' (Amount spent: ' . $request->amount . ')';
                    
                    $balance = $user->transStat->customer_balance + (int)$points_received;

                    $CustomerTransactionsLog =  new CustomerTransactionsLog;
                    $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);

                    //Updating stats
                    TranStats::where('customer_id', Auth::id())->update([
                        'total' => (int)$user->transStat->total - (int)$request->amount,
                        'total_transaction' => (int)$user->transStat->total_transaction + 1,
                        'earn_point' => (int)$user->transStat->earn_point + (int)$points_received,
                        'earn_amount' => (int)$user->transStat->earn_amount - (int)$request->amount,
                        'customer_balance'=> $balance
                    ]);
                    
                    //Updating VTU balance
                 /*   $vtu = Vtu::updateOrCreate(
                        ['integration'=>"Data"],
                        ['balance' => 0 ]
                    );*/
                    
                    //Updating VTU logs
                    BillLog::create([
                        'request' =>  json_encode($request->all()),
                        'response' => json_encode($result1),
                        'request_type'=> $type_of_purchase ,
                        'user_id' => Auth::id(),
                        'store_id'=> $this->PLENTI_STORE,
                        'amount' => (int)$request->amount ,
                        'points_earn' => (int)$points_received,
                        'category' => $type,
                        'status' =>  $result1->status
                    ]);
                    
                    $details = [
                    'title' => "Plenti new point credit for $type_of_purchase purchase",
                    'description' => "Thank for purchasing your $type_of_purchase from Plenti ",
                    'customer' => $user->first_name,
                    'points' =>  $points_received,
                    'pendingPoints' =>  0,
                    'balance' =>  $balance
                    ];

                    Mail::to($user->email)->send(new PointCreditMail($details));
                    
                    //Refetch user details
                    $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                    $user->transStat->earn_point = $points_received;
                    return $this->success("You have earned {$points_received} points", ["user"=>$user]);

                }
            } else {
                return $this->error('Insufficient balance', 400);
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }

    }

    public function dashboardUtility(Request $request){
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
        $category = $request->input('category');       
        $requestType = $request->input('requestType');
        $status = $request->input('status');     
       
        $query = BillLog::with("customer")->with("store");

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
        
        if ($amount !== null && $amount !== ""){
            $query->where('amount', $amount);
        }

        if ($category !== null && $category !== ""){
            $query->where('category', $category);
        }

        if ($requestType !== null && $requestType !== "" ){
            $query->where('request_type', $requestType);
        }

        if ($status !== null && $status !== ""){
            $query->where('status', $status);
        }
        
        if ($dateFrom !== null  && $dateTo !== null ) {
            $query->whereBetween('updated_at', [ date($dateFrom), date($dateTo) ]);
        }         

        if ($searchValue) {
            $query->where(function($queryBuilder) use ($searchValue) {
                $queryBuilder->where('newtwork', 'like', '%' . $searchValue . '%')
                 ->orWhere('amount', 'like', '%' . $searchValue . '%')
                 ->orWhere('requestType', '=', $searchValue )
                 ->orWhere('status', '=', $searchValue );
            });
        }        
        $stats = [
            "total_bills"=>  BillLog::count(),
            "success_bills"=>  BillLog::where(['status'=> "200"])->count(),
            "unsuccess_bills"=> BillLog::where( "status", "!=", "200" )->count()
        ];
        
        $logs = $query->orderBy("updated_at", $dir)->paginate($length); 
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=>$stats];
    }

    
    
    public function settings(Request $request)
    {
        $settings = [];
        $rUrl = "https://fillcart.tviodigital.com/jsonfiles/VTUDataList.json";
        $data = json_decode(file_get_contents($rUrl), true);
        $settings[0]['dataSettings'] = $data;
        $settings[1]['otherSettings'] = array();
        return $settings;
    }

    public function queryShagoDataBundle(Request $request){
        
        $validator = Validator::make($request->all(),  [
            'network' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }

        $url = env('SHAGO_URL'); 
        $hashKey =  env('SHAGO_HASHKEY');
        $headers = array('Content-Type:application/json', "hashKey: $hashKey ");
    
        $body =  json_encode([ "serviceCode" => "VDA", "network" => $request->input('network') ]);
        
        $result1 = json_decode(httpPostWithHeader($url, $body, $headers));

        return $this->success("Your Data Bundle names are:", $result1);
    }


    public function data(Request $request)
    {
        try {
            $validator = Validator::make($request->all(),  [
                'mobile' => 'required|max:255',
                'network' => 'required',
                'dataplan' => 'required',
                'amount' => 'required',
                'reward'=>'required'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }
            $mobile = $request->input('mobile');
            $network = $request->input('network');
            $dataplan = $request->input('dataplan');
            $uniqueCode = "Databundle" . "-" . str_replace('-', "", date('Y-m-d')) . "-" . time() . "-" . unique_code(9);
            
            $url = env('VAS_BASE_URL') . "/V2NData/v4/getData";
            $param = [
                'msisdn' => $mobile,
                'network' => $network,
                'dataplan' => $dataplan,
                'requestId' => $uniqueCode
            ];  
                   
            $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
            if ($user) {                
               $result = json_decode(json_encode(vas2net_curl($param, $url)));
              // $result = json_decode('{"status":"Success","referenceID":"1515323579802","balance":"9703"}');
               if ($result->status == 'Failed') {        
                    return $this->error('Transaction failed, Kindly try again please', 400);
               }else{ 
             
                    $store_setting_data = User::Where(['store_id' =>$this->PLENTI_STORE])->with("store")->with("merchant")->first();
                    $points_received = $this->rewardFormular((int)$request->amount, (int)$request->reward);                    
                    $daalu_commision = $this->commission($store_setting_data, (int)$request->amount);                    
                    //Creating transaction log
                    $data['CustomerTransactionsLog']['ref'] = 'Data';
                    $data['CustomerTransactionsLog']['receipt'] =    $uniqueCode;
                    $data['CustomerTransactionsLog']['ref_id'] = '1';
                    $data['CustomerTransactionsLog']['customer_id'] = Auth::id();
                    $data['CustomerTransactionsLog']['card_no'] = ($user->card != null) ? $user->card->card :'' ;
                    $data['CustomerTransactionsLog']['mobile_no'] = $user->mobile;
                    $data['CustomerTransactionsLog']['transaction_code'] =    $uniqueCode;
                    $data['CustomerTransactionsLog']['creds'] = $points_received;
                    $data['CustomerTransactionsLog']['time'] = time() + 3600;
                    $data['CustomerTransactionsLog']['ctype'] =  'Mobile-Data';
                    $data['CustomerTransactionsLog']['amount_spent'] =(int)$request->amount;
                    $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                    $data['CustomerTransactionsLog']['transaction'] = 'VTU '.$network;
                    $data['CustomerTransactionsLog']['merchant_id'] =1;
                    $data['CustomerTransactionsLog']['store_id'] = $this->PLENTI_STORE;
                    $data['CustomerTransactionsLog']['status_id'] = $this->TRANSACTION_STATUS;
                    $data['CustomerTransactionsLog']['pstatus_id'] = $this->POINT_STATUS;
                    $data['CustomerTransactionsLog']['entry'] = 'Points accumulated from buying ' . $network . ' Data (Amount spent: ' . $request->amount . ')';                    
                    $balance = $user->transStat->customer_balance + (int)$points_received;      
                    //Updating stats
                    TranStats::where('customer_id', Auth::id())->update([
                        'total' => (int)$user->transStat->total - (int)$request->amount,
                        'total_transaction' => (int)$user->transStat->total_transaction + 1,
                        'earn_point' => (int)$user->transStat->earn_point + (int)$points_received,
                        'earn_amount' => (int)$user->transStat->earn_amount - (int)$request->amount,
                        'customer_balance'=> $balance
                    ]);                    
                    
                    //Updating VTU logs
                    VtuLog::create([
                        'vtu_id' => 2,
                        'request' =>  json_encode($param),
                        'response' => json_encode($result),
                        'user_id'=>Auth::id(),
                        'request_type'=>"data",
                        'store_id'=> $this->PLENTI_STORE,
                        'amount' => $request->amount,
                        'points_earn' => (int)$points_received,
                        'newtwork' => $network,
                        'status' =>  $result->status
                    ]);
                    
                    $details = [
                    'title' => 'Plenti new point credit for airtime purchase',
                    'description' => "Thank for purchasing your airtime from Plenti ",
                    'customer' => $user->first_name,
                    'points' =>  $points_received,
                    'pendingPoints' =>  0,
                    'balance' =>  $balance
                    ];
                    Mail::to($user->email)->send(new PointCreditMail($details));
                    
                    //Refetch user details
                    $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                    $user->transStat->earn_point = $points_received;
                    return $this->success("You have earned {$points_received} points", ["user"=>$user]); 
                    
               }
            } else {
                return $this->error('Insufficient balance, You can fund wallet using our payment gateway', 400);
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }


    public function dataplan()
    {
        try {
            $result = data_getcurl(env('VAS_BASE_URL') . '/V2NData/data_plan_details');
            return $this->success('success', $result);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function network()
    {
        $network = [
            ['id' => 1, 'name' => 'Mtn'],
            ['id' => 2, 'name' => 'GLO'],
            ['id' => 3, 'name' => 'AIRTEL'],
            ['id' => 4, 'name' => '9MOBILE']
        ];

        return $this->success('success', $network);
    }

    public function all_airtime()
    {
        $airtime = [
            ['id' => 1, 'amount' => 100, 'point' => 10],
            ['id' => 2, 'amount' => 200, 'point' => 10],
            ['id' => 3, 'amount' => 500, 'point' => 10],
            ['id' => 4, 'amount' => 1000, 'point' => 10],
            ['id' => 5, 'amount' => 1500, 'point' => 10],
            ['id' => 6, 'amount' => 2000, 'point' => 10],

        ];

        return $this->success('success', $airtime);
    }
    
    public function airtime_operators()
    {
        $plans = [];
        $operators = DB::table('airtime_providers')->get()->toArray();
        $airTimePlans = DB::table('airtime_options')->get()->toArray();
        

        foreach ($operators as $key => $operator) {
            $operators[$key]->dataPlans =  DB::table('data_options')->where(["operator" => $operator->name])->get()->toArray();
            $operators[$key]->plans = $airTimePlans;
        }
        return $this->success('success', $operators);
    }

    public function manualCreditCustomer(Request $request){
        $validator = Validator::make($request->all(),  [
            'mobile' => 'required|max:255',
            'network' => 'required',
            'amount' => 'required'
        ]);        

        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $mobile = $request->input('mobile');
        $network = $request->input('network');
        $amount = $request->input('amount');
        $uniqueCode = "Airtime" . "-" . str_replace('-', "", date('Y-m-d')) . "-" . time() . "-" . unique_code(9);

        $mydata = json_encode(array(
            "username" => "tvioSolutions", "password" => "stuV232n!iI1", "amount" => $amount,
            "msisdn" =>  $mobile, "network" => $network, "requestId" => $uniqueCode
        ));
        $result1 = json_decode(httpPost($this->GET_CREDIT_URL, $mydata));
        //$result1 = json_decode('{"status":"Success","referenceID":"1515323579802","balance":"9703"}');   
        if (isset($result1->status) && $result1->status== 'Failed') {
            return $this->error('Transaction failed, Kindly try again please', 400);
        }else{
            VtuLog::create([
                'vtu_id' => 1,
                'request' =>  $mydata,
                'response' => json_encode($result1),
                'request_type'=>"airtime",
                'user_id' => 8241,
                'store_id'=> $this->PLENTI_STORE,
                'amount' => $amount ,
                'points_earn' => 0,
                'newtwork' => $network,
                'status' =>  $result1->status
            ]);
            return  $result1;
            
        }
    }

}
