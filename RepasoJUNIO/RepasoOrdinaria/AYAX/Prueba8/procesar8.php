<?php 
$peliculas = [
    [
        "codigo" => "M01",
        "titulo" => "Interstellar",
        "duracion" => 169,
        "salas" => ["Sala 1", "Sala 3"]
    ],
    [
        "codigo" => "M02",
        "titulo" => "Origen",
        "duracion" => 148,
        "salas" => ["Sala 2", "Sala 4"]
    ],
    [
        "codigo" => "M03",
        "titulo" => "Avatar",
        "duracion" => 162,
        "salas" => ["Sala 1", "Sala 5"]
    ],
    [
        "codigo" => "M04",
        "titulo" => "Dune",
        "duracion" => 155,
        "salas" => ["Sala 2", "Sala 6"]
    ],
    [
        "codigo" => "M05",
        "titulo" => "The Batman",
        "duracion" => 176,
        "salas" => ["Sala 3", "Sala 1"]
    ],
    [
        "codigo" => "M06",
        "titulo" => "Gladiator",
        "duracion" => 155,
        "salas" => ["Sala 4", "Sala 2"]
    ],
    [
        "codigo" => "M07",
        "titulo" => "Matrix",
        "duracion" => 136,
        "salas" => ["Sala 5", "Sala 3"]
    ],
    [
        "codigo" => "M08",
        "titulo" => "Joker",
        "duracion" => 122,
        "salas" => ["Sala 6", "Sala 4"]
    ],
    [
        "codigo" => "M09",
        "titulo" => "Whiplash",
        "duracion" => 106,
        "salas" => ["Sala 1", "Sala 2"]
    ],
    [
        "codigo" => "M10",
        "titulo" => "Tenet",
        "duracion" => 150,
        "salas" => ["Sala 3", "Sala 4"]
    ],
    [
        "codigo" => "M11",
        "titulo" => "Parasitos",
        "duracion" => 132,
        "salas" => ["Sala 5", "Sala 6"]
    ],
    [
        "codigo" => "M12",
        "titulo" => "Blade Runner 2049",
        "duracion" => 164,
        "salas" => ["Sala 1", "Sala 6"]
    ]
];

$codigo=$_POST["codigo"];

$encontrado=null;

foreach($peliculas as $pelis){

if($pelis["codigo"] === $codigo){
    $encontrado = $pelis;
    break;
}
}

header("Content-Type: application/json");

if($encontrado){
    echo json_encode($encontrado);
}else{
    echo json_encode(["Error" => "Pelicula no encontrada"]);
}

?>