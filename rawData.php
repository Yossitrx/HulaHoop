<?php
	include ("db.php");
	
	$query = "SELECT * FROM tbl_hulaHoop_16";
	$result = mysqli_query($connection, $query);
	$jsonData = array();
	while ($array = mysqli_fetch_assoc($result)) {
		$jsonData[] = $array;
	}
	echo json_encode($jsonData);
	// $row = mysqli_fetch_assoc($result);
	// echo json_encode($row);
	mysqli_close($connection);
?>