<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLsnManagementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        ////Content , Presentation (DId you organise it well), Grammar (Didi you mess up the tenses?)
        //This table checks the kind of Lessonnote that was submitted, if it is good or not
        // and calculate the Performnance
        // 
        Schema::create('lsn_managements', function (Blueprint $table) {
            $table->bigIncrements('id');           

            $table->unsignedBigInteger('lsn_id')->index();
            
            $table->integer('quality')->default(0); // Number of cycles (2 and above ) = 0 ( 50 - 100 )
            $table->integer('subject_perf')->default(0); // Subject performance from assesmnents ( 20 - 100 )
            $table->integer('time_manangement')->default(0); // time to close vs closure time ( 20 - 100 )

            $table->integer('score')->default(0);

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
        Schema::dropIfExists('lsn_managements');
    }
}
