<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use App\Models\UserData;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\View\View
     */
    public function showRegistrationForm()
    {
        return view('dashboard.auth.pages.register');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            // 'first_name' => ['required', 'string', 'max:255'],
            // 'last_name' => ['required', 'string', 'max:255'],
            // 'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            // 'mobile' => ['required', 'string', 'max:255', 'unique:user_data'],
            // 'role' => ['required', 'string', 'max:255', 'in:user,merchant,admin,superadmin'],
            // 'password' => ['required', 'string', 'min:8', 'confirmed'],
            // 'business_name' => ['required_if:role,==,merchant'],
            // 'industry' => ['required_if:role,==,merchant'],
            // 'address' => ['required_if:role,==,merchant'],
            // 'avatar' => ['required_if:role,==,merchant'],
            // 'verified' => false,
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        if ($data['role'] == 'merchant') {
            $role_id = 5;
        }else{
            $role_id = 6;
        }

        $request = request();

        if ($request->hasFile('avatar')) {
            $image = $request->file('avatar');
            $fileName = Str::random(10) . '.' . $image->getClientOriginalExtension();
            $location = 'images/merchants/' . $fileName;
            Image::make($image)->save($location);
        }else{
            $fileName = null;
        }

        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'role' => $data['role'],
            'password' => Hash::make($data['password']),
            'platform' => 'fillcart',
            'last_active' => 1,
            'role_id' => $role_id,
            'pin' => Hash::make(0000),
            'username' => strtolower($data['first_name'] . '' . $data['last_name']),
            'mobile' => $data['mobile'],
            'address' => $data['address'],
            'latitude' => $data['latitude'],
            'longitude' => $data['longitude'],
            'image' =>  env('APP_URL') . '/images/merchants/' . $fileName
        ]);

        if ($user) {
            UserData::create([
                'user_id' => $user->id,
                'business_name' => $data['business_name'],
                'address' => $data['address'],
                'industry' => $data['industry'],
                'mobile' => $data['mobile'],
            ]);
            return $user;
        }
    }
}
