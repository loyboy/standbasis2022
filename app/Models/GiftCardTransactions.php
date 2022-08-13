<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GiftCardTransactions extends Model
{
    use HasFactory;
     
    protected $table = 'gift_cards_transactions';
    
    protected $fillable = ['title', 'amount', 'user_id', 'point','extra_info'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
        
    public function store()
    {
        return $this->belongsTo(Store::class, 'store_id', 'id');
    }

}
