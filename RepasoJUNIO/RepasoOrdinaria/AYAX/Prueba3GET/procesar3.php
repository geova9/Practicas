<?php


$peliculas = [
[
"codigo"=>"M01",
"titulo"=>"Interstellar",
"duracion"=>169,
"cines"=>["Madrid","Alcalá"]
],
[
"codigo"=>"M02",
"titulo"=>"Origen",
"duracion"=>148,
"cines"=>["Madrid","Toledo"]
],
[
"codigo"=>"M03",
"titulo"=>"Avatar",
"duracion"=>162,
"cines"=>["Barcelona","Valencia"]
],
[
"codigo"=>"M04",
"titulo"=>"One Piece",
"duracion"=>162,
"cines"=>["Barcelona","Madrid"]
]
];


$buscada=trim($_GET["codigo"]);

$encontrado=null;

foreach($peliculas as $peli){
    if($peli["codigo"] === $buscada){
        $encontrado = $peli;
        break;
    }
}

header ('Content-Type: application/json');

if($encontrado){
    echo json_encode($encontrado);
}else{
    echo json_encode(['error' => 'peli no encontrada']);
}

?>

