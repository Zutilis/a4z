<?php
	$user = 'azfrjuga4z';
	$pass = 'dW23RmY8uDvb28';
	
	try {

		$conn = new PDO('mysql:host=azfrjuga4z.mysql.db;dbname=azfrjuga4z', $user, $pass);

		$res = $conn->query('select * from images')-;
		$res_array = $res->fetchAll();

		echo count($res_array);

		// for ($i = 0; $i < count($res_array); $i++)
		// {
		// 	echo $res_array[i]['url'] . '<br>';
		// }

		$res = null;
		$conn = null;

	} catch (PDOException $e) {

		echo $e;

	}
?>