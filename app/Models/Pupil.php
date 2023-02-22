<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pupil extends Model
{
    public function school()
    {
        return $this->belongsTo(School::class, 'school_id', 'id');
    }

    public function guardian()
    {
        return $this->belongsTo(User::class, 'guardian', 'id');
    }

    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
    'school_id', 'name', 'gender', 'entry', 'status' , 'guardian', 'reg_no'
   ];
}
