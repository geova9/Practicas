<?php
$lista = ['Pilar', 'Raul', 'Ana'];
$nombre_buscado = $_REQUEST['usuario'] ?? '';
$encontrado = false;

for ($i = 0; $i < count($lista); $i++) {
    if ($lista[$i] === $nombre_buscado) {

        $encontrado = true;
        
        break;
    }
}

header('Content-Type: application/json');
echo json_encode($encontrado);
?>
