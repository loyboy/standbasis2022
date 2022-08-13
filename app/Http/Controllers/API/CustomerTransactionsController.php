<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Mail\PointCreditMail;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use App\Http\Requests\VueCrudRequest;
use App\Models\CustomerTransactionsLog;
use App\Models\User;
use App\Models\Store;
use DB;
use App\Models\GiftCards;
use App\Models\GiftCardTransactions;
use App\Models\Deal;
use App\Models\VoucherLog;
use App\Models\VtuLog;
use App\Models\Voucher;
use App\Models\TranStats;
use App\Classes\DeleteCrud;
use App\Traits\ApiResponser;
use App\Traits\ChartPlots;
use Carbon\Carbon;
class CustomerTransactionsController extends Controller
{
    use ApiResponser;
    use ChartPlots;

    private $DEFAULT_MERCHANT = 1;
    private  $genderOptions = [ "0" => "Unset", "1" => "Male", "2" =>"Female"];
  
    public function updateUser(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'mobile' => 'required|string',
                'gender_id' => 'required|string'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 422);
            }
            $user = User::where('id', $request->id)->with("transStat")->with("card")->first();
            $fullName = explode(' ', $request->fullName);         
            $user->first_name = current($fullName);
            $user->last_name = last($fullName);
            $user->mobile = $request->mobile;
            $user->email = $request->email;
            $user->gender =$this->genderOptions[$request->gender_id];
            $user->dob = $request->dob;
            $user->address = $request->address;
            if ($user->save()) {
                return $this->success('Profile Update successful',["user"=>$user]);
            }   
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function updateUserProfile(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'mobile' => 'required|string',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 422);
            }

            $data =  $request->all();
            $data['gender'] = $this->genderOptions[ $request->input('gender_id') ? $request->input('gender_id') : "1"  ];
            unset($data['cat_list']);
            unset($data['merchant']);
            unset($data['store_list']);
            unset($data['trans_stat']);
            unset($data['card']);

            $response = User::where('id', $request->input('id') )->update($data);
    
            if ($response === 1){            
                return $this->success('Updated user profile', true );
            }
            else{
                return $this->success('Error while Updating user profile', true );
            }
            
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function index()
    {
       
        return view('vue_crud' );
    }

    public function loadTransactions(Request $request)
    {
        $items = new CustomerTransactionsLog;
        $items =  $items->select(DB::raw('id, mobile_no, creds, amount_spent,date(created_at) as trans_date, receipt'))
            ->with('customer')
            ->latest();
        if(request()->has("status")){
          $items =  $items->where("pstatus_id", 3);
        }
        if(request()->has("transaction")){
          $items =  $items->where("transaction", request('transaction'));
        }
        $items =  $items->paginate(20)->appends([
            'status_id' => request('status')
        ]);
        $response = [
            'pagination' => [
                'total'         => $items->total(),
                'per_page'      => $items->perPage(),
                'current_page'  => $items->currentPage(),
                'last_page'     => $items->lastPage(),
                'from'          => $items->firstItem(),
                'to'            => $items->lastItem()
            ],
            'data'             => $items
        ];
        return response()->json($response);
    }
    
    public function customerTransactions(Request $request)
    {
        
        if ( $request->input('client') ) {
    	    return CustomerTransactionsLog::select('id', 'mobile_no', 'creds', 'amount_spent','receipt')->get();
    	}

        $columns = ['mobile_no', 'creds', 'amount_spent', 'receipt'];

        $length = $request->input('length');
        $column = $request->input('column'); //Index
        $dir = $request->input('dir');
        $searchValue = $request->input('search');

        $query = CustomerTransactionsLog::select('id', 'mobile_no', 'creds', 'amount_spent','receipt')->orderBy($columns[$column], $dir);

        if ($searchValue) {
            $query->where(function($query) use ($searchValue) {
                $query->where('mobile_no', 'like', '%' . $searchValue . '%');
               // ->orWhere('status', 'like', '%' . $searchValue . '%');
            });
        }

        $logs = $query->paginate($length);
        return ['data' => $logs, 'draw' => $request->input('draw')];
    }

    public function store(VueCrudRequest $request)
    {
        $crud = new VueCrud() ;
        $new_content = $this->dispatch(new VueCrudSaveJob("create" , $crud , $request));
        return response()->json([$new_content]);
    }

    public function earnPoint(Request $request)
    {
        $customerTrans = CustomerTransactionsLog::findOrFail($request->id);
        if ($customerTrans ) {

                $transaction_data = TranStats::where(['customer_id' => $customerTrans->customer_id])->first();
                 $store_setting_data = Store::Where(['id' =>$customerTrans->store_id ])->first();
                 $user = User::Where(['id' =>$customerTrans->customer_id ])->first();
                if($transaction_data ){
                    $balance = $transaction_data->customer_balance + $customerTrans->creds;
                    $transaction_data->customer_id = $customerTrans->customer_id;
                    $transaction_data->earn_point = $transaction_data->earn_point + $customerTrans->creds;
                    $transaction_data->earn_amount = $transaction_data->earn_amount + $customerTrans->amount_spent;
                    $transaction_data->total = $transaction_data->total +$customerTrans->amount_spent;
                    $transaction_data->total_transaction =$transaction_data->total_transaction + 1;
                    $transaction_data->customer_balance = $balance;            
                if ($transaction_data->save()) {
                    $details = [
                    'title' => 'Plenti new point credit alert',
                    'description' => "Thank for shopping at ". $store_setting_data->store_name.". We hope you enjoyed your shopping",
                    'customer' => $user->first_name,
                    'points' =>  $customerTrans->creds,
                    'balance' =>  $balance
                    ];  
                    Mail::to($user->email)->send(new PointCreditMail($details)); 
                    CustomerTransactionsLog::where('id', $customerTrans->id)->update([
                        'pstatus_id' =>1
                    ]);
                    return response()->json(["message"=>"Transaction was successful"]);

                }
                
            }
        }
    }

    function getTopEarnByStore($from , $to, $merchantId = null)
    {   
        $i = 0;
        $series = []; 
        $storeData = [];       
        $stores = Store::where('merchant_id', $this->DEFAULT_MERCHANT )->get();
        foreach($stores as $store){
            $j = 0;
            $totalY = 0;
            $drillData = [];
            $storeData['parentData'][$i]['name'] = $store->store_name;
            $topEarns = DB::select('call getTopEarnByStore(?,?,?)',array($store->id, $from,$to));  
            foreach($topEarns as $topEarn){
                $totalY +=  $topEarn->transactions;
                $dataArray = [];
                $drillData[$j][] = $topEarn->cname;
                $drillData[$j][] = $topEarn->transactions;
                $j++;
            }
            $storeData['parentData'][$i]['y'] = $totalY;
            $storeData['parentData'][$i]['drilldown'] = $store->store_name;
            $series[$i]['name'] = $store->store_name;
            $series[$i]['id'] = $store->store_name;
            $series[$i]['data'] =  $drillData;
            $i++;
        }
        $storeData['series'] =   $series;
        return  $storeData;
    }

    function getmonthtlyTransaction($merchantId = null, $dateInterval=null)
    {
        $months =  DB::select('call   getTransactionTrends');
        return $months;
    }
    
    function getAllTransactionBySex($merchantId = null)
    {
        $i = 0;
        $series = [];
        $storeData = [];     
        $stores =  Store::where('merchant_id', 1)->get();
        foreach($stores as $store){
            $storeData['parentData'][$i]['name'] = $store->store_name;
            $genders = DB::select('call getAllTransactionBySex(?)',array($store->id));
            $totalY = 0;
            $drillData = [];
            $j = 0;
        foreach($genders as $gender){

            $totalY +=  $gender->total;
            $dataArray = [];
            $drillData[$j][] = $gender->gender;
            $drillData[$j][] = $gender->total;
            $j++;
        }
        $storeData['parentData'][$i]['y'] = $totalY;
        $storeData['parentData'][$i]['drilldown'] = $store->store_name;

        $series[$i]['name'] = $store->store_name;
        $series[$i]['id'] = $store->store_name;
        $series[$i]['data'] =  $drillData;
        $i++;
        }
        $storeData['series'] =   $series;
        return  $storeData;
    }
    
    function dashboardCharts(Request $request){
        $dealDates =  explode(' to ', $request->dates);
        $from = current($dealDates);
        $to= last($dealDates);
        if(count($dealDates) != 2){
            $from = Date('Y-01-01');
            $to = Carbon::now()->toDateTimeString();          
        }
        $merchant = User::where('role', 'merchant')->count();
        $customer = User::where('role', 'user')->count();
        $customer_normal = User::where('role', 'user')->latest()->take(8)->get();
        $giftCards = GiftCards::count();
        $deals = Deal::count();
        $vouchers =  Voucher::where(['validated'=>0])->count();
        return [
            'trend_charts' =>  $this->getTransactionTrends($from , $to),
            'top_earns' => $this->getTopEarnByStore($from , $to),
            'statisticsItems'=>[
             
                ['title'=>'Total customers' ,'value' =>  $customer, 'icon'=> 'UserIcon', 'color'=> 'light-success'],
                ['title'=>'Total merchants' ,'value' =>  $merchant, 'icon'=> 'TrendingUpIcon', 'color'=> 'light-info' ],
                ['title'=>'Total deals' ,'value' =>  $deals, 'icon'=> 'GiftIcon', 'color'=> 'light-primary'],
                ['title'=>'Uncliamed Vouchers' ,'value' =>  $vouchers , 'icon'=> 'BoxIcon', 'color'=> 'light-dark'],
                ['title'=>'Failed VTUs' , 'value' =>  0 , 'icon'=> 'CreditCardIcon', 'color'=> 'light-warning'],
                ['title'=>'Unverified Earning' ,'value' => 0 , 'icon'=> 'BriefcaseIcon', 'color'=> 'light-danger'],
            ]
        ];
    }
    
    function monthlyAccountSummary(Request $request ){
        $store = ($request->store) ? $request->store : 0;
        $startDate =  ($request->startDate) ? $request->startDate : Carbon::now()->firstOfMonth()->toDateTimeString();
        $endDate =   ($request->endDate) ? $request->endDate :Carbon::now()->toDateTimeString();
        return  [
             'column'=> [
                    array(
                    'label'=> 'Store Name',
                    'field'=> 'store_name'
                    ),
                   array(
                    'label' => 'Total Earn',
                    'field'=> 'earn'
                    ),
                    array(
                    'label'=> 'Total Burn',
                    'field'=> 'burn'
                    ),
                    array(
                    'label'=> 'Balance',
                    'field'=> 'balance'
                    ),
                    array(
                        'label'=> 'Action',
                        'field'=> 'action'
                    )
            ],
            'rows' => DB::select("call getPreviousMonthAccount ( ?,?,?)",array($store, $startDate,$endDate)),
            'url' => "view-account-transactions"
        ];
    }
    
    function unclaimedVoucher($from = '', $to = ''){
        return  [
         'column'=> [
                array(
                'label'=> 'Voucher Code',
                'field'=> 'reciept'
                ),
                array(
                'label'=> 'Customer Name',
                'field'=> 'customer'
                ),
               array(
                'label' => 'Voucher Value',
                'field'=> 'amount'
                ),
                array(
                'label' => 'Points Deducted',
                'field'=> 'points'
                ),
                array(
                'label'=> 'Redeeming Store',
                'field'=> 'store_name'
                ),
                array(
                'label'=> 'Date Created',
                'field'=> 'date'
                ),
               /*  array(
                        'label'=> 'Action',
                        'field'=> 'action'
                ) */
        ], 
        'rows' => Voucher::select([DB::raw("vouchers.id, reciept, amount, points, store_name,vouchers.created_at , CONCAT(users.first_name ,' ',users.last_name) as customer")])
                    ->join('users', 'users.id', '=', 'vouchers.user_id')
                    ->where(['validated'=>0])->get(),
        'url' => "view-voucher"
        ];
    }
    
    function getUnVerifiedEarnings(Request $request ){
        if($request->input('transaction_id') != NULL){
            CustomerTransactionsLog::where('id',$request->input('transaction_id'))->update([
                'pstatus_id' => 1
            ]);
        }
        return  [
         'column'=> [
                array(
                'label'=> 'receipt',
                'field'=> 'receipt'
                ),
                array(
                'label'=> 'Customer Name',
                'field'=> 'customer'
                ),
               array(
                'label' => 'Amount Spent',
                'field'=> 'amount_spent'
                ),
                array(
                'label' => 'Point Earned',
                'field'=> 'creds'
                ),
                array(
                'label'=> 'Redeeming Store',
                'field'=> 'store_name'
                ),
                array(
                'label'=> 'Date Created',
                'field'=> 'date'
                ),
                array(
                    'label'=> 'Action',
                    'field'=> 'action'
                )
        ], 
        'rows' => CustomerTransactionsLog::select([DB::raw(
                    "customer_transactions_log.id, 
                    receipt, amount_spent, 
                    creds, stores.store_name,
                    date(customer_transactions_log.created_at) as date, 
                    CONCAT(users.first_name ,' ',users.last_name) as customer"
                    )])
                    ->join('users', 'users.id', '=', 'customer_transactions_log.customer_id')
                    ->join('stores', 'stores.id', '=', 'customer_transactions_log.store_id')
                    ->where(['pstatus_id'=>0])->get(),
        'url' => "validate-earnings-transaction"
        ];
       
    }
    
    function getUnclaimedGiftcards($from = '', $to = ''){
        return  [
         'column'=> [
                array(
                'label'=> 'Title',
                'field'=> 'title'
                ),
                array(
                'label'=> 'Customer Name',
                'field'=> 'customer'
                ),
               array(
                'label' => 'Gift Card Value',
                'field'=> 'amount'
                ),
                array(
                'label' => 'Points Earned',
                'field'=> 'point'
                ),
                array(
                'label'=> 'Redeeming Vendor',
                'field'=> 'vendor'
                ),
                array(
                'label'=> 'Date Created',
                'field'=> 'date'
                ),
              /*   array(
                    'label'=> 'Action',
                    'field'=> 'action'
                ) */
        ], 
        'rows' => GiftCardTransactions::select([DB::raw(
                    "gift_cards_transactions.id,
                    title, amount,
                    point, gift_card_vendor.vendor,
                    date(gift_cards_transactions.created_at) as date,
                    CONCAT(users.first_name ,' ',users.last_name) as customer"
                    )])
                    ->join('users', 'users.id', '=', 'gift_cards_transactions.user_id')
                    ->join('gift_card_vendor', 'gift_card_vendor.id', '=', 'gift_cards_transactions.vendor_id')
                    ->where(['validated'=>0])->get(),
        'url' => "view-giftcard"
        ];
    }
    
    function getVTUProfits($from = '', $to = ''){
        return VtuLog::select([DB::raw(
                    "vtu_logs.request_type,
                    SUM(vtu_logs.`amount` * ((airtime_providers.`reward`/100)))  AS profit
                    "
                    )])
                    ->join('airtime_providers', 'airtime_providers.name', '=', 'vtu_logs.newtwork')
                    ->groupBy('request_type')
                    ->get();
    }
    
    
    
}
