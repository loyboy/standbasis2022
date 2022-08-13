<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Merchant
 *
 * @property $id
 * @property $contact_first_name
 * @property $contact_last_name
 * @property $job_title
 * @property $mobile
 * @property $user_id
 * @property $contact_email
 * @property $contact_phone
 * @property $contact_altphone
 * @property $daalu_commision
 * @property $zip
 * @property $state_id
 * @property $city_id
 * @property $url
 * @property $image
 * @property $points
 * @property $merchant_name
 * @property $address
 * @property $customer_percentage
 * @property $created
 * @property $modified
 * @property $status_id
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Merchant extends Model
{
    
    static $rules = [
		'contact_first_name' => 'required',
		'user_id' => 'required',
		'contact_email' => 'required',
		'daalu_commision' => 'required',
		'state_id' => 'required',
		'city_id' => 'required',
		'points' => 'required',
		'merchant_name' => 'required',
		'address' => 'required',
		'customer_percentage' => 'required',
		'created' => 'required',
		'modified' => 'required',
		'status_id' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['contact_first_name','contact_last_name','job_title','mobile','user_id','contact_email','contact_phone','contact_altphone','daalu_commision','zip','state_id','city_id','url','image','points','merchant_name','address','customer_percentage','created','modified','status_id'];

      public function status()
	{
	    return $this->hasOne(Status::class, 'id', 'status_id');
	}
	
    public function store()
	{
	    return $this->hasMany(Store::class,  'merchant_id','id');
	}


}
