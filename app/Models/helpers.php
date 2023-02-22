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

