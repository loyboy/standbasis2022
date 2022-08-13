<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlentiUser extends Model
{
    use HasFactory;

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

    public $fillable = [
           'user_id', 'business_name', 'industry', 'website', 'address', 'mobile'
    ];

    public function store()
	{
	    return $this->hasOne(Store::class,  'id','store_id');
	}
}
