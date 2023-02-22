<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimetablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timetables', function (Blueprint $table) {
            $table->bigIncrements('time_id');
            $table->unsignedBigInteger('id')->unique()->index();

            $table->unsignedBigInteger('sch_id')->index();

            $table->unsignedBigInteger('tea_id')->nullable()->index();            
            $table->string('tea_name')->nullable();
            $table->unsignedBigInteger('class_id')->nullable()->index();
            $table->string('class_name')->nullable();
            $table->unsignedBigInteger('sub_id')->nullable()->index();
            $table->string('sub_name')->nullable();

            $table->time('time_of'); // 08:00:00
            $table->integer('day_of'); // 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday            
           
            $table->timestamps();

            $table->foreign('sch_id')
            ->references('id')
            ->on('schools')
            ->onDelete('cascade');

            $table->foreign('tea_id')
            ->references('id')
            ->on('teachers')
            ->onDelete('cascade');

            $table->foreign('class_id')
            ->references('id')
            ->on('class_streams')
            ->onDelete('cascade');

            $table->foreign('sub_id')
            ->references('id')
            ->on('subjects')
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
        Schema::dropIfExists('timetables');
    }
}
