<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class UserMerchant extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasApiTokens;

   protected $table = 'users';

    protected $hidden = [
          'password',
                "old_customer_id",
                "role",
                "email_verified_at",
                "social_id",
                "picture",
                "gender",
                "dob",
                "created_at",
                "updated_at",
                "last_active",
                "role_id",
                "merchant_id",
                "store_id",
                "store_setting_id",
                "status_id",
                "status",
                "pin",
                "verify_code",
                "trans_pin",
                "platform",
                "verified",
                "pin_check",
                "remember_token"  
    ];
    
      
    protected $appends = array('logo');
    
    public function store()
	{
	    return $this->hasMany(Store::class,  'merchant_id','merchant_id');
	}
	
	public function getlogoAttribute()
    {
        return "https://plenti.tvioafrica.co/ads_logo/". $this->image;
    }
	public function merchant()
	{
	    return $this->hasOne(Merchant::class,  'id','merchant_id');
	}

}
