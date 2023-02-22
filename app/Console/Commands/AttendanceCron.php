<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class AttendanceCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'attendancecron:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This Scheduler ..........';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //* * * * * php /path/to/artisan schedule:run 1>> /dev/null 2>&1
        
        \Log::info("PlentiCredit Cron is working fine!");
        
        $todays_date = date('Y-m-d');

     
        \Log::info("PlentiCredit Cron is ending here");
    }
}
