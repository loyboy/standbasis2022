<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /** 
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  ...$guards
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;
        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                if (Auth::user()->role == 'admin' || Auth::user()->role == 'superadmin') {
                    return redirect()->route('admin.dashboard');
                } elseif (Auth::user()->role == 'user') {
                    return redirect()->route('user.dashboard');
                } elseif (Auth::user()->role == 'principal') {
                    return redirect()->route('principal.dashboard');
                } elseif (Auth::user()->role == 'government') {
                    return redirect()->route('government.dashboard');
                } elseif (Auth::user()->role == 'proprietor') {
                    return redirect()->route('proprietor.dashboard');
                }
                
            }
        }
        return $next($request);
    }
}
