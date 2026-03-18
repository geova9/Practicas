


document.addEventListener('DOMContentLoaded', ()=>{
	

  let div1 = document.createElement('div');
  div1.style.width = "300px";
  div1.style.height = "400px";
  div1.style.border = "solid 3px black";
  div1.style.textAlign = "center";
  div1.style.paddingTop = "150px";
  div1.id = "div1";
  document.body.appendChild(div1);

  let div2 = document.createElement('div');
  div2.style.width = "300px";
  div2.style.height = "200px";
  div2.style.border = "solid 3px red";
  div2.style.textAlign = "center";
  div2.style.paddingTop = "150px";
  div2.id = "div2";
  document.body.appendChild(div2);

  let boton = document.createElement('button');
  boton.type = "button";
  boton.id = "boton";
  boton.textContent = "Cargar Tabla de Productos";
  div1.appendChild(boton);

  boton.addEventListener('click', () => {
    // si ya existe, no la vuelvas a crear
    if (document.getElementById("tabla")) return;

    let tabla = crearTabla(3, 3);
    tabla.border = "1";
    tabla.style.borderCollapse = "collapse";
    tabla.style.display = "inline-block";

    // la meto arriba del botón (para que el botón quede debajo)
    div1.insertBefore(document.createElement("br"), boton);
    div1.insertBefore(tabla, boton);

    // opcional: desactivar el botón
    boton.disabled = true;
  });
});

function crearTabla(filas, columnas) {
  let tabla = document.createElement('table');
  tabla.id = "tabla";
  let id = 1;

  for (let i = 0; i < filas; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < columnas; j++) {
      let td = document.createElement('td');
      td.textContent = "PO" + id++;

      td.addEventListener('click', () => cargarPeticion(td.textContent));
      td.addEventListener('mouseover', () => td.style.background = "aqua");
      td.addEventListener('mouseout', () => td.style.background = "white");

      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }
  return tabla;
}

function cargarPeticion(codigo){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "codigo.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let producto = JSON.parse(xhr.responseText);
            mostrarDatos(producto);
        }
    };

    xhr.send("codigo=" + encodeURIComponent(codigo));
}


function mostrarDatos(producto) {
				let div2 = document.getElementById("div2");
				div2.replaceChildren();
				
				if(producto.error) {
					let error = document.createElement("p");
					error.textContent = producto.error;
					error.style.color = "red";
					div2.appendChild(error);
				} else {
					let nombre = document.createElement("p");
					nombre.textContent = "Nombre: " + producto.nombre;
					div2.appendChild(nombre);
					
					let precio = document.createElement("p");
					precio.textContent = "Precio: " + producto.precio+"€";
					div2.appendChild(precio);
					
					let unidadesLabel = document.createElement("label");
					unidadesLabel.setAttribute("for", "unidades");
					unidadesLabel.textContent = "Intro nº unidades:";
					div2.appendChild(unidadesLabel);
					
					let unidades = document.createElement("input");
					unidades.setAttribute("type", "number");
					unidades.id="unidades";
					unidades.style.width = "50px";
					unidades.value = 0;
					div2.appendChild(unidades);
					
					div2.appendChild(document.createElement("br"));
					
					let p = document.createElement("span");
					p.textContent = "Recoger en: ";
					div2.appendChild(p);
					
					let i = 0;
					producto.tiendas.forEach(tienda => {
						let tiendaLabel = document.createElement("label");
						tiendaLabel.setAttribute("for", "tienda"+i);
						tiendaLabel.textContent = tienda;
						div2.appendChild(tiendaLabel);
						
						let radio = document.createElement("input");
						radio.setAttribute("type", "radio");
						radio.name = "tienda";
						radio.value = tienda;
						radio.id = "tienda"+i;
						div2.appendChild(radio);
						
						i++;
					});
				}
			}