<?php
header("Content-Type: text/xml");

// Recoger id del piloto
$id = isset($_GET['id']) ? $_GET['id'] : 0;

// Datos simulados (como suele pedirse en ejercicios)
$pilotos = [
    1 => [
        "foto" => "piloto_1.jpg",
        "aeropuertos" => [
            "Madrid" => [
                ["recorrido" => "Madrid-Nueva York", "fecha" => "23/02/2026"],
                ["recorrido" => "Madrid-Paris", "fecha" => "11/03/2026"]
            ],
            "Paris" => [
                ["recorrido" => "Paris-Nueva York", "fecha" => "23/02/2025"]
            ],
            "Londres" => [
                ["recorrido" => "Londres-Estambul", "fecha" => "20/01/2026"]
            ]
        ]
    ],
    2 => [
        "foto" => "piloto_2.jpg",
        "aeropuertos" => [
            "Barcelona" => [
                ["recorrido" => "Barcelona-Roma", "fecha" => "15/01/2026"]
            ],
            "Roma" => [
                ["recorrido" => "Roma-Barcelona", "fecha" => "04/08/2025"]
            ]
        ]
    ],
    3 => [
        "foto" => "piloto_3.jpg",
        "aeropuertos" => [
            "Lisboa" => [
                ["recorrido" => "Lisboa-Berlin", "fecha" => "08/04/2026"]
            ],
            "Berlin" => [
                ["recorrido" => "Berlin-Lisboa", "fecha" => "09/03/2025"]
            ]
            
        ]
    ]
];

// Comenzar XML
echo "<?xml version='1.0' encoding='UTF-8'?>";
echo "<datos>";

if (isset($pilotos[$id])) {

    // FOTO
    echo "<foto>{$pilotos[$id]['foto']}</foto>";

    // AEROPUERTOS Y VUELOS
    foreach ($pilotos[$id]['aeropuertos'] as $nombreAeropuerto => $vuelos) {

        echo "<aeropuerto nombre=\"$nombreAeropuerto\">";

        foreach ($vuelos as $vuelo) {
            echo "<vuelo recorrido=\"{$vuelo['recorrido']}\" fecha=\"{$vuelo['fecha']}\" />";
        }

        echo "</aeropuerto>";
    }
}

echo "</datos>";
