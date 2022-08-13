<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DealTransactions extends Model
{
    use HasFactory;
     
    protected $table = 'deal_transactions';
    
    protected $fillable = ['deal_id','receipt_no', 'amount', 'user_id', 'store_id','expires_on_date','extra_info'];
    
    protected $appends = array('transactionDateTime','expiryDate');
    
    public function getTransactionDateTimeAttribute()
    {
        return date('D jS, M Y',  strtotime($this->created_at));
    }
    
      public function getExpiryDateAttribute()
    {
        return date('D jS, M Y',  strtotime($this->expires_on_date));
    }
    
    
    public function store()
    {
        return $this->belongsTo(Store::class, 'store_id', 'id');
    }

    public function customer()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class, 'deal_id', 'id');
    }

}
  