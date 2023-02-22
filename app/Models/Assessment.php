<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
   
    public function lessonnote()
    {
        return $this->belongsTo(Lessonnote::class, 'lsn_id', 'id');
    }
    public function enrollment()
    {
        return $this->belongsTo(Enrollment::class, 'enrol_id', 'id');
    }

     /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
     'lsn_id', 'enrol_id', 'title', 'date_of', 'max', 'score', "type_of", 'actual'
   ];
}
