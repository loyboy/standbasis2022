<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
 
class Enrollment extends Model
{
    public function pupil()
    {
        return $this->belongsTo(Pupil::class, 'pupil_id', 'id');
    }
    public function calendar()
    {
        return $this->belongsTo(Calendar::class, 'calendar_id', 'id');
    }
    public function class_stream()
    {
        return $this->belongsTo(ClassStream::class, 'class_id', 'id');
    }
    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
        'pupil_id', 'calendar_id', 'class_id', 'enrol_date', 'session_count'
   ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
