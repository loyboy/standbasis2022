<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

//php artisan make:model TimetableSch -m //Create a model with PHP artisan
//php artisan make:middleware AdminApi
//php artisan make:controller TeacherController --api

class School extends Model
{
    /*
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
      'name', 'type_of', 'town', 'lga', 'state', 'owner', 'faith', 'operator', 'gender', 'residence', 'population', 'logo', 
      'location', 'email', 'phone', 'sri', 'status', 'mission', 'rating', 'tour', 'calendar_upload',
      'teachers_upload', 'students_upload' , 'classroom_upload', 'timetable_upload'
   ];

   /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
   protected $hidden = [];

   private static $keysToID = array( 
      "nw" => "94", "jigawa" => "941", "kaduna" => "942","kano" => "943","katsina" => "944", "kebbi" => "945", "sokoto" => "946", "zamfara" => "947", 
      "ne" => "97", "adamawa" => "971", "bauchi" => "972","borno" => "973","gombe" => "974", "taraba" => "975", "yobe" => "976",
      "sw" => "95", "nc" => "98", "se" => "99", "ss" => "96"  ,
      
      "akwaibom" => "962", 
      "abak" => "96201", "eastern obolo" => "96202","eket" => "96203","esit eket" => "96204","essien udim" => "96205","etim ekpo" => "96206","etinan" => "96207",
      "ibeno" => "96208", "ibesikpo asutan" => "96209","ibiono ibom" => "96210","ika" => "96211","ikono" => "96212","ikot abasi" => "96213","ikot ekpene" => "96214",
      "ini" => "96215", "itu" => "96216","mbo" => "96217","mkpat enin" => "96218","nsit atai" => "96219","nsit ibom" => "96220","nsit ubium" => "96221",
      "obot akara" => "96222", "okobo" => "96223","onna" => "96224","oron" => "96225","oruk anam" => "96226","udung uko" => "96227","ukanafun" => "96228",
      "uruan" => "96229", "urue offong oruko" => "96230","uyo" => "96231"
   );

   private static $zones = array("" => "");

   public static function boot()
   {
     
      parent::boot();

      $schooltable = DB::select("SELECT MAX(s.sch_id) as mymax FROM schools s" , [] );
         
      $mymax = 0;
         
      if ( count($schooltable) > 0 ){
         $mymax = intval($schooltable[0]->mymax);
      }   

      self::creating(function($school){        
           
         if ( self::$keysToID[ strtolower($school->polregion) ] !== null ){
            
            if ( strtolower(self::$keysToID[ strtolower($school->lga) ]) !== null  ){
               
                  $schid =  self::$keysToID[ strtolower($school->lga) ];

                  if ($school->owner === "Government"){
                     $newmax = 100000 +  $mymax;
                     $schid =   $schid.''.$newmax;
                     $school->id = intval($schid); 
                  }

                  if ($school->owner === "Private Single"){
                     $newmax = 300000 +  $mymax;
                     $schid =   $schid.''.$newmax;
                     $school->id = intval($schid); 
                  }

                  if ($school->owner === "Private Group"){
                     $newmax = 200000 +  $mymax;
                     $schid =   $schid.''.$newmax;
                     $school->id = intval($schid); 
                  }
                 
            }
         }         

      });

   }

}
