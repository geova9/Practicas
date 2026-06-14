

let box1;
let box2;

document.addEventListener('DOMContentLoaded', ()=>{
	
	document.body.style.display="flex";
	document.body.style.flexDirection="column";
	document.body.style.alignItems="center";
	document.body.style.justifyContent="center";
	document.body.style.height="100vh";
	
	
	box1=document.createElement('div');
	box1.id="container1";
	box1.style.display="flex";
	box1.style.alignItems="center";
	box1.style.justifyContent="center";
	box1.style.width="300px";
	box1.style.height="400px";
	box1.style.border=" solid 2px blue";
	
	
	box2=document.createElement('div');
	box2.id="container2";
	box2.style.display="flex";
	box2.style.alignItems="center";
	box2.style.justifyContent="center";
	box2.style.width="300px";
	box2.style.height="200px";
	box2.style.border=" solid 2px red";
	box2.style.marginTop="10px";
	
	
	let boton=document.createElement('button');
	boton.id="boton";
	boton.textContent="Cargar Videojuegos";
	
	
	
	document.body.appendChild(box1);
	document.body.appendChild(box2);
	box1.appendChild(boton);
	boton.addEventListener('click', ()=>{
		crearTabla();
		boton.style.display="none";
	})
	
	
	
	
	
})


function crearTabla(){
	let tabla=document.createElement('table');
	let box1=document.getElementById('container1');
	tabla.id="tabla";
	let contador=1;
	
	for(let i=0; i< 2; i++){
		let fila=document.createElement('tr');
		tabla.appendChild(fila);
		for(j=0; j<2; j++){
			let c=document.createElement('td');
			c.id="V0" + contador;
			c.textContent=c.id;
			c.style.padding="10px";
			c.style.width="40px";
			c.style.border="solid 2px green";
			c.addEventListener('click', () =>{
				conexion(c.id);
			})
			
			c.addEventListener('mouseover', () =>{
				c.style.backgroundColor="aqua";
			})
			
			c.addEventListener('mouseout', () =>{
				c.style.backgroundColor="white";
				
			})
			
			contador ++;
			fila.appendChild(c);
			
			
		}
	}
	
	box1.appendChild(tabla);
	
}


function conexion(codigo){
	let xhr=new XMLHttpRequest();
	
	xhr.open('POST', 'procesar2.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	 xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let juego=JSON.parse(xhr.responseText);
		mostrar(juego);
		
      }
}

xhr.send("codigo=" + codigo);
}


function mostrar(juego){
	
	let box2=document.getElementById('container2');	
	box2.replaceChildren();
	
	let card = document.createElement('div');
	
	if(juego.error){
		let error=document.createElement('p');
	    error.textContent=juego.error;
        error.style.color="red";
		card.appendChild(error);
		return;
		
	}
	
	
	//nombreeeeee
	let name=document.createElement('label');
	name.textContent="Nombre: "+ juego.nombre;
	card.appendChild(name);
	
	card.appendChild(document.createElement('br'));
	
	//preciooo
	let precio=document.createElement('label');
	precio.textContent="Precio: "+ juego.precio;
	card.appendChild(precio);
	
	
	//listaaaa
	
	let lista=document.createElement('ul');
	
	juego.ciudades.forEach( play =>{
		let li=document.createElement('li');
		li.textContent=play;
		lista.appendChild(li);
		
	})
	card.appendChild(lista);
	box2.appendChild(card);
	
}