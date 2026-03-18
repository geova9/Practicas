document.addEventListener('DOMContentLoaded', () => {

    let titulo = document.getElementById('titulo');
    let inputNombre = document.getElementById('nombre');
    let inputColor = document.getElementById('bgcolor');
    let selectFuente = document.getElementById('font');
    let selectImagen = document.getElementById('image');
    let btnReset = document.getElementById('btnReset');
    let imagenVisual = document.querySelector('img');

    let html = document.querySelector('html');
    let p = document.querySelector('p');
    let footer = document.getElementById('info-extra');


    let contador = localStorage.getItem('contador');
    if (!contador) {
        contador = 0;
    } else {
        contador = parseInt(contador);
    }

    footer.textContent = "Has actualizado tus preferencias: " + contador + " veces";


    function incrementarContador() {
        contador++;
        localStorage.setItem('contador', contador);
        footer.textContent = "Preferencias actualizadas: " + contador + " veces";
    }

    if (localStorage.getItem('usuario')) {
        let usuario = localStorage.getItem('usuario');
        inputNombre.value = usuario;
        titulo.textContent = "HOLA " + usuario;
    }

    if (localStorage.getItem('bgcolor')) {
        let color = localStorage.getItem('bgcolor');
        html.style.backgroundColor = "#" + color;
        inputColor.value = color;
    }

    if (localStorage.getItem('fuente')) {
        let fuente = localStorage.getItem('fuente');
        p.style.fontFamily = fuente;
        selectFuente.value = fuente;
    }

    if (localStorage.getItem('userImg')) {
        let img = localStorage.getItem('userImg');
        imagenVisual.src = img;
        selectImagen.value = img;
    }

 
    inputNombre.addEventListener('input', () => {
        let nombre = inputNombre.value;
        titulo.textContent = "HOLA " + nombre;
        localStorage.setItem('usuario', nombre);
        incrementarContador();
    });

   
    inputColor.addEventListener('input', () => {
        let color = inputColor.value;
        html.style.backgroundColor = "#" + color;
        localStorage.setItem('bgcolor', color);
        incrementarContador();
    });


    selectFuente.addEventListener('input', () => {
        let fuente = selectFuente.value;
        p.style.fontFamily = fuente;
        localStorage.setItem('fuente', fuente);
        incrementarContador();
    });

 
    selectImagen.addEventListener('input', () => {
        let ruta = selectImagen.value;
        imagenVisual.src = ruta;
        localStorage.setItem('userImg', ruta);
        incrementarContador();
    });


    btnReset.addEventListener('click', () => {
        document.getElementById('nombre').value = '';

        document.getElementById('bgcolor').value = '#FF0000';
        imagenVisual.src = "images/firefoxos.png";
        selectImagen.selectedIndex = 0; 
        
        selectFuente.selectedIndex = 0; 

        localStorage.clear();
        location.reload();
    });

});
