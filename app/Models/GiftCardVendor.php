<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GiftCardsVendor extends Model
{
    protected $table = 'gift_card_vendor';

    protected $perPage = 20;

    protected $casts = [
        'created_at' => 'datetime'
    ];
    
     protected $appends = array('logo');
    
    public function getLogoAttribute()
    {
        return "https://plenti.tvioafrica.co/ads_logo/". $this->image;
    }


   protected $dateFormat = 'U';
    
   public $timestamps = FALSE;

}
