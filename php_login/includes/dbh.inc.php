<?php

$servername = "localhost";

$dBUsername = "root";

$dBPassword = "";

$dBName = "loginsystem";


$conn = mysdli_connect($servername, $dbUsername, $dBPassword, $dBName);

if (!$conn) {
	die("Connection failed: ".mysqli_connect_error());
}
