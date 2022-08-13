<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlentiCredit extends Model
{
    use HasFactory;

    protected $table = 'plenticredit';
    protected $hidden = [        
      
        'load_advise',
      
        'updated_at' 
    ];  

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(Customer::class, 'user_id');
    }

    public function plentiLoanRepayments()
    {
        return $this->hasmany(PlentiLoanRepayments::class,  'loan_id','id');
    }   
}
