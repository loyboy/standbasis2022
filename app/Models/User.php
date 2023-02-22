<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'teacher_id', 'id');
    }

    public function pupil()
    {
        return $this->belongsTo(Pupil::class, 'pupil_id', 'id');
    }

    public function principal()
    {
        return $this->belongsTo(Teacher::class, 'principal_id', 'id');
    }

    public function proprietor()
    {
        return $this->belongsTo(School::class, 'proprietor_id', 'id');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'name', 'password', 'type_of', 'status', 
        'teacher_id','pupil_id','principal_id','proprietor_id','role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */

}
