<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePupilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pupils', function (Blueprint $table) {
          
            $table->bigIncrements('pup_id');
            $table->unsignedBigInteger('id')->unique()->index();
           
            $table->string('name');       
            $table->date('entry'); // Date of admission
            $table->char('gender',1); // M or F
            $table->integer('status')->default(1); // 1 - active , 0 - Inactive
            $table->integer('guardian')->nullable()->default(0); // Use Id of Users Table if Guadian is involved
            $table->string('reg_no')->nullable()->default('');

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
        Schema::dropIfExists('pupils');
    }
}
