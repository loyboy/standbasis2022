<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = 'customer_transactions_log';

    protected $fillable = ['customer_id', 'amount_spent', 'point_deducted', 'transaction', 'ref', 'transaction_code', 'status'];
}
