<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttManagementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('att_managements', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('att_id')->index();
            $table->integer('timing')->default(0); // 100 - Fair, 50 - late,
            $table->integer('cls_perf')->default(0); // 100 - Fair, 50 - late, 0 - Invalid
            $table->integer('completeness')->default(0); // 100 - complete, 50 - incomplete
            $table->integer('score')->default(0);// the overall performance of this management
           
            $table->timestamps();

            $table->foreign('att_id')
            ->references('id')
            ->on('attendances')
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
        Schema::dropIfExists('att_managements');
    }
}
