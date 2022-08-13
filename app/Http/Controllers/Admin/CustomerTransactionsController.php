<?php

namespace App\Http\Controllers\Admin;

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
use App\Models\TranStats;
use App\Classes\DeleteCrud;

class CustomerTransactionsController extends Controller
{
    public function __construct()
    { }

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

    function getTopEarnByStore($merchantId = null)
    {   
        $i = 0;
        $series = []; 
        $storeData = [];

        $stores = Store::where('merchant_id', 1)->get();
        foreach($stores as $store){
            $j = 0;
            $totalY = 0;
            $drillData = [];
            $storeData['parentData'][$i]['name'] = $store->store_name;
            $topEarns = DB::select('call getTopEarnByStore(?)',array($store->id));  
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

    function getAllMonth(){
        $i = (int) date('m');
         $j = 0;
         while ($j < $i) {
             $ym = @date('F', strtotime(date('Y-01-01') . " +".$j++ ."month"));
             $yms [] = $ym;
         }
         return $yms;
     }

    function getTransactionTrends($merchantId = null, $dateInterval=null)
    {
        $result = [];  
        $items = []; 
        $months =  DB::select('call   getTransactionTrends');         
        foreach($months as  $key => $month){   
            $result['stores'][]  =  $month->store_name; 
        }
        $result['months']  =  $this->getAllMonth();  
        $result['stores'] = array_unique($result['stores']);
       foreach($result['stores'] as $store){
            $items[$store] = collect($months)->filter(function ($item)  use ( $store)
            {
                return $item->store_name == $store;
            });
        }
        
        $store = [];
        $i = 0;
       foreach($items as  $key =>$item){
            $data = [];
           foreach($item as $it){
                $data[$it->months] = $it->transactions;
            }
         if(count($data) ==  count($result['months'])){
            $store[$key] = $data;
         }else{
            $data2 = [];
            foreach($result['months'] as $mnths){
                if(isset($data[$mnths])){
                    $data2[$mnths] = $data[$mnths];
                }else{
                    $data2[$mnths] = 0;
                }
            }
            $store[$key] = $data2;
         }
         $i++;
       }
       $plots = [];
       $i = 0;
       foreach( $store as  $key => $str){
        $plots[$i]['name'] = $key;
        $plots[$i]['data'] = array_values($str);
        $i++;
       }
        $result['plots']  =  $plots;  
        return $result;    
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
    
}
