let media;

let alta;
document.addEventListener('DOMContentLoaded', ()=>{

	let formulario=document.createElement('form');
	let labelNombre = document.createElement('label');
    labelNombre.textContent = "Nombre: ";
	let nombre=document.createElement('input');
	nombre.id="nombre";
	
	let br1 = document.createElement('br');
	
	let labelEdad = document.createElement('label');
    labelEdad.textContent = "Edad: ";
    let edad=document.createElement('input');
	edad.id="edad";
	
	let br2 = document.createElement('br');
	
	let labelNotas = document.createElement('label');
    labelNotas.textContent = "Notas: ";
	let notas=document.createElement('input');
	notas.id="notas";
	
	let br3 = document.createElement('br');
	let boton=document.createElement('button');
	boton.type = "button";
	boton.textContent="Enviar";
	boton.addEventListener('click', añadirEstudiante);
	

    media=document.createElement('p');
    alta=document.createElement('p');
   
	
	
	
	
	document.body.appendChild(formulario);
	formulario.appendChild(labelNombre);
	formulario.appendChild(nombre);
	formulario.appendChild(br1);
	formulario.appendChild(labelEdad);
	formulario.appendChild(edad);
	formulario.appendChild(br2);
	formulario.appendChild(labelNotas);
	formulario.appendChild(notas);
	formulario.appendChild(br3);
	formulario.appendChild(boton);
	formulario.appendChild(media);
	formulario.appendChild(alta);
	


	
	

	
	
	
	
	
	
	
	
})


class Estudiante {
		constructor (nombre,edad,notas){
			this.nombre=nombre;
			this.edad=edad;
			this.notas=notas;
		}
		
		/*-function visualizar(estudiante){
			estudiante.forEach(e => console.log(e));
		}*/
		
		
	}
	
	
let lista=[];

lista.push(new Estudiante("Juan", "28",[6,7,8]));
lista.push(new Estudiante("Juana", "23",[8,7,9]));
lista.push(new Estudiante("Okarun", "19",[3,10,8]));

function visualizar(lista){
			lista.forEach(e => console.log(e));
	
}

function añadirEstudiante(){
	let nombre=document.getElementById('nombre').value;
	let edad=document.getElementById('edad').value;
	let notas=document.getElementById('notas').value;
	
	let notasArray=notas.split(',').map(function(n){
		return parseInt(n.trim());
	})
	lista.push(new Estudiante(nombre, edad, notasArray));
	
	let formato=lista.map(function(e){
	return`Nombre: ${e.nombre}- Edad: ${e.edad} - Notas:${e.notas.join(',')}`;
	}).join("<br>");
	
	
		
	
	
	let resultado=calcularMedia(notasArray);
	let notaMasAlta = notaMas(notasArray);
	
	
	
	let ventana= window.open("", "", "width=300,height=300");
	ventana.document.write(`
	<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Lista de Estudiante</h1>
<ul>${formato}</ul>
<p>Media:${resultado.media}</p>
<p>Resultado del examen:${resultado.esAprobado ? "Aprobado" : "Suspenso"}</p>
<p>Notas má alta:${notaMasAlta}</p>

<input type="button" value="Correcto" onclick="window.close()">
</body>
</html>
	
	`);
	
	
}
	
 function calcularMedia(notas){
	let suma=0;
	
	for(let i = 0; i< notas.length; i++){
		
		  suma+=notas[i];
		
	}
	let resultado=suma/notas.length;
	let aprobado;
	if(resultado >= 5){
		aprobado=true;
		
	}else{
		aprobado=false;
	}

	
	return {
		media: resultado,
		esAprobado: aprobado
	}
}

	
function notaMas(notas){
	let mayor=notas[0];
	
	for(let i = 0; i< notas.length; i++){
		if(notas[i] > mayor){
			mayor=notas[i]
		}
	}
	return mayor;
	
	
	
}