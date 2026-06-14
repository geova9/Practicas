<?php
// Array de empleados disponibles
$empleados = [
    ["codigo" => "E01", "nombre" => "Ana García",      "salario" => 2200.00, "departamentos" => ["Ventas", "Marketing", "Online"]],
    ["codigo" => "E02", "nombre" => "Luis Martínez",   "salario" => 1850.50, "departamentos" => ["Recursos Humanos", "Administración"]],
    ["codigo" => "E03", "nombre" => "María López",    "salario" => 3100.00, "departamentos" => ["IT", "Desarrollo"]],
    ["codigo" => "E04", "nombre" => "Carlos Sánchez", "salario" => 2750.00, "departamentos" => ["Logística", "Almacén"]],
    ["codigo" => "E05", "nombre" => "Elena Belmonte",  "salario" => 3400.00, "departamentos" => ["Finanzas", "Contabilidad"]],
    ["codigo" => "E06", "nombre" => "Jorge Ramírez",   "salario" => 1950.00, "departamentos" => ["Soporte Técnico", "IT"]],
    ["codigo" => "E07", "nombre" => "Sofía Alva",      "salario" => 2300.00, "departamentos" => ["Diseño", "Marketing"]],
    ["codigo" => "E08", "nombre" => "David Torres",    "salario" => 4100.00, "departamentos" => ["Dirección", "Estrategia"]],
    ["codigo" => "E09", "nombre" => "Lucía Méndez",    "salario" => 1600.00, "departamentos" => ["Atención al Cliente"]],
    ["codigo" => "E10", "nombre" => "Pedro Espinoza",  "salario" => 2850.00, "departamentos" => ["Calidad", "Producción"]],
    ["codigo" => "E11", "nombre" => "Marta Ortiz",     "salario" => 2150.00, "departamentos" => ["Legal", "Cumplimiento"]],
    ["codigo" => "E12", "nombre" => "Alejandro Ruiz",  "salario" => 3250.00, "departamentos" => ["I+D", "Innovación"]],
];




$codigo=$_POST["codigo"];

$encontrado=null;

foreach($empleados as $empleado){
	if($empleado["codigo"] === $codigo){
		$encontrado = $empleado;
		break;
	}
}

// Cabecera para indicar que la respuesta es JSON
header("Content-Type: application/json");

if($encontrado){
	echo json_encode($encontrado);
}else{
	echo json_encode(["Error" => "producto no encontrado"]);
}

?>