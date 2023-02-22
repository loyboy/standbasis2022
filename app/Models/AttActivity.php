<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttActivity extends Model
{
    protected $table = 'att_activities';
    public function attendance()
    {
        return $this->belongsTo(Attendance::class, 'att_id', 'id');
    }

    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'att_id', 'owner', 'ownertype', 'expected', 'actual', 'slip', 'comment', 'action'
    ];
}
