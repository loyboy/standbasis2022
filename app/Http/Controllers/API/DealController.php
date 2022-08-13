<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\VtuLog;
use App\Models\DealTransactions;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Mail\GeneralEmails;
use Illuminate\Support\Facades\Mail;

class DealController extends Controller
{
    use ApiResponser;
    private $GET_CREDIT_URL = "http://132.145.231.191/VTUAPI/v4/getCredit";
    private $PLENTI_STORE = 61;

    public function index()
    {
        $deal = Deal::where('active', 1)->get();
        if (count($store)) {
            return $this->success('record found', $deal);
        }else{
            return $this->success('record not found', []);
        }
    }

    public function updateDealClaim(Request $request){
    
        $validator = Validator::make($request->all(), [
            'status' => 'required|integer',
            'id' => 'required|integer'
        ]);
        
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);        }

       $dealTransaction =  DealTransactions::where('id', $request->input('id'))->with('deal')->with('customer')->first(); 
       $reward = json_decode($dealTransaction->extra_info);       
       if(isset($reward->reward)){

            $mobile = $reward->number;
            $network = $reward->mobile_network;
            $amount = $reward->reward;
            
            $uniqueCode = "Airtime" . "-" . str_replace('-', "", date('Y-m-d')) . "-" . time() . "-" . unique_code(9);
            $mydata = json_encode(
                array(
                "username" => "tvioSolutions", "password" => "stuV232n!iI1", "amount" => $amount,
                "msisdn" =>  $mobile, "network" => $network, "requestId" => $uniqueCode
                )
            );
            $result1 = json_decode(httpPost($this->GET_CREDIT_URL , $mydata));
            //$result1 = json_decode('{"status":"Success","referenceID":"1515323579802","balance":"9703"}');
            if (isset($result1->status) && $result1->status== 'Failed') {                        
                return $this->error('Transaction failed, Kindly try again please', 400);
            }else{
                $dealTransaction->status = 1;
                if($dealTransaction->save()){
                    VtuLog::create([
                        'vtu_id' => 1,
                        'request' =>  $mydata,
                        'response' => json_encode($result1),
                        'request_type'=>"airtime",
                        'user_id' => $dealTransaction->deal->user_id,
                        'store_id'=> $this->PLENTI_STORE,
                        'amount' => $amount ,
                        'points_earn' => 0,
                        'newtwork' => $network,
                        'status' =>  $result1->status
                    ]);                    
                    $details = [
                        'subject' => "Deal Claim Reward",
                        'user' => $dealTransaction->customer->first_name,
                        'content' => "<p>
                                        Congratulations you have been rewarded with {$amount} {$network} recharge card for claiming 
                                        the deal {$dealTransaction->deal->title} </p>",
                        'cta_text' => "",
                        'cta_url' => "",
                    ];
                    Mail::to($dealTransaction->customer->email)->send(new GeneralEmails($details));
                    return $this->success('Updated deal claim status', true );                    
                }else{
                    VtuLog::create([
                        'vtu_id' => 1,
                        'request' =>  $mydata,
                        'response' => json_encode($result1),
                        'request_type'=>"airtime",
                        'user_id' => $dealTransaction->deal->user_id,
                        'store_id'=> $this->PLENTI_STORE,
                        'amount' => $amount ,
                        'points_earn' => 0,
                        'newtwork' => $network,
                        'status' => json_encode( $result1)
                    ]); 
                    return $this->error('Transaction failed, Kindly try again please', 400);
                }                   
            }
        }else{
            return $this->error('Invalid reward, Please contact admin', 400);
        }
   }

    public function triggerDealTransactionsUpdates(Request $request){
        $validator = Validator::make($request->all(), [
            'deal_id' => 'required|integer',
            'user_id' => 'required|integer',
            'merchant_id' => 'required|integer',
        ]);
        
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 400);
        }
        $dealTransaction = DealTransactions::where(['receipt_no'=>$request->receipt_no])->whereNotNull('receipt_no')->first();
        if( $dealTransaction  != null){
            return $this->error('This receipt has been used.',400 );
        }

        $dealTransaction = DealTransactions::where('user_id', $request->input('user_id'))->where('deal_id', $request->input('deal_id'))->where('merchant_id', $request->input('merchant_id'))->first();
        if(!$dealTransaction){
            $dealTransaction =  new DealTransactions;                
            $dealTransaction->deal_id = $request->deal_id;
            $dealTransaction->merchant_id = $request->merchant_id;            
            $dealTransaction->amount = $request->amount ? $request->amount : 0 ;           
            $dealTransaction->user_id = $request->user_id ;           
            $dealTransaction->timestamps = true;

            $dealTransaction->save();

            return $this->success('New deal transaction created',$dealTransaction);
        }else{
            if( $request->receipt_no != null ){
                if( $request->receipt_no != $dealTransaction->receipt_no){
                    $dealTransaction->receipt_no = $request->receipt_no;
                    $dealTransaction->store_id = $request->store_id;
                    $dealTransaction->impressions = $request->input('impressions'); 
                    $dealTransaction->amount = $request->amount ? $request->amount : 0 ;       
                    $dealTransaction->extra_info = $request->extra_info;
                    $response =  $dealTransaction->save();
                    if ($response == 1){ 
                        return $this->success('Updated deal Impression status', null );
                    }
                    else{
                        return $this->errorResponseWithoutData('Error while Updating deal Impression status',400 );
                    }
                }else{
                    return $this->errorResponseWithoutData('This receipt has been used.',400 );
                }
             }else{
                 return $this->success('Updated deal Impression status',$dealTransaction);
             }
            }
        }

    

   
}