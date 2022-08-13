<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\GiftCardTransactions;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class GiftCardController extends Controller
{
    use ApiResponser;
    private $VERIFIED = 1;
    private $UNVERIFIED = 0;

    public function get_giftcard_by_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_giftcard = GiftCardTransactions::where('id',$request->id)->with("user")->with("store")->first();

        if ($current_giftcard) {
            return $this->success('record found', $current_giftcard);
        } else {
            return $this->success('record not found');
        }
    }

    public function validate_giftcard(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'id' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $current_giftcard = GiftCardTransactions::where('id',$request->id)->update([ 'validated' => 1 ]);

        if ($current_giftcard === 1) {
            return $this->success('record updated', $current_giftcard);
        } else {
            return $this->success('record not found');
        }
    }

    public function dashboard(Request $request)
    {        
        $columns = ['id', 'title', 'amount','point','created_at'];   

        $length = $request->input('length');
        $column = $request->input('column'); //Index
        $dir = $request->input('dir');
        $searchValue = $request->input('search');
        $dateFrom = $request->input('dateFrom');
        $dateTo = $request->input('dateTo');
        
        $mobile = $request->input('mobile');

        $title = $request->input('title');
        $amount = $request->input('amount');
        $point = $request->input('point');        
        $store = $request->input('store');
        $validated = $request->input('validated');

        $query = GiftCardTransactions::with("user")->with("store");
       
        if ( $mobile !== null && $mobile !== "" ) {
            $query = $query->whereHas('user', function (Builder $queryBuilder) use ($mobile) {
                ($mobile) ? $queryBuilder->where('mobile', $mobile) : false;
            }); 
        }

        if ( $store !== null && $store !== "" ) {
            $query = $query->whereHas('store', function (Builder $queryBuilder) use ($store) {
                ($store) ? $queryBuilder->where('store_name', 'like', '%' . $store . '%') : false;
            });
        }
        
        if ($dateFrom && $dateTo) {
            $query->whereBetween('created_at', [ date($dateFrom), date($dateTo) ]);
        }        
        
        if ($title) {
            $query->where("title",$title);
        }

        if ($point) {
            $query->where("point",'>=',$point)->where("point",'<=',$point);
        }
        
        if ($validated) {
            $query->where("validated", intval($validated) );
        }

        if ($searchValue) {
            $query->where(function($query) use ($searchValue) {
                $query->where('title', 'like', '%' . $searchValue . '%')
                 ->orWhere('amount', 'like', '%' . $searchValue . '%');
            });
        }        
        $stats = [
            "total_gift_cards"=>  GiftCardTransactions::count(),
            "verified_gift_cards"=>  GiftCardTransactions::where(['validated'=>$this->VERIFIED])->count(),
            "unverified_gift_cards"=>  GiftCardTransactions::where(['validated'=>$this->UNVERIFIED ])->count(),
        ];
        
        $logs = $query->orderBy("created_at", $dir)->paginate($length);
        return ['data' => $logs, 'draw' => $request->input('draw'), 'stats'=>$stats];
    }

    function dashboardV1(Request $request){   
        try {
            $validator = Validator::make($request->all(),  [
                'mobileNumber' => 'regex:/^[a-zA-Z0-9_\-]*$/|required',
                'fromDate' => 'date|date_format:Y-m-d',
                'toDate' => 'date|date_format:Y-m-d|after:fromDate',             
                'giftTitle' => 'string',
                'giftAmount' => 'numeric',
                'giftPoint' => 'numeric',
                'giftExpiryDate' => 'date|date_format:Y-m-d',
                'storeName' => 'string',
                'storeWebsite' => 'string',
                'storeEmail' => 'string',
                'storeMobile' => 'numeric'
            ]);
 
            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            //datatable request
            $draw = 0; $limit_val = null;  $start_val = null; 

            $giftcards = array();
            $mobileNumber = $request->input('mobileNumber'); 
            $fromDate =  $toDate = $giftTitle = $giftAmount = $giftPoint = $giftExpiryDate = $storeName = $storeWebsite = $storeEmail = $storeMobile = null;
            $toDate = date('Y-m-d');
            $queryFilter = array();  $queryFilter2 = array(); 
            $allColumns = array(  
                array("label" => "Mobile", "field" => "user.mobile"),
                array("label" => "Title", "field" => "title"),
                array("label" => "Amount", "field" => "amount"),
                array("label" => "Point", "field" => "point"),
                array("label" => "Store Name", "field" => "store.store_name"),
                array("label" => "Store Email", "field" => "store.email")
            );

            $countItems = GiftCardTransactions::with("store")->with("user")->count();

            if ( $request->input('draw') != null ) {  $draw = $request->input('draw');  } 
            if ( $request->input('limit') != null ) { $limit_val = $request->input('limit'); }
            if ( $request->input('start') != null ) { $start_val = $request->input('start'); }

            if ( $request->input('giftTitle') != null ) { $giftTitle = $request->input('giftTitle'); $queryFilter['title'] = $giftTitle;  }
            if ( $request->input('giftAmount') != null ) { $giftAmount = $request->input('giftAmount'); $queryFilter['amount'] = $giftAmount; }
            if ( $request->input('giftPoint') != null ) { $giftPoint = $request->input('giftPoint'); $queryFilter['point'] = $giftPoint; }
            if ( $request->input('giftExpiryDate') != null ) { $giftExpiryDate = $request->input('giftExpiryDate'); $queryFilter['expires_on'] = date($giftExpiryDate);  }

            if ( $request->input('storeName') != null ) { $storeName = $request->input('storeName'); array_push($queryFilter2, [ 'store_name', 'like', '%'.$storeName.'%' ]);  }
            if ( $request->input('storeWebsite') != null ) { $storeWebsite = $request->input('storeWebsite');  array_push($queryFilter2, [ 'website', 'like', '%'.$storeWebsite.'%' ]); }
            if ( $request->input('storeEmail') != null ) { $storeEmail = $request->input('storeEmail'); array_push($queryFilter2, [ 'email', '=', $storeEmail ]); }
            if ( $request->input('storeMobile') != null ) { $storeMobile = $request->input('storeMobile'); array_push($queryFilter2, [ 'mobile', '=', $storeMobile ]);  }

            if ( $request->input('fromDate') != null ){
                $fromDate = date($request->input('fromDate'));
                
                if ( $request->input('toDate') != null ){
                    $toDate = date($request->input('toDate'));
                }

                if ( $request->input('mobileNumber') !== "all" ){

                    if ( count($queryFilter) > 0 && count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ]);

                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->where($queryFilter)->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];
                        
                    }
                    else if ( count($queryFilter) > 0 ){
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ]);

                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->where($queryFilter)->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];                        
                    }
                    else if ( count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ]);
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];                     
                        
                    }
                    else{
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ]);
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ]; 
                        
                    }

                }
                else{

                    if ( count($queryFilter) > 0 && count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ]);
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->where($queryFilter)->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];                       
                        
                    }
                    else if ( count($queryFilter) > 0 ){
                        $items = GiftCardTransactions::whereBetween('updated_at', [ $fromDate, $toDate ]);

                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->where($queryFilter)->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ]; 
                        
                    }
                    else if ( count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        })->whereBetween('updated_at', [ $fromDate, $toDate ]);

                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];                       
                        
                    }
                    else{
                        $items = GiftCardTransactions::whereBetween('updated_at', [ $fromDate, $toDate ]);

                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];  
                        
                    }                 

                }

            }
            
            else{

                if ( $request->input('mobileNumber') !== "all" ){

                    if ( count($queryFilter) > 0 && count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        });
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->where($queryFilter)->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ]; 
                        
                    }
                    else if ( count($queryFilter) > 0 ){
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        });
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->where($queryFilter)->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];  
                        
                    }
                    else if ( count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        })->whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        });
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];                        
                        
                    }
                    else{
                        $items = GiftCardTransactions::whereHas('user', function (Builder $query) use ($mobileNumber) {
                            $query->where('mobile', $mobileNumber); 
                        });
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ]; 
                        
                       
                    }

                }

                else{

                    if ( count($queryFilter) > 0 && count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        });
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->where($queryFilter)->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ]; 
                        
                    }
                    else if ( count($queryFilter) > 0 ){
                        $items = GiftCardTransactions::where($queryFilter);
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];                        
                        
                    }
                    else if ( count($queryFilter2) > 0 ){
                        $items = GiftCardTransactions::whereHas('store', function (Builder $query) use ($queryFilter2) {
                            $query->where( $queryFilter2 ); 
                        });
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("store")->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ]; 
                        
                    }
                    else{
                        $items = GiftCardTransactions::with("store");
                        
                        if ( $limit_val != null && $start_val != null){
                            $items = $items->offset($start_val)->limit($limit_val);
                        }

                        $items = $items->with("user")->get();

                        $giftcards = [
                            'columns'          => $allColumns,
                            "rows"             => $items->toArray()
                        ];                         
                        
                    }                 

                }
            }

           // return $this->success("Your search result(s)", ["results"=>$giftcards]);
           return json_encode($giftcards);

        }

        catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
		
       
    }
    
   
}
