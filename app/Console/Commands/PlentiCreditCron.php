<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\PlentiLoanRepayments;
use App\Models\User;

class PlentiCreditCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'plenticredit:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This Scheduler is meant to debit the Borrower at a certain time';

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
        $secretKey = env('MONO_SK');

        $plentCreditItems = PlentiLoanRepayments::where( 'payment_date', '<=',  $todays_date )->where( 'status',  'pending' )->with("user")->get()->toArray();        

        foreach ($plentCreditItems as $key => $plentiItem ) {
            $plenti = PlentiCredit::where('id', $plentiItem->loan_id)->first();
            $reference = "plenti_credit_debit-". time();
            $account_from_mono = json_decode($plenti->account_payload);

            $monoInitiate = json_decode(
                Http::withHeaders([
                    'Content-type' => 'application/json',
                    'mono-sec-key' =>  $secretKey
                ])
                ->withOptions(['verify' => false])
                ->post( env('MONO_URL') . '/v1/payments/initiate', [
                    "amount"=> ($plentiItem->amount * 100),
                    "type"=>'onetime-debit',
                    "description" => "This is a recurring debit made on Mr/Mrs". $plentiItem->user->first_name. " For a Loan collected with ID: ".$plenti->id. " for Installment number: " . $plentiItem->installment ,
                    'reference' => $reference,
                    'account'=> $account_from_mono->account->_id
                ])
            );
            //send to someone here-----

        }
        \Log::info("PlentiCredit Cron is ending here");
    }
}
