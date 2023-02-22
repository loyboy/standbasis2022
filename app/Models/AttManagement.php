<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttManagement extends Model
{
    public function attendance()
    {
        return $this->belongsTo(Attendance::class, 'att_id', 'id');
    }

    protected $table = 'att_managements';
    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
    'att_id', 'timing', 'completeness', 'cls_perf', 'score'
   ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
