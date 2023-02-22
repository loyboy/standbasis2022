<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('api')->group(function(){
    Route::prefix('v1/')->group(function(){
        Route::get('/', function () {
            abort(403, 'Unauthorized');
        });        
        
        Route::group(['prefix' => 'auth'], function () {
            Route::post('login', 'API\AuthController@login');
            Route::post('register', 'API\AuthController@signup');

            Route::post('verify-mobile-number', 'API\AuthController@sendVerificationCodeToMobile');
            Route::post('validate-verification-pin', 'API\AuthController@validateVerificationPin');
            Route::post('send-recovery-email', 'API\ForgotPasswordController@sendRecoveryEmail');
            Route::post('verify-recovery-token', 'API\ForgotPasswordController@verifyPasswordToken');
            Route::post('update-password', 'API\ForgotPasswordController@changePassword');           
            Route::post('/update-existing-user', 'API\AuthController@onBoardExistingMemebers');                                    


            //Login for Standbasis Admin
            Route::post('login-admin','API\AuthController@loginAdmin')->name('admin.login');
            Route::post('register-school','API\AuthController@signupSchool')->name('proprietor.register');

            //login to customer account
            Route::post('login_pin', 'API\AuthController@loginwithpin');
            //reset password
            Route::post('reset/password', 'API\ForgotPasswordController@resetPassword');
            //reset code
            Route::post('reset/pin', 'API\ForgotPasswordController@resetPIN');
            //verification
            Route::get('email/verify/{id}', 'API\VerificationController@verify')->name('verification.verify'); // Make sure to keep this as your route name
            //fprgot password
            Route::post('password/email', 'API\ForgotPasswordController@forgot');
            Route::post('password/reset', 'API\ForgotPasswordController@reset')->name('password.reset');
            //Changed the default password reset functionality
            Route::post('forgot-password', 'API\AuthController@forgotV2')->name('password.reset');
            //generate token for all users. Used during onbording process
            Route::get('onboaring-tokens', 'API\AuthController@getPersonalAccessTokenForAllUser');
        });
        //verify pin
        Route::group(['middleware' => ['auth:api']], function () {
           
            Route::prefix('teacher')->group(function () {

                    //update password
                    Route::post('password/update', 'API\ForgotPasswordController@changePassword');
                    Route::post('pin/update', 'API\AuthController@changePin');

                    //teacher activities
                    Route::get('/', 'API\TeacherController@index');                    
                    Route::post('/create', 'API\TeacherController@store'); 
                    Route::get('/details/{id}', 'API\TeacherController@show'); 
                    Route::put('/update/{id}', 'API\TeacherController@update');
                    Route::put('/update_self', 'API\TeacherController@updateSelf');
                    Route::delete('/delete/{id}', 'API\TeacherController@destroy');                     
            });
           
        });
        
    
    });
});
