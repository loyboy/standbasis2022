<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
// php artisan migrate:fresh
class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->bigIncrements('sch_id');
            $table->unsignedBigInteger('id')->unique()->index();
            
            $table->string('name');

            $table->string('type_of'); //Secondary or Primary
            
            $table->string('town')->nullable();           
                      
            $table->string('lga');//Use this to mark each Local goverment
            $table->string('state'); 
          //  $table->char('polregion',2); // SS, NW, NE, SW, SE, NC

            $table->string('owner'); // Full name        

            $table->string('faith')->nullable(); // Christian , Islamic , Neutral
            $table->string('operator'); // Government, Private Single, Private Group
            $table->string('gender')->nullable(); // mixed or same
            $table->string('residence'); // boarding / not
            $table->integer('population')->nullable();
            $table->string('logo')->nullable(); // a file path is better here
            $table->string('location')->nullable();
           
           // $table->string('address');
            $table->string('email')->unique()->nullable();
            $table->string('phone')->unique()->nullable();

            $table->integer('sri')->nullable()->default(0); // Check if this school has been rated by us yet or not
            $table->integer('status')->nullable()->default(0); // If school is active yet on our platform or not

            $table->string('mission')->nullable(); 
            $table->string('rating')->nullable(); //a picture file path again here for displaying Rating
            $table->string('tour')->nullable(); // a ppt or word document file path here too
            $table->string('calendar_upload')->nullable(); //a picture or pdf file path here for showing us your Current school calendar
            $table->string('teachers_upload')->nullable();
            $table->string('students_upload')->nullable();
            $table->string('classroom_upload')->nullable();
            $table->string('timetable_upload')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schools');
    }
}
