<?php
	include ("db.php");
	
	$query = "SELECT * FROM tbl_hulaHoop_17";
	$result = mysqli_query($connection, $query);
	$jsonData = array();
	while ($array = mysqli_fetch_assoc($result)) {
		$jsonData[] = $array;
	}
	echo json_encode($jsonData);
	mysqli_close($connection);
?>