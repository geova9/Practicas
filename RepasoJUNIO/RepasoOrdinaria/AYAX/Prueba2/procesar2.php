<?php
$productos = [
    ["codigo" => "V01", "nombre" => "The Legend of Zelda",  "precio" => 59.99, "ciudades" => ["Madrid", "Barcelona", "Valencia"]],
    ["codigo" => "V02", "nombre" => "God of War Ragnarok",  "precio" => 69.99, "ciudades" => ["Sevilla", "Madrid"]],
    ["codigo" => "V03", "nombre" => "Elden Ring",           "precio" => 49.99, "ciudades" => ["Barcelona", "Bilbao", "Online"]],
    ["codigo" => "V04", "nombre" => "FIFA 25",              "precio" => 39.99, "ciudades" => ["Madrid", "Valencia", "Málaga"]],
];


$codigo=$_POST["codigo"];

$encontrado=null;

foreach($productos as $juego){
	if($juego["codigo"] === $codigo){
		$encontrado = $juego;
		break;
	}
}
header('Content-Type: application/json');

if($encontrado){
	echo json_encode($encontrado);
}else{
	echo json_encode(["error" => "producto no encontrado"]);
}


?>