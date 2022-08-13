<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if (auth()->user()->role == 'admin' || auth()->user()->role == 'superadmin') {
            return redirect()->route('admin.dashboard');
        } elseif (auth()->user()->role == 'merchant') {
            return redirect()->route('merchant.dashboard');
        } elseif (auth()->user()->role == 'user') {
            return redirect()->route('user.dashboard');
        }
        // return view('home');
    }

    public function dashboard()
    {
        if (auth()->user()->role == 'admin' || auth()->user()->role == 'superadmin') {
            return redirect()->route('admin.dashboard');
        } elseif (auth()->user()->role == 'merchant') {
            return redirect()->route('merchant.dashboard');
        } elseif (auth()->user()->role == 'user') {
            return redirect()->route('user.dashboard');
        }
    }
}
