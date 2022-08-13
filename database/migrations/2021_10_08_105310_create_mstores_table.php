<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMstoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mstores', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->constraints();
            $table->string('store_name');
            $table->string('website')->nullable();
            $table->string('image');
            $table->string('address');
            $table->string('lat');
            $table->string('lng');
            $table->string('contact_person_firstname');
            $table->string('contact_person_lastname');
            $table->string('job_title');
            $table->string('contact_email');
            $table->string('mobile_no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mstores');
    }
}
