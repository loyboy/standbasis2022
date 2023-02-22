<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LsnActivity extends Model
{
    protected $table = 'lsn_activities';
    public function lessonnote()
    {
        return $this->belongsTo(Lessonnote::class, 'lsn_id', 'id');
    }

    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'lsn_id', 'owner', 'ownertype', 'expected', 'actual', 'slip', 'action'
    ];
}
