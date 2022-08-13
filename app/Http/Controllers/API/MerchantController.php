<?php

namespace App\Http\Controllers\API;
use DB;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Models\User;
use App\Models\Merchant;
use App\Models\Deal;
use App\Models\Store;
use App\Models\Category;
use App\Traits\ChartPlots;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\CustomerTransactionsLog;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\verifyMerchantAccountmail;


class MerchantController extends Controller
{
    use ApiResponser;
    use ChartPlots;
    private $DEFAULT_MERCHANT = 1;
    private $STORE_ROLE = 3;
    private $MERCHANT_ROLE = 2;
    private $ACTIVE_STATUS = 1;
    private $PLENTI_COMMISION = 1;
    private $PLENTI_PROFIT = 1;
    private $PLENTI_CONSTANT = 1;
    private $DEFAULT_STATE = 25;
    private $DEFAULT_CITY = 769;  
    private $PLENTI_CUSTOMER_EARNINGS = 100;
    
     
    public function get_transaction_by_id(Request $request)
    {
        $validator = Validator::make($request->all(), ['id' => 'required|string']);            
        if ($validator->fails()) {return $this->error($validator->errors()->first(), 400);}
        $current_trans = CustomerTransactionsLog::where('id',$request->id)->with("customer")->with("store")->first();
        if ($current_trans) { return $this->success('record found', $current_trans);}else{return $this->success('user not found');}
    } 
    
    public function loginMerchant(Request $request)
    {     
        try {
           // $this->validateAdminLogin($request);
            $credentials = ['email' => $request->get('email'), 'password' =>$request->get('password')];         
            if (!Auth::attempt($credentials)) {
            return $this->errorResponse(null, 'Credentials mismatch', 400);
            }
            $user = $request->user();
            $user->cat_list = Category::get();
            $user->store_list = Store::get();
            $tokenResult = $user->createToken('plenti');
            $token = $tokenResult->token;
            if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
            $token->save();

            $success['access_token'] =  $tokenResult->accessToken;
            $success['token_type'] = 'Bearer';
            $success['expires_at'] = Carbon::parse(
            $tokenResult->token->expires_at
            )->toDateTimeString(); 
            return $this->token($this->getPersonalAccessToken(), 'Login successful');
        } catch (\Throwable $error) {
            return $error;
            return $this->errorResponse($error, 'Login failed', 422);
        }
    }

    public function dashboard(Request $request)
    {
        $dealDates =  explode(' to ', $request->dates);
        $from =  current($dealDates);
        $to =   last($dealDates);
        if(count($dealDates) != 2){
            $from = Date('Y-01-01');
            $to = Carbon::now()->toDateTimeString();
        } 
       $merchant =  Auth::user()->merchant_id;  
       $stats_merchants = [
           "total_transactions"=> CustomerTransactionsLog::where(["merchant_id" => $merchant])->count(),
           "total_stores"=>  Store::where(["merchant_id" => $merchant])->count(),
           "total_deals"=> Deal::where(["merchant_id" => $merchant])->count()           
       ];
       return ['stats'=> $stats_merchants , 'trend_charts' => $this->getTransactionTrends($from , $to,  $merchant)];
   }

   public function getStores(Request $request )
   {
        $merchatId =  Auth::user()->merchant_id;
        $columns = ['id', 'store_name','email', 'mobile','daalu_commision','daalu_profit','customers_earnings','status',"address",
        "contact_person_firstname",
        "contact_person_lastname",
        ]
        ;
        $length = $request->input('length');
        $column = $request->input('column'); 
        $dir = $request->input('dir');
        $searchValue = $request->input('search');
        $dateFrom = $request->input('dateFrom');
        $dateTo = $request->input('dateTo');
        $role = $request->input('role');

        $query = Store::select('id','store_name',  'email', 'mobile','daalu_commision','daalu_profit','customers_earnings','status', "address",
        "contact_person_firstname",
        "contact_person_lastname")
        ->where(["merchant_id"=>$merchatId ])->orderBy($columns[$column], $dir);

        if ($dateFrom && $dateTo) {$query->whereDate("created_at",'>=',$dateFrom)->whereDate("created_at",'<=',$dateTo);
        }       

        if ($searchValue) {
            $query->where(function($query) use ($searchValue) {
                if(strlen($searchValue) >7){
                    $query->where('mobile', 'like', '%' . $searchValue . '%');
                }
            });
        }    

        $logs = $query->paginate($length);
        return ['data' => $logs, 'draw' => $request->input('draw')];
   }
   
   public function verifyMerchant(Request $request){
       $userId = $this->encrypt_decrypt($request->input('token'),'decrypt');
       if($user = DB::table('users')->where('id',  $userId)->first()){
           DB::table('users')->where('id', $userId)->update(['verified' =>  $this->ACTIVE_STATUS]);
           return redirect()->away(url("verified")); 
       }else{
           return redirect()->away(url('not-authorized')); 
       }       
   }

   public function signupMerchant(Request $request)
   {
       try {
           $validator = Validator::make($request->all(), [
               'first_name' => 'required|string',
               'last_name' => 'required|string',
               'mobile' => 'required|string|unique:users',
               'email' => 'required|string|email|max:255|unique:users',
               'password' => 'required|string|min:8',
               'address' => 'required|string'
           ]);
           if ($validator->fails()) {return $this->error($validator->errors()->first(), 400);}           
           $fakeCardGenerator = random_int(10000000000, 99999999999);  
           $user = User::create([
               'first_name' => $request->first_name,
               'last_name' =>  $request->last_name,
               'email' => $request->email,
               'role' => 'merchant',
               'username' => strtolower($request->first_name . '.' . $request->last_name),
               'password' => Hash::make($request->password),
               'mobile' => $request->mobile,
               'dob' => date('Y-m-d'),
               'gender' => "all",
               'refferal_code' => $request->mobile,
               'state' => $this->DEFAULT_STATE,
               'city' => $this->DEFAULT_CITY,
               'last_active' => $this->ACTIVE_STATUS,
               'status' => $this->ACTIVE_STATUS,
               'role_id' => $this->STORE_ROLE,
               'platform' => 'fillcart',
               'verified' => false
           ]);
           $merchant = Merchant::create([
               'contact_first_name' => $request->first_name,
               'contact_last_name' => $request->last_name,
               'job_title' => 'Manager',
               'contact_email' => $request->email,
               'contact_phone' => $request->mobile,
               'user_id' => $user->id,
               'merchant_name' => ($request->company_name) ? $request->company_name: strtolower($request->first_name . '.' . $request->last_name),
               'address' => $request->address               
           ]);
           $token = $this->encrypt_decrypt($user->id, 'encrypt')."#Pty".$this->gen_uid(100000);           
           $user->verify_code = $token ;
           $user->merchant_id = $merchant->id;
           $user->save();
           $details = [
               'title' => 'Verify Email Address',
               'token' => url("api/v1/verify-account?token=".$token)
           ];
           Mail::to($user->email)->send(new verifyMerchantAccountmail($details));
           Auth::attempt(['email' => $request->email, 'password' => $request->password]);
           return $this->token($this->getPersonalAccessToken(), 'We have sent you a mail to verify your email', 201);

       } catch (\Throwable $th) {        
          return $this->error($th->getMessage(), 500);
       }
   } 
 
   public function signupStore(Request $request)
   {
    try {
           $validator = Validator::make($request->all(), [
               'store_name' => 'required|string',
               'address' => 'required|string',
               'mobile' => 'required|string',
               'email' => 'required|string|email|max:255',
               'password' => 'required|string|min:8',
               'contact_person_firstname' => 'required|string',
               'contact_person_lastname' => 'required|string',
               'address' => 'required|string'
           ]); 
           if ($validator->fails()) {return $this->error($validator->errors()->first(), 400);} 
        
            $store = Store::find($request->id);
            if(!$store){
                $store =  new Store;
            } 
         
            $store->contact_person_firstname = $request->contact_person_firstname;
            $store->contact_person_lastname =  $request->contact_person_lastname;
            $store->store_name = $request->store_name;              
            $store->email = $request->email;              
            $store->mobile = $request->mobile;              
            $store->merchant_id = Auth::user()->merchant_id;              
            $store->user_id = Auth::id();              
            $store->state_id = $this->DEFAULT_STATE;
            $store->city_id = $this->DEFAULT_CITY;
            $store->address = $request->address;
            $store->daalu_commision = $this->PLENTI_COMMISION;
            $store->daalu_profit = $this->PLENTI_PROFIT;
            $store->daalu_constant = $this->PLENTI_CONSTANT;
            $store->customers_earnings = $this->PLENTI_CUSTOMER_EARNINGS;
            $store->status = $this->ACTIVE_STATUS;
             
            $store->save();

            return $this->success('Store was created successfully', $store);
       } catch (\Throwable $th) {        
          return $this->error($th->getMessage(), 500);
       }
   }


}