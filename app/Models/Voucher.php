<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    protected $fillable = ['user_id','amount', 'store_name', 'store_email', 'store_mobile','points','image','validated','reciept','address','created_at'];
    
    protected $table = 'vouchers';
    
    protected $perPage = 20;
    
    protected $casts = [
    'created_at' => 'datetime'
    ];
    
     protected $appends = array('logo','date');
    
    protected $dateFormat = 'U';
    
    public $timestamps = FALSE;
    
    public function getLogoAttribute()
    {
    return "https://plenti.tvioafrica.co/ads_logo/". $this->image;
    }
    
    public function getDateAttribute()
    {
        return date('D jS, M Y',  strtotime($this->created_at));
    }

    public function customer()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
