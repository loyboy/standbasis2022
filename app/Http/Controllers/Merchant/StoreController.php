<?php

namespace App\Http\Controllers\Merchant;

use App\Http\Controllers\Controller;
use App\Models\Mstore;
use App\Models\Store;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class StoreController extends Controller
{
    public function index()
    {
        $store = Store::where('user_id', Auth::id())->orWhere('merchant_id', Auth::id())->latest()->get();
        return view('dashboard.merchant.store', ['stores' => $store]);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'store_name' => 'required|string|max:255',
                'website' => 'required',
                'avatar' => 'required|dimensions:max_width=24,max_height=24',
                'address' => 'required',
                'contact_person_firstname' => 'required',
                'contact_person_lastname' => 'required',
                'job_title' => 'required',
                'contact_email' => 'required|unique:users,email',
                'mobile_no' => 'required',
                'password' => 'required|string|min:8|confirmed'
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            if ($request->hasFile('avatar')) {
                $image = $request->file('avatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/stores/' . $fileName;
                Image::make($image)->save($location);

            }else{
                return back()->with('error', 'Avatar field is required');
            }

            $user = new User();
            $user->first_name = $request->contact_person_firstname;
            $user->last_name = $request->contact_person_lastname;
            $user->username = $request->contact_person_firstname.'.'.$request->contact_person_firstname;
            $user->email = $request->contact_email;
            $user->mobile = $request->mobile_no;
            $user->role = 'store';
            $user->email_verified_at = Carbon::now();
            $user->password = bcrypt($request->password);
            $user->pin = Hash::make(0000);
            if ($request->hasFile('avatar')) {
                $user->image = env('APP_URL') . '/images/stores/' . $fileName;
            }
            $user->merchant_id = Auth::id();
            $user->platform = 'plenti';
            $user->address = $request->address;
            $user->verified = 1;
            if ($user->save()) {
                $store = new Store();
                $store->user_id = $user->id;
                $store->merchant_id = Auth::id();
                $store->store_name = $request->store_name;
                $store->website = $request->website;
                $store->address = $request->address;
                $store->lat = $request->latitude;
                $store->lng = $request->longitude;
                $store->contact_person_firstname = $request->contact_person_firstname;
                $store->contact_person_lastname = $request->contact_person_lastname;
                $store->job_title = $request->job_title;
                $store->contact_email = $request->contact_email;
                $store->mobile_no = $request->mobile_no;

                $store->image = env('APP_URL') . '/images/stores/' . $fileName;

                if ($store->save()) {
                    $user->store_id = $store->id;
                    $user->save();

                    return back()->with('success', 'Store created successfully');
                }
            }

        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function edit(Request $request)
    {
        if ($request->ajax()) {
            $id = $request->id;
            $info = Store::find($id);
            return response()->json($info);
        }
    }

    public function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'new_store_name' => 'required|string|max:255',
                'new_address' => 'required',
                'new_contact_person_firstname' => 'required',
                'new_contact_person_lastname' => 'required',
                'new_job_title' => 'required',
                'new_contact_email' => 'required',
                'new_mobile_no' => 'required'
            ]);

            if ($validator->fails()) {
                return back()->with('error', $validator->errors()->first());
            }

            $id = $request->edit_id;
            $store = Store::find($id);
            $store->user_id = Auth::id();
            $store->merchant_id = Auth::id();
            $store->store_name = $request->new_store_name;
            $store->website = $request->new_website;
            $store->address = $request->new_address;
            $store->contact_person_firstname = $request->new_contact_person_firstname;
            $store->contact_person_lastname = $request->new_contact_person_lastname;
            $store->job_title = $request->new_job_title;
            $store->contact_email = $request->new_contact_email;
            $store->mobile_no = $request->new_mobile_no;
            $store->active = 1;


            if ($request->hasFile('newavatar')) {
                $validator = Validator::make($request->all(), [
                    'newavatar' => 'dimensions:max_width=24,max_height=24',
                ]);
                if ($validator->fails()) {
                    return back()->with('error', $validator->errors()->first());
                }

                $image = $request->file('newavatar');
                $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
                $location = 'images/stores/' . $fileName;
                Image::make($image)->save($location);

                $store->image = env('APP_URL') . '/images/stores/' . $fileName;
            }

            if ($store->save()) {
                return back()->with('success', 'Store Record updated successfully');
            }
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function delete(Request $request)
    {
        $id = $request->id;
        $store = Store::find($id);
        $response = $store->delete();
        if ($response) {
            echo "Record Deleted successfully.";
        } else {
            echo "There was a problem. Please try again later.";
        }
    }
}
