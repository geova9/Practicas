<?php

$productos = [
    [   
        "codigo" => "PO_1",
        "nombre" => "Laptop",
        "precio" => 1200,
        "categorias" => ["tecnología", "ordenadores", "portátiles"]
    ],
    [   
        "codigo" => "PO_2",
        "nombre" => "Zapatillas",
        "precio" => 80,
        "categorias" => ["ropa", "deporte"]
    ],
    [
        "codigo" => "PO_3",
        "nombre" => "Proteína en polvo",
        "precio" => 45,
        "categorias" => ["suplementos", "fitness", "nutrición"]
    ],
    [
        "codigo" => "PO_4",
        "nombre" => "Ratón",
        "precio" => 25,
        "categorias" => ["tecnología", "accesorios"]
    ]
];

$productoBuscado=$_POST["codigo"];

$encontrado=null;

foreach($productos as $producto){
    if($producto["codigo"] == $productoBuscado){
        $encontrado = $producto;
        break;
    }
}

	header('Content-Type: application/json');



       if($encontrado){
            echo json_encode($encontrado);
	   } else {
		echo json_encode(["error"=>"Producto no encontrado"]);
	}






?>