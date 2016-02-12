<?php
	echo "Yossi";

	include ("db.php");
	echo "Yossi";
	$hulaSize = $_POST['hulaSize'];
	$hulaWeight = $_POST['hulaWeight'];
	$hulaModelColor = $_POST['hulaModelColor'];
	$hulaAmount = $_POST['hulaAmount'];

	$query = "INSERT INTO tbl_hulaHoop_17 (size, weight, model, amount) VALUES ('$hulaSize','$hulaWeight','$hulaModelColor','$hulaAmount')";

	$result = mysqli_query($connection, $query);
	mysqli_close($connection);
?>