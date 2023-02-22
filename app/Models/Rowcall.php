<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rowcall extends Model
{
    public function attendance()
    {
        return $this->belongsTo(Attendance::class, 'att_id', 'id');
    }
    public function pupil() //
    {
        return $this->belongsTo(Pupil::class, 'pup_id', 'id');
    }
     /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'att_id', 'pup_id', 'pupil_name', 'status_of', 'remark'
    ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
