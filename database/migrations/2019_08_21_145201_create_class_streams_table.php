<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClassStreamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */ 
    public function up()
    {
        Schema::create('class_streams', function (Blueprint $table) {
            $table->bigIncrements('cls_id');
            $table->unsignedBigInteger('id')->unique()->index();

            $table->unsignedBigInteger('sch_id')->index();
            $table->string('title'); // JSS1 / JSS2 / JSS3
            $table->string('ext')->nullable(); // Whatever it is
            $table->integer('class_index');  //  1 - Primary One, 2 - Primary Two, ..... 12 - SS3
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
        Schema::dropIfExists('class_streams');
    }
}
