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
        } elseif (auth()->user()->role == 'principal') {
            return redirect()->route('principal.dashboard');
        } elseif (auth()->user()->role == 'user') {
            return redirect()->route('user.dashboard');
        } elseif (auth()->user()->role == 'government') {
            return redirect()->route('government.dashboard');
        }elseif (auth()->user()->role == 'proprietor') {
            return redirect()->route('proprietor.dashboard');
        }
        // return view('home');
    }

    
}
