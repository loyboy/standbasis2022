<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAssessmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assessments', function (Blueprint $table) {
           
            $table->bigIncrements('id');

            $table->unsignedBigInteger('lsn_id')->index()->nullable();// its null if its an exam stuff
            $table->unsignedBigInteger('enrol_id')->index();         

            $table->string('title');

            $table->integer('actual');
            $table->integer('max');
            $table->integer('score'); //pls add trigger

            $table->date('date_of');
            $table->string('type_of'); // Type of Assessment - CW, HW, TS, MT, TE
         
            $table->timestamps();

            $table->foreign('lsn_id')
            ->references('id')
            ->on('lessonnotes')
            ->onDelete('cascade');

            $table->foreign('enrol_id')
            ->references('id')
            ->on('enrollments')
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
        Schema::dropIfExists('assessments');
    }
}
