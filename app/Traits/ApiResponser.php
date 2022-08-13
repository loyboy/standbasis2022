<?php

namespace App\Traits;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

trait ApiResponser
{
    public function validateLogin($request)
    {      
        return $request->validate([
            'mobile' => 'required|string|max:255',
            'password' => 'required|string|min:4',
        ]);
    }

    public function validateAdminLogin($request)
    {      
        return $request->validate([
            'email' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);
    }

    protected function gen_uid($l=10){
        return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, $l);
    }
    
    protected function encrypt_decrypt($string, $action = 'encrypt')
    {
        $encrypt_method = "AES-256-CBC";
        $secret_key = 'AA74CDCC2BBRT935136HH7B63C27'; // user define private key
        $secret_iv = 'standbasisthewayhome'; // user define secret key
        $key = hash('sha256', $secret_key);
        $iv = substr(hash('sha256', $secret_iv), 0, 16); // sha256 is hash_hmac_algo
        if ($action == 'encrypt') {
            $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
            $output = base64_encode($output);
        } else if ($action == 'decrypt') {
            $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
        }
        return $output;
    }

    protected function token($personalAccessToken, $message = null,  $code = 200, $user = null)
    {
        $tokenData = [
            'access_token' => $personalAccessToken->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse($personalAccessToken->token->expires_at)->toDateTimeString(),
            'user' => ($user != null) ? $user : User::where('id', Auth::id())->with("transStat")->with("card")->first()
        ];
        return $this->success($message, $tokenData, $code);
    }

    protected function success($message = null, $data = null, $code = 200)
    {
        return response()->json([
            'success' => true,
            'status_code'=>$code,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function error($message = null, $code)
    {
        return response()->json([
            'success' => false,
            'message' => $message
        ], $code);
    }

    public function getPersonalAccessToken()
    {
        if (request()->remember_me === 'true')
            Passport::personalAccessTokensExpireIn(now()->addMonths(6));

        return Auth::user()->createToken('standbasis');
    }

    
    protected function convertRecieptDate($receiptDate)
    {  
        $formatOut = 'Y-m-d'; // Your format
        $formatInput = 'd/m/Y';
        return $dateOut = \DateTime::createFromFormat($formatInput, $receiptDate)->format($formatOut);
    }
    
    protected function isExpiredReciept($receiptDate)
    {  
        $recieptDate = new Carbon($this->convertRecieptDate($receiptDate));
        $now = Carbon::now();
        $recieptDate->diff($now)->days;
        $isNotExpired = ($recieptDate->diff($now)->days < 1) ? 1 : 0;
        return (bool) $isNotExpired;
    }    
    protected function sendSMS($to, $pin){
        $curl = curl_init();
        $data = array( "api_key" => "TLTHmHHDYtpayI3JW1r0UM2TYx5Pp3LzMdctrUgmmWHJI5Cnrij0NdbAIKii5E",
             "message_type" => "NUMERIC",
             "to" => $str = "+234".ltrim($to, "0") ,
             "from" => "N-Alert",
             "channel" => "dnd",
             "pin_attempts" => 10,
             "pin_time_to_live" =>  5,
             "pin_length" => 4,
             "pin_placeholder" => "< 1234 >",
             "message_text" => "Your PLENTI Confirmation code is ".$pin.".",
             "pin_type" => "NUMERIC");
        
        $post_data = json_encode($data);
        
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.ng.termii.com/api/sms/otp/send",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $post_data,
        CURLOPT_HTTPHEADER => array(
        "Content-Type: application/json"
        ),
        ));
        
        $response = curl_exec($curl);
        
        curl_close($curl);
        return $response;
    }

    protected function sendSMSWithout243($to, $pin){
        $curl = curl_init();
        $data = array( "api_key" => "TLTHmHHDYtpayI3JW1r0UM2TYx5Pp3LzMdctrUgmmWHJI5Cnrij0NdbAIKii5E",
             "message_type" => "NUMERIC",
             "to" => $str = ltrim($to, "0") ,
             "from" => "N-Alert",
             "channel" => "dnd",
             "pin_attempts" => 10,
             "pin_time_to_live" =>  5,
             "pin_length" => 4,
             "pin_placeholder" => "< 1234 >",
             "message_text" => "Your PLENTI Confirmation code is ".$pin.".",
             "pin_type" => "NUMERIC");
        
        $post_data = json_encode($data);
        
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.ng.termii.com/api/sms/otp/send",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $post_data,
        CURLOPT_HTTPHEADER => array(
        "Content-Type: application/json"
        ),
        ));
        
        $response = curl_exec($curl);
        
        curl_close($curl);
        return $response;
    }

    protected function remove234FromMobile($phoneNumber){
        $raw = explode("234", $phoneNumber);
        if(substr(last($raw), 0,1) == "0"){
            return  last($raw) ;
        }else{
            return "0". last($raw) ;
        }
       
    }

    protected function add234ToMobile($phoneNumber){
    }
    
    
}
