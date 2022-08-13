<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRoleToCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->string('verified')->after('username')->default(false);
            $table->string('platform')->after('pin')->default('daalu');
            $table->string('verify_code')->after('platform')->nullable();
            $table->string('trans_pin')->after('verify_code')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->dropColumn('verified');
            $table->dropColumn('platform');
            $table->dropColumn('verify_code');
            $table->dropColumn('trans_pin');
        });
    }
}
