


document.addEventListener('DOMContentLoaded', () => {


    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";


    let box1 = document.createElement('div');
    box1.id = "contenedor1";
    box1.style.display = "flex";
    box1.style.flexDirection = "column";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.width = "400px";
    box1.style.height = "400px";
    box1.style.border = "Solid 10px aqua";


    let boton = document.createElement('button');
    boton.textContent = "Cargar Datos";
    boton.style.backgroundColor = "orange";
    boton.style.fontSize = "30px";
    boton.style.fontWeight = "bold";
    boton.addEventListener('click', () => {

        conexion();
        boton.style.display = "none";
    })



    document.body.appendChild(box1);
    box1.appendChild(boton);





})

function conexion() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'procesarJSON.php?hotel=H01', true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let hotel = JSON.parse(xhr.responseText);
            mostrar(hotel);

        }
    }
    xhr.send();


}
let contador = 1;

function mostrar(hotel) {
    let box1 = document.getElementById('contenedor1');
    let caja = document.createElement('div');


    let nombre = document.createElement('label');
    nombre.textContent = "Nombre: " + hotel.nombre;
    caja.appendChild(nombre);

    let precio = document.createElement('p');
    precio.textContent = "Precio: " + hotel.precio;
    caja.appendChild(precio);



    let numNoches = document.createElement('label');
    numNoches.setAttribute('for', 'noches');
    numNoches.textContent = "N de Noches: ";
    caja.appendChild(numNoches);

    let inputNoches = document.createElement('input');
    inputNoches.setAttribute('type', 'number');
    inputNoches.id = "noches" + contador;
    inputNoches.setAttribute('min', '1');
    inputNoches.setAttribute('max', '30');
    inputNoches.value = "1";
    caja.appendChild(inputNoches);

    caja.appendChild(document.createElement('br'));
    caja.appendChild(document.createElement('br'));

    //habitaciones

    let habitacion=document.createElement('label');
    habitacion.textContent="Tipo de Habitación ";
    caja.appendChild(habitacion);

    let select = document.createElement('select');
    select.id = "habitacion" + contador;
    caja.appendChild(select);

    hotel.habitaciones.forEach(habi => {
        let option = document.createElement('option');
        option.value = habi;
        option.textContent = habi;
        select.appendChild(option);
    });

caja.appendChild(document.createElement('br'));
caja.appendChild(document.createElement('br'));
    
hotel.servicios.forEach((servicio, i) => {

    let inputServicios = document.createElement('input');
    inputServicios.id = "servi" + i;
    inputServicios.type = 'checkbox';
    inputServicios.value = servicio;
    caja.appendChild(inputServicios);


    let labelServicios = document.createElement('label');
    labelServicios.setAttribute('for', 'servi' + i);
    labelServicios.textContent = servicio; 
    caja.appendChild(labelServicios);

});

    let disponibles=document.createElement('p');
    disponibles.textContent=hotel.disponibles;
    caja.appendChild(disponibles);

    contador++;
    box1.appendChild(caja);




}
