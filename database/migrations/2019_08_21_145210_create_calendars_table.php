<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCalendarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calendars', function (Blueprint $table) {
          
            $table->bigIncrements('calendar_id');
            $table->unsignedBigInteger('id')->unique()->index();
           
            $table->string('session');// 2021/2022
            $table->integer('term'); // 1, 2, 3
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('status')->default(0); // 0 - inactive, 1 - active
            $table->string('holiday')->nullable(); // 2022-10-08 ; 2022-10-23
            $table->integer('cron_is_live')->default(0);

            $table->unsignedBigInteger('sch_id')->index();
            $table->timestamps();

            $table->foreign('sch_id')
            ->references('id')
            ->on('schools')
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
        Schema::dropIfExists('calendars');
    }
}
