<?php
$libros_catalogo = [
    [
        "titulo" => "Cien años de soledad",
        "autor" => "Gabriel García Márquez",
        "anio" => 1967
    ],
    [
        "titulo" => "Don Quijote de la Mancha",
        "autor" => "Miguel de Cervantes",
        "anio" => 1605
    ],
    [
        "titulo" => "La sombra del viento",
        "autor" => "Carlos Ruiz Zafón",
        "anio" => 2001
    ],
];

$titulo_buscado = $_REQUEST['titulo'];
$libro_encontrado = null;

if ($titulo_buscado) {
    // Buscar el libro en el array de datos
    foreach ($libros_catalogo as $libro) {
		$titulo_bd = mb_strtolower($libro['titulo'], 'UTF-8');
		if ($titulo_bd === $titulo_buscado){
            $libro_encontrado = $libro;
            break; 
        }
    }
}
// Devolver la respuesta JSON
header('Content-Type: application/json');
if ($libro_encontrado) {
    echo json_encode(['encontrado' => true, 'libro' => $libro_encontrado]);
} else {
    echo json_encode(['encontrado' => false, 'mensaje' => 'Libro no encontrado en el catálogo']);
}

?>