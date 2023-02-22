<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonnotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lessonnotes', function (Blueprint $table) {
           
            $table->bigIncrements('id');
          //  $table->unsignedBigInteger('id')->unique()->index();

            $table->unsignedBigInteger('tea_id')->index(); // Teacher Id
            $table->unsignedBigInteger('sub_id')->index(); // Subject Id
            $table->unsignedBigInteger('calendar_id')->index(); // Calendar Id
            
            $table->string('title',100);
            $table->integer('class_index'); //use class Category here to avoid duplication
            $table->date('date_of'); //mutable on submit
            
            $table->string('comment_principal',400)->nullable();
            $table->string('comment_admin',400)->nullable();
            $table->integer('period');// Week 1-12
            $table->string('lessonnote_file');

            $table->datetime('submission')->nullable()->default("1970-10-10 00:00:00");
            $table->datetime('resubmission')->nullable()->default("1970-10-10 00:00:00");
            $table->datetime('revert')->nullable()->default("1970-10-10 00:00:00");
            $table->datetime('approval')->nullable()->default("1970-10-10 00:00:00");
            $table->integer('cycle')->default(1);
            $table->datetime('launch')->nullable()->default("1970-10-10 00:00:00");
            $table->datetime('closure')->nullable()->default("1970-10-10 00:00:00");
            $table->datetime('exclosure')->nullable()->default("1970-10-10 00:00:00");

            $table->timestamps();

            $table->foreign('tea_id')
            ->references('id')
            ->on('teachers')
            ->onDelete('cascade');

            $table->foreign('sub_id')
            ->references('id')
            ->on('subjects')
            ->onDelete('cascade');

            $table->foreign('calendar_id')
            ->references('id')
            ->on('calendars')
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
        Schema::dropIfExists('lessonnotes');
    }
}
