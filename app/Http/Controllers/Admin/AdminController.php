<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VoucherLog;
use App\Models\Deal;
use App\Models\GiftCards;
use App\Models\User;
use DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $merchant = User::where('role', 'merchant')->count();
        $customer = User::where('role', 'user')->count();
        $customer_normal = User::where('role', 'user')->latest()->take(8)->get();
        $giftCards = GiftCards::count();
        $deals = Deal::count();
        $vouchers = VoucherLog::where('transaction', 'burn')->count();
        $vouchers_log = VoucherLog::with('customer')->with('store')->where('transaction', 'burn')->take(20)->orderby('id', 'desc')->get();
        $previousMonthAccount =  DB::select('call   getPreviousMonthAccount');  
        return view('dashboard.admin.index', [
        'merchants' => $merchant, 
        'customers' => $customer, 
        'giftCards' => $giftCards, 
        'deals' => $deals, 
        'vouchers' => $vouchers, 
        'vouchers_log' => $vouchers_log, 
        'previousMonthAccount' => $previousMonthAccount,
        'custs' => $customer_normal]        
        );
    }

    public function merchants()
    {
        $merchant = User::where('role', 'merchant')->get();
        return view('dashboard.admin.merchant', ['merchants' => $merchant]);
    }

    public function customers()
    {
        $customer = User::where('role', 'user')->take(600)->latest()->get();
        return view('dashboard.admin.customer', ['customers' => $customer]);
    }

    public function staffs()
    {
        $staff = User::where('role', 'admin')->get();
        return view('dashboard.admin.staff', ['staffs' => $staff]);
    }

    public function delete_merchant(Request $request)
    {
        $id = $request->id;
        $reward = User::find($id);
        $response = $reward->delete();
        if ($response) {
            echo "Record Deleted successfully.";
        } else {
            echo "There was a problem. Please try again later.";
        }
    }

    public function vouchers()
    {
        $vouchers = VoucherLog::with('customer')->with('store')->where('transaction', 'burn')->take(100)->orderby('id', 'desc')->get();
        return view('dashboard.admin.vouchers', ['vouchers' => $vouchers]);
    }
}
