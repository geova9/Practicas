


let container;
let container2;
let container3;

document.addEventListener('DOMContentLoaded', () => {

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    //-----TITULO------
    let h1 = document.createElement('h1');
    h1.textContent = "Buscador y filtro de productos con AJAX";
    document.body.appendChild(h1);



    //----CONTENEDOR-----
    container = document.createElement('div');
    container.id = "general";
    container.style.width = "300px";
    container.style.height = "300px";
    container.style.border = "solid 2px black";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    document.body.appendChild(container);

    //----FORMULARIO--------
    let form = document.createElement('form');
    //-----CODIGO------
    let labelCodigo = document.createElement('label');
    labelCodigo.textContent = "Codigo: ";
    let inputCodigo = document.createElement('input');

    //---NOMBRE------
    let labelNombre = document.createElement('label');
    labelNombre.textContent = "Nombre: ";
    let inputNombre = document.createElement('input');
    //---CATEGORIAS------
    let labelCate = document.createElement('label');
    labelCate.textContent = "Categorias: ";
//------contenedor paera categorias---------
     let contenedorSelect = document.createElement('div');
    contenedorSelect.id = "contenedorSelect";

    

    form.appendChild(labelCodigo);
    form.appendChild(inputCodigo);

    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(document.createElement('br'));

    form.appendChild(labelCate);
    form.appendChild(contenedorSelect);
  
    container.appendChild(form);

    form.appendChild(document.createElement('br'));

    //-----BOTON---------
    let boton = document.createElement('button');
    boton.setAttribute('type', 'button');
    boton.style.display = "flex";
    boton.style.justifyContent = "center";
    boton.style.alignItems = "center";
    boton.textContent = "Enviarrr";

    container.appendChild(boton);

cargarategorias();

})

function cargarategorias() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'categorias.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let categorias = JSON.parse(xhr.responseText);
 
            //-----CATEGORIA-------
            let select = document.createElement('select');
            select.id = "categoria";
            let optionDefault=document.createElement('option');
            optionDefault.value="";
            optionDefault.textContent="Selecciona una opción";
            select.appendChild(optionDefault);

            for (let i = 0; i < categorias.length; i++) {
            let option=document.createElement('option');
            option.value=categorias[i];
            option.textContent=categorias[i];
            select.appendChild(option);
                
            }
               let containerSelect=document.getElementById('contenedorSelect');
               containerSelect.appendChild(select);
        
        }
    };
    xhr.send();



}