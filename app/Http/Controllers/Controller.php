<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * @OA\Info(
     *      version="1.0.0",
     *      title="Integration Swagger in Laravel with Passport Auth Documentation",
     *      description="Implementation of Swagger with in Laravel",
     *      @OA\Contact(
     *          email="admin@admin.com"
     *      ),
     *      @OA\License(
     *          name="Apache 2.0",
     *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
     *      )
     * )
     *
     * @OA\Server(
     *      url=https://loyalty.merkovsolutions.com/api/v1,
     *      description="Demo API Server"
     * )

     *
     *
     */
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function successResponse($result, $message)
    {
        $response = [
            'success' => true,
            'status_code' => Response::HTTP_OK,
            'data' => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }
    
    public function rewardFormular($amount,  $reward) {
        $points = round(($reward / 100) * $amount ,1);
        return $points;
    }
    
      public function successResponseV2($result, $message)
    {
        $response = [
            'status' => true,
            'status_code' => Response::HTTP_OK,
            'data' => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }

    public function successResponseV3($result, $message)
    {
        $response = [
            'success' => true,
            'status_code' => Response::HTTP_OK,
            'data' => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }

    public function errorResponse($errorMessages = [], $error="", $code = 200)
    {
        $response = [
            'success' => false,
            'status_code' => $code,
            'message' => $error,
        ];
        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }
        return response()->json($response, $code);
    }

    
    public function errorResponseWithoutData($error="", $code = 200)
    {
        $response = [
            'success' => false,
            'status_code' => $code,
            'message' => $error,
        ];   
        return response()->json($response, $code);
    }
    
     public function errorResponseWithEmptyArray($error, $code = 200)
    {
        $response = [
            'status' => false,
            'message' => $error,
            'data'=> []          
        ];
        return response()->json($response, $code);
    }
}
