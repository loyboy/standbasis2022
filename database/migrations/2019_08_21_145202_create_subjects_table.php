<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->bigIncrements('sub_id');
            $table->unsignedBigInteger('id')->unique()->index();

            $table->string('name'); // e.g Physics, Mathematics
            $table->string('category')->nullable();// Science or Arts
            $table->string('sch_id')->nullable(); // Id of School in case a Subject is not in our database
            $table->timestamps();

          /*  $table->foreign('sch_id')
            ->references('id')
            ->on('schools')
            ->onDelete('cascade');*/
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subjects');
    }
}
