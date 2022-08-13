<?php

namespace App\Traits;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\AppSettings ;

trait Settings
{
     
    public function appSettings()
    {      
        $settings = [];
        foreach(AppSettings::get() as  $key => $item){
            $settings[$item->attributes] = $item->value;
        }
        return (object) $settings;
    }

}