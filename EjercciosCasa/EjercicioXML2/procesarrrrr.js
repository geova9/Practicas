let xhr;
let respuestaXMLGlobal; // Variable global para guardar el XML
let nombreArtistaTexto; // Para guardar el nombre y mostrarlo en el hover

document.addEventListener('DOMContentLoaded', () => {
    let body = document.body;

    // Crear contenedores dinámicos si no existen
    let divFoto = document.createElement('div');
    divFoto.id = 'divFoto';
    let divRadio = document.createElement('div');
    divRadio.id = 'divRadio';
    let divTabla = document.createElement('div'); // Necesitamos donde poner la tabla
    divTabla.id = 'divTabla';

    body.appendChild(divFoto);
    body.appendChild(divRadio);
    body.appendChild(divTabla);

    let selectArtista = document.getElementById('artistas');
    let tooltip = document.getElementById('tooltip');

    // EVENTO: Cambio en el desplegable
    selectArtista.addEventListener('change', function () {
        
        let idArtista = this.value; // El valor numérico (1, 2, 3)
        // Corregido: es 'options', en plural
        nombreArtistaTexto = this.options[this.selectedIndex].text; 

        // Limpiar interfaz anterior
        divFoto.innerHTML = '';
        divRadio.innerHTML = '';
        divTabla.innerHTML = '';

        if (idArtista === '') return;

        // PETICIÓN AJAX
        xhr = new XMLHttpRequest();
        // Enviamos el ID, no el nombre, para que coincida con el switch de PHP
        xhr.open('GET', 'artista.php?artista=' + idArtista, true);
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                respuestaXMLGlobal = xhr.responseXML; // Guardar en GLOBAL
                procesarXML(respuestaXMLGlobal, divFoto, divRadio, tooltip);
            }
        };
        xhr.send();
    });
});

function procesarXML(xml, divFoto, divRadio, tooltip) {
    // 1. GESTIÓN DE LA FOTO
    let nombreImagen = xml.getElementsByTagName('foto')[0].firstChild.nodeValue;
    let img = document.createElement('img');
    // Asumimos que las imágenes están en la misma carpeta, si no, ajustar ruta
    img.src = nombreImagen; 
    img.alt = "Foto Artista";
    
    // Efecto Hover (seguir al ratón)
    img.addEventListener('mousemove', function(e) {
        tooltip.style.display = 'block';
        tooltip.innerText = nombreArtistaTexto;
        tooltip.style.left = (e.pageX + 15) + 'px'; // Coordenada X + un poco de margen
        tooltip.style.top = (e.pageY + 15) + 'px';  // Coordenada Y
    });

    img.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });

    divFoto.appendChild(img);

    // 2. GESTIÓN DE RADIO BUTTONS (Álbumes)
    let albumes = xml.getElementsByTagName('album');
    
    let titulo = document.createElement('h3');
    titulo.innerText = "Álbumes disponibles:";
    divRadio.appendChild(titulo);

    for (let i = 0; i < albumes.length; i++) {
        let nombreAlbum = albumes[i].getAttribute('nombre');
        
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'grupo_albumes'; // Importante: mismo name para que sean excluyentes
        radio.value = nombreAlbum;    // Guardamos el nombre para buscarlo luego
        radio.id = 'alb_' + i;

        // EVENTO: Clic en el radio button genera la tabla
        radio.addEventListener('click', function() {
            generarTabla(this.value);
        });

        let label = document.createElement('label');
        label.htmlFor = 'alb_' + i;
        label.innerText = nombreAlbum;

        divRadio.appendChild(radio);
        divRadio.appendChild(label);
        divRadio.appendChild(document.createElement('br'));
    }
}

function generarTabla(nombreAlbumSeleccionado) {
    let divTabla = document.getElementById('divTabla');
    divTabla.innerHTML = ''; // Limpiar tabla anterior

    // Buscar en la VARIABLE GLOBAL el álbum seleccionado
    let albumes = respuestaXMLGlobal.getElementsByTagName('album');
    let albumEncontrado = null;

    for (let i = 0; i < albumes.length; i++) {
        if (albumes[i].getAttribute('nombre') === nombreAlbumSeleccionado) {
            albumEncontrado = albumes[i];
            break;
        }
    }

    if (albumEncontrado) {
        // Crear tabla HTML
        let tabla = document.createElement('table');
        let cabecera = "<tr><th>Canción</th><th>Duración</th></tr>";
        tabla.innerHTML = cabecera;

        let canciones = albumEncontrado.getElementsByTagName('cancion');

        for (let j = 0; j < canciones.length; j++) {
            let titulo = canciones[j].getAttribute('titulo');
            let duracion = canciones[j].getAttribute('duracion');

            let fila = `<tr><td>${titulo}</td><td>${duracion}</td></tr>`;
            tabla.innerHTML += fila;
        }

        divTabla.appendChild(tabla);
    }
}