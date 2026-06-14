


let box1;
let box2;

document.addEventListener('DOMContentLoaded', () => {


    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";

    box1 = document.createElement('div');
    box1.id = "contenedor1";
    box1.style.display = "flex";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.border = "solid 10px blue";
    box1.style.width = "400px";
    box1.style.height = "400px";


    box2 = document.createElement('div');
    box2.id = "contenedor2";
    box2.style.display = "flex";
    box2.style.alignItems = "center";
    box2.style.justifyContent = "center";
    box2.style.border = "solid 10px red";
    box2.style.width = "400px";
    box2.style.height = "250px";
    box2.style.marginTop = "10px";


    let boton = document.createElement('button');
    boton.textContent = "Cargar Cartelera";
    boton.style.backgroundColor = "purple";
    boton.style.color = "white";
    boton.style.fontSize = "15px";
    boton.style.padding = "10px";

    boton.addEventListener('click', () => {
        crearTabla();
        boton.style.display = "none";

    })



    document.body.appendChild(box1);
    document.body.appendChild(box2);
    box1.appendChild(boton);



});

function crearTabla() {

    let tabla = document.createElement('table');
    let box1 = document.getElementById('contenedor1');
    let contador = 1;

    for (let i = 0; i < 2; i++) {
        let fila = document.createElement('tr');
        tabla.appendChild(fila);
        for (let j = 0; j < 5; j++) {
            let column = document.createElement('td');
            column.id = "P" + (contador < 10 ? "0" + contador : contador);
            column.padding = "60px";
            column.textContent = column.id;
            column.style.width = "30px";
            column.style.height = "30px";
            column.style.border = "solid 2px black";
            column.addEventListener('click', () => {

                conexion(column.id);
            });

            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = "yellow";
                column.style.color = "red";

            });
            column.addEventListener('mouseout', () => {
                column.style.backgroundColor = "white";
                column.style.color = "black";

            });
            contador++;
            fila.appendChild(column);


        }
        box1.appendChild(tabla);

    }

}

function conexion(codigo) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'procesar5.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let peli = JSON.parse(xhr.responseText);
            mostrar(peli);
        }


    }
    xhr.send('codigo=' + codigo);
}


let contador = 1;

function mostrar(peli) {

    let box2 = document.getElementById('contenedor2');
    let caja = document.createElement('div');
    box2.replaceChildren();

    let error = document.createElement('p');
    error.style.color = "red";
    error.textContent = peli.error;
    caja.appendChild(error);

    let titulo = document.createElement('p');
    titulo.textContent = "Titulo: " + peli.titulo;
    caja.appendChild(titulo);

    let precio = document.createElement('p');
    precio.textContent = "Precio: " + peli.precio;
    caja.appendChild(precio);

    let labelSalas = document.createElement('label');
    labelSalas.setAttribute('for', 'cars' + contador);
    labelSalas.textContent = "Salas";
    caja.appendChild(labelSalas);

    let select = document.createElement('select');
    select.id = 'cars' + contador;
    caja.appendChild(select);

    peli.salas.forEach(sala => {
        let option = document.createElement('option');
        option.value = sala;
        option.textContent = sala;
        select.appendChild(option);
    });

    box2.appendChild(caja);

    contador++;
}

