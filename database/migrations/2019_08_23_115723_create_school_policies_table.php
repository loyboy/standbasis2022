<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchoolPoliciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('school_policies', function (Blueprint $table) {
           
            $table->bigIncrements('id');

            $table->unsignedBigInteger('sch_id')->index();
            $table->integer('fair')->nullable(); //in Minutes, the  time allowed for it to be safe (Attendance)
            $table->integer('late')->nullable(); //in Minutes, the time allowed for it to be late (Attendance)
            $table->integer('signoff')->nullable();//in Minutes, the time allowed for it to be really late (Attendance)
            $table->integer('accept_principal')->nullable();  //in days , the time allowed for a Principal to react to Attendance 
            $table->integer('accept_proprietor')->nullable(); //in days , the time allowed for a Proprietor to react to Attendance

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
        Schema::dropIfExists('school_policies');
    }
}
