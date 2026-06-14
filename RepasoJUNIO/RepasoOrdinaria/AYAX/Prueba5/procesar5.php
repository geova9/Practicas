<?php
$peliculas = [
[
    "codigo"=>"P01",
    "titulo"=>"Dune",
    "precio"=>8.50,
    "salas"=>["Sala 1", "Sala 3"]
],
[
    "codigo"=>"P02",
    "titulo"=>"Interstellar",
    "precio"=>7.50,
    "salas"=>["Sala 2"]
],
[
    "codigo"=>"P03",
    "titulo"=>"Blade Runner 2049",
    "precio"=>9.00,
    "salas"=>["Sala 1", "Sala 2", "Sala 4"]
],
[
    "codigo"=>"P04",
    "titulo"=>"Arrival",
    "precio"=>8.00,
    "salas"=>["Sala 5"]
],
[
    "codigo"=>"P05",
    "titulo"=>"The Matrix",
    "precio"=>7.00,
    "salas"=>["Sala 1", "Sala 4"]
],
[
    "codigo"=>"P06",
    "titulo"=>"Inception",
    "precio"=>8.20,
    "salas"=>["Sala 2", "Sala 3"]
],
[
    "codigo"=>"P07",
    "titulo"=>"Prometheus",
    "precio"=>7.80,
    "salas"=>["Sala 5"]
],
[
    "codigo"=>"P08",
    "titulo"=>"The Martian",
    "precio"=>8.00,
    "salas"=>["Sala 3", "Sala 4"]
],
[
    "codigo"=>"P09",
    "titulo"=>"Tenet",
    "precio"=>8.50,
    "salas"=>["Sala 1", "Sala 2"]
],
[
    "codigo"=>"P10",
    "titulo"=>"Avatar: The Way of Water",
    "precio"=>9.50,
    "salas"=>["Sala 4", "Sala 5"]
]
];

$codigo= $_POST["codigo"];

$encontrado=null;

foreach($peliculas as $peli){
    if($peli ["codigo"] === $codigo){
        $encontrado = $peli;
        break;
    }
}

header('Content-Type: application/json');

if($encontrado){
    echo json_encode($encontrado);
}else{
    echo json_encode(["error"=> "No se encontro la pelicula"]);
}

?>