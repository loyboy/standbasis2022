<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('user_id');
            $table->unsignedBigInteger('id')->unique()->index();

            $table->string('username')->unique();
            $table->string('name');
            $table->string('password');

           // $table->integer('type_of');// 0- Teacher , 1- Pupil , 2- Principal, 3 - Proprietor, 4 - Government , 5 - Standbasis Admin
            $table->integer('status')->nullable()->default(-1); // 1- Active, 0 - Inactive, -1 - Unverified
            $table->enum('role', ['teacher', 'student', 'principal', 'guardian', 'government', 'proprietor', 'admin', 'superadmin' ])->default('teacher');
            
            $table->unsignedBigInteger('teacher_id')->nullable()->index();
            $table->unsignedBigInteger('pupil_id')->nullable()->index();
            $table->unsignedBigInteger('principal_id')->nullable()->index(); // same with Teacher 
            $table->unsignedBigInteger('proprietor_id')->nullable()->index(); // the same ID with Schools

            $table->rememberToken();
            $table->timestamps();

            $table->foreign('teacher_id')
            ->references('id')
            ->on('teachers')
            ->onDelete('cascade');

            $table->foreign('pupil_id')
            ->references('id')
            ->on('pupils')
            ->onDelete('cascade');

            $table->foreign('principal_id')
            ->references('id')
            ->on('teachers')
            ->onDelete('cascade');

            $table->foreign('proprietor_id')
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
        Schema::dropIfExists('users');
    }
}
