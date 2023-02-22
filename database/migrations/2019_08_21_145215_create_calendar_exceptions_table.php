<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCalendarExceptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calendar_exceptions', function (Blueprint $table) {
          
            $table->bigIncrements('calendar_exception_id');
            $table->unsignedBigInteger('id')->unique()->index();
           
            $table->string('break_date'); // 2022-12-01
            $table->integer('half_day'); // 1 - yes , 0 - no
            $table->string('break_time')->nullable();// 4:00:00PM
            
            $table->unsignedBigInteger('calendar_id')->index();

            $table->string('type_of')->default('all'); // all / class / class-branch
            $table->string('type_value'); // If 'class' then use 'class_index' , If 'class-branch' then use 'JSS1A'
            $table->string('reason')->nullable(); // type the reason for this holiday

            $table->unsignedBigInteger('sch_id')->index();
            $table->timestamps();

            $table->foreign('sch_id')
            ->references('id')
            ->on('schools')
            ->onDelete('cascade');

            $table->foreign('calendar_id')
            ->references('id')
            ->on('calendars')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calendar_exceptions');
    }
}
