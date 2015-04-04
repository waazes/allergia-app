<?php
/**
 * Created by PhpStorm.
 * User: Kristjan
 * Date: 4.04.2015
 * Time: 12:16
 */

$source = "http://airviro.klab.ee/seire/tallinn_1.txt";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $source);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSLVERSION,3);
$data = curl_exec ($ch);
$error = curl_error($ch);
curl_close ($ch);

$destination = "/home/ulstee/public_html/1/tallinn_1.txt";
$file = fopen($destination, "w+");
fputs($file, $data);
fclose($file);

$curl = curl_init('http://airviro.klab.ee/seire/parnu_1.txt');

//don't fetch the actual page, you only want headers
curl_setopt($curl, CURLOPT_NOBODY, true);

//stop it from outputting stuff to stdout
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// attempt to retrieve the modification date
curl_setopt($curl, CURLOPT_FILETIME, true);

$result = curl_exec($curl);

if ($result === false) {
    die (curl_error($curl));
}

$timestamp = curl_getinfo($curl, CURLINFO_FILETIME);
if ($timestamp != -1) { //otherwise unknown
    echo date("Y-m-d H:i:s", $timestamp); //etc
}