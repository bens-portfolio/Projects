<?php
$dbuser = 'wordpress';
$dbpass = 'wordpress';
$dbname = 'mysqlkurs';
$dbhost = "localhost";

$pdo = new PDO("mysql:host=localhost;dbname=$dbname", $dbuser, $dbpass);

var_dump($pdo);

?>