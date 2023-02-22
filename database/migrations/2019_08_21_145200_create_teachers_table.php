<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->bigIncrements('tea_id');
            $table->unsignedBigInteger('id')->unique()->index();

            $table->string('fname');
            $table->string('lname');
            $table->char('gender',1); // M or F

            $table->string('agerange')->nullable();
            $table->string('bias',100)->nullable(); 
            $table->string('coursetype',100)->nullable();
            $table->string('qualification',100)->nullable();
            $table->integer('experience')->nullable();
            $table->text('photo')->nullable();
            $table->string('office')->nullable(); //--added newly 

            $table->integer('status')->nullable()->default(1); // 0 - inactive , 1 -  active
            $table->integer('type_of')->nullable()->default(0);// 0 - teacher, 1 - Head/principal/, 2 - Supervisor

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
        Schema::dropIfExists('teachers');
    }
}
