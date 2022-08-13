<?php

namespace App\Traits;

use Carbon\Carbon;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Auth;

trait ChartPlots
{
    
    protected function getAllMonth(){
        $i = (int) date('m');
        $j = 0;
        while ($j < $i) {
            $ym = @date('F', strtotime(date('Y-01-01') . " +".$j++ ."month"));
            $yms [] = $ym;
        }
        return $yms;
    }

    protected function getTransactionTrends($from , $to,  $merchant = 1 )
    {
        $result = [];  
        $items = []; 

        $months = DB::select('call getTransactionTrends(?, ?,?)',array($merchant, $from,$to));  
        if($months){
            foreach($months as  $key => $month){   
            $result['stores'][]  =  $month->store_name; 
        }

        $result['months']  =  $this->getAllMonth();  
        $result['stores'] = array_unique($result['stores']);
        foreach($result['stores'] as $store){
            $items[$store] = collect($months)->filter(function ($item)  use ( $store){
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
        } else{
            return $result;  
        }       
    }
}