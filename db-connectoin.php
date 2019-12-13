<?php
$con = mysqli_connect("localhost","root","nitrou18b_boy","formation_db");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}
?>