let mensaje;
let xhr;

document.addEventListener('DOMContentLoaded', () => {
    crear();
    box = document.getElementById('boxMensaje');

     let boton = document.getElementById('btnCargar');
    boton.addEventListener('click', peticion);

});

//establecemos la conexion
function peticion(evento) {
    xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', respuesta, false);
    xhr.open('GET', 'mensaje.txt', true);
    xhr.send(null);

}

function respuesta(evento) {
    if (evento.target.readyState == 4 && evento.target.status == 200) {
        box.innerHTML = evento.target.responseText;
    }
}

function crear(){
    let h1=document.createElement('h1');
    h1.textContent='Cargar mesaje desde archivo de texto';
    let boton=document.createElement('button');
    boton.id='btnCargar';
    boton.textContent='Cargar mensaje';
    let box=document.createElement('div');
    box.id='boxMensaje';
    document.body.appendChild(h1);
    document.body.appendChild(boton);
    document.body.appendChild(box);
}