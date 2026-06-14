

let box1;
let box2;

document.addEventListener('DOMContentLoaded', ()=>{
	
	document.body.style.display="flex";
	document.body.style.flexDirection = "column";
	document.body.style.alignItems = "center";
	document.body.style.justifyContent="center";
	document.body.style.height="100vh";
	
	
	
	box1=document.createElement('div');
	box1.id="contenedor1";
	box1.style.display="flex";
	box1.style.alignItems = "center";
	box1.style.justifyContent="center";
	box1.style.border=" solid 2px green";
	box1.style.width="350px";
	box1.style.height="450px";
	
	
	
	box2=document.createElement('div');
	box2.id="contenedor2";
	box2.style.display="flex";
	box2.style.alignItems = "center";
	box2.style.justifyContent="center";
	box2.style.border=" solid 2px orange";
	box2.style.width="350px";
	box2.style.height="250px";
	box2.style.margin="20px";
	
	
	//creacion de boton
	let boton=document.createElement('button');
	boton.id="boton";
	boton.textContent="Cargar Lista de Empleados";
	
	
	
	
	document.body.appendChild(box1);
	document.body.appendChild(box2);
	box1.appendChild(boton);
	boton.addEventListener('click', ()=>{
		generarTabla();
		boton.style.display="none";
	})
});



function generarTabla(){
	let tabla=document.createElement('table');
	let box1=document.getElementById('contenedor1');
	tabla.id="tabla";
	let contador=1;
	
	 for(let i=0; i < 4; i++){
		 let fila=document.createElement('tr');
		 tabla.appendChild(fila);
	for(let j=0; j < 3; j++){
		let colum=document.createElement('td');
		//se asigna lo que esta antes del : o despues 
		colum.id = "E" + (contador < 10 ? "0" + contador : contador);
		colum.textContent=colum.id;
		colum.style.border=" solid 2px black";
		colum.style.width="60px";
		colum.style.padding="10px";
		colum.addEventListener('click', ()=>{
			conexion(colum.id);
			
		})
		colum.addEventListener('mouseover', ()=>{
			colum.style.background="green";
		});
		
		colum.addEventListener('mouseout', ()=>{
			colum.style.background="white";
		});
		
		contador++;
		fila.appendChild(colum);
		 
	 }
	 box1.appendChild(tabla);
	
	
}
}

function conexion(codigo){
	let xhr=new XMLHttpRequest();
	
	xhr.open('POST', 'procesar.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	xhr.onreadystatechange = function() {
		
      if (this.readyState == 4 && this.status == 200) {
		  
		  let empleado=JSON.parse(xhr.responseText);
		  mostrarEmpleados(empleado);
		  
	  }
     };
    xhr.send("codigo=" + codigo);
}

function mostrarEmpleados(empleado){
	let box2 = document.getElementById('contenedor2');
	box2.replaceChildren();

	// CONTENEDOR PRINCIPAL (mejora visual)
	
	
	
	

	// ERROR
	if (empleado.error) {
		let error = document.createElement('p');
		error.textContent = empleado.error;
		error.style.color = "red";
		card.appendChild(error);
		return; 
	}

	// NOMBRE
	let nombre = document.createElement('p');
	nombre.textContent = "Nombre Empleado: " + empleado.nombre;
	card.appendChild(nombre);

	// SALARIO
	let salario = document.createElement('p');
	salario.textContent = "Salario: " + empleado.salario ;
	card.appendChild(salario);

	// DEPARTAMENTOS
	let tituloDep = document.createElement('p');
	tituloDep.textContent = "Departamentos: ";
	card.appendChild(tituloDep);

	let lista = document.createElement('ul');

	empleado.departamentos.forEach(depa => {
		let li = document.createElement('li');
		li.textContent = depa;
		lista.appendChild(li);
	});

	card.appendChild(lista);

	// INSERTAR EN PANTALLA
	box2.appendChild(card);
}