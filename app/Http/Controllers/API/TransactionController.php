<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\DealTransactions;
use Illuminate\Database\Eloquent\Builder;
use App\Models\CustomerTransactionsLog;
use Illuminate\Support\Facades\Validator;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class TransactionController extends Controller
{
    use ApiResponser;

    public function get_transaction_by_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_trans = CustomerTransactionsLog::where('id',$request->id)->with("customer")->with("store")->first();

        if ($current_trans) {
            return $this->success('record found', $current_trans);
        } else {
            return $this->success('user not found');
        }
    }

    public function getDealTransactionById(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_trans = DealTransactions::where('id',$request->id)->with("customer")->with("store")->with("deal")->first();

        if ($current_trans) {
            return $this->success('record found', $current_trans);
        } else {
            return $this->success('user not found');
        }
    }

    public function dashboard(Request $request){
       
        $columns = ['id', 'amount_spent', 'point_deducted', 'commission','transactioncode', 'ctype', 'paid_for', 'deducted_by', 'deducted_date', 'created_at'];   
        $merchantId =  Auth::user()->merchant_id;
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

       /* $query = (Auth::user() == "merchant") ?
         CustomerTransactionsLog::where(["merchant_id" => $merchantId])->with("customer")->with("store") : 
         CustomerTransactionsLog::with("customer")->with("store");

         $query->whereHas('customer', function (Builder $queryBuilder) use ($merchant) {
             $queryBuilder->whereNotNull('id');
        });*/

        $query = CustomerTransactionsLog::with("customer")->with("store");

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
            "total_transactions"=>  ($merchantId) ? 
                                     CustomerTransactionsLog::where(["merchant_id" => $merchantId])->count() : 
                                     CustomerTransactionsLog::count(),
            "burn_transactions"=>  ($merchantId) ?  
                                     CustomerTransactionsLog::where(["merchant_id" => $merchantId, 'transaction'=> "burn"])->count():
                                     CustomerTransactionsLog::where(['transaction'=> "burn"])->count(),
            "earn_transactions"=> ($merchantId) ?  
                                   CustomerTransactionsLog::where(["merchant_id" => $merchantId, 'transaction'=> "earn"])->count():
                                   CustomerTransactionsLog::where(['transaction'=> "earn"])->count()
        ];

        $stats_merchants = [
            "total_transactions"=> CustomerTransactionsLog::where(["merchant_id" => $merchant])->count(),
            "burn_transactions"=>  CustomerTransactionsLog::where(['transaction'=> "burn", "merchant_id" => $merchant])->count(),
            "earn_transactions"=> CustomerTransactionsLog::where(['transaction'=> "earn", "merchant_id" => $merchant])->count()
        ];
        
        $logs = $query->orderBy("created_at", $dir)->paginate($length); 
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=> $merchant !== null ? $stats_merchants : $stats ];
    }

    public function dealsTransaction(Request $request){
        
        $columns = ['id', `amount`,'receipt_no','user_id','store_id'];   
        $merchantId =  Auth::user()->merchant_id;
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
        $merchant = $request->input('merchant'); 
        $deal = $request->input('deal'); 
        $claimed = $request->input('claimed'); 
        $impressions = $request->input('impressions'); 
        $receiptcode = $request->input('receiptcode'); 
        $views = $request->input('views'); 
    
       $query =  DealTransactions::with("customer")->with("store");
      /* $query = $query->whereHas('customer', function (Builder $queryBuilder) use ($merchant) {
                $queryBuilder->whereNotNull('id');
       });*/

        if ( Auth::user() == "merchant") {
            $query = $query->whereHas('store', function (Builder $queryBuilder) use ($merchant) {
                $queryBuilder->where('merchant_id', $merchant);
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
        
        if ($amount !== null && $amount !== ""){
            $query->where('amount', intval($amount) );
        }    

        if ($claimed !== null && $claimed !== ""){
            $query->where('status', intval($claimed));
        } 
        
        if ($impressions !== null && $impressions !== ""){
            $query->where('impressions', intval($impressions));
        } 

        if ($views !== null && $views !== ""){
            $query->where('viewed', intval($views));
        }
        
        if ($deal !== null && $deal !== ""){
            $query->where('deal_id', intval($deal)) ;
        }
        
        if ($receiptcode !== null && $receiptcode !== ""){
            $query->where('receipt_no', $receiptcode);
        }

        if ($dateFrom !== null  && $dateTo !== null ) {
            $query->whereBetween('created_at', [ date($dateFrom), date($dateTo) ]);
        }  

        if ($searchValue) {
            $query->where(function($queryBuilder) use ($searchValue) {
                $queryBuilder->where('receipt_no', 'like', '%' . $searchValue . '%')                   
                    ->orWhere('amount', '=', $searchValue );                    
            });
        }        
       
        $stats = [
            "total_views"=>  ($merchantId) ? 
                                    DealTransactions::where('viewed', 1)
                                    ->where('deal_id',  $deal)
                                    ->where('merchant_id', $merchantId)
                                    ->count(): 
                                    DealTransactions::where('viewed', 1) ->where('deal_id',  $deal)->count(),
            "total_impresions"=>  ($merchantId) ? 
                                    DealTransactions::where('impressions', 1)
                                    ->where('deal_id',  $deal)
                                    ->where('merchant_id', $merchantId)
                                   ->count(): 
                                    DealTransactions::where('impressions', 1)->where('deal_id',  $deal)->count(),
            "total_claimed"=>  ($merchantId) ?  
                                        DealTransactions::where(['status'=>1])
                                        ->where('deal_id',  $deal)
                                        ->where('impressions',  1)
                                        ->where('merchant_id', $merchantId)
                                        ->count():
                                        DealTransactions::where(['status'=>1])->where('deal_id',  $deal)->count(),
            "total_unclaimed"=> ($merchantId) ?  
                                        DealTransactions::where(['status'=>0])
                                        ->where('deal_id',  $deal)
                                        ->where('impressions',  1)
                                        ->count() :
                                    DealTransactions::where(['status'=>0])->where('deal_id',  $deal)->count()
        ];        
        $logs = $query->orderBy("created_at", $dir)->paginate($length); 
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=>  $stats ];
    
    }
}