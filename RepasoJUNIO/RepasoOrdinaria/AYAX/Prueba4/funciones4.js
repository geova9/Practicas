

let box1;
let box2;

document.addEventListener('DOMContentLoaded', () => {

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";


    box1 = document.createElement('div');
    box1.id = "primero";
    box1.style.display = "flex";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.border = "solid 5px blue";
    box1.style.width = "400px";
    box1.style.height = "300px";

    box2 = document.createElement('div');
    box2.id = "segundo";
    box2.style.display = "flex";
    box2.style.alignItems = "center";
    box2.style.justifyContent = "center";
    box2.style.border = "solid 5px red";
    box2.style.width = "400px";
    box2.style.height = "220px";
    box2.style.marginTop = "10px";


    let boton = document.createElement('button');
    boton.textContent = "Mostrar Empleados";
    boton.style.padding = "10px";
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
    boton.style.fontSize = "15px";
    boton.addEventListener('click', () => {
        crearTabla();
        boton.style.display = "none";
        
    })




    document.body.appendChild(box1);
    document.body.appendChild(box2);
    box1.appendChild(boton);

});

function crearTabla() {
    let tabla = document.createElement('table');
    let box1 = document.getElementById('primero');
    let contador = 1;

    for (let i = 0; i < 2; i++) {

        let fila = document.createElement('tr');
        tabla.appendChild(fila);
        for (let j = 0; j < 5; j++) {
            let column = document.createElement('td');
           column.id = "E" + (contador < 10 ? "0" + contador : contador);
           //column.id="E0"+ contador;
            column.style.border = "solid 2px black";
            column.style.width = "20px";
            column.style.padding = "20px";
            column.textContent = column.id;

            column.addEventListener('click', ()=>{
                conexion(column.id);
            });

            column.addEventListener('mouseover', ()=>{
                column.style.backgroundColor="lightgreen";
            });

            column.addEventListener('mouseout', ()=>{
                column.style.backgroundColor="white";
            });

            contador++;
            fila.appendChild(column);

        }
    }

    box1.appendChild(tabla);

}

function conexion(codigo) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'procesar4.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let empleado = JSON.parse(xhr.responseText);
            mostrar(empleado);
        }
    }
xhr.send("codigo=" + codigo);

}

function mostrar(empleado){
  let box2=document.getElementById('segundo');
  let cont=document.createElement('div');
  box2.replaceChildren();


  let error=document.createElement('p');
  error.textContent=empleado.error;
  error.color="red";
  cont.appendChild(error);


  //etiqueta nombre

  let nombre=document.createElement('p');
  nombre.textContent="Empleado: "+empleado.nombre;
  cont.appendChild(nombre);


  //salario
  let salario=document.createElement('p');
  salario.textContent="Salario: "+empleado.salario;
  cont.appendChild(salario);

  //departamento
  /*<input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>*/



  let labelDepa=document.createElement('label');
  labelDepa.textContent="Departamentos";
  cont.appendChild(labelDepa);

  let i=0;

  empleado.departamentos.forEach(emple => {
    
   //el punto del radio
   let puntoRadio=document.createElement('input');
   puntoRadio.setAttribute('type', 'radio');
   puntoRadio.id="Depa" +i;
   puntoRadio.textContent=emple;
   cont.appendChild(puntoRadio);

   //label de los departamentos

   let labelDe=document.createElement('label');
   labelDe.setAttribute('for', 'cine' + i)
   labelDe.id="Depa" +i;
   labelDe.textContent=emple;
   cont.appendChild(labelDe);



  });
  box2.appendChild(cont);





}