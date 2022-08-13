<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\resentPIN;
use App\Mail\verifyAccountmail;
use App\Models\PhoneVerification;
use App\Models\User;
use Carbon\Carbon;
use App\Mail\GeneralEmails;
use App\Notifications\GeneralNotification;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Passport;

class ForgotPasswordController extends Controller
{
    use ApiResponser;

    public function forgot(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:255|exists:users,email',
            ], [
                'email.exists' => 'The email you enter does not exist'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $credentials = request()->validate(['email' => 'required|email|exists:users,email']);
            Password::sendResetLink($credentials);

            return $this->success('Reset password link sent to your email ID.');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    public function reset()
    {
        $credentials = request()->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|min:8|confirmed'
        ]);

        $reset_password_status = Password::reset($credentials, function ($user, $password) {
            $user->password = Hash::make($password);
            $user->save();
        });

        if ($reset_password_status == Password::INVALID_TOKEN) {
            return $this->error('Invalid token provided', 400);
        }

        return $this->success('Password has been successfully changed');
    }

    public function reset_password($token, $email)
    {
        return redirect(env('FRONT_URL') . 'reset-password?token=' . $token . '&email=' . $email);
    }

    public function resetPIN(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:255|exists:users,email',
            ], [
                'email.exists' => 'The email you enter does not exist'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            $token = random_int(1000, 9999);
            $details = [
                'title' => 'Reset Pin',
                'token' => $token
            ];

            $user = User::where('email', $request->email)->first();
            if ($user) {
                // if (!(Hash::check($request->get('pin'), $user->verify_code))) {
                //     return $this->error('Invalid Verification code', 400);
                // }

                User::where('email', $request->email)->update([
                    'verify_code' => Hash::make($token)
                ]);

                Mail::to($request->email)->send(new resentPIN($details));

                return $this->success('Enter the pin sent to your mail', $token);
            }else{
                return $this->error('Account with this mail could not be found, try again!!!', 400);
            }

        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    public function resetPassword(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required',
                'password' => 'required|string|min:8|confirmed'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            $reset_password_status = User::where('email', $request->email)->update([
                'password' => Hash::make($request->password),
                'verify_code' => null
            ]);

            if ($reset_password_status) {
                return $this->success('Password has been successfully changed');
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }
    
    public function forgotV2(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:255|exists:users,email',
                'mobile' => 'required|string|exists:users,mobile',
            ], [
                'email.exists' => 'The email  no  you enter does not exist',
                'mobile.exists' => 'The  mobile no  you enter does not exist',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }
            
            $tokenCode = random_int(1000, 9999);
            $fakePassword = 0000;


            User::where('email', $request->email)->update([
                    'verify_code' => Hash::make($tokenCode),
                    'password' => Hash::make($fakePassword)
                ]);

              
            $credentials = ['mobile' => $request->get('mobile'), 'password' => $fakePassword];
            
            if (!Auth::attempt($credentials)) {
                return $this->errorResponse(null, 'Credentials mismatch', 400);
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

    public function changePin(Request $request)
    {
  
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

    public function sendRecoveryEmail(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string',
            ]);

            if ($validator->fails()) {
                return $this->errorResponseWithoutData($validator->errors()->first(), 401);
            }
            $tokenCode = random_int(1000, 9999);
            $user =   User::where(['email' => $request->email ])->without('cat_list')->first();
            if($user != null){
                $details = [
                    'title' => 'Password and PIN Recovery',
                    'token' => $tokenCode
                ];

                $details = [
                    'subject' => "Password and PIN Recovery",
                    'user' => $user->first_name,
                    'content' => "<p>You've received this email because you requested for a password or PIN reset. Please enter  the  token  below to proceed. <br/><br/>
                    <span style='color:white; background:black; height:200px; width:200px; border-radius: 10px; padding:10px; font-weight:bold'>".$tokenCode."</span> </p>
                    <p>However, if you did not authorize the password change, please change your password now  or contact admin at  09041110904 </p>",
                    'cta_text' => "",
                    'cta_url' => "",
                ];
                Mail::to($user->email)->send(new GeneralEmails($details));
                
                //Mail::to($request->email )->send(new verifyAccountmail($details));       
                $securedToken = Hash::make($tokenCode);
                $response = PhoneVerification::create([
                    'email' => $request->email,
                    'pin' =>  $securedToken,
                    'mobile'=>''
                ]);  
                return $this->success('Verification email sent',['user'=> $user, "token"=> $response] );
            }else{
                return $this->errorResponseWithoutData("Email does not exist please register", 400);
            } 
         
        } catch (\Throwable $th) {
            return $this->errorResponseWithoutData($th->getMessage(), 422);
        }
    }

    public function verifyPasswordToken(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
                'pin' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }           
            $response = PhoneVerification::where([
                'id'=>  $request->get('id'), 
            ])->first();
            if(Hash::check($request->get('pin'), $response->pin)){
                return $this->successResponseV3($response, "Token verified sucessfully", 200);
            } else{
                return $this->errorResponse(null, 'The token you entered is invalid', 400);
            }         
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    
    public function changePassword(Request $request)
    {
      /*   if (!(Hash::check($request->get('current_password'), Auth::user()->password))) {
            return $this->error('Current password does not matches with the password you provided.', 400);
        }

        if (strcmp($request->get('current_password'), $request->get('password')) == 0) { //Current password and new password are same
            return $this->error('New Password cannot be same as your current password. Please choose a different password.', 400);
        }
 */
        try {
            $validator = Validator::make($request->all(), [
                'mobile' => 'required',
                'password' => 'required|string|min:8|confirmed'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 401);
            }

            //Change Password
            $user = User::where(['mobile'=>$this->remove234FromMobile($request->get("mobile"))])->first();
            if($user != null ){
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
                return $this->successResponseV3(["user"=> $user], 'Password updated sucessfully', 200);
            }else{
                return $this->errorResponseWithoutData(null, 'Something went wrong', 400);

            }
        } catch (\Throwable $th) {
            return $this->errorResponseWithoutData($th->getMessage(), 422);
        }
    }

       
    public function changePasswordAuth(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'mobile' => 'required',
                'password' => 'required|string|min:8|confirmed'
            ]);

            if ($validator->fails()) {
                return $this->errorResponseWithoutData($validator->errors()->first(), 401);
            }

            //Change Password
            $user =  Auth::user();
            if($user != null ){
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
                return $this->successResponseV3(["user"=> $user], 'Password updated sucessfully', 200);
            }else{
                return $this->errorResponseWithoutData(null, 'Something went wrong', 400);

            }
        } catch (\Throwable $th) {
            return $this->errorResponseWithoutData($th->getMessage(), 422);
        }
    }


 
}
