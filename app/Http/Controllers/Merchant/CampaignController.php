<?php

namespace App\Http\Controllers\Merchant;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Generator;
use App\Models\Reward;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class CampaignController extends Controller
{
    public function index()
    {
        $campaign = Campaign::with('reward')->where('user_id', Auth::id())->latest()->get();
        $reward = Reward::all();
        $store = Store::where('merchant_id', Auth::id())->get();
        return view('dashboard.merchant.campaign', ['campaigns' => $campaign, 'rewards' => $reward, 'stores' => $store]);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'reward' => 'required|exists:rewards,id',
                'store' => 'required',
                'title' => 'required|string|max:255',
                'description' => 'required',
                'avatar' => 'required|dimensions:max_width=120,max_height=120',
                'mode' => 'required',
                'date_from' => 'required',
                'date_to' => 'required'
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $reward = new Campaign();
            $reward->user_id = Auth::id();
            $reward->reward_id = $request->reward;
            $reward->store_id = $request->store;
            $reward->name = $request->title;
            $reward->code = Str::random(6);
            $reward->date_from = $request->date_from;
            $reward->date_to = $request->date_to;
            $reward->description = $request->description;
            $reward->mode = $request->mode;

            if ($request->hasFile('avatar')) {
                $image = $request->file('avatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/campaign/' . $fileName;
                Image::make($image)->save($location);

                $reward->avatar = env('APP_URL') . '/images/campaign/' . $fileName;

                if ($reward->save()) {
                    return back()->with('success', 'Campaign created successfully');
                }
            } else {
                return back()->with('error', 'Campaign not saved, Avatar is required!!!');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function edit(Request $request)
    {
        if ($request->ajax()) {
            $id = $request->id;
            $info = Campaign::find($id);
            return response()->json($info);
        }
    }

    public function generate(Request $request)
    {
        if ($request->ajax()) {
            $id = $request->id;
            $code = Str::random(6);

            return response()->json($code);
        }
    }

    public function save_code(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'generate_id' => 'required|exists:campaigns,id',
                'codegen' => 'required|string|max:255',
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $code = new Generator();
            $code->campaign_id = $request->generate_id;
            $code->code = $request->codegen;

            if ($code->save()) {
                return back()->with('success', 'Code generated successfully');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'newreward' => 'required|exists:rewards,id',
                'newtitle' => 'required|string|max:255',
                'newdescription' => 'required',
                'newdate_from' => 'required',
                'newdate_to' => 'required'
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $id = $request->edit_id;
            $reward = Campaign::find($id);
            $reward->reward_id = $request->newreward;
            $reward->store_id = $request->newstore;
            $reward->name = $request->newtitle;
            $reward->date_from = $request->newdate_from;
            $reward->date_to = $request->newdate_to;
            $reward->description = $request->newdescription;
            $reward->mode = $request->newmodes;

            if ($request->hasFile('newavatar')) {
                $image = $request->file('newavatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/campaign/' . $fileName;
                Image::make($image)->save($location);

                $reward->avatar = env('APP_URL') . '/images/campaign/' . $fileName;
            }

            if ($reward->save()) {
                return back()->with('success', 'Campaign updated successfully');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function delete(Request $request)
    {
        $id = $request->id;
        $reward = Campaign::find($id);
        $response = $reward->delete();
        if ($response) {
            echo "Record Deleted successfully.";
        } else {
            echo "There was a problem. Please try again later.";
        }
    }
}
