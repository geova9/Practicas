document.addEventListener('DOMContentLoaded', () => {
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";

    // Botones Cajas
    let box1 = document.createElement('div');
    box1.id = "contenedor1";
    box1.style.display = "flex";
    box1.style.justifyContent = "center";
    box1.style.alignItems = "center";
    box1.style.width = "350px";
    box1.style.height = "350px";
    box1.style.border = "solid 2px green";

    let box2 = document.createElement('div');
    box2.id = "contenedor2";
    box2.style.display = "flex";
    box2.style.alignItems = "center";
    box2.style.justifyContent = "center";
    box2.style.border = "solid 2px orange";
    box2.style.width = "350px";
    box2.style.height = "250px";
    box2.style.marginTop = "20px";

    // Boton
    let boton = document.createElement("button");
    boton.textContent = "Cargar catálogo";
    boton.style.padding = "10px";
    boton.addEventListener('click', () => {
        crearTabla();
        boton.style.display = "none";
    });

    document.body.appendChild(box1);
    document.body.appendChild(box2);
    box1.appendChild(boton);
});

function crearTabla() {
    let tabla = document.createElement('table');
    let box1 = document.getElementById('contenedor1');

    let contador = 1;

    for (let i = 0; i < 4; i++) {
        let fila = document.createElement('tr');
        tabla.appendChild(fila);
        for (let j = 0; j < 3; j++) {
            let column = document.createElement('td');
            column.id = "M" + (contador < 10 ? "0" + contador : contador);
            column.style.width = "30px";
            column.style.height = "30px";
            column.style.border = "solid 2px black";
            column.textContent = column.id;

            column.addEventListener('click', () => {
                conexion(column.id);
            });

            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = "yellow";
            });

            column.addEventListener('mouseout', () => {
                column.style.backgroundColor = "white";
            });

            contador++;
            fila.appendChild(column);
        }
    }
    box1.append(tabla);
}

function conexion(codigo) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "procesar8.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let peliculas = JSON.parse(xhr.responseText);
            mostrar(peliculas)
        }
    };
    xhr.send('codigo=' + codigo);
}

function mostrar(peliculas) {

    let box2 = document.getElementById('contenedor2');
    let caja = document.createElement('div');
    box2.replaceChildren();

    let error = document.createElement('p');
    error.style.color = "red";
    error.textContent = peliculas.error;
    caja.appendChild(error);


    let titulo = document.createElement('p');
    titulo.textContent ="Título: " + peliculas.titulo;
    caja.appendChild(titulo);

    let duracion = document.createElement('p');
    duracion.textContent = "Duración: " + peliculas.duracion;
    caja.appendChild(duracion);


    let labelNumero=document.createElement('label');
    labelNumero.setAttribute('for', 'cantidad');
    labelNumero.textContent="Cantidad: ";
    caja.appendChild(labelNumero);


    let inputNumero=document.createElement('input');
    inputNumero.setAttribute('type', 'number');
    inputNumero.id="cantidad";
    inputNumero.style.width="30px";
    caja.appendChild(inputNumero);

    caja.appendChild(document.createElement('br'));
    caja.appendChild(document.createElement('br'));


    //primero label(texto)
    //segundo radio(boton)
  

    peliculas.salas.forEach((peli, i) => {
        let labelRadio=document.createElement('label');
        labelRadio.setAttribute('for', 'pelis' + i);
        labelRadio.textContent=peli;
        caja.appendChild(labelRadio);

       let inputRadio=document.createElement('input');
       inputRadio.setAttribute('type', 'radio');
       inputRadio.id='pelis' + i;
       inputRadio.value=peli;
       caja.appendChild(inputRadio);
    });

    box2.appendChild(caja);


}