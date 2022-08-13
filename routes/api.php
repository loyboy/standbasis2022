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
        
        Route::get('verify-account', 'API\MerchantController@verifyMerchant');
        Route::group(['prefix' => 'auth'], function () {
            Route::post('login', 'API\AuthController@login');
            Route::post('verify-mobile-number', 'API\AuthController@sendVerificationCodeToMobile');
            Route::post('validate-verification-pin', 'API\AuthController@validateVerificationPin');
            Route::post('send-recovery-email', 'API\ForgotPasswordController@sendRecoveryEmail');
            Route::post('verify-recovery-token', 'API\ForgotPasswordController@verifyPasswordToken');
            Route::post('update-password', 'API\ForgotPasswordController@changePassword');
            Route::post('register', 'API\AuthController@signup');
            Route::post('/update-existing-user', 'API\AuthController@onBoardExistingMemebers');                    
            Route::post('/manual-credit-customer-airtime', 'API\BillController@manualCreditCustomer');                    


            //reCallFailedAirtime
            Route::post('airtime-requery', 'API\BillController@airtimeRequery');

            //main admin and mercahnt authentication
            Route::post('login-admin','API\MerchantController@loginMerchant')->name('merchants.login');
            Route::post('register-merchant','API\MerchantController@signupMerchant')->name('merchants.register');
            Route::post('onboard_existing_memebers', 'API\AuthController@onBoardExistingMemebers');

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
            //get gift cards
            Route::get('gift-cards', 'API\AuthController@giftCards');
            Route::get('gift-cards-vendor', 'API\LoyaltyController@getGiftCardsByBrand');
            Route::post('/send-verification-code', 'API\AuthController@reSendVerificationCode');
            Route::get('/get-merchants', 'API\LoyaltyController@getmerchants');
        });
        //verify pin
        Route::group(['middleware' => ['auth:api']], function () {
            Route::post('auth/verify-pin', 'API\AuthController@verify_pin');
            Route::post('auth/create-pin', 'API\AuthController@createPin');
            Route::post('auth/create-trans-pin', 'API\AuthController@trans_pin');
            Route::post('auth/verify-transpin', 'API\AuthController@verify_transpin');
            Route::post('register-store','API\MerchantController@signupStore')->name('store.register');
            
            Route::prefix('merchant')->group(function () {
                Route::post('deals-transactions','API\TransactionController@dealsTransaction')->name('deals.transactions');              
            });

            Route::prefix('user')->group(function () {
                Route::middleware(['verified'])->group(function () {
                    //update password
                    Route::post('password/update', 'API\ForgotPasswordController@changePassword');
                    Route::post('pin/update', 'API\AuthController@changePin');
                    Route::get('transactions', 'API\AuthController@userTransactions');
                    //all user
                    Route::get('/', 'API\AuthController@user');                    
                    Route::post('/update', 'API\AuthController@user_update');                    
                    Route::post('/earn-points', 'API\LoyaltyController@earnPoints');
                    //Create voucher
                    Route::post('/create-voucher', 'API\VoucherController@createVoucher');
                    //Reverse voucher
                    Route::post('/reverse-voucher', 'API\VoucherController@reverseVoucher');
                    //Get all user voucher
                    Route::get('/get-user-voucher', 'API\VoucherController@getVoucher');                    
                    Route::post('/create-deal-transaction', 'API\AuthController@dealElectronicReciept');
                    //fund wallet
                    Route::post('/fund-wallet', 'API\IndexController@fund_wallet');
                    //Generate Voucher
                    Route::prefix('voucher')->group(function () {
                        Route::post('/generate', 'API\VoucherController@voucher_Store');
                        Route::get('/dashboard', 'API\VoucherController@dashboard');
                        Route::get('/get-voucher', 'API\VoucherController@get_voucher_by_id');
                        Route::put('/validate-voucher', 'API\VoucherController@validate_voucher');
                    });
                    //View Logs of all Transactions
                    Route::prefix('transaction')->group(function () {
                        Route::get('/dashboard', 'API\TransactionController@dashboard'); //
                        Route::get('/deals-transactions','API\TransactionController@dealsTransaction');
                        Route::get('/get-transaction', 'API\TransactionController@get_transaction_by_id');
                        Route::get('/get-deal-transaction', 'API\TransactionController@getDealTransactionById');
                    });
                    Route::prefix('giftcard')->group(function () {
                        Route::get('/dashboard', 'API\GiftCardController@dashboard');
                        Route::put('/validate-giftcard', 'API\GiftCardController@validate_giftcard');
                        Route::get('/get-giftcard', 'API\GiftCardController@get_giftcard_by_id');
                    });
                    //bills
                    Route::prefix('bills')->group(function () {                    
                        //all bills
                        Route::get('/', 'API\BillController@all_bills');
                        Route::get('/get-bill', 'API\BillController@get_bill_by_id');
                        Route::get('/dashboard', 'API\BillController@dashboard');
                        Route::get('/dashboard-utility', 'API\BillController@dashboardUtility');
                        Route::post('/buy-airtime', 'API\BillController@airtime')->name('buy.airtime');
                        // Route::get('/default-settings', 'API\BillController@settings')->name('default.settings');
                        Route::post('/buy-data', 'API\BillController@data')->name('buy.data');
                        //make any shago payment 
                        Route::post('/shago-pay', 'API\BillController@shagoPayment');
                        //get all shago operators
                        Route::get('/shago-operators', 'API\BillController@shagoOperators');
                        //data plan
                        Route::get('/dataplan', 'API\BillController@dataplan');
                        //all network
                        Route::get('/network', 'API\BillController@network');
                        //all airtime
                        Route::get('/all-airtime', 'API\BillController@all_airtime');
                        //cable tv
                        Route::get('/get-cable-list', 'API\BillerController@cableList');
                        //electricity
                        Route::get('/get-electricity-list', 'API\BillerController@electricityList');
                        //subscribe electricity
                        Route::post('/subscribe-biller-electricity', 'API\BillerController@subscribe_biller');
                        //subscribe cable
                        Route::post('/subscribe-biller-cables', 'API\BillerController@subscribe_cable');
                        Route::get('/airtime-operators', 'API\BillController@airtime_operators');
                    });
                    //index details
                    Route::get('index', 'API\IndexController@index');
                    //all offers
                    Route::get('offers', 'API\IndexController@offers');
                    //near by store
                    Route::get('offers/nearby', 'API\IndexController@offers_nearby');
                    //get transaction history
                    Route::get('transaction/history', 'API\IndexController@transaction_history');
                    //campaigns
                    Route::get('campaigns', 'API\IndexController@campaign');
                    //deals
                    Route::get('deals', 'API\LoyaltyController@getDeals');
                    //redeem offer
                    Route::post('offers/code', 'API\RedeemController@store');
                    Route::post('offers/upload', 'API\RedeemController@upload'); 
                    //loyalty
                    Route::prefix('loyalty')->group(function () {
                        Route::get('/', 'API\LoyaltyController@index');
                        Route::get('/campaigns/{store_id}', 'API\LoyaltyController@campaigns');
                    });
                     //Plenti Credit
                     Route::prefix('plenticredit')->group(function () {
                        Route::get('/dashboard', 'API\PlentiCreditController@dashboard');
                        Route::get('/get-item', 'API\PlentiCreditController@get_item_by_id');
                        Route::post('/update-loan', 'API\PlentiCreditController@update_loan_status');
                        Route::post('/update-loan-installment', 'API\PlentiCreditController@update_loan_installment');
                        Route::post('/get-loan', 'API\PlentiCreditController@checkAccountValidity');
                        Route::get('/get-status', 'API\PlentiCreditController@getCurrentLoanStatus');
                      //  Route::post('/earn-points', 'API\PlentiCreditController@earnPoints');
                        Route::post('/send-reminder', 'API\PlentiCreditController@sendReminder');
                        Route::post('/earn-loan-points', 'API\PlentiCreditController@earnPoints');
                    });
                    //post cordinate
                    Route::post('cordinate', 'API\RedeemController@cordinate');
                });
            });
            Route::get('dashboard-charts',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'dashboardCharts'])->name('dashboard.charts');
            Route::get('monthly-account-summary',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'monthlyAccountSummary'])->name('monthly.account.summary');
            Route::get('unclaimed-voucher',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'unclaimedVoucher'])->name('unclaimed.voucher');
            Route::get('unverifed-earnings',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'getUnVerifiedEarnings'])->name('unverifed.earnings');
            Route::get('unclaimed-giftcards',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'getUnclaimedGiftcards'])->name('unclaimed.giftcards');
            Route::get('vtu-profits',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'getVTUProfits'])->name('vtu.profits');
            Route::get('transaction-logs',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'customerTransactions'])->name('transaction.log');
            Route::get('get-user',[\App\Http\Controllers\API\AuthController::class, 'getUserById'])->name('get.user');
            Route::get('get-users',[\App\Http\Controllers\API\AuthController::class, 'getAllUser'])->name('get.users');
            Route::get('merchant-dashboard',[\App\Http\Controllers\API\MerchantController::class, 'dashboard'])->name('get.merchants');
            Route::get('merchant-stores',[\App\Http\Controllers\API\MerchantController::class, 'getStores'])->name('get.merchants.stores');        
            Route::post('update-user-profile',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'updateUserProfile'])->name('update.userprofile');
            Route::post('update-user',[\App\Http\Controllers\API\CustomerTransactionsController::class, 'updateUser'])->name('update.user');
        });
        
        Route::group(['prefix' => 'app'], function () {
            Route::get('/get-settings', 'API\AppController@getSettings');
            //get deals
            Route::get('deals', 'API\LoyaltyController@getDeals');
            Route::post('upload-deals',[\App\Http\Controllers\API\LoyaltyController::class, 'uploadDeals'])->name('upload.deals');
            Route::post('/add-store', 'API\LoyaltyController@suggestStore');
            Route::get('/get-merchant-id', 'API\LoyaltyController@getMerchantId');
            Route::get('/get-merchant-list', 'API\LoyaltyController@getMerchantList');
            Route::get('/get-merchant-store', 'API\LoyaltyController@getMerchantStore');
            Route::post('/merchant-profile', 'API\LoyaltyController@setMerchantProfile');
            Route::post('/update-deal', 'API\LoyaltyController@updateDeal');
          
        });

        Route::group(['prefix' => 'deal'], function () {
            Route::post('/update-deal-claim', 'API\DealController@updateDealClaim');
            Route::post('/trigger-deal-transaction', 'API\DealController@triggerDealTransactionsUpdates');
        });
        
        Route::group(['prefix' => 'customer'], function () {
            Route::post('/', 'API\AuthController@getUserByMobileNo');
            Route::post('/earn-burn-points-mannually', 'API\AuthController@earnBurnPointsManually');
            Route::post('/burn-point-manually', 'API\AuthController@BurnPointsManually');
            //Register a walkin customer
            Route::post('register-walkin-customer', 'API\AuthController@RegisterWalkInCustomer');
        });
        
        Route::group(['prefix' => 'surge'], function () {
            Route::post('/login', 'API\SurgeController@login');
            Route::post('/admin-login', 'API\SurgeController@adminsLogin');
        });
        
        //bill dashboard
        Route::get('/user/bills/dashboard', 'API\BillController@dashboard')->name('airtime.dashboard');
        //vtu requery
        Route::get('vtu-requery' ,  'API\BillController@airtimeRequery')->name('vtu.requery');
    });
});
