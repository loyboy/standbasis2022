<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Cordinate;
use App\Models\Mstore;
use App\Models\Payment;
use App\Models\Store;
use App\Models\Transaction;
use App\Models\TranStats;
use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class IndexController extends Controller
{
    use ApiResponser;

    public function index(Request $request)
    {
        try {
            $nearby = array();
            $balance = TranStats::where('customer_id', Auth::id())->first();
            $offers = Campaign::where('status', 1)->inRandomOrder()->limit(8)->get();
            $stores = Store::with('user')->where('active', 1)->latest()->paginate(8);
            $user_cordinate = Cordinate::where('user_id', Auth::id())->latest()->first();
            if ($user_cordinate) {
                foreach ($stores as $value) {
                    $distance = getDistance($value->lat, $value->lng, $user_cordinate->latitude, $user_cordinate->longitude);
                    if ($distance < 100) {
                        array_push($nearby, $value);
                    }
                }
                $result = [
                    'balance' => $balance,
                    'offers' => $offers,
                    'stores' => []
                ];
            } else {
                $result = [
                    'balance' => $balance,
                    'offers' => $offers,
                    'stores' => []
                ];
            }

            return $this->success('record found', $result);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 422);
        }
    }

    public function offers()
    {
        $offers = Campaign::where('status', 1)->latest()->get();
        if (count($offers) > 0) {
            return $this->success('record found', $offers);
        } else {
            return $this->error('record not found', 200);
        }
    }

    public function offers_nearby()
    {
        $nearby = array();
        $stores = Store::with('user')->where('active', 1)->latest()->paginate(8);
        $user_cordinate = Cordinate::where('user_id', Auth::id())->latest()->first();
        if ($user_cordinate) {
            foreach ($stores as $value) {
                $distance = getDistance($value->lat, $value->lng, $user_cordinate->latitude, $user_cordinate->longitude);
                if ($distance < 100) {
                    array_push($nearby, $value);
                }
            }
            if (count($nearby) > 0) {
                return $this->success('record found', $nearby);
            } else {
                return $this->error('No offers found within your location', 200);
            }
        }else{
            return $this->error('record not found', 200);
        }
    }

    public function transaction_history()
    {
        $trans = Transaction::where('customer_id', Auth::id())->get();
        if (count($trans)) {
            return $this->success('record found', $trans);
        } else {
            return $this->error('record not found', 200);
        }
    }

    public function campaign()
    {
        $offers = Campaign::where('status', 1)->latest()->get();
        if (count($offers)) {
            return $this->success('record found', $offers);
        } else {
            return $this->error('record not found', 200);
        }
    }

    public function fund_wallet(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'amount' => 'required',
                'reference' => 'required|string|max:255',
                'channel' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            $payment = new Payment();
            $payment->user_id = Auth::id();
            $payment->reference = $request->reference;
            $payment->channel = $request->channel;
            $payment->amount = $request->amount;

            $payment->save();

            $balance = TranStats::where('customer_id', Auth::id())->first();
            if ($balance) {
                $update_balance = TranStats::where('customer_id', Auth::id())->update([
                    'total' => (int)$balance->total + (int)$request->amount
                ]);

                return $this->success('wallet updated', $update_balance);
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }
}
