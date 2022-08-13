<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PlentiUser;
use App\Models\Merchant;
use App\Models\State;
use App\Models\City;
use App\Models\Store;
use App\Models\Category;
use App\Traits\ApiResponser;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Kreait\Laravel\Firebase\Facades\Firebase;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Database;


class AppController extends Controller
{
    use ApiResponser;
    private $firestore  =  null;
    private $settings =  null;

    public function __construct()
    {}    
 
    public function getSettings()
    {
        $settings = PlentiUser::where(['username' => "plentiadmin"])->with('store')->orderBy('id', "desc")->first(); 
        $state = State::get(); 
        $city = City::get(); 
        $banners = [
                    'https://plenti.africa/ads/banner1.jpg',
                    'https://plenti.africa/ads/banner2.jpg',
                    'https://plenti.africa/ads/banner3.jpg'
                  ]; 
        if ($settings != null) {
            $appSettings['settings'] = $settings;
            $appSettings['state'] = $state;
            $appSettings['city'] = $city;           
            $appSettings['vtu'] = $this->airtimeOperators();           
            $appSettings['categories'] = Category::get();
            $appSettings['merchant'] = Merchant::Where(['status_id'=>1])->with('store')->get();
            $appSettings['stores_list'] = Store::Where(['status'=>1])->orderBy('merchant_id' , 'asc')->get();
            $appSettings['banners'] = $banners;
            $appSettings['base_url'] = \URL::to('/');
           // $appSettings['pay_stack_secret'] = "sk_test_e2099d42168060418b12dc35a27704061d6c5018";
            $appSettings['pay_stack_secret'] = "sk_live_de7a4270c715949b749ecc704c7839eb4b100c61";            
            return $this->success('record found', $appSettings);
        } else {
            return $this->success('record not found');
        }
    }

    public function airtimeOperators()
    {
        $plans = [];
        $operators = DB::table('airtime_providers')->get()->toArray();
        $airTimePlans = DB::table('airtime_options')->get()->toArray();   
        foreach ($operators as $key => $operator) {
            $operators[$key]->dataPlans =  DB::table('data_options')->where(["operator" => $operator->name])->get()->toArray();
            $operators[$key]->plans = $airTimePlans;
        }
        return $operators;
    }

}
