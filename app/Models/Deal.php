<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    use HasFactory;
    protected $hidden = [ 'user_id',"merchant_id"];

    protected $with = ['store', 'merchant'];
      
    protected $appends = array('DealEndDate','DealsLocations','StoreList');

    protected $guarded = ["id"]; //← the field name inside the array is not mass-assignable
      
    public function getDealEndDateAttribute()
    {
        $start_date = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', date('Y-m-d H:i:s'));
        $end_date = \Carbon\Carbon::createFromFormat('Y-m-d', $this->end_date);
        return $different_days = $start_date->diffInDays($end_date);
    }
  
    public function getDealsLocationsAttribute()
    {     
         $locations = json_decode($this->stores, true);
        return $locations != null ? \DB::table('stores')->whereIn('id', $locations)->get(): [] ;
    }

    public function getStoreListAttribute()
    {     
         $locations = json_decode($this->stores, true);
        return  $locations;
    }


    public function store()
    {
        return $this->belongsTo(UserStore::class, 'user_id');
    }

    public function status()
    {
        return $this->hasOne(Status::class, 'id', 'status');
    }

    public function category()
    {
        return $this->hasOne(Category::class,  'id','category');
    }   

     public function merchant()
    {
        return $this->belongsTo(Merchant::class, 'merchant_id');
    }
}
