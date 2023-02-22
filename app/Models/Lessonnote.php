<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Enrollment;
use App\Score;
 
class Lessonnote extends Model
{
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'tea_id', 'id');
    }
    public function subject()
    {
        return $this->belongsTo(Subject::class, 'sub_id', 'id');
    }
    public function term()
    {
        return $this->belongsTo(Term::class, 'term_id', 'id');
    }

   
     /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'tea_id',  'sub_id', 'calendar_id', 'class_index', 'title',
        'date_of', 'comment_principal', 'comment_admin', 'period', 'lessonnote_file', 
        'submission', 'resubmission', 'revert', 'approval','launch', 'closure','exclosure'
    ];

    /**
     * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [];
}
