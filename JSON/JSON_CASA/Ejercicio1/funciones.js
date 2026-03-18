document.addEventListener('DOMContentLoaded', () => {

    let seleccion = document.getElementById('categoria');
    let div=document.getElementById('productos');

    seleccion.addEventListener('change', () => {
        let texto = seleccion.value.trim();

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'productos.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let lista = JSON.parse(xhr.responseText);
                

                lista.forEach(element => {
                    let li=document.createElement('li');
                    //elemento buscado en este caso .categoria
                    li.textContent=element.categoria;
                    div.appendChild(li);
                });
                
            }
        };

        xhr.send('producto=' + texto);
    });

});
