<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VtuLog extends Model
{
    use HasFactory;

    protected $table = 'vtu_logs';

    public $fillable = [
           'request', 'response', 'newtwork', 'amount', 'status', 'store_id','user_id', 'request_type', 'points_earn'
    ];

    public function user()
    {
        return $this->belongsTo(VTU::class, 'id');
    }

    public function customer()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function store()
    {
        return $this->belongsTo(Store::class, 'store_id', 'id');
    }
}
 