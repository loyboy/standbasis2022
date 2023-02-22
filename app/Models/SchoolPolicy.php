<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SchoolPolicy extends Model
{
    protected $table = 'school_policies';
    public function school()
    {
        return $this->belongsTo(School::class, 'sch_id', 'id');
    }
     /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [ 'sch_id', 'fair', 'late', 'signoff', 'accept_principal', 'accept_proprietor'  ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
