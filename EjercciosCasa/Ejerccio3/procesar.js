document.addEventListener('DOMContentLoaded', () => {

    let enviar = document.querySelector("input[type='submit']");
    enviar.value = 'Enviar';
    enviar.addEventListener('click', getDatos)


});

function getDatos(e) {
    e.preventDefault();
    let nombre = document.getElementById('name');
    let edad = document.getElementById('age');
    let tabla = document.getElementById('miTabla');
    let tr = tabla.insertRow(0);
    let cell1 = tr.insertCell(0);
    let cell2 = tr.insertCell(1);
    cell1.textContent = nombre.value;
    cell2.textContent = edad.value;
    nombre.value = '';
    edad.value= '';



}
