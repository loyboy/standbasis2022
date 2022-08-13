<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'role', 'last_active', 'role_id', 'pin', 'username', 'password', 'mobile', 'platform', 'image', 'state', 'city',
        'address', 'latitude', 'longitude', 'verified', 'verify_code', 'trans_pin', 'status','dob', 'gender', 'referral_code', 'merchant_id'
    ];

    protected $appends = ['cat_list', 'store_list'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'pin',
        'verify_code',
        'trans_pin'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'verified' => 'boolean'
    ];
    
    public function userdata()
    {
        return $this->hasOne(UserData::class);
    }
    
	public function card()
	{
	    return $this->hasOne(Card::class,'customer_id','id' );
	}

	public function transStat()
	{
	    return $this->hasOne(TranStats::class,  'customer_id','id');
	}
	
	public function store()
	{
	    return $this->hasOne(Store::class,  'id','store_id');
	}
	
	public function merchant()
	{
	    return $this->hasOne(Merchant::class,  'id','merchant_id');
	} 

    public function getCatListAttribute(){
        return Category::get();
    }

    public function getStoreListAttribute(){
        return Store::get();
    }
}
/*
INSERT INTO cards (card, bank_card, customer_id, active, created, modified, created_at, updated_at)
VALUES ('35196622613', '', 4587, 1, '2022-07-22 12:39:51', '2022-07-22 12:39:51', '2022-07-22 12:39:51', '2022-07-22 12:39:51' );
*/
