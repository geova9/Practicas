let xmlData = null;
let pilotoNombre = '';
let divImagen = null;

document.addEventListener('DOMContentLoaded', function () {


    let body = document.body;

    let fotoContenedor = document.createElement('div');
    fotoContenedor.id = 'fotoContainer';

    let aeropuertosContainer = document.createElement('div');
    aeropuertosContainer.id = 'aeropuertosContainer';

    let vuelosContainer = document.createElement('div');
    vuelosContainer.id = 'vuelosContainer';

    body.appendChild(fotoContenedor);
    body.appendChild(aeropuertosContainer);
    body.appendChild(vuelosContainer);

    let selectPilotos = document.getElementById('pilotos');



    selectPilotos.addEventListener('change', function () {

        let id = this.value;
        pilotoNombre = this.options[this.selectedIndex].text;

        if (id === '') return;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'servidor.php?id=' + id, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                xmlData = xhr.responseXML;
                processXML();
            }
        };
        xhr.send();
    });

    function processXML() {

        fotoContenedor.innerHTML = '';
        aeropuertosContainer.innerHTML = '';

  
        let fotos = xmlData.getElementsByTagName('foto');

        if (fotos.length > 0) {
            let img = document.createElement('img');
            img.src = fotos[0].textContent;
            img.style.width="200px";
            img.style.height="200px";
         


            img.addEventListener('mouseover', function (e) {
                divImagen = document.createElement('div');
                divImagen.textContent = pilotoNombre;
                divImagen.style.position = 'absolute';
                divImagen.style.background = 'white';
                divImagen.style.border = '1px solid black';
                divImagen.style.padding = '5px';
                document.body.appendChild(divImagen);
                actualizarPosicion(e);
            });
            function actualizarPosicion(e) {
                if (divImagen) {
                    divImagen.style.left = (e.pageX + 10) + 'px';
                    divImagen.style.top = (e.pageY + 10) + 'px';
                }
            }


            img.addEventListener('mousemove', actualizarPosicion);

            img.addEventListener('mouseout', function () {
                if (divImagen) {
                    divImagen.remove();
                    divImagen = null;
                }
            });


            fotoContenedor.appendChild(img);
        }

        //aereopuertos
        let aeropuertos = xmlData.getElementsByTagName('aeropuerto');
        for (let i = 0; i < aeropuertos.length; i++) {
            let nombre = aeropuertos[i].getAttribute('nombre');

            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'aeropuerto';
            radio.value = nombre;
            radio.id = `aeropuerto_${i}`;
            radio.addEventListener('change', mostrarVuelos);

            let label = document.createElement('label');
            label.htmlFor = radio.id;
            label.textContent = nombre;

            aeropuertosContainer.appendChild(radio);
            aeropuertosContainer.appendChild(label);
            aeropuertosContainer.appendChild(document.createElement('br'));
        }
    }

    function mostrarVuelos() {

        vuelosContainer.innerHTML = '';
        let nombreSeleccionado = this.value;

        let aeropuertos = xmlData.getElementsByTagName('aeropuerto');

        for (let i = 0; i < aeropuertos.length; i++) {

            if (aeropuertos[i].getAttribute('nombre') === nombreSeleccionado) {

                let vuelos = aeropuertos[i].getElementsByTagName('vuelo');

                let table = document.createElement('table');
                table.setAttribute('border', '1');
                let trHead = document.createElement('tr');

                trHead.innerHTML = '<th>Recorrido</th><th>Fecha</th>';
                table.appendChild(trHead);

                for (let j = 0; j < vuelos.length; j++) {
                    let tr = document.createElement('tr');

                    tr.innerHTML =
                        '<td>' + vuelos[j].getAttribute('recorrido') + '</td>' +
                        '<td>' + vuelos[j].getAttribute('fecha') + '</td>';

                    table.appendChild(tr);
                }

                vuelosContainer.appendChild(table);
                break;
            }
        }
    }

});