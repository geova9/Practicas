<?php

$lista=[
    [
        "codigo" => "PO_1",
        "nombre" => "Manga - Jujitsu Kaisen",
        "precio" => 10.99,
        "stock" => 20,
        "categoria" => ["Shonen", "Seinen"],
        "disponible" => true
    ],
 
    [
        "codigo" => "PO_2",
        "nombre" => "Manga - Berserk Vol. 1",
        "precio" => 15.99,
        "stock" => 5,
        "categoria" => ["Seinen", "Fantasía Oscura"],
        "disponible" => true
    ],
    [
        "codigo" => "PO_3",
        "nombre" => "Manga - One Piece Vol. 100",
        "precio" => 8.50,
        "stock" => 50,
        "categoria" => ["Shonen", "Aventura"],
        "disponible" => true
    ],
    [
        "codigo" => "PO_4",
        "nombre" => "Manga - Monster Edición Integral 1",
        "precio" => 20.00,
        "stock" => 0,
        "categoria" => ["Seinen", "Misterio"],
        "disponible" => false
    ],
    [
        "codigo" => "PO_5",
        "nombre" => "Manga - Death Note Black Edition 1",
        "precio" => 14.95,
        "stock" => 12,
        "categoria" => ["Shonen", "Thriller"],
        "disponible" => true
    ],
    [
        "codigo" => "PO_6",
        "nombre" => "Manga - Vagabond Vol. 1",
        "precio" => 18.50,
        "stock" => 8,
        "categoria" => ["Seinen", "Histórico"],
        "disponible" => true
    ]



];

$codigoBuscado=$_POST['codigo'] ?? null;
$nombreBuscado=$_POST['nombre'] ?? null;
 $resultado=null;

foreach($lista as $producto){
    //Si el usuario ha enviado un código Y además coincide con el código del producto..."
    if($codigoBuscado && $producto["codigo"] == $codigoBuscado){
        $resultado=$producto;
        break;
    }
    if($nombreBuscado && $producto["nombre"] == $nombreBuscado){
        $resultado=$producto;
        break;
    }
   


}

header('Content-Type: application/json');

if($resultado){
    echo json_encode($resultado)
}else{
    echo json_encode(["error"=>"Producto no encontrado"]);
}
 




?>