let xhr;
let inputPalabra;



document.addEventListener('DOMContentLoaded', () => {

    inputPalabra = document.getElementById('nombre');
    let boton = document.getElementById('boton1');
    let div = document.getElementById('sugerencias');

    boton.addEventListener('click', () => {
        let usuario = inputPalabra.value.trim();
        let sugerencias = [
            usuario + '.' + usuario,
            '123' + usuario,
            usuario + 'Bis',
            usuario + 'ABC',
            usuario + '100'];

        xhr = new XMLHttpRequest();
        xhr.open('POST', 'ajax.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            // 1. Primero verificamos que la comunicación terminó con éxito
            if (xhr.readyState === 4 && xhr.status === 200) {
                let respuesta = JSON.parse(xhr.responseText);
                console.log(respuesta);

                // Limpiamos el div solo cuando ya tenemos la respuesta final
                div.replaceChildren();

                if (respuesta === true) {
                    // LÓGICA: El nombre NO está disponible (ya existe)
                    let p = document.createElement('p');
                    let pSugerencias = document.createElement('p');
                    p.textContent = 'Disponible: No';
                    pSugerencias.textContent = 'Sugerencias: ';

                    let select = document.createElement('select');
                    for (let i = 0; i < sugerencias.length; i++) {
                        let option = document.createElement('option');
                        option.textContent = sugerencias[i];
                        select.appendChild(option);
                    }

                    div.appendChild(p);
                    div.appendChild(pSugerencias);
                    div.appendChild(select);

                } else {
                    // LÓGICA: El nombre SÍ está disponible (respuesta es false)
                    let p2 = document.createElement('p');
                    let p3 = document.createElement('p');
                    p2.textContent = 'Disponible: SI';
                    p3.textContent = 'Nombre disponible para asignar';

                    div.appendChild(p2);
                    div.appendChild(p3);
                }
            }
        };

        xhr.send('usuario=' + usuario);
    });
});
