<?php
$empleados = [

    [
        "codigo" => "E01",
        "nombre" => "Ana García",
        "salario" => 2200,
        "departamentos" => ["Ventas", "Marketing"]
    ],

    [
        "codigo" => "E02",
        "nombre" => "Luis Pérez",
        "salario" => 1850,
        "departamentos" => ["RRHH", "Formación"]
    ],

    [
        "codigo" => "E03",
        "nombre" => "Marta López",
        "salario" => 2600,
        "departamentos" => ["Informática", "Soporte"]
    ],

    [
        "codigo" => "E04",
        "nombre" => "Carlos Mendoza",
        "salario" => 2100,
        "departamentos" => ["Ventas", "Logística"]
    ],

    [
        "codigo" => "E05",
        "nombre" => "Elena Belmonte",
        "salario" => 2950,
        "departamentos" => ["Informática", "Desarrollo"]
    ],
    [
        "codigo" => "E06",
        "nombre" => "Jorge Rubio",
        "salario" => 1700,
        "departamentos" => ["Atención al Cliente", "Soporte"]
    ],
    [
        "codigo" => "E07",
        "nombre" => "Sofía Vega",
        "salario" => 3100,
        "departamentos" => ["Finanzas", "Administración"]
    ],
    [
        "codigo" => "E08",
        "nombre" => "Ricardo Tovar",
        "salario" => 1950,
        "departamentos" => ["Marketing", "Diseño"]
    ],
    [
        "codigo" => "E09",
        "nombre" => "Lucía Ortiz",
        "salario" => 2400,
        "departamentos" => ["RRHH", "Legal"]
    ],
    [
        "codigo" => "E10",
        "nombre" => "Andrés Soler",
        "salario" => 2750,
        "departamentos" => ["Calidad", "Producción"]
    ]

];

$codigo = $_POST["codigo"];

$encontrado = null;

foreach ($empleados as $empleado) {
    if ($empleado["codigo"] === $codigo) {
        $encontrado = $empleado;
        break;
    }
}
header('Content-Type: application/json');

if ($encontrado) {
    echo json_encode($encontrado);
} else {
    echo json_encode(["error" => "Empleado no encontradoo"]);
}





?>