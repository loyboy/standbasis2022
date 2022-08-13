<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VoucherLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class RewardController extends Controller
{
    public function index()
    {
        $vouchers_log = VoucherLog::with('customer')->with('store')->where('transaction', 'burn')->take(1000)->latest()->get();
        return view('dashboard.admin.reward', ['vouchers_log' => $vouchers_log]);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255|unique:rewards',
                'points' => 'required|integer    ',
                'description' => 'required|string',
                'avatar' => 'required'
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $reward = new Reward();
            $reward->title = $request->title;
            $reward->points = $request->points;
            $reward->value = (int)$request->points/2;
            $reward->description = $request->description;

            if ($request->hasFile('avatar')) {
                $image = $request->file('avatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/reward/' . $fileName;
                Image::make($image)->save($location);

                $reward->avatar = $fileName;

                if ($reward->save()) {
                    return back()->with('success', 'Reward saved successfully');
                }
            }else{
                return back()->with('error', 'Reward not saved, Avatar is required!!!');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function edit(Request $request)
    {
        if ($request->ajax()) {
            $id = $request->id;
            $info = Reward::find($id);
            return response()->json($info);
        }
    }

    public function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'newtitle' => 'required|string|max:255',
                'newpoints' => 'required|integer    ',
                'newdescription' => 'required|string|max:255',
                'newnaira' => 'required|integer',
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $id = $request->edit_id;
            $reward = Reward::find($id);
            $reward->title = $request->newtitle;
            $reward->points = $request->newpoints;
            $reward->value = $request->newnaira;
            $reward->description = $request->newdescription;

            if ($request->hasFile('newavatar')) {
                $image = $request->file('newavatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/reward/' . $fileName;
                Image::make($image)->save($location);

                $reward->avatar = $fileName;

            }

            if ($reward->save()) {
                return back()->with('success', 'Reward updated successfully');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function delete(Request $request)
    {
        $id = $request->id;
        $reward = Reward::find($id);
        $response = $reward->delete();
        if ($response) {
            echo "Record Deleted successfully.";
        } else {
            echo "There was a problem. Please try again later.";
        }
    }
}
