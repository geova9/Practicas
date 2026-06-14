<?php
$juegos =$_POST["codigo"];

if($juegos == "J01"){

$juego = [

    "titulo"=>"The Witcher 3",
    "precio"=>29.99,
    "plataformas"=>["PC","PS5","Xbox"],
    "idiomas"=>["Español","Inglés","Francés"],
    "stock"=>15

];
header('Content-Type: application/json');

 echo json_encode($juego);

}


?>

