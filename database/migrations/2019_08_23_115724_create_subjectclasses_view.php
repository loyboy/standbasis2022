<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateSubjectClassesView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement("
            CREATE VIEW subjectclasses 
            AS
            SELECT DISTINCT
                timetables.tea_id AS Teacher_ID,
                timetables.class_id  AS Class_ID,
                timetables.sub_id  AS Subject_ID,

                timetables.tea_name AS Teacher_Name,
                timetables.class_name AS Class_Name,
                timetables.sub_name  AS Subject_Name               

            FROM
                timetables
                RIGHT JOIN enrollments ON timetables.class_id = enrollments.class_id
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}

//https://stackoverflow.com/questions/18443677/passing-parameter-to-mysql-view  
