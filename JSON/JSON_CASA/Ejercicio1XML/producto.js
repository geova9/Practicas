document.addEventListener('DOMContentLoaded', () => {
    let tabla = document.createElement('table');
    let box = document.getElementById('box');

    tabla.id = 'balda';
    tabla.style.border = '1px solid black';
    tabla.style.borderCollapse = 'collapse';

    box.appendChild(tabla);

    /* ---------- FILA CABECERA ---------- */
    let cabecera = document.createElement('tr');
    let titulos = ['Lista', 'Stock', 'Total', 'Comprar'];

    for (let i = 0; i < titulos.length; i++) {
        let th = document.createElement('th');
        th.textContent = titulos[i];
        th.style.border = '1px solid black';
        th.style.padding = '8px';
        th.style.backgroundColor = '#eee';

        cabecera.appendChild(th);
    }

    tabla.appendChild(cabecera);

    /* ---------- FILAS DE DATOS ---------- */
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 5; j++) {
            let celda = document.createElement('td');
            celda.style.border = '1px solid black';
            celda.style.padding = '8px';

            row.appendChild(celda);
        }

        tabla.appendChild(row);
    }
});
