<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TranStats extends Model
{
    use HasFactory;

    protected $table = 'trans_stats';
    
    protected $hidden = array('created_at', 'updated_at','customer_balance_old','new_old','customer_id');

    protected $fillable = ['customer_id', 'earn_point', 'earn_amount', 'burn_point', 'deducted_point', 'deducted_amount', 'burn_amount', 'total', 'total_transaction',
            'customer_balance', 'customer_balance_old'];
            
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
