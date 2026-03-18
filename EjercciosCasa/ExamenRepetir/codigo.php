<?php
$productos = [
  ["codigo" => "P01", "nombre" => "Monitor 4K", "precio" => 350.00, "tiendas" => ["Madrid", "Barcelona", "Online"]],
  ["codigo" => "P02", "nombre" => "Teclado Mecánico", "precio" => 85.50, "tiendas" => ["Barcelona", "Valencia"]],
  ["codigo" => "P03", "nombre" => "Ratón Logitech", "precio" => 45.00, "tiendas" => ["Sevilla", "Málaga"]],
  ["codigo" => "P04", "nombre" => "Disco SSD", "precio" => 120.00, "tiendas" => ["Madrid", "Bilbao"]]
];

$codigoBuscado=$GET['codigo'];
$codigoEncontrado=null;

$producto.forEach($productos as $producto){
	if($producto['codigo'] === $codigoBuscado){
		$codigoEncontrado = $codigoBuscado;
		break;
	}
}
header('Content-Type: application/json');

if($codigoEncontrado){
	echo json_encode($codigoBuscado);
}else{
	echo json_encode(["error"=>"Producto no encontrado"]);
}
exit;


?>