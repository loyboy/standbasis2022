<?php

namespace App\Http\Controllers\Merchant;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Claim;
use App\Models\Reward;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MerchantController extends Controller
{
    public function index()
    {
        $campaign = Campaign::where('user_id', Auth::id())->get();
        $campaign_merchant = Campaign::where('user_id', Auth::id())->get();
        if (count($campaign_merchant) > 0) {
            foreach ($campaign_merchant as $key => $value) {
                $claims = Claim::with('user')->with('campaign')->where('campaign_id', $value['id'])->latest()->take(8)->get();
            }
        } else {
            $claims = [];
        }
        return view('dashboard.merchant.index', ['campaigns' => $campaign, 'claims' => $claims]);
    }

    public function claim()
    {
        $user = User::where('role', 'user')->get();
        $campaign_merchant = Campaign::where('user_id', Auth::id())->get();
        if (count($campaign_merchant) > 0) {
            foreach ($campaign_merchant as $key => $value) {
                $claims = Claim::with('user')->with('campaign')->where('campaign_id', $value['id'])->get();
            }
        }else{
            $claims = [];
        }
        return view('dashboard.merchant.claim', ['customers' => $user, 'claims' => $claims]);
    }

    public function claim_store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'user_id' => 'required|exists:users,id',
                'code' => 'required|string|max:255'
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $code_exist = Campaign::where('code', $request->code)->first();
            if ($code_exist) {
                $user_code = Claim::where('user_id', $request->user_id)->where('campaign_id', $code_exist->id)->first();
                if ($user_code) {
                    return back()->with('error', 'Customer had already claimed this promo package!!!');
                }else{
                    $claim = new Claim();
                    $claim->user_id = $request->user_id;
                    $claim->campaign_id = $code_exist->id;
                    $claim->save();

                    $wallet_exist = Wallet::where('user_id', $request->user_id)->first();
                    if ($wallet_exist) {
                        $reward = Reward::where('id', $code_exist->reward_id)->first();
                        if ($reward) {
                            $wallet = Wallet::where('user_id', $request->user_id)->update([
                                'balance' => (int)$wallet_exist->balance + (int)$reward->value,
                                'points' => (int)$wallet_exist->points + (int)$reward->points,
                            ]);
                        }
                        return back()->with('success', 'Successful!!!');
                    }else{
                        $reward = Reward::where('id', $code_exist->reward_id)->first();

                        $wallet = new Wallet();
                        $wallet->user_id = $request->user_id;
                        $wallet->balance = (int)$reward->value;
                        $wallet->points = (int)$reward->points;

                        if ($wallet->save()) {
                            return back()->with('success', 'Successful!!!');
                        }
                    }
                }
            }else{
                return back()->with('error', 'Invalid Code');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function profile()
    {
        return view('dashboard.merchant.profile');
    }

    public function profile_store(Request $request)
    {
        try {
            $user = User::find(Auth::id());
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->mobile = $request->mobile;
            $user->business_name = $request->business_name;
            $user->address = $request->address;
            $user->website = $request->website;

            if ($user->save()) {
                return back()->with('success', 'Profile updated successfully');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function reward()
    {
        $reward = Reward::latest()->get();
        return view('dashboard.merchant.reward', ['rewards' => $reward]);
    }
}
