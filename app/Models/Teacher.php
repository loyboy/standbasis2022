<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{

    public function school()
    {
        return $this->belongsTo(School::class, 'sch_id', 'id');
    }
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sch_id', 'fname', 'lname', 'agerange', 'bias', 'gender', 
        'coursetype', 'qualification', 'experience', 'photo', 'office', 'type_of', 'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
