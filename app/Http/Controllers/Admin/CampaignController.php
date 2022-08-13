<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\Reward;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class CampaignController extends Controller
{
    public function index()
    {
        $deals = Deal::with('store')->latest()->get();
        $merchant = User::where('role', 'merchant')->get();
        $reward = Reward::all();
        return view('dashboard.admin.deals', ['deals' => $deals, 'merchants' => $merchant, 'rewards' => $reward]);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'merchant' => 'required|exists:users,id',
                'reward' => 'required|exists:rewards,id',
                'title' => 'required|string|max:255',
                'description' => 'required',
                'avatar' => 'required',
                'date_from' => 'required',
                'date_to' => 'required'
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $reward = new Campaign();
            $reward->user_id = $request->merchant;
            $reward->reward_id = $request->reward;
            $reward->name = $request->title;
            $reward->code = Str::random(6);
            $reward->date_from = $request->date_from;
            $reward->date_to = $request->date_to;
            $reward->description = $request->description;

            if ($request->hasFile('avatar')) {
                $image = $request->file('avatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/campaign/' . $fileName;
                Image::make($image)->save($location);

                $reward->avatar = $fileName;

                if ($reward->save()) {
                    return back()->with('success', 'Campaign saved successfully');
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

    public function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'newmerchant' => 'required|exists:users,id',
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
            $reward->user_id = $request->newmerchant;
            $reward->reward_id = $request->newreward;
            $reward->name = $request->newtitle;
            $reward->date_from = $request->newdate_from;
            $reward->date_to = $request->newdate_to;
            $reward->description = $request->newdescription;

            if ($request->hasFile('newavatar')) {
                $image = $request->file('newavatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/campaign/' . $fileName;
                Image::make($image)->save($location);

                $reward->avatar = $fileName;

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
