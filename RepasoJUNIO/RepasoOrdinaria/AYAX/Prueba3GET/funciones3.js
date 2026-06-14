

let box1;
let box2;


document.addEventListener("DOMContentLoaded", () => {


    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    box1 = document.createElement('div');
    box1.id = "contenedor1";
    box1.style.display = "flex";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.width = "350px";
    box1.style.height = "350px";
    box1.style.border = "solid 2px green";


    box2 = document.createElement('div');
    box2.id = "contenedor2";
    box2.style.display = "flex";
    box2.style.alignItems = "center";
    box2.style.justifyContent = "center";
    box2.style.width = "350px";
    box2.style.height = "350px";
    box2.style.marginTop = "20px";
    box2.style.border = "solid 2px orange";


    let boton = document.createElement('button');
    boton.textContent = "Cargar Cartelera";
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
        for (let j = 0; j < 2; j++) {
            let c = document.createElement('td');
            //c.id = "M" + (contador < 10 ? "0" + contador : contador);
            c.id = "M0" + contador;
            c.style.padding = "10px";
            c.style.width = "40px";
            c.textContent = c.id;
            c.style.border = "solid 1px black";
            c.addEventListener('mouseover', () => {
                c.style.backgroundColor = "yellow";
            });

            c.addEventListener('mouseout', () => {
                c.style.backgroundColor = "white";
            });


            c.addEventListener('click', () => {
                conexion(c.id);
            })




            contador++;
            fila.appendChild(c);

        }

        tabla.appendChild(fila);
    }
    box1.appendChild(tabla);

}

function conexion(codigo) {

    let xhr = new XMLHttpRequest();
    //comillas invertidas 
    //xhr.open('GET', `procesar3.php?codigo=${codigo}`, true);
    xhr.open('GET', 'procesar3.php?codigo=' + codigo, true);


    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let peli = JSON.parse(xhr.responseText);
            mostrarPelis(peli);
        }
    }
    xhr.send(); //En GET el send vacio
}

function mostrarPelis(peli) {

    let box2 = document.getElementById('contenedor2');
    let cont = document.createElement('div');
    box2.replaceChildren(cont);


    let error = document.createElement('p');
    error.style.color = "red";
    error.textContent = peli.error;
    cont.appendChild(error);


    //titulo
    let titulo = document.createElement('label');
    titulo.textContent = "Titulo: " + peli.titulo;
    cont.appendChild(titulo);

    cont.appendChild(document.createElement('br'));

    //duracion
    let duracion = document.createElement('label');
    duracion.textContent = "Duración: " + peli.duracion;
    cont.appendChild(duracion);

    cont.appendChild(document.createElement('br'));

    let unidadesLabel = document.createElement("label");
    unidadesLabel.setAttribute("for", "unidades");
    unidadesLabel.textContent = "Intro nº unidades:";
    cont.appendChild(unidadesLabel);

    //entradas
    let unidades = document.createElement("input");
    unidades.setAttribute("type", "number");
    unidades.id = "unidades";
    unidades.style.width = "50px";
    unidades.value = 0;
    cont.appendChild(unidades);

    cont.appendChild(document.createElement('br'));



    //Cines
    let cines = document.createElement('label');
    cines.textContent = "Cines : ";
    cont.appendChild(cines);

    cont.appendChild(document.createElement('br'));

    let i = 0;

    peli.cines.forEach(cine => {


        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.id = "cine" + i;
        input.value = cine;
        cont.appendChild(input);

        let labelCines = document.createElement('label');
        labelCines.setAttribute('for', 'cine' + i);
        labelCines.textContent = cine;
        cont.appendChild(labelCines);


    });
    box2.appendChild(cont);





}