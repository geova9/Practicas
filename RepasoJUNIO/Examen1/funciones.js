let box1;
let box2;

document.addEventListener('DOMContentLoaded', ()=>{

document.body.style.display="flex";
document.body.style.flexDirection="column";
document.body.style.alignItems="center";
document.body.style.justifyContent="center";
document.body.style.height="100vh";



box1=document.createElement('div');
box1.id="cont1";
box1.style.width="300px";
box1.style.height="400px";
box1.style.border="3px solid black";
box1.style.display="flex";
box1.style.justifyContent="center";
box1.style.alignItems="center";
document.body.appendChild(box1);



let boton=document.createElement('button');
boton.id="enviar";
boton.textContent="Crear Tabla";
boton.style.display="flex";
boton.style.justifyContent="center";
boton.style.alignItems="center";

box1.appendChild(boton);

boton.addEventListener('click', ()=>{
    crearTabla();
    agregarBox();
    boton.style.display="none";
})


});

function conexion(codigo){
   let xhr=new XMLHttpRequest();

   xhr.open('POST', 'procesar.php', true);
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 

   xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let producto=JSON.parse(xhr.responseText);
           mostrarProductos(producto);
      }
    };
    
    xhr.send("codigo="+ codigo);
  }




function mostrarProductos(producto){

  let box2=document.getElementById('cont2')

   if(producto.error){
    let error=document.createElement('p');
    error.textContent=producto.error;
    error.style.color="red";
    box2.appendChild(error);
   }else{
    
         let parrafo=document.createElement('p');
         parrafo.textContent=
         "Código:" + producto.codigo + "|"+
         "Nombre:" + producto.nombre + "|"+
         "Precio:" + producto.precio;

      box2.appendChild(parrafo);


      let lista=document.createElement('ul');

      producto.categorias.forEach(categoria => {
        let li=document.createElement('li');
        li.textContent=categoria;
        lista.appendChild(li);
      });

      box2.appendChild(lista);

     }

}





 function crearTabla(){
    let tabla=document.createElement('table');
    box1=document.getElementById('cont1');
    let contador=1;
    for (let i = 0; i < 3; i++) {
        let fila=document.createElement('tr');
        tabla.appendChild(fila);
        for (let j = 0; j < 3; j++) {
            let columna=document.createElement('td');
            columna.id="PO_"+ contador;
            columna.style.width="20px";
            columna.style.height="20px";
            columna.style.border="solid 2px blue";
            columna.textContent=columna.id;
            columna.addEventListener('click', function(){
                 conexion(columna.id);
            });
               
            
            contador++;
            fila.appendChild(columna);

            
            
        }
        
    }
     box1.appendChild(tabla);


}

function agregarBox(){

box2=document.createElement('div');
box2.id="cont2";
box2.style.width="300px";
box2.style.height="200px";
box2.style.border="3px solid black";
box2.style.borderTop="none";
document.body.appendChild(box2);



}