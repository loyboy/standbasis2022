<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Deal;
use App\Models\Store;
use App\Traits\ApiResponser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;

class SurgeController extends Controller
{
    use ApiResponser;

    public function login(Request $request)
    {
          $validator = Validator::make($request->all(), [
                'username' => 'required|string',
                'password' => 'required|string',
        ]);
        
        if ($validator->fails()) {
            
            return $this->error($validator->errors()->first(), 400);
        }
        
        $vlCascade = DB::table('tbl__temp_viralload_cascade')->select(DB::raw( 
        'state,
          SUM(onart) AS onart,
          SUM(eligible) AS eligible,
          ROUND(((SUM(eligible) / SUM(onart)) * 100),0) AS percentage_eligible,
          SUM(Sample_collected) AS sample_collected,
          ROUND(((SUM(Sample_collected) / SUM(eligible)) * 100),0) AS percentage_sample_collected,
          SUM(vl_result) AS vl_result,
          ROUND(((SUM(vl_result) / SUM(Sample_collected)) * 100),0) AS percentage_vl_result,
          SUM(supressed) AS supressed,
          ROUND(((SUM(supressed) / SUM(vl_result)) * 100),0) AS percentage_supressed'))->where(["state"=>$request->username])->groupBy('state')->first();
          
        $vlCascadeChat = DB::table('tbl__temp_viralload_cascade')->select(DB::raw('*'))
        ->where(["state"=>$request->username])->groupBy('state')->groupBy('lga')->orderBy('onart', 'DESC')->get();
        
        $txCurr = DB::table('tbl__temp_viralload_cascade')->select(DB::raw('state, SUM(onart) AS active'))->where(["state"=>$request->username])->groupBy('state')->first();
           
        $targetAchievmentByLGA = DB::table('target_txnew_achievment')->select(DB::raw('*'))
        ->where(["state"=>$request->username])->groupBy('lga')->get();
           
        $targetTXNewAchievmentByState = DB::table('target_txnew_achievment')->select(DB::raw('
            SUM(target_tx_new)  AS target_tx_new , 
            SUM(tx_new_achievement) AS tx_new_achievement            '
            ))
        ->where(["state"=>$request->username])->first();
        
          $targetTXCurrAchievmentByState = DB::table('target_achievment')->select(DB::raw('
            SUM(target_tx_curr)  AS target_tx_curr , 
            SUM(tx_curr_achievement) AS tx_curr_achievement '
            ))
        ->where(["state"=>$request->username])->first();
        
        $numbersToReach = DB::table('target_achievment')->select(DB::raw('
        (SUM(target_tx_curr) - SUM(tx_curr_achievement)) AS numbers_to_reach  , 
        ROUND((SUM(tx_curr_achievement)/ SUM(target_tx_curr)) * 100,1) AS percentage'
            ))
        ->where(["state"=>$request->username])->first();
        
        
        $facility= DB::table('tbl__temp_viralload_cascade')->select(DB::raw('state, COUNT(*) AS facilities  , DATEDIFF( "2022-09-30", NOW()) days_to_end_of_year'))
        ->where(["state"=>$request->username])->first();
        
         $retension= DB::table('retention')->select(DB::raw('*'))
        ->where(["state"=>$request->username])->first();

        $response =[
            'vlCascade' => $vlCascade,
            'vlCascadeChat' => $vlCascadeChat,
            'txCurr' => $txCurr,
            'targetTXNewAchievmentByState' =>  $targetTXNewAchievmentByState,
            'targetTXCurrAchievmentByState' =>  $targetTXCurrAchievmentByState,
            'targetAchievmentByLGA' =>  $targetAchievmentByLGA,
            'numbersToReach' =>  $numbersToReach,
            'facility' =>  $facility,
            'retension' =>  $retension
        ];
        return $this->success('record found', $response);

    }
    
    public function adminsLogin(Request $request)
    {
         
     
          $validator = Validator::make($request->all(), [
                'email' => 'required|string',
                'password' => 'required|string',
        ]);
        
        if ($validator->fails()) {
            
            return $this->error($validator->errors()->first(), 400);
        }
        
       $user = DB::table('my_users')
        ->where(["email"=>$request->email])->first();
        
        $vlCascade = DB::table('tbl__temp_viralload_cascade')->select(DB::raw( 
        'state,
          SUM(onart) AS onart,
          SUM(eligible) AS eligible,
          ROUND(((SUM(eligible) / SUM(onart)) * 100),0) AS percentage_eligible,
          SUM(Sample_collected) AS sample_collected,
          ROUND(((SUM(Sample_collected) / SUM(eligible)) * 100),0) AS percentage_sample_collected,
          SUM(vl_result) AS vl_result,
          ROUND(((SUM(vl_result) / SUM(Sample_collected)) * 100),0) AS percentage_vl_result,
          SUM(supressed) AS supressed,
          ROUND(((SUM(supressed) / SUM(vl_result)) * 100),0) AS percentage_supressed'))->where(["state"=>$user->state])->groupBy('state')->first();
          
        $vlCascadeChat = DB::table('tbl__temp_viralload_cascade')->select(DB::raw('*'))
        ->where(["state"=>$user->state])->groupBy('state')->groupBy('lga')->orderBy('onart', 'DESC')->get();
        
        $txCurr = DB::table('tbl__temp_viralload_cascade')->select(DB::raw('state, SUM(onart) AS active'))->where(["state"=>$user->state])->groupBy('state')->first();
           
        $targetAchievmentByLGA = DB::table('target_txnew_achievment')->select(DB::raw('*'))
        ->where(["state"=>$user->state])->groupBy('lga')->get();
           
        $targetTXNewAchievmentByState = DB::table('target_txnew_achievment')->select(DB::raw('
            SUM(target_tx_new)  AS target_tx_new , 
            SUM(tx_new_achievement) AS tx_new_achievement            '
            ))
        ->where(["state"=>$user->state])->first();
        
          $targetTXCurrAchievmentByState = DB::table('target_achievment')->select(DB::raw('
            SUM(target_tx_curr)  AS target_tx_curr , 
            SUM(tx_curr_achievement) AS tx_curr_achievement '
            ))
        ->where(["state"=>$user->state])->first();
        
        $numbersToReach = DB::table('target_achievment')->select(DB::raw('
        (SUM(target_tx_curr) - SUM(tx_curr_achievement)) AS numbers_to_reach  , 
        ROUND((SUM(tx_curr_achievement)/ SUM(target_tx_curr)) * 100) AS percentage'
            ))
        ->where(["state"=>$user->state])->first();
        
        
        $facility= DB::table('tbl__temp_viralload_cascade')->select(DB::raw('state, COUNT(*) AS facilities  , DATEDIFF( "2022-09-30", NOW()) days_to_end_of_year'))
        ->where(["state"=>$user->state])->first();
        
         $retension= DB::table('retention')->select(DB::raw('*'))
        ->where(["state"=>$user->state])->first();

        $response =[
            'vlCascade' => $vlCascade,
            'vlCascadeChat' => $vlCascadeChat,
            'txCurr' => $txCurr,
            'targetTXNewAchievmentByState' =>  $targetTXNewAchievmentByState,
            'targetTXCurrAchievmentByState' =>  $targetTXCurrAchievmentByState,
            'targetAchievmentByLGA' =>  $targetAchievmentByLGA,
            'numbersToReach' =>  $numbersToReach,
            'facility' =>  $facility,
            'retension' =>  $retension,
            'user'=>   $user
        ];
        return $this->success('record found', $response);

    }
    
    
   
}
