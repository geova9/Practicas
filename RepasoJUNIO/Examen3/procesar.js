

let div1;
let div2;

document.addEventListener('DOMContentLoaded', () => {

    document.body.style.display = "flex";
    document.body.style.flexDirection="column";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.paddingTop = "20px";

    div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.justifyContent = "center";
    div1.style.alignItems = "center";
    div1.style.border = "solid 2px black";
    div1.style.width = "300px";
    div1.style.height = "400px";

    div2 = document.createElement("div");
    div2.id="contenedor";
    div2.style.display = "flex";
    div2.style.justifyContent = "center";
    div2.style.alignItems = "center";
    div2.style.border = "solid 2px black";
    div2.style.width = "300px";
    div2.style.height = "200px";

    let btn = document.createElement("button");
    btn.textContent = "Enviar";
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
    btn.style.alignItems = "center";
    btn.addEventListener('click', () => {
        btn.style.display = "none";
        crearTabla();
    })

    document.body.appendChild(div1);
    document.body.appendChild(div2);
    div1.appendChild(btn);


})
function conexionServer(codigo) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "datos.php", "true");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let producto = JSON.parse(xhr.responseText);
            mostrarProductos(producto);
        }


    }
    xhr.send("codigo="+codigo);
}

function crearTabla() {
    let tabla = document.createElement('table');
    let contador = 1;
    for (let i = 0; i < 3; i++) {
        let fila = document.createElement('tr');
        tabla.appendChild(fila);
        for (let j = 0; j < 3; j++) {
            let columna = document.createElement('td');
            columna.id = "PO_" + contador;
            columna.style.width = "20px";
            columna.style.height = "20px";
            columna.style.border = "solid 2px blue";
            columna.textContent=columna.id;
            columna.addEventListener('click', function() {
                conexionServer(columna.id);
            })
            contador++;
            fila.appendChild(columna);

        }

    }
    div1.appendChild(tabla);
}

function mostrarProductos(producto){
    let box=document.getElementById('contenedor');
    box.replaceChildren();

    if(producto.error){
        let error=document.createElement('p');
        error.textContent=producto.error;
        error.style.color="red";
        box.appendChild(error);
    } else {
        let parrafo=document.createElement('p');
         parrafo.textContent=
         "Código:" + producto.codigo + "|"+
         "Nombre:" + producto.nombre + "|"+
         "Precio:" + producto.precio;

      box.appendChild(parrafo);

      let lista=document.createElement('ul');

      producto.categoria.forEach(categoria => {
        let li=document.createElement('li');
        li.textContent=categoria;
        lista.appendChild(li);
        
      });
      box.appendChild(lista);


    }





}