<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    public function school()
    {
        return $this->belongsTo(School::class, 'sch_id', 'id');
    }
    public function classstream()
    {
        return $this->belongsTo(ClassStream::class, 'class_id', 'id');
    }
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'tea_id', 'id');
    }
    public function subject()
    {
        return $this->belongsTo(Subject::class, 'sub_id', 'id');
    }

    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
    'sch_id', 'tea_id', 'tea_name', 'class_id', 'class_name', 
    'sub_id', 'sub_name', 'time_of', 'day_of'
   ];
}
