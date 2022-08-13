<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlentiLoanRepayments extends Model
{
    use HasFactory;

    protected $table = 'plenti_loan_repayments';
    protected $guarded = [];
    protected $hidden = [  
        'created_at',
        'updated_at' 
    ];  

    public function plentiCredit()
    {
        return $this->belongsTo(PlentiCredit::class, 'user_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
