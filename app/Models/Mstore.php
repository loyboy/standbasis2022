<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mstore extends Model
{
    use HasFactory;

    protected $table = 'mstores';

    protected $fillable = [
        'user_id', 'store_name', 'website', 'image', 'address', 'lat', 'lng',
        'contact_person_firstname', 'contact_person_lastname', 'job_title', 'contact_email', 'mobile_no',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
