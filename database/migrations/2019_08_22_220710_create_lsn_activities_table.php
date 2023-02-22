<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLsnActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Used for when the Principal/Teacher makes a decision on the Lessonnote and you want to check timing
        Schema::create('lsn_activities', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->unsignedBigInteger('lsn_id')->index();
            $table->integer('owner'); // Principal / Proprietor
            $table->string('ownertype'); // type of user ( 0 , 1 )

            $table->string('expected'); // timestamps
            $table->string('actual')->nullable(); // timestamps
            $table->integer('action'); // 0 - submitted, 1 - not good enough

            $table->integer('slip'); //0 - in time, 1 - late time
            $table->timestamps();

            $table->foreign('lsn_id')
            ->references('id')
            ->on('lessonnotes')
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
        Schema::dropIfExists('lsn_activities');
    }
}
