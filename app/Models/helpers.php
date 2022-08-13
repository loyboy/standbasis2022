<?php

use Illuminate\Support\Facades\Hash;
use Lcobucci\JWT\Signer\Ecdsa\Sha256;

function generatePin($number)
{
    // Generate set of alpha characters
    $alpha = array();
    for ($u = 65; $u <= 90; $u++) {
        // Uppercase Char
        array_push($alpha, chr($u));
    }

    // Just in case you need lower case
    // for ($l = 97; $l <= 122; $l++) {
    //    // Lowercase Char
    //    array_push($alpha, chr($l));
    // }

    // Get random alpha character
    $rand_alpha_key = array_rand($alpha);
    $rand_alpha = $alpha[$rand_alpha_key];

    // Add the other missing integers
    $rand = array($rand_alpha);
    for ($c = 0; $c < $number - 1; $c++) {
        array_push($rand, mt_rand(0, 9));
        shuffle($rand);
    }

    return implode('', $rand);
}

function httpPost($url, $params)
{
    $header = array('Content-Type:application/json', 'Connection: Keep-Alive');
    try {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($ch);
        curl_close($ch);
    } catch (Exception $e) {
        $response = $e->getMessage();
    }
    return $response;
}

function httpPostWithHeader($url, $params, $header)
{
    try {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($ch);
        curl_close($ch);
    } catch (Exception $e) {
        $response = $e->getMessage();
    }
    return $response;
}

function unique_code($limit)
{
    return substr(base_convert(sha1(uniqid(mt_rand())), 16, 36), 0, $limit);
}

function getDistance($storelatitude, $storelongitude, $userlatitude, $userlongitude)
{
    $earth_radius = 6371;

    $dLat = deg2rad($userlatitude - $storelatitude);
    $dLon = deg2rad($userlongitude - $storelongitude);

    $a = sin($dLat / 2) * sin($dLat / 2) + cos(deg2rad($storelatitude)) * cos(deg2rad($userlatitude)) * sin($dLon / 2) * sin($dLon / 2);
    $c = 2 * asin(sqrt($a));
    $d = $earth_radius * $c;

    return $d;
}

function data_getcurl($url)
{
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Access-Control-Request-Method: GET', 'Access-Control-Allow-Origin: *', 'Content-Type: application/json', 'Cache-Control: no-cache'));
    $response = curl_exec($ch);
    curl_close($ch);
    return $resp = json_decode($response, true);
}

function vas2net_curl($query, $url)
{
    $authStr = "tvioSolutions:v2nVtuTVio0On";
    $authEncoded = base64_encode($authStr);
    $auth = "Basic " . $authEncoded;
    $bearer = 'Authorization:' . $auth;
    $data_string = json_encode($query);
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Access-Control-Request-Method: POST', 'Access-Control-Allow-Origin: *', 'Content-Type: application/json', $bearer));
    $response = curl_exec($ch);
    curl_close($ch);
    return $resp = json_decode($response, true);
}

function vas2net_biller_curl($request)
{
    $mac = hash('sha256', env('CLIENT_CODE') . '|' . env('API_KEY') . '|' . env('SECRET_KEY'));
    $data_string = json_encode($request);
    $ch = curl_init(env('BILLER_BASE_URL') . '/proxy');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'CLIENT_CODE: TVIOS-SFVAW597CUUP', 'MAC: '.$mac, ));
    $response = curl_exec($ch);
    curl_close($ch);
    return $resp = json_decode($response, true);

}

function vas2net_biller_exchange($request)
{
    $mac = hash('sha256', env('CLIENT_CODE') . '|' . env('API_KEY') . '|' . env('SECRET_KEY'));
    $data_string = json_encode($request);
    $ch = curl_init(env('BILLER_BASE_URL') . '/exchange');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'CLIENT_CODE: TVIOS-SFVAW597CUUP', 'MAC: ' . $mac,));
    $response = curl_exec($ch);
    curl_close($ch);
    return $resp = json_decode($response, true);
}
