let xmlData;

document.addEventListener('DOMContentLoaded', ()=>{

procesarServidor();



})
function procesarServidor(){
   let xhr=new XMLHttpRequest();
   xhr.open('GET', 'libros.xml', true);
   xhr.onreadystatechange=function(){
    if (xhr.readyState===4 && xhr.status===200) {
        xmlData=xhr.responseXML;
        processXML();
        
    }
   }
 xhr.send();


}

function processXML(){
   let libros=xmlData.getElementsByTagName('libro');
   let ol=document.createElement('ol');
   for (let i = 0; i < libros.length; i++) {
        let titulo = libros[i].getElementsByTagName('titulo')[0].textContent;
        let autor = libros[i].getElementsByTagName('autor')[0].textContent;

        let li = document.createElement('li');
        li.textContent = `${titulo} - ${autor}`;

        ol.appendChild(li);
    }

    document.body.appendChild(ol);



}