<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    protected function redirectTo(){
        if (Auth::check() && auth()->user()->role == 'admin' || auth()->user()->role == 'superadmin') {
            return 'admin/dashboard';
            // return redirect()->route('admin.dashboard')->with('status', 'Account Verified');

        }elseif (Auth::check() && auth()->user()->role == 'merchant') {
            return 'merchant/dashboard';
            // return redirect()->route('merchant.dashboard')->with('status', 'Account Verified');

        }elseif(Auth::check() && auth()->user()->role == 'customer'){
            return 'user/dashboard';
            // return redirect()->route('user.dashboard')->with('status', 'Account Verified');
        }
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\View\View
     */
    public function showLoginForm()
    {
        return view('dashboard.auth.pages.login');
    }

    protected function credentials(Request $request)
    {
        if (is_numeric($request->get('email'))) {
            return ['mobile' => $request->get('email'), 'password' => $request->get('password')];
        }
        return $request->only($this->username(), 'password');
    }
}
