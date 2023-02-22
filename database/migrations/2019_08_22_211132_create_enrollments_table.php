<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnrollmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enrollments', function (Blueprint $table) {
         
            $table->bigIncrements('enrol_id');
            $table->unsignedBigInteger('id')->unique()->index();

            $table->unsignedBigInteger('pupil_id')->index();
            $table->unsignedBigInteger('calendar_id')->index();
            $table->unsignedBigInteger('class_id')->index();
            $table->date('enrol_date')->nullable();
            $table->integer('session_count')->default(1);
            $table->timestamps();

            $table->foreign('pupil_id')
            ->references('id')
            ->on('pupils')
            ->onDelete('cascade');

            $table->foreign('calendar_id')
            ->references('id')
            ->on('calendars')
            ->onDelete('cascade');

            $table->foreign('class_id')
            ->references('id')
            ->on('class_streams')
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
        Schema::dropIfExists('enrollments');
    }
}
