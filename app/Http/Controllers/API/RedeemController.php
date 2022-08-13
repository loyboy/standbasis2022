<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Claim;
use App\Models\Cordinate;
use App\Models\Generator;
use App\Models\Reward;
use App\Models\Store;
use App\Models\Transaction;
use App\Models\TranStats;
use App\Models\User;
use App\Notifications\GeneralNotification;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class RedeemController extends Controller
{
    use ApiResponser;

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'code' => 'required|string',
                'campaign_id' => 'required|exists:campaigns,id',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $check_code_exist = Generator::where('code', $request->code)->where('campaign_id', $request->campaign_id)->first();
            if ($check_code_exist) {
                $user_used_code = Claim::where(['code' => $request->code, 'campaign_id' => $request->campaign_id, 'user_id' => Auth::id()])->first();
                if (!$user_used_code) {
                    Generator::where('code', $request->code)->update([
                        'status' => true
                    ]);

                    $claim = new Claim();
                    $claim->user_id = Auth::id();
                    $claim->campaign_id = $request->campaign_id;
                    $claim->code = $request->code;
                    $claim->save();

                    $campaign = Campaign::where('id', $request->campaign_id)->first();
                    if ($campaign) {
                        $reward = Reward::where('id', $campaign->reward_id)->first();
                        if ($reward) {
                            $trans = new Transaction();
                            $trans->customer_id = Auth::id();
                            $trans->amount_spent = $reward->value;
                            $trans->point_deducted = $reward->points;
                            $trans->transaction = 'earn';

                            $trans->save();

                            $check_trans_data = TranStats::where('customer_id', Auth::id())->first();
                            if ($check_trans_data) {
                                TranStats::where('customer_id', Auth::id())->update([
                                    'earn_point' => (int)$check_trans_data->earn_point + (int)$reward->points,
                                    'earn_amount' => (int)$check_trans_data->earn_amount + (int)$reward->value,
                                    'total' => (int)$check_trans_data->total + (int)$reward->value,
                                    'total_transaction' => (int)$check_trans_data->total_transaction + 1,
                                    'customer_balance' => (int)$check_trans_data->total + (int)$reward->value,
                                ]);

                                $user = User::where('id', Auth::id())->first();
                                $res = $check_trans_data->earn_point + (int)$reward->points;
                                // $details = [
                                //     'subject' => "Points Received!!!",
                                //     'content' => strip_tags("You just received: <strong>{$reward->points}</strong>, <br><br> and your total point is now {$res} points. !!!"),
                                //     'cta_text' => "Go to Dashboard",
                                //     'cta_url' => env('APP_URL') . 'login',
                                // ];
                                // $user->notify(new GeneralNotification($details));

                                return $this->success("You have gotten {$reward->points} points", $reward->points);
                            } else {
                                $mydata = new TranStats();
                                $mydata->customer_id = Auth::id();
                                $mydata->earn_point = $reward->points;
                                $mydata->earn_amount = $reward->value;
                                $mydata->burn_point = 0;
                                $mydata->deducted_point = 0;
                                $mydata->deducted_amount = 0;
                                $mydata->burn_amount = 0;
                                $mydata->total = $reward->value;
                                $mydata->total_transaction = 1;
                                $mydata->customer_balance = $reward->value;
                                $mydata->customer_balance_old = 0;

                                if ($mydata->save()) {
                                    $user = User::where('id', Auth::id())->first();
                                    $check_trans_data = TranStats::where('customer_id', Auth::id())->first();
                                    $res = $check_trans_data->earn_point + (int)$reward->points;
                                    // $details = [
                                    //     'subject' => "Points Received!!!",
                                    //     'content' => strip_tags("You just received: <strong>{$reward->points}</strong> points for your transaction <br><br>. and your total point is now {$res}!!!"),
                                    //     'cta_text' => "Go to Dashboard",
                                    //     'cta_url' => env('APP_URL') . 'login',
                                    // ];
                                    // $user->notify(new GeneralNotification($details));

                                    return $this->success("You have gotten {$reward->points} points", $reward->points);
                                }
                            }
                        }
                    }
                } else {
                    return $this->error('Reward has already been claimed', 400);
                }
            } else {
                return $this->error('Invalid code', 400);
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function upload(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'campaign_id' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $claim = new Claim();
            $claim->user_id = Auth::id();
            $claim->campaign_id = $request->campaign_id;

            if ($request->hasFile('avatar')) {
                $image = $request->file('avatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/receipts/' . $fileName;
                Image::make($image)->save($location);

                $claim->avatar = $fileName;
            }

            $claim->save();

            $campaign = Campaign::where('id', $request->campaign_id)->first();
            if ($campaign) {
                $reward = Reward::where('id', $campaign->reward_id)->first();
                if ($reward) {
                    $trans = new Transaction();
                    $trans->customer_id = Auth::id();
                    $trans->amount_spent = $reward->value;
                    $trans->point_deducted = $reward->points;
                    $trans->transaction = 'earn';

                    $trans->save();

                    // $admin = User::where('role', 'admin')->first();
                    // foreach ($admin as $key => $value) {
                    //     $details = [
                    //         'subject' => "Order Received!!!",
                    //         'content' => strip_tags("Hello admin, A user just submitted a receipt for confirmation.Kindly login to your dashboard to view details !!!"),
                    //         'cta_text' => "Go to Dashboard",
                    //         'cta_url' => env('APP_URL') . 'login',
                    //     ];
                    //     $admin->notify(new GeneralNotification($details));
                    // }
                    return $this->success('Receipt upload Successful', 'You have successfully uploaded your purchase receipt, your request will be processed and points will be added to your wallet');
                }else{
                    return $this->error('Upload was not successful, kindly try again!!!', 500);
                }
            }else{
                return $this->success('Receipt upload Successful', 'You have successfully uploaded your purchase receipt, your request will be processed and points will be added to your wallet');
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function cordinate(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'latitude' => 'required',
                'longitude' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $cordinate = new Cordinate();
            $cordinate->user_id = Auth::id();
            $cordinate->latitude = $request->latitude;
            $cordinate->longitude = $request->longitude;

            if ($cordinate->save()) {
                return $this->success('Co-ordinates logged successful');
            }

        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }
}
