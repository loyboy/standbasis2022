<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    use ApiResponser;

    public function verify($user_id, Request $request)
    {
        if (!$request->hasValidSignature()) {
            return $this->error('Invalid/Expired url provided.', 401);
        }

        $user = User::findOrFail($user_id);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }
        // return redirect('https://paxo-app.netlify.app/verify-email/');
       return $this->success('Email verified', 200);
    }



    public function resend()
    {
        if (auth()->user()->hasVerifiedEmail()) {
            return $this->success('Email already verified.', 200);
        }
        auth()->user()->sendEmailVerificationNotification();
        return $this->success('We have sent you a mail to verify your email.', 200);
    }

}
