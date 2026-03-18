<?php
$vec = [
  ['palabra' => 'laptop', 'nombre' => 'Laptop Gamer Pro', 'precio' => 1299.99, 'imagen' => 'laptop.jpg'],
  ['palabra' => 'monitor', 'nombre' => 'Monitor Curvo 27"', 'precio' => 349.50, 'imagen' => 'monitor.jpg'],
  ['palabra' => 'tablet', 'nombre' => 'Tablet Android 10"', 'precio' => 250.00, 'imagen' => 'tablet.jpg'],
  ['palabra' => 'microfono', 'nombre' => 'Micrófono Condensador USB', 'precio' => 75.00, 'imagen' => 'microfono.jpg'],
  ['palabra' => 'teclado', 'nombre' => 'Teclado Mecánico RGB', 'precio' => 85.00, 'imagen' => 'teclado.jpg'],
  ['palabra' => 'mouse', 'nombre' => 'Mouse Inalámbrico Ergonómico', 'precio' => 45.90, 'imagen' => 'mouse.jpg'],
  ['palabra' => 'disco', 'nombre' => 'Disco SSD 1TB NVMe', 'precio' => 99.00, 'imagen' => 'ssd.jpg'], 
  ['palabra' => 'webcam', 'nombre' => 'Webcam Full HD 1080p', 'precio' => 55.75, 'imagen' => 'webcam.jpg'],
  ['palabra' => 'auricular', 'nombre' => 'Auriculares Inalámbricos', 'precio' => 120.00, 'imagen' => 'auriculares.jpg'],
  ['palabra' => 'ram', 'nombre' => 'Memoria RAM DDR4 16GB', 'precio' => 65.00, 'imagen' => 'ram.jpg'],
  ['palabra' => 'router', 'nombre' => 'Router WiFi 6 Gigabit', 'precio' => 78.99, 'imagen' => 'router.jpg'],
];


$busqueda = $_REQUEST['palabra'];
$resultado = [];

if ($busqueda !== '') {
    $busquedaBaja = strtolower($busqueda);

    foreach ($vec as $item) {
        $palabraBaja = strtolower($item['palabra']);
        if (str_starts_with($palabraBaja,$busquedaBaja)) {
            $resultado[] = $item;
        }
    }
}


header('Content-Type: application/json');
echo json_encode($resultado);
?>