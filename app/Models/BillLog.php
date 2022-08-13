<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillLog extends Model
{
    use HasFactory;

    protected $table = 'bill_logs';

    public $fillable = [
           'request', 'response', 'category', 'amount', 'status', 'store_id','user_id', 'request_type', 'points_earn'
    ];

    public function customer()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function store()
    {
        return $this->belongsTo(Store::class, 'store_id', 'id');
    }
}
 
//CREATE TABLE bill_logs AS SELECT user_id, store_id, request_type, request, response, newtwork, amount, points_earn, status, created_at, updated_at FROM vtu_logs;
//ALTER TABLE bill_logs add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;
//ALTER TABLE bill_logs MODIFY COLUMN column_name datatype;
//ALTER TABLE bill_logs CHANGE newtwork category varchar(200);