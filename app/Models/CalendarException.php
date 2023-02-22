<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CalendarException extends Model
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
    'sch_id', 'calendar_id', 'break_date', 'half_day', 
    'break_time', 'type_of', 'type_value', 'reason'
   ];
}
