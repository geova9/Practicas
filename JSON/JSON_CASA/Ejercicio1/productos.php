<?php


$todosLosProductos = [
    ['nombre' => 'Smartphone Pro', 'precio' => 899, 'categoria' => 'electronica', 'imagen' => 'https://via.placeholder.com/150'],
    ['nombre' => 'Laptop Gamer', 'precio' => 1200, 'categoria' => 'electronica', 'imagen' => 'https://via.placeholder.com/150'],
    ['nombre' => 'Camiseta Algodón', 'precio' => 25, 'categoria' => 'ropa', 'imagen' => 'https://via.placeholder.com/150'],
    ['nombre' => 'Pantalones Vaqueros', 'precio' => 45, 'categoria' => 'ropa', 'imagen' => 'https://via.placeholder.com/150'],
    ['nombre' => 'El Quijote', 'precio' => 20, 'categoria' => 'libros', 'imagen' => 'https://via.placeholder.com/150'],
    ['nombre' => 'Cien Años de Soledad', 'precio' => 18, 'categoria' => 'libros', 'imagen' => 'https://via.placeholder.com/150'],
];

$categoriaBuscada=$_REQUEST['producto'] ?? '';
$productosFiltrados=[];

foreach($todosLosProductos as $product){
 if( $product['categoria'] === $categoriaBuscada){
     $productosFiltrados [] = $product;

    }

}

header('Content-Type: appication/json');
echo json_encode($productosFiltrados);