<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Claim;
use App\Models\Reward;
use App\Models\User;
use App\Models\Voucher;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {
        $voucher = Voucher::where('user_id', Auth::id())->get();
        $claims = Claim::with('user')->with('campaign')->latest()->take(8)->get();

        return view('dashboard.user.index', ['campaigns' => $voucher, 'claims' => $claims]);
    }

    public function profile()
    {
        return view('dashboard.user.profile');
    }

    public function profile_store(Request $request)
    {
        try {
            $user = User::find(Auth::id());
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->mobile = $request->mobile;
            $user->address = $request->address;

            if ($user->save()) {
                return back()->with('success', 'Profile updated successfully');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function wallet()
    {
        $wallet = Wallet::where('user_id', auth()->user()->id)->first();
        $voucher = Voucher::where('user_id', auth()->user()->id)->latest()->get();

        return view('dashboard.user.wallet', ['wallets' => $wallet, 'vouchers' => $voucher]);
    }

    public function voucher_Store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'amount' => 'required|integer',
            ]);

            $amount_check = Wallet::where('user_id', Auth::id())->first();
            if ((int)$request->amount > (int)$amount_check->balance) {
                return back()->with('error', 'Insufficient balance!!!');
            }else{
                $voucher = new Voucher();
                $voucher->user_id = Auth::id();
                $voucher->amount = $request->amount;
                $voucher->code = Str::random(6);

                if ($voucher->save()) {
                    Wallet::where('user_id', Auth::id())->update([
                        'balance' => (int)$amount_check->balance - (int)$request->amount
                    ]);
                    return back()->with('success', 'Voucher created!!! Your voucher code is: '. $voucher->code);
                }
            }

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }
}
