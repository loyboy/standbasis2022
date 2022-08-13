<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $table = 'stores';

    protected $fillable = [
        'merchant_id',
        'store_name',
        'image',
        'address',
        'state_id',
        'city_id',
        'contact_person_firstname',
        'contact_person_lastname',
        'email',
        'user_id',
        'mobile',
        'status',
        'daalu_commision',
        'daalu_profit',
        'daalu_constant',
        'customers_earnings',
        'daalu_threshold',
        'verify_code',
        'email_verified_at',
        'created_at',
        'updated_at' 
    ];
    
    protected $appends = array('logo');
    
    protected $hidden = [        
        'daalu_threshold',
        'created_at',
        'updated_at' 
    ];
    


    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    
    public function getLogoAttribute()
    {
        return "https://plenti.tvioafrica.co/ads_logo/". $this->image;
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function campaign()
    {
        return $this->hasMany(Campaign::class);
    }
}
