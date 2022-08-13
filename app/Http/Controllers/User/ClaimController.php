<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Claim;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ClaimController extends Controller
{
    public function index()
    {
        $user = User::where('role', 'user')->get();
        $claims = Claim::with('user')->with('campaign')->where('user_id', Auth::id())->get();

        return view('dashboard.user.claim', ['customers' => $user, 'claims' => $claims]);
    }
}
