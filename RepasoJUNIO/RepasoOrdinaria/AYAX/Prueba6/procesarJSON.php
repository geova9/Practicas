<?php

$hotel=$_GET['hotel'];

if($hotel=="H01"){

    $datos=[
        "nombre"=>"Hotel Sol",
        "precio"=>85,
        "habitaciones"=>["Individual","Doble","Suite"],
        "servicios"=>["Piscina","Spa","Parking"],
        "disponibles"=>12
    ];

    echo json_encode($datos);

}

?>