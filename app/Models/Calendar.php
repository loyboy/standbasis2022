<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
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
    'sch_id', 'term', 'session', 'start_date',
    'end_date', 'status', 'holiday', 'cron_is_live'
   ];
}
