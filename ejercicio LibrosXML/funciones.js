// Variable global para almacenar el XML
let bibliotecaXmlDoc = null;

document.addEventListener("DOMContentLoaded", function () {
    cargarXML();
   let texto=document.getElementById('tituloBusqueda');
   texto.addEventListener('keydown', (e)=>{
      if(e.key === "Enter"){
        filtrarLibros();
      }
   });





});

function cargarXML() {
    document.getElementById("cargarTodosBtn").disabled = true;
    document.getElementById("buscarBtn").disabled = true;


    let xhr = new XMLHttpRequest();
    xhr.open("GET", "libros.xml", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                bibliotecaXmlDoc = xhr.responseXML;

                document.getElementById("cargarTodosBtn").disabled = false;
                document.getElementById("buscarBtn").disabled = false;

                document.getElementById("cargarTodosBtn")
                    .addEventListener("click", mostrarTodosLosLibros);

                document.getElementById("buscarBtn")
                    .addEventListener("click", filtrarLibros);
            } else {
                console.error("No se pudo cargar libros.xml");
            }
        }
    };

    xhr.send();
}

function mostrarTodosLosLibros() {
    let libros = bibliotecaXmlDoc.getElementsByTagName("libro");
    mostrarTarjetas(libros);
}

function filtrarLibros() {
    let texto = document.getElementById("tituloBusqueda").value.toLowerCase().trim();
    let libros = bibliotecaXmlDoc.getElementsByTagName("libro");

    let resultados = [];

    for (let libro of libros) {
        let titulo = libro.getElementsByTagName("titulo")[0].textContent.toLowerCase();
        if (titulo.includes(texto)) {
            resultados.push(libro);
        }
    }

    let cont = document.getElementById("resultado");
    // Limpiar contenedor de forma segura
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    if (resultados.length === 0) {
        let mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron libros con ese título.";
        cont.appendChild(mensaje);
    } else {
        mostrarTarjetas(resultados);
    }
}

function mostrarTarjetas(lista) {
    let cont = document.getElementById("resultado");
    // Limpiar contenedor de forma segura
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    for (let libro of lista) {
        let titulo = libro.getElementsByTagName("titulo")[0].textContent;
        let autor = libro.getElementsByTagName("autor")[0].textContent;
        let anio = libro.getElementsByTagName("anio")[0].textContent;

        let tarjeta = document.createElement("div");
        tarjeta.style.padding = "10px";
        tarjeta.style.margin = "10px";
        tarjeta.style.width = "200px";
        tarjeta.style.backgroundColor = "#2484ddff";
        tarjeta.style.display = "inline-block";
        tarjeta.style.borderRadius = "6px";

        let h3 = document.createElement("h3");
        h3.style.color = "white";
        h3.textContent = titulo;

        let pAutor = document.createElement("p");
        let strongAutor = document.createElement("strong");
        strongAutor.textContent = "Autor: ";
        pAutor.appendChild(strongAutor);
        pAutor.appendChild(document.createTextNode(autor));

        let pAnio = document.createElement("p");
        let strongAnio = document.createElement("strong");
        strongAnio.textContent = "Año: ";
        pAnio.appendChild(strongAnio);
        pAnio.appendChild(document.createTextNode(anio));

        tarjeta.appendChild(h3);
        tarjeta.appendChild(pAutor);
        tarjeta.appendChild(pAnio);

        cont.appendChild(tarjeta);
    }
}
