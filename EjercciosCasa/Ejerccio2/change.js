document.addEventListener('DOMContentLoaded', () => {
    iniciar();
});

function iniciar() {
    let boton = document.getElementById('btn');
    let parrafo = document.getElementsByClassName('normal')[0];

    boton.addEventListener('click', () => {

        parrafo.textContent = 'Modo Activo';
        parrafo.classList.toggle('active');

        if (parrafo.classList.contains('active')) {
            boton.textContent = 'Desactivar';
        } else {
            boton.textContent = 'Activar';
            parrafo.textContent = 'Modo Normal';
        }
    });
}
