<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vtu extends Model
{
    use HasFactory;

    protected $table = 'vtu';

    public $fillable = [
           'integration', 'balance'
    ];

    public function vtu_log()
    {
        return $this->hasMany(VtuLog::class, 'vtu_id','id');
    }
}
 