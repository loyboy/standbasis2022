<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GiftCards extends Model
{
    protected $table = 'gift_card_config';

    protected $perPage = 20;

    protected $casts = [
        'created_at' => 'datetime'
    ];
    
     protected $appends = array('image','Colour');
    
    public function getImageAttribute()
    {
        return "https://plenti.tvioafrica.co/gift_cards/". $this->card_image;
    }
  
     public function getColourAttribute()
    {
        return "0xFF". $this->card_color;
    }

   protected $dateFormat = 'U';
    
   public $timestamps = FALSE;

}
