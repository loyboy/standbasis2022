<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BillerController extends Controller
{
    use ApiResponser;

    public function electricityList()
    {
        $electricity = [
            ['serviceID' => 'AVA', 'name' => 'Eko Electricity Distribution Postpaid'],
            ['serviceID' => 'BAA', 'name' => 'Eko Electricity Distribution Prepaid'],
            ['serviceID' => 'BIA', 'name' => 'PortHarcourt Prepaid'],
            ['serviceID' => 'BIB', 'name' => 'PortHarcourt Postpaid'],
            ['serviceID' => 'AUA', 'name' => 'Ibadan Disco Postpaid'],
            ['serviceID' => 'AUB', 'name' => 'Ibadan Disco Prepaid'],
            ['serviceID' => 'APA', 'name' => 'IKEDC (Post Paid)'],
            ['serviceID' => 'APB', 'name' => 'IKEDC (Pre Paid)'],
            ['serviceID' => 'BABA', 'name' => 'ABUJA ELECTRICITY: PREPAID'],
            ['serviceID' => 'BABB', 'name' => 'ABUJA ELECTRICITY: POSTPAID'],
            ['serviceID' => 'AVB', 'name' => 'KEDCO: PREPAID'],
            ['serviceID' => 'AVC', 'name' => 'KEDCO: POSTPAID'],
            ['serviceID' => 'CDC', 'name' => 'JOS: PREPAID'],
            ['serviceID' => 'CDD', 'name' => 'JOS: POSTPAID'],
            ['serviceID' => 'BOA', 'name' => 'ENUGU: PREPAID'],
            ['serviceID' => 'BOB', 'name' => 'ENUGU: POSTPAID']
        ];

        return $this->success('success', $electricity);
    }

    public function cableList()
    {
        $cable = [
            ['serviceID' => 'AQA', 'name' => 'Multichoice DSTV'],
            ['serviceID' => 'AQC', 'name' => 'Multichoice GOTV'],
            ['serviceID' => 'AWA', 'name' => 'StarTimes'],
            ['serviceID' => 'BGA', 'name' => 'Spectranet'],
            ['serviceID' => 'ANA', 'name' => 'Smile Recharge'],
            ['serviceID' => 'ANB', 'name' => 'Smile Bundle'],
            ['serviceID' => 'CPA', 'name' => 'SHOWMAX']
        ];

        return $this->success('success', $cable);
    }

    public function subscribe_biller(Request $request)
    {
        try {
            $validator = Validator::make($request->all(),  [
                'customerReference' => 'required',
                'amount' => 'required',
                'serviceId' => 'required|string',
                'service_type' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }

            if ($request->service_type === 'postpaid') {
                $payload = [
                    "details" => [
                        "customerReference" => $request->customerReference
                    ],
                    "serviceId" => $request->serviceId
                ];
                $proxy = vas2net_biller_curl($payload);
                if (isset($proxy['details'])) {
                    $payload = [
                        "details" => [
                            "customerReference" => $request->customerReference,
                            "amount" => $request->amount,
                        ],
                        "id" => generatePin(6),
                        "serviceId" => $request->serviceId
                    ];

                    $exchange = vas2net_biller_exchange($payload);
                    if (isset($exchange['details']['status']) === 'FAILED') {
                        return $this->error('Transaction not successful, try again!!!', 400);
                    }else{
                        return $this->success('success', 'Subscription was successful');
                    }

                } else {
                    return $this->error('Error, we could not validate your account, try again!!!', 400);
                }
            }else{
                $payload = [
                    "details" => [
                        "meterNumber" => $request->customerReference
                    ],
                    "serviceId" => $request->serviceId
                ];

                $proxy = vas2net_biller_curl($payload);
                if (isset($proxy['details']) && $proxy['details']['status'] == true) {
                    $payload = [
                        "details" => [
                            "customerReference" => $request->customerReference,
                            "amount" => $request->amount,
                            "customerAddress" => $proxy['details']['customerAddress'],
                            "customerDistrict" => $proxy['details']['customerDistrict'],
                            "customerName" => $proxy['details']['customerName'],
                        ],
                        "id" => generatePin(6),
                        "serviceId" => $request->serviceId
                    ];

                    $exchange = vas2net_biller_exchange($payload);

                    if (isset($exchange['details']['status']) === 'FAILED') {
                        return $this->error('Transaction not successful, try again!!!', 400);
                    } else {
                        return $this->success('success', 'Subscription was successful');
                    }

                } else {
                    return $this->error('Error, we could not validate your account, try again!!!', 400);
                }
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

    public function subscribe_cable(Request $request)
    {
        try {
            $validator = Validator::make($request->all(),  [
                'number' => 'required',
                'requestType' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors()->first(), 400);
            }
            $payload = [
                "details" => [
                    "number" => $request->number,
                    "requestType" => $request->requestType
                ],
                "serviceId" => $request->serviceId
            ];
            $proxy = vas2net_biller_curl($payload);
            if (isset($proxy['details'])) {

            }else{
                return $this->error('Error, we could not validate your smart card number, try again!!!', 400);
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }

}
