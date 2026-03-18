<?php
	$datos = $_REQUEST['datosJ'];	
	$datos = json_decode($datos);
	$respuesta=new stdClass();
	switch ($datos->alumno){
		case 'Juan Felix Mateos':
			switch($datos->materia){
				case 'Matematicas':
					$respuesta->calificacion=7.5;
					break;
		 		case 'Lenguaje':
					$respuesta->calificacion=9.5;
					break;
			}
		break;
		case 'Ana Irene Palma':
			switch ($datos->materia){
				case 'Matematicas':
					$respuesta->calificacion=4.5;
					break;
				case 'Lenguaje':
					$respuesta->calificacion=5.5;
					break;
			}
		break;
	}
	$respJson=json_encode($respuesta);
	header('Content-Type: application/json');
	echo $respJson;
?>
