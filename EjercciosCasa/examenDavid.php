<?php
	$productos = [
		["codigo" => "P01", "nombre" => "Monitor 4K", "precio" => 350.0, "tiendas" => ["Madrid", "Barcelona", "Online"]],
		["codigo" => "P02", "nombre" => "Teclado Mecánico", "precio" => 85.5, "tiendas" => ["Barcelona", "Valencia"]],
		["codigo" => "P03", "nombre" => "Ratón Logitech", "precio" => 45.0, "tiendas" => ["Sevilla", "Málaga"]],
		["codigo" => "P04", "nombre" => "Disco SSD", "precio" => 120.0, "tiendas" => ["Madrid", "Bilbao"]]
	];
	
	$codigo = $_REQUEST["codigo"];
	$encontrado = null;
	foreach($productos as $producto) {
		if($producto["codigo"] === $codigo) {
			$encontrado = $producto;
		}
	}
	
	header('Content-Type: application/json');
	
	if($encontrado) {
		echo json_encode($encontrado);
	} else {
		echo json_encode(["error"=>"Producto no encontrado"]);
	}
?>