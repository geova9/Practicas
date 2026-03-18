<?php

$libros_catalogo = [
    ["titulo" => "Cien años de soledad", "autor" => "Gabriel García Márquez", "anio" => 1967],
    ["titulo" => "Don Quijote de la Mancha", "autor" => "Miguel de Cervantes", "anio" => 1605],
    ["titulo" => "La sombra del viento", "autor" => "Carlos Ruiz Zafón", "anio" => 2001],
];

// Creamos el objeto de respuesta base
$respuesta = new stdClass();
$respuesta->encontrado = false;
$respuesta->libro = new stdClass();
$respuesta->mensaje = "";

// Recogida del dato 'titulo' 
$titulo_buscado = $_REQUEST['titulo'];

if ($titulo_buscado) {
    foreach ($libros_catalogo as $libro) {  
        $titulo_bd = mb_strtolower($libro['titulo'], 'UTF-8');
        if ($titulo_bd === $titulo_buscado) {
            $respuesta->encontrado = true;
            $respuesta->libro->titulo = $libro['titulo'];
            $respuesta->libro->autor = $libro['autor'];
            $respuesta->libro->anio = $libro['anio'];
            break; 
        }
    }
}
// Manejo de caso no encontrado
if (!$respuesta->encontrado) {
    $respuesta->mensaje = "Libro no encontrado en el catálogo";
}
// Devolvemos el objeto respuesta completo
header('Content-Type: application/json; charset=utf-8');
echo json_encode($respuesta);
?>