<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
      
    public function calendar()
    {
        return $this->belongsTo(Calendar::class, 'calendar', 'id');
    }

    public function timetable()
    {
        return $this->belongsTo(Timetable::class, 'time_id', 'id');
    }

    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
    'calendar',  'time_id', 'date_of', 'period', 'image', 'is_done',  'is_delegated', 'description'
   ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
