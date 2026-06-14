

document.addEventListener('DOMContentLoaded', () => {

    let box1 = document.createElement('div');


    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";

    box1.id = "contenedor1";
    box1.style.display = "flex";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.width = "300px";
    box1.style.height = "300px";
    box1.style.border = "solid 2px black";

    let boton = document.createElement('button');
    boton.textContent = "Cargar";
    boton.addEventListener('click', () => {
        conectar();
        boton.style.display="none";
    })

    document.body.appendChild(box1);
    box1.appendChild(boton);





})
function conectar() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'servidorJSON.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let juego = JSON.parse(xhr.responseText);
            mostrar(juego);
        }
    }
    xhr.send('codigo=J01');
}



function mostrar(juego) {


    let box1 = document.getElementById('contenedor1');
    let caja2 = document.createElement('div');
    let contador = 0;

    let titulo = document.createElement('p');
    titulo.textContent = "Titulo: " + juego.titulo;
    caja2.appendChild(titulo);


    let precio = document.createElement('p');
    precio.textContent = "Precio: " + juego.precio;
    caja2.appendChild(precio);

    let cantidad = document.createElement('label');
    cantidad.setAttribute('for', 'cantidad');
    cantidad.textContent = "Cantidad: ";
    caja2.appendChild(cantidad);

    let inputCantidad = document.createElement('input');
    inputCantidad.setAttribute('type', 'number');
    inputCantidad.id = "cantidad" + contador;
    inputCantidad.style.width="50px";
    caja2.appendChild(inputCantidad);

    caja2.appendChild(document.createElement('br'));
    caja2.appendChild(document.createElement('br'));

    //select

    let plataforma = document.createElement('select');
    plataforma.id = "plataforma" + contador;
    caja2.appendChild(plataforma);

    juego.plataformas.forEach(plata => {
        let option = document.createElement('option');
        option.value = plata;
        option.textContent = plata;
        plataforma.appendChild(option);

    });
    caja2.appendChild(document.createElement('br'));
    caja2.appendChild(document.createElement('br'));

    //radio
    juego.idiomas.forEach((idioma, i) => {

        let labelIdioma = document.createElement('label');
        labelIdioma.setAttribute('for', 'idioma' + i);
        labelIdioma.textContent = idioma;
        caja2.appendChild(labelIdioma);

        let inputIdioma = document.createElement('input');
        inputIdioma.setAttribute('type', 'checkbox');
        inputIdioma.id = "idioma" + i;
        inputIdioma.value = idioma;
        caja2.appendChild(inputIdioma);



    })
    

    let stock = document.createElement('p');
    stock.textContent = "Stock: " + juego.stock;
    caja2.appendChild(stock);

    contador++;
    box1.appendChild(caja2);

    


}