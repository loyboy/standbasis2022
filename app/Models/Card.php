<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
   protected $fillable = ['card','customer_id','active'];
   
   protected $hidden = array('created_at','modified', 'updated_at','created', 'bank_card','active','customer_id');

   
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
