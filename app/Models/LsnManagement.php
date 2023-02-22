<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LsnManagement extends Model
{
    public function lessonnote()
    {
        return $this->belongsTo(Lessonnote::class, 'lsn_id', 'id');
    }

    protected $table = 'lsn_managements';
    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
    'lsn_id', 'quality', 'subject_perf', 'time_manangement', 'score'
   ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
