let xhr;
let respuesta;
let album;


document.addEventListener('DOMContentLoaded', () => {
    let body = document.body;

    let divFoto = document.createElement('div');
    divFoto.id = 'divFoto';
    let divRadio = document.createElement('div');
    divRadio.id = 'divRadio';
    body.appendChild(divFoto);
    body.appendChild(divRadio);

    //obtener el artista seleccionado

    let artista = document.getElementById('artistas');
    artista.addEventListener('change', function () {
        //tomar las opcioness
        let idArtista = this.value;
        album = this.options[this.selectedIndex].text;

        if (idArtista === '') return;

        xhr = new XMLHttpRequest;
        xhr.open('GET', 'servidor.php?artista=' + idArtista, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                respuesta = xhr.responseXML;
                console.log(respuesta);
                processXML();




            }


        }
        xhr.send();

    });


    function processXML() {
        let divFoto = document.getElementById('divFoto');

        // 1. Limpiar el div antes de poner la nueva foto
        divFoto.replaceChildren();

        // 2. Obtener la lista de etiquetas <foto>
        let xmlFoto = respuesta.getElementsByTagName('foto');

        // 3. Verificar si existe al menos una etiqueta <foto>
        if (xmlFoto.length > 0) {
            // Extraer la URL (el texto dentro de la etiqueta)
            let urlFoto = xmlFoto[0].textContent;

            // Crear la imagen
            let img = document.createElement('img');
            img.src = urlFoto;
            img.style.width = "200px";
            img.style.height = "200px";
            img.style.objectFit = "cover";
            // Añadir al DOM
            divFoto.appendChild(img);
        }

        //obtener albunes

        divRadio.replaceChildren(); // Limpiamos lo anterior
        let xmlAlbum = respuesta.getElementsByTagName('album');

        for (let i = 0; i < xmlAlbum.length; i++) {
            let elemento = xmlAlbum[i];
            let nombre = elemento.getAttribute('nombre');
            let anyo = elemento.getAttribute('anyo');

            // --- BLOQUE 1: Radio para el Nombre ---

            // 1. Crear el input (el círculo)
            let inputNombre = document.createElement('input');
            inputNombre.type = 'radio';
            divRadio.appendChild(inputNombre);

            // 2. Crear la etiqueta contenedora
            let labelNombre = document.createElement('label');
            labelNombre.textContent = "Álbum:  " + nombre;


            divRadio.appendChild(labelNombre);
          divRadio.appendChild(document.createElement('br'));


            // --- BLOQUE 2: Radio para el Año ---

            let inputAnyo = document.createElement('input');
            inputAnyo.type = 'radio';
            divRadio.appendChild(inputAnyo);

            let labelAnyo = document.createElement('label');
            labelAnyo.textContent = "Año: " + anyo;
            divRadio.appendChild(labelAnyo);
        }







    }

})

