<!DOCTYPE html>
<html>
<!-- 
Add feature to close hamburger when click on screen away from hamburger.
 -->
<head>
	<meta name="BYU Developers Club" charset="UTF-8" content="Description Here">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>BYU Developers Club</title>
	<link rel="stylesheet" type="text/css" href="assets/css/global.css">
	<link rel="stylesheet" type="text/css" href="assets/css/home.css">
	<!-- <link rel="icon" type="image/png" href="assets/images/favicon.png">-->
</head>

<body>

	<div id="rotate_device_cont" class="hide">
		<div class="rotate_device">Rotate Device</div>
		<img class="device" src="assets/images/home/rotate_device.png">
	</div>

	<img id="join_img" src="assets/images/home/join.png" alt="" />


	<?php include "partials/home.hero.php"; ?>

	<?php include "partials/home.aboutus.php"; ?>

	<?php include "partials/home.requestdev.php"; ?>

<div id="filler"></div>
<script type="text/javascript" src="assets/js/global.js"></script>
<script type="text/javascript" src="assets/js/home.js"></script>

</body>

</html>