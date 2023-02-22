<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassStream extends Model
{
    public function school()
    {
        return $this->belongsTo(School::class, 'sch_id', 'id');
    }

    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'sch_id', 'title', 'ext', 'class_index'
    ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
