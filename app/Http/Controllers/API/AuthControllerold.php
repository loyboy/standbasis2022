<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\verifyAccountmail;
use App\Mail\PointCreditMail;
use App\Mail\WalkingCustomerMail;
use App\Mail\GeneralEmails;
use App\Models\User;
use App\Models\UserData;
use App\Models\Voucher;
use App\Models\Card;
use App\Models\GiftCardTransactions;
use App\Models\DealTransactions;
use App\Models\TranStats;
use App\Models\GiftCards;
use App\Models\Transaction;
use App\Models\CustomerTransactionsLog;
use App\Notifications\GeneralNotification;
use App\Traits\ApiResponser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Passport;
use Spatie\Newsletter\Newsletter;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    use ApiResponser;
    private $DEFAULT_STATE = 25;
    private $DEFAULT_CITY = 769;

    public function login(Request $request)
    {
      
        try {
            $this->validateLogin($request);
            if (is_numeric($request->get('mobile'))) {
                $credentials = ['mobile' => $request->get('mobile'), 'password' =>$request->get('password')];
            } else {
               $credentials = $request->only($this->username(), 'password');
            }
         
            if (!Auth::attempt($credentials)) {
                return $this->errorResponse(null, 'Credentials mismatch', 400);
            }
            $user = $request->user();
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
            return $this->errorResponse($error, 'Login failed', 422);
        }
    }

    public function loginwithpin(Request $request)
    {
       
        try {
            $validator = Validator::make($request->all(), [
                'mobile' => 'required|string',
                'pin' => 'required|string',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $user = User::where('mobile', $request->input('mobile')) ->where('trans_pin', Hash::check($request->pin, 'trans_pin'))
                ->with("transStat")->with("card")
                ->first();
                
            if (Hash::check($request->pin, $user->trans_pin)) {
                $tokenResult = $user->createToken('plenti');
                $token = $tokenResult->token;
                return $this->successResponseV2(['access_token' => $tokenResult->accessToken, 'token_type' => 'Bearer', 'user' => $user], "Login successful");
            } else {
                return $this->errorResponse(null, 'Credentials mismatch', 400);
            }
        
           
        } catch (\Throwable $error) {
            return $this->errorResponse($error, 'Login failed', 422);
        }
    }

    public function getPersonalAccessToken()
    {
        if (request()->remember_me === 'true')
            Passport::personalAccessTokensExpireIn(now()->addMonths(6));

        return Auth::user()->createToken('plenti');
    }

    //allow login with username
    public function username()
    {
        return 'email';
    }

    public function signup(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'mobile' => 'required|string|unique:users',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:4|confirmed',
                'dob' => 'required',
                'gender' => 'required',
                'state' => 'required',
                'city' => 'required',
            ]);

            if ($validator->fails()) {
            
                return $this->error($validator->errors()->first(), 400);
            }

            $token = random_int(1000, 9999);
            $fakeCardGenerator = random_int(10000000000, 99999999999);
       

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'role' => 'user',
                'username' => strtolower($request->first_name . '.' . $request->last_name),
                'password' => Hash::make($request->password),
                'mobile' => $request->mobile,
                'dob' => $request->dob,
                'gender' => $request->gender,
                'refferal_code' => $request->refferal_code,
                'state' => $request->state,
                'city' => $request->city,
                'last_active' => 1,
                'status' => 1,
                'verify_code' => Hash::make($token),
                'role_id' => 5,
                'platform' => 'fillcart',
                'verified' => false
            ]);

            if ($user) {
                $lastCard = Card::orderBy('created_at', 'desc')->first();
                 $card = Card::create([
                        'card' => ($lastCard != null) ? $lastCard->card + 2 :$fakeCardGenerator,
                        'customer_id' =>  $user->id,
                        'active' => 1,
                        'total_transaction' => 0
                        ]);
                        
                 $transStat = TranStats::create([
                        'customer_id' =>  $user->id,
                        'earn_point' =>  0,
                        'burn_point' => 0,
                        'total_transaction' => 0,
                        'customer_balance'=>0
                        ]);

                 $details = [
                    'title' => 'Verify Email Address',
                    'token' => $token
                ];

                Mail::to($user->email)->send(new verifyAccountmail($details));

                Auth::attempt(['email' => $request->email, 'password' => $request->password]);

                return $this->token($this->getPersonalAccessToken(), 'We have sent you a mail to verify your email', 201);
            }
        } catch (\Throwable $th) {
         
           return $this->error($th->getMessage(), 500);
        }
    }

    public function signupMerchant(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'full_name' => 'required|string',
                'mobile' => 'required|string|unique:users',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
                'address' => 'required|string'
            ]);

            if ($validator->fails()) {
            
                return $this->error($validator->errors()->first(), 400);
            }

            $token = random_int(1000, 9999);
            $fakeCardGenerator = random_int(10000000000, 99999999999);
       

            $user = User::create([
                'first_name' => $request->full_name,
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
                'last_active' => 1,
                'status' => 1,
                'verify_code' => Hash::make($token),
                'role_id' => 5,
                'platform' => 'fillcart',
                'verified' => false
            ]);
            Mail::to($user->email)->send(new verifyAccountmail($details));

            Auth::attempt(['email' => $request->email, 'password' => $request->password]);

            return $this->token($this->getPersonalAccessToken(), 'We have sent you a mail to verify your email', 201);

        } catch (\Throwable $th) {
         
           return $this->error($th->getMessage(), 500);
        }
    }
    
    public function RegisterWalkInCustomer(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'mobile' => 'required|string|unique:users',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:4|confirmed',
                'dob' => 'required',
                'gender' => 'required',
            ]);

            if ($validator->fails()) {
            
                return $this->error($validator->errors()->first(), 400);
            }

            $token = random_int(1000, 9999);
            $fakeCardGenerator = random_int(10000000000, 99999999999);
       

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'role' => 'user',
                'username' => strtolower($request->first_name . '.' . $request->last_name),
                'password' => Hash::make($request->password),
                'mobile' => $request->mobile,
                'dob' => $request->dob,
                'gender' => $request->gender,
                'last_active' => 1,
                'status' => 1,
                'verify_code' => Hash::make($token),
                'role_id' => 5,
                'platform' => 'fillcart',
                'verified' => false
            ]);

            if ($user) {
                $lastCard = Card::orderBy('created_at', 'desc')->first();
                 $card = Card::create([
                        'card' => ($lastCard != null) ? $lastCard->card + 2 :$fakeCardGenerator,
                        'customer_id' =>  $user->id,
                        'active' => 1,
                        'total_transaction' => 0
                        ]);
                        
                 $transStat = TranStats::create([
                        'customer_id' =>  $user->id,
                        'earn_point' =>  0,
                        'burn_point' => 0,
                        'total_transaction' => 0,
                        'customer_balance'=>0
                        ]);

                 $details = [
                    'title' => 'Plenti Account Creation',
                    'token' => $token
                ];

                Mail::to($user->email)->send(new WalkingCustomerMail($details));

                Auth::attempt(['email' => $request->email, 'password' => $request->password]);

                return $this->token($this->getPersonalAccessToken(), 'customer account created sucessfully', 201);
            }
        } catch (\Throwable $th) {
         
           return $this->error($th->getMessage(), 500);
        }
    }
    
    public function reSendVerificationCode(Request $request){
        
        $validator = Validator::make($request->all(), [
                'mobile' => 'required|string',
                'email' => 'required|string',
            ]);
            
        if ($validator->fails()) {
            
                return $this->error($validator->errors()->first(), 400);
        }
        
        $token = random_int(1000, 9999);
        User::where('mobile',$request->input('mobile'))->update([
         'verify_code' => Hash::make($token)
        ]);
        
        $details = [
            'title' => 'Verify Email Address',
            'token' => $token
        ];
        
        Mail::to($request->input('email'))->send(new verifyAccountmail($details));
        
        return $this->success('Verification code  resent');
    }
    
    public function onBoardExistingMemebers(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'mobile' => 'required|string',
                'email' => 'required|string|email|max:255',
                'password' => 'required|string|min:4',
                'dob' => 'required',
                'state' => 'required',
                'city' => 'required',
                'gender' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $token = random_int(1000, 9999);
            $fakeCardGenerator = random_int(10000000000, 99999999999);
            
            $user = User::where('mobile', $request->input('mobile'))
              ->orwhere('email', $request->email)->with("transStat")->with("card")
                ->first();
                
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->mobile = $request->mobile;
            $user->email = $request->email;
            $user->gender = $request->gender;
            $user->dob = $request->dob;
            $user->state = $request->state;
            $user->city = $request->city;
            $user->verified = false;
            $user->platform = "fillcart";
            $user->verify_code = Hash::make($token);
            $user->role_id = 5;
            $user->status = 0;
            $user->last_active = 0;
            $user->role = "user";           

            if ($user->save()) {
                $details = [
                    'title' => 'Verify Email Address',
                    'token' => $token
                ];

                Mail::to($user->email)->send(new verifyAccountmail($details));
                
                
                if (is_numeric($request->get('mobile'))) {
                    $credentials = ['mobile' => $request->get('mobile'), 'password' =>$request->get('password')];
                } else {
                   return $credentials = $request->only($this->username(), 'password');
                }
                
                if (!Auth::attempt($credentials)) {
                    return $this->errorResponse(null, 'Credentials mismatch', 400);
                }
                
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
                
                return $this->token($this->getPersonalAccessToken(), 'We have sent you a mail to verify your email',201);
                }
       


        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }
    
    public function userTransactions()
    {
        $customerTransactionsLog = CustomerTransactionsLog::Where(['customer_id'=> Auth::id()])
        ->take(10)->orderBy('id', 'DESC')->get(
            ['ref',
            'amount_spent',
            'creds',
            'transaction',
            'entry',
            'created_at'
            ]
            ); 
        if ($customerTransactionsLog) {
            return $this->success('record found', $customerTransactionsLog);
        } else {
            return $this->success('No transactions yet');
        }
    }
    
     public function giftCards()
    {
        $giftCards = GiftCards::take(10)->orderBy('id', 'DESC')->get(); 
        if ($giftCards) {
            return $this->success('record found', $giftCards);
        } else {
            return $this->success('No transactions yet');
        }
    }

    public function user()
    {
        $current_user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
        if ($current_user) {
            return $this->success('record found', $current_user);
        } else {
            return $this->success('user not found');
        }
    }

    public function logout()
    {
        // auth()->user()->tokens()->delete();
        Auth::user()->token()->revoke();
        return $this->success('User Logged Out', 200);
    }

    public function validateLogin($request)
    {
      
        return $request->validate([
            'mobile' => 'required|string|max:255',
            'password' => 'required|string|min:4',
        ]);
    }

    public function changePassword(Request $request)
    {
        if (!(Hash::check($request->get('current_password'), Auth::user()->password))) {
            return $this->error('Current password does not matches with the password you provided.', 400);
        }

        if (strcmp($request->get('current_password'), $request->get('password')) == 0) { //Current password and new password are same
            return $this->error('New Password cannot be same as your current password. Please choose a different password.', 400);
        }

        try {
            $validator = Validator::make($request->all(), [
                'current_password' => 'required',
                'password' => 'required|string|min:8|confirmed'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            //Change Password
            $user = Auth::user();
            $user->password = Hash::make($request->get('password'));
            $user->save();

            //notify user
            $details = [
                'subject' => "Password Update Notification",
                 'user' => $user->first_name,
                'content' => "<p>You've received this email because your account password just got updated.  If this was you, you can ignore this alert. </p>
                <p>However, if you did not authorize the password change, please change your password now  or contact admin at  09041110904 </p>",
                'cta_text' => "Reset your Password Now",
                'cta_url' => env('FRONT_URL') . '/change-password',
            ];
            Mail::to($user->email)->send(new GeneralEmails($details));

            return $this->success('Password changed successfully', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }
    
    
    public function changePin(Request $request)
    {
    /*    if (!(Hash::check($request->get('current_password'), Auth::user()->password))) {
            return $this->error('Current password does not matches with the password you provided.', 400);
        }*/

        if (strcmp($request->get('current_pin'), $request->get('pin')) == 0) { //Current password and new password are same
            return $this->error('New pin cannot be same as your current pin. Please choose a different pin.', 400);
        }

        try {
            $validator = Validator::make($request->all(), [
                'current_pin' => 'required',
                'pin' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            //Change Password
            $user = Auth::user();
            $user->trans_pin = Hash::make($request->get('pin'));
            $user->save();

            //notify user
            $details = [
                'subject' => "PIN Update Notification",
                'user' => $user->first_name,
                'content' => "<p>You've received this email because your account pin just got updated. If this was you, you can ignore this alert.</p><p>However, 
                if you did not authorize the pin change, Please login into your app to reset your pin or contact admin at  09041110904</p>",
            ];
            Mail::to($user->email)->send(new GeneralEmails($details));
            return $this->success('Pin changed successfully', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    public function verify_pin(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'pin' => 'required|string'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            if (!(Hash::check($request->get('pin'), Auth::user()->verify_code))) {
                return $this->error('Invalid Verification code', 400);
            }

            User::where('id', Auth::id())->update([
                'email_verified_at' => Carbon::now(),
                'verified' => true,
                'verify_code' => null
            ]);

            return $this->success('Account successfully verified', Auth::user());
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    public function verify_transpin(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'pin' => 'required|string'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            if (!(Hash::check($request->get('pin'), Auth::user()->pin))) {
                return $this->error('Invalid transaction pin', 400);
            }

            return $this->success('Success', Auth::user());
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    public function create_pin(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'pin' => 'required|string|max:4',
                'current_password' => 'required',
                'password' => 'required|string|min:8|confirmed'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }
            $user = Auth::user();
            $user->pin = Hash::make($request->get('pin'));
            $user->password = Hash::make($request->get('current_password'));
            $user->save();
            return $this->success('Account updated successfully', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    public function trans_pin(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'pin' => 'required|string|max:4',
                'current_password' => 'required',
                'password' => 'required|string|min:4|current_password'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            $user = Auth::user();
            $user->trans_pin = Hash::make($request->get('pin'));
            $user->password = Hash::make($request->get('current_password'));
            $user->save();
           
            return $this->success('Account pin and password created successfully', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function user_update(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'mobile' => 'required|string',
                'state' => 'required|string',
                'city' => 'required|string'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 422);
            }

            $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->mobile = $request->mobile;
            $user->state = $request->state;
            $user->city = $request->city;
            $user->gender = $request->gender;
            $user->dob = $request->dob;
            $user->address = $request->address;
            if ($user->save()) {
                //notify user
                $details = [
                'subject' => "PIN Update Notification",
                 'user' => $user->first_name,
                'content' => "<p>You've received this email because your account details just got updated. If this was you, you can ignore this alert.</p><p>However, 
                 if you did not authorize the pin change, Please login into your app to reset your pin or contact admin at  09041110904</p>",
                ];
                Mail::to($user->email)->send(new GeneralEmails($details));
                return $this->success('Profile Update successful',["user"=>$user]);
            }
            
            
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }
    
    function earnPoints(Request $request)
    {   
      $validator = Validator::make($request->all(),  [
            'amount' => 'required|max:255',
            'store_id' => 'required|max:255',
            'customer_id' => 'required',
            'receipt' => 'required',
          //  'data' => 'required',
            ]);
        $isGiftCard = (isset($request->isGiftCard)) ? $request->isGiftCard : false;  
        $isDeal = (isset($request->isDeals)) ? $request->isDeals : false; 
        
        $recieptType =  '';
        $receipt = explode('-', $request->receipt);
        if(in_array('Deals' , $receipt)){
            $recieptType =  'Mobile-Deals';
        }
        
        if(in_array('GiftCards' , $receipt)){
            $recieptType =  'Mobile-GiftCards';
        }
        
        if(in_array('QR' , $receipt)){
            $recieptType =  'Mobile-QR';
        }
        
        if(in_array('Manual' , $receipt)){
            $recieptType =  'Mobile-Manual';
        }
    

		$data = [];  
        $response = []; 
            $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
            $customerTransactionsLog = CustomerTransactionsLog::Where(['receipt'=>$request->receipt ])->first(); 
            if($customerTransactionsLog == null){
                $store_setting_data = User::Where(['store_id' =>$request->store_id ])->with("store")->with("merchant")->first();
                if ($user) {
                        if ($store_setting_data && $user && ($request->amount >= 100)) {
                            $store_setting_data['amount'] = $request->amount;
                            // calculating point
                            $points_received = $this->pointEngine($store_setting_data, $request->amount);                       
                            $daalu_commision = $this->commission($store_setting_data, $request->amount);

                            $data['CustomerTransactionsLog']['ref'] = 'pos';
                            $data['CustomerTransactionsLog']['receipt'] = $request->receipt;
                            $data['CustomerTransactionsLog']['ref_id'] = '1';
                            $data['CustomerTransactionsLog']['customer_id'] = $user->id;
                            $data['CustomerTransactionsLog']['card_no'] = $user->username;
                            $data['CustomerTransactionsLog']['mobile_no'] = $user->username;
                            $data['CustomerTransactionsLog']['transaction_code'] = $request->receipt . "-" . time();
                            $data['CustomerTransactionsLog']['creds'] = $points_received;
                            $data['CustomerTransactionsLog']['time'] = time() + 3600;
                            $data['CustomerTransactionsLog']['ctype'] = $recieptType;
                            $data['CustomerTransactionsLog']['amount_spent'] = $request->amount;
                            $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                            $data['CustomerTransactionsLog']['transaction'] = 'earn';
                            $data['CustomerTransactionsLog']['merchant_id'] = $store_setting_data->merchant_id;
                            $data['CustomerTransactionsLog']['store_id'] = $store_setting_data->store_id;
                            $data['CustomerTransactionsLog']['status_id'] = ($recieptType != 'Mobile-Manual') ? 1 : 3;
                            $data['CustomerTransactionsLog']['pstatus_id'] = ($recieptType != 'Mobile-Manual') ? 1 : 3;
                          //  $data['CustomerTransactionsLog']['created_at'] = Carbon::now();
                            $data['CustomerTransactionsLog']['entry'] = 'Points accumulated from ' . $store_setting_data->store->store_name . ' (Amount spent: ' . $request->amount . ')';
                            
                            try {
                                $CustomerTransactionsLog =  new CustomerTransactionsLog;
                                $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);
                                if  ($recieptType != 'Mobile-Manual') {
                                
                                    $transaction_data = TranStats::where(['customer_id' =>  $user->id])->first();
                                    if($transaction_data ){
                                        $balance = $transaction_data->customer_balance + $points_received;
                                        $transaction_data->customer_id = $user->id;
                                        $transaction_data->earn_point = $transaction_data->earn_point + $points_received;
                                        $transaction_data->earn_amount = $transaction_data->earn_amount + $request->amount;
                                        $transaction_data->total = $transaction_data->total + $request->amount;
                                        $transaction_data->total_transaction =$transaction_data->total_transaction + 1;
                                        $transaction_data->customer_balance = $balance;
                                    
                                    if ($transaction_data->save()) {
                                        
                                        
                                        if($isGiftCard){
                                             $extracInformation = json_decode($request->extra_info);
                                            // Log gift card transactions
                                             $giftCardTransactions = GiftCardTransactions::create([
                                            'title' =>  $request->receipt ,
                                            'amount' => $request->amount,
                                            'point' =>  $points_received,
                                            'extra_info' =>$request->extra_info,
                                            'gift_card_id'=>$extracInformation->gift_card_id,
                                            'store_id'=>61,
                                            'user_id' => $user->id,
                                            ]);
                                        }
                                        
                                        if($isDeal){
                                        $extracInformation = json_decode($request->extra_info);
                                        // Log gift card transactions
                                             $dealsransactions = DealTransactions::create([
                                            'receipt_no' =>  $request->receipt ,
                                            'amount' => $request->amount,
                                            'point' =>  $points_received,
                                            'extra_info' =>$request->extra_info,
                                            'deal_id'=>$extracInformation->deal_id,
                                            'store_id'=>61,
                                            'user_id' => $user->id,
                                            ]);
                                        }
                                        
                                        $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                                        $user->transStat->earn_point = $points_received;
                                        $details = [
                                        'title' => 'Plenti new point credit alert',
                                        'description' => "Thank for shopping at ". $store_setting_data->store->store_name.". We hope you enjoyed your shopping",
                                        'customer' => $user->first_name,
                                        'points' =>  $points_received,
                                        'pendingPoints' =>  0,
                                        'balance' =>  $balance
                                        ];
                                        Mail::to($user->email)->send(new PointCreditMail($details));
                                        return $this->success('Transaction was successful', ["user"=>$user]);
                                    }
                                    
                                    }
                                }else{
                                         $user = User::where('id', Auth::id())->with("transStat")->with("card")->first();
                                         $user->transStat->earn_point = $points_received;
                                         $details = [
                                        'title' => 'Plenti pending credit alert',
                                        'description' => "Thank for shopping at ". $store_setting_data->store->store_name.". We hope you enjoyed your shopping",
                                        'customer' => $user->first_name,
                                        'pendingPoints' =>  $points_received,
                                        'points' =>  0
                                        ];
                                        Mail::to($user->email)->send(new PointCreditMail($details));
                                        return $this->success('Transaction was successful', ["user"=>$user]);
                                }
                                   
                                  
                            } catch (exception $ex) {  
                                return $this->error('This transaction id already exist please use another one', 400);        
                            }
    
                     
                        } else {
                            return $this->error('Invalid transaction you must spend at 100NGN least  to earn points', 400); 
                            if (!$store_setting_data) {
                                 return $this->error('Invalid Merchant credentials', 400); 
                            }
                        }
                  
                } else {
                     return $this->error('Invalid customer credentials', 400); 
                }
            }else{
                return $this->error('This  receipt has been used', 400); 
            }
       
    }
    
    function BurnPointsManually(Request $request)
    {   
      $validator = Validator::make($request->all(),  [
            'amount' => 'required|max:255',
            'store_id' => 'required|max:255',
            'customer_id' => 'required',
            'receipt' => 'required',
            ]);
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 401);
        }
		$data = [];  
        $response = []; 
            $user = User::where('id', $request->customer_id)->with("transStat")->with("card")->first();

            $customerTransactionsLog = CustomerTransactionsLog::Where(['receipt'=>$request->receipt ])->first(); 
            $store_setting_data = User::Where(['store_id' =>$request->store_id ])->with("store")->with("merchant")->first();

            // calculating point
            $points_to_burn = $this->pointEngine($store_setting_data, $request->amount , 'burn');                       
            $daalu_commision = $this->commission($store_setting_data, $request->amount);
            
            if($customerTransactionsLog == null){
                if ($user) {
                  //  if ($user->status == 1) {
                         if ($user->transStat->customer_balance >=$points_to_burn && $user->transStat->customer_balance >= 1000) {
                             
                            $recieptId = $request->receipt . "-".uniqid() ."-" . time();
                             
                            $store_setting_data['amount'] = $request->amount;
                            $data['CustomerTransactionsLog']['ref'] = 'mobile';
                            $data['CustomerTransactionsLog']['receipt'] = $request->receipt;
                            $data['CustomerTransactionsLog']['ref_id'] = '1';
                            $data['CustomerTransactionsLog']['customer_id'] = $user->id;
                            $data['CustomerTransactionsLog']['card_no'] = $user->username;
                            $data['CustomerTransactionsLog']['mobile_no'] = $user->username;
                            $data['CustomerTransactionsLog']['transaction_code'] = $recieptId;
                            $data['CustomerTransactionsLog']['creds'] = $points_to_burn;
                            $data['CustomerTransactionsLog']['time'] = time() + 3600;
                            $data['CustomerTransactionsLog']['ctype'] = 'offline';
                            $data['CustomerTransactionsLog']['amount_spent'] = $request->amount;
                            $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                            $data['CustomerTransactionsLog']['transaction'] = 'burn';
                            $data['CustomerTransactionsLog']['merchant_id'] = $store_setting_data->merchant_id;
                            $data['CustomerTransactionsLog']['store_id'] = $store_setting_data->store_id;
                            $data['CustomerTransactionsLog']['status_id'] = 3;
                            $data['CustomerTransactionsLog']['pstatus_id'] = 1;
                             $data['CustomerTransactionsLog']['created_at'] = Carbon::now();
                            $data['CustomerTransactionsLog']['entry'] = 'Points deducted from ' . $store_setting_data->store->store_name . ' (Amount spent: ' . $request->amount . ')';
                           
                            try {
                                $CustomerTransactionsLog =  new CustomerTransactionsLog;
                                $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);
                                if ($lastTransactionId ) {
                                    if($user->transStat->customer_balance ){
                                        $balance = $user->transStat->customer_balance - $points_to_burn;
                                        $data['TransStat']['customer_id'] =$user->id;
                                        $data['TransStat']['burn_point'] = $user->transStat->burn_point + $points_to_burn;
                                        $data['TransStat']['burn_amount'] = $user->transStat->earn_amount + $request->amount;
                                        $data['TransStat']['deducted_point'] = $points_to_burn;
                                        $data['TransStat']['total'] = $user->transStat->total + $request->amount;
                                        $data['TransStat']['total_transaction'] = $user->transStat->total_transaction + 1;
                                        $data['TransStat']['customer_balance'] = $balance;
                                        $data['TransStat']['last_reciept_id'] =   $recieptId;
                                        $response = TranStats::where('id', $user->transStat->id )->update($data['TransStat']);
                                        
                                        if ($response == 1) {
                                            $user = User::where('id', $request->customer_id)->with("transStat")->with("card")->first();
                                            $user->transStat->burn_point = $points_to_burn;
                                            $user->transStat->last_reciept_id = $recieptId ;
                                            return $this->success('Transaction was successful', $user);
                                        }
                                    
                                    }
                                }
                                   
                                  
                            } catch (exception $ex) {  
                                return $this->error('This transaction id already exist please use another one', 400);        
                            }
    
                     
                        } else {
                            return $this->error('Insufficient Balance', 400); 
                            if (!$store_setting_data) {
                                 return $this->error('Invalid Merchant credentials', 400); 
                            }
    
                        }
                  /*  } else {
                         return $this->error('This account has been suspended', 400); 
                    }*/
                } else {
                     return $this->error('Invalid customer credentials', 400); 
                }
            }else{
                return $this->error('This  receipt has been used', 400); 
            }
       
    }
    
    public function getPersonalAccessTokenForAllUser()
    {
      $users = User::skip(4000)->take(2000)->get();
      foreach( $users as $user){
        $fakeCardGenerator = random_int(10000000000, 99999999999);
        $lastCard = Card::where(['customer_id'=> $user->id])->orderBy('created_at', 'desc')->first();
        $card = Card::create([
        'card' => ($lastCard != null) ? $lastCard->card + 2 :$fakeCardGenerator,
        'customer_id' =>  $user->id,
        'active' => 1,
        'total_transaction' => 0
        ]);
      }
    }
    
    function dealElectronicReciept(Request $request)
    {   
      $validator = Validator::make($request->all(),  [
            'amount' => 'required',
            'store_id' => 'required',
            'receipt_no' => 'required',
            'user_id' => 'required',
            'deal_id' => 'required',
            'expires_on_date' => 'required',
            ]);
        $response = []; 
            $user = User::where('id', Auth::id())->first();
           $customerTransactionsLog = DealTransactions::Where(['receipt_no'=>$request->receipt_no ])->first(); 
            if($customerTransactionsLog == null){
                $store_setting_data = User::Where(['store_id' =>$request->store_id ])->with("store")->with("merchant")->first();
                if ($user) {
                     $dealsTransactions = DealTransactions::create([
                        'deal_id' =>  $request->deal_id ,
                        'amount' => $request->amount,
                        'receipt_no' => $request->receipt_no,
                        'user_id' => $user->id,
                        'store_id' => $store_setting_data->id,
                        'expires_on_date' => $request->expires_on_date
                    ]);
                     return $this->success('Transaction was successful', ["deal"=>$dealsTransactions]);                    
                } else {
                     return $this->error('Invalid customer credentials', 400); 
                }
            }else{
                return $this->error('This  receipt is already used', 400); 
            }
       
    }
    
    public function forgotV2(Request $request)
    {

     try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:255|exists:users,email',
                'mobile' => 'required|string|exists:users,mobile',
                'password' => 'required'
            ], [
                'email.exists' => 'The email you entered does not exist',
                'mobile.exists' => 'The mobile no you entered does not exist',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }
            
            $tokenCode = random_int(1000, 9999);

            User::where('email', $request->email)->update([
                    'verify_code' => Hash::make($tokenCode),
                    'password' => Hash::make($request->get('password'))
                ]);

              
            $credentials = ['mobile' => $request->get('mobile'), 'password' => $request->get('password')];
            
            if (!Auth::attempt($credentials)) {
                return $this->errorResponse(null, 'Email and phone mismatch', 400);
            }
            
            $user = $request->user();
            $tokenResult = $user->createToken('plenti');
            $token = $tokenResult->token;
            $token->save();
            
            $success['access_token'] =  $tokenResult->accessToken;
            $success['token_type'] = 'Bearer';
            $success['expires_at'] = Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString();
            
            $details = [
                    'title' => 'Verify Email Address',
                    'token' => $tokenCode
            ];
            Mail::to($user->email)->send(new verifyAccountmail($details));
           return $this->token($this->getPersonalAccessToken(), 'We have sent you a mail to verify your email', 201);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }
    
    public function getUserByMobileNo(Request $request)
    {
         
        $validator = Validator::make($request->all(),  [
            'mobile' => 'required|max:255',
        ]);
        if ($validator->fails()) {
         return $this->error($validator->errors()->first(), 400);
        }
        $current_user = User::where('mobile', $request->mobile )->with("transStat")->with("card")->first();
        if ($current_user) {
            return $this->success('record found', $current_user);
        } else {
         return $this->error('user not found', 400); 
        }
    }
    
    
    function earnBurnPointsManually(Request $request)
    {   
        $validator = Validator::make($request->all(),  [
        'amount' => 'required|max:255',
        'store_id' => 'required|max:255',
        'customer_id' => 'required',
        'receipt' => 'required',
        ]);
        
        if ($validator->fails()) {
         return $this->error($validator->errors()->first(), 400);
        }
  
    /*    if(isset($request->receipt_date)){
            if(!$this->isExpiredReciept( $request->receipt_date)){
                return $this->error('This reciept is expired', 400); 
            }
        }*/
        
        $isGiftCard = (isset($request->isGiftCard)) ? $request->isGiftCard : false;  
		$data = [];  
        $response = []; 
            $user = User::where('id',  $request->customer_id)->with("transStat")->with("card")->first();
            $customerTransactionsLog = CustomerTransactionsLog::Where(['receipt'=>$request->receipt ])->first(); 
            if($customerTransactionsLog == null){
                $store_setting_data = User::Where(['store_id' =>$request->store_id ])->with("store")->with("merchant")->first();
                if ($user) {
                   // if ($user->status == 5) {
                        if ($store_setting_data && $user && ($request->amount >= 100)) {
                            $store_setting_data['amount'] = $request->amount;
                            // calculating point
                            $points_received = $this->pointEngine($store_setting_data, $request->amount);                       
                            $daalu_commision = $this->commission($store_setting_data, $request->amount);

                            $data['CustomerTransactionsLog']['ref'] = 'pos';
                            $data['CustomerTransactionsLog']['receipt'] = $request->receipt;
                            $data['CustomerTransactionsLog']['ref_id'] = '1';
                            $data['CustomerTransactionsLog']['customer_id'] = $user->id;
                            $data['CustomerTransactionsLog']['card_no'] = $user->username;
                            $data['CustomerTransactionsLog']['mobile_no'] = $user->username;
                            $data['CustomerTransactionsLog']['transaction_code'] = $request->receipt . "-" . time();
                            $data['CustomerTransactionsLog']['creds'] = $points_received;
                            $data['CustomerTransactionsLog']['time'] = time() + 3600;
                            $data['CustomerTransactionsLog']['ctype'] = 'offline';
                            $data['CustomerTransactionsLog']['amount_spent'] = $request->amount;
                            $data['CustomerTransactionsLog']['commission'] = $daalu_commision;
                            $data['CustomerTransactionsLog']['transaction'] = 'earn';
                            $data['CustomerTransactionsLog']['merchant_id'] = $store_setting_data->merchant_id;
                            $data['CustomerTransactionsLog']['store_id'] = $store_setting_data->store_id;
                            $data['CustomerTransactionsLog']['status_id'] = 3;
                            $data['CustomerTransactionsLog']['pstatus_id'] = 1;
                          //  $data['CustomerTransactionsLog']['created_at'] = Carbon::now();
                            $data['CustomerTransactionsLog']['entry'] = 'Points accumulated from ' . $store_setting_data->store->store_name . ' (Amount spent: ' . $request->amount . ')';
                            
                            try {
                                $CustomerTransactionsLog =  new CustomerTransactionsLog;
                                $lastTransactionId = $CustomerTransactionsLog->create($data['CustomerTransactionsLog']);
                                if ($lastTransactionId ) {
                                
                                    $transaction_data = TranStats::where(['customer_id' =>  $user->id])->first();
                                    if($transaction_data ){
                                        $balance = $transaction_data->customer_balance + $points_received;
                                        $transaction_data->customer_id = $user->id;
                                        $transaction_data->earn_point = $transaction_data->earn_point + $points_received;
                                        $transaction_data->earn_amount = $transaction_data->earn_amount + $request->amount;
                                        $transaction_data->total = $transaction_data->total + $request->amount;
                                        $transaction_data->total_transaction =$transaction_data->total_transaction + 1;
                                        $transaction_data->customer_balance = $balance;
                                    
                                    if ($transaction_data->save()) {
                                        if($isGiftCard){
                                            // Log gift card transactions
                                             $giftCardTransactions = GiftCardTransactions::create([
                                            'title' =>  $request->receipt ,
                                            'amount' => $request->amount,
                                            'point' =>  $points_received,
                                            'deal_id' =>  $request->deal_id,
                                            'extra_info' =>  $reques->extra_info,
                                            'user_id' => $user->id,
                                            ]);
                                        }
                                        $user = User::where('id',  $user->id)->with("transStat")->with("card")->first();
                                        $user->transStat->earn_point = $points_received;
                                        $details = [
                                        'title' => 'Plenti new point credit alert',
                                        'description' => "Thank for shopping at ". $store_setting_data->store->store_name.". We hope you enjoyed your shopping",
                                        'customer' => $user->first_name,
                                        'points' =>  $points_received,
                                        'balance' =>  $balance
                                        ];
                                        Mail::to($user->email)->send(new PointCreditMail($details));
                                        return $this->success('Transaction was successful', $user);
                                    }
                                    
                                    }

                                }
                                   
                                  
                            } catch (exception $ex) {  
                                return $this->error('This transaction id already exist please use another one', 400);        
                            }
    
                     
                        } else {
                            return $this->error('Invalid transaction you must spend at 100NGN least  to earn points', 400); 
                            if (!$store_setting_data) {
                                 return $this->error('Invalid Merchant credentials', 400); 
                            }
    
                        }
                   /* } else {
                         return $this->error('This account has been suspended', 400); 
                    }*/
                } else {
                     return $this->error('Invalid customer credentials', 400); 
                }
            }else{
                return $this->error('This  receipt has been used', 400); 
            }

       
    }
    
}
