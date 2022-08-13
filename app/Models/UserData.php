<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserData extends Model
{
    use HasFactory;

    protected $table = 'user_data';

    public $fillable = [
           'user_id', 'business_name', 'industry', 'website', 'address', 'mobile'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
