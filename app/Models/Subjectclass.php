<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subjectclass extends Model
{

    protected $table = 'subjectclasses';

    public function class_stream()
    {
        return $this->belongsTo(ClassStream::class, 'Class_ID', 'id');
    }
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'Teacher_ID', 'id');
    }
    public function subject()
    {
        return $this->belongsTo(Subject::class, 'Subject_ID', 'id');
    }
   /* public function timetable()
    {
        return $this->belongsTo('App\Timetable', 'foreign_key', 'time_id');
    } */

    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
 
}
