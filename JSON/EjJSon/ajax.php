<?php
	$datos=$_REQUEST['datosJ'];
	$datos = json_decode($datos,true);
	header('Content-Type: application/json');
	switch ($datos['alumno']){
		case 'Juan Felix Mateos':
			switch ($datos['materia']){
				case 'Matematicas':
					echo '{"calificacion":7.5}';
					break;
				case 'Lenguaje':
					echo '{"calificacion":9.5}';
					break;
			}
			break;
		case 'Ana Irene Palma':
			switch ($datos['materia']){
				case 'Matematicas':
					echo '{"calificacion":8.5}';
					break;
				case 'Lenguaje':
					echo '{"calificacion":7.5}';
					break;
			}
			break;
	}
?>