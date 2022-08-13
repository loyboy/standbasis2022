<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoucherLog extends Model
{
    use HasFactory;


    static $rules = [
		'ref' => 'required',
		'mobile_no' => 'required',
		'card_no' => 'required',
		'point_deducted' => 'required',
		'transaction_code' => 'required',
		'pstatus_id' => 'required',
		'paid_for' => 'required',
		'deducted_by' => 'required',
		'deducted_date' => 'required',
		'invoice' => 'required',
		'reason' => 'required',
    ];

    protected $perPage = 20;
    protected $table = 'customer_transactions_log';
    
    protected $appends = array('transactionDateTime');
     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'date'
    ];
    
   protected $dateFormat = 'U';
    
   public $timestamps = FALSE;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['ref','ref_id','commission','customer_id','mobile_no','card_no','amount_spent','creds',
    'point_deducted','transaction','transaction_code','ctype','time','merchant_id','store_id','entry','status_id','pstatus_id','paid_for','deducted_by','deducted_date','invoice','reason','receipt'];


    public function getTransactionDateTimeAttribute()
    {
        return date('D jS, M Y',  strtotime($this->created_at));
    }

     
  	public function merchant()
    {
        return $this->belongsTo(Merchant::class, 'merchant_id', 'id');
    }

 	public function store()
    {
        return $this->belongsTo(Store::class, 'store_id', 'id');
    }

    public function card()
    {
        return $this->belongsTo(Card::class, 'card_id', 'id');
    }

 	public function status()
    {
        return $this->belongsTo(Status::class, 'status_id', 'id');
    }

	public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }
}
