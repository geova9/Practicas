document.addEventListener('DOMContentLoaded', () => {

    let inputPalabra = document.getElementById('palabra');
    let listaSugerencias = document.getElementById('lista-sugerencias');


    inputPalabra.addEventListener('input', () => {
        let texto = inputPalabra.value.trim();

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'catalogo.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                let listaResultados = JSON.parse(xhr.responseText);

                listaSugerencias.replaceChildren();
                
              if (listaResultados.length === 0) { 
                  let p=document.createElement('p');
                  p.className='mensaje-vacio';
                  p.textContent='No se encontro producto';
                  listaSugerencias.appendChild(p);
               }

                listaSugerencias.className = listaResultados.length > 0 ? "lista-sugerencias-container" : '';
                document.getElementById('resultados').replaceChildren();
                listaResultados.forEach(element => {

                    crearTarjetaLibro(element);

                    let li = document.createElement('li');
                    li.className='lista-item-simple';
                    li.style.listStyle = 'none';
                    li.textContent = element.palabra;


                    li.addEventListener('click', () => {
                        inputPalabra.value = element.palabra;

                        listaSugerencias.replaceChildren();

                        document.getElementById('resultados').replaceChildren();

                        crearTarjetaLibro(element);
                    });

                    listaSugerencias.appendChild(li);
                });
            }
        };

        xhr.send("palabra=" + texto);
    });
});

function crearTarjetaLibro(producto) {
    let resultadoDiv = document.getElementById('resultados');
    resultadoDiv.className = 'resultados-container-horizontal';


    let tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-producto';
    
    
    let h3Titulo = document.createElement('h3');
    h3Titulo.textContent = producto.palabra;
    h3Titulo.className = 'tarjeta-titulo';
    tarjeta.appendChild(h3Titulo);

    let h3 = document.createElement('h3');
    h3.textContent = producto.nombre;
    if (producto.imagen) {
        let img = document.createElement('img');
        img.className = 'tarjeta-imagen';
        img.src = producto.imagen;
        tarjeta.appendChild(img);
    }

    let pPrecio = document.createElement('p');
    pPrecio.className = 'tarjeta-precio';
    pPrecio.textContent = "Precio: $" + producto.precio;


    tarjeta.appendChild(h3);
    tarjeta.appendChild(pPrecio);

    resultadoDiv.appendChild(tarjeta);
}


