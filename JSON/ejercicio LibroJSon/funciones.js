		var xhr; 
		var tituloInput;
		var resultadoDiv;
        document.addEventListener('DOMContentLoaded', inicializar, false);

        function inicializar() {
		tituloInput = document.getElementById('tituloBusqueda');
		resultadoDiv = document.getElementById('resultado');
        const cargarBtn = document.getElementById('cargarBtn');
        if (cargarBtn) {
                cargarBtn.addEventListener('click', enviarPeticionAJAX, false);
        }
        }
        function enviarPeticionAJAX() {           
            const tituloBusqueda = tituloInput.value.trim();        
            if (tituloBusqueda === '') {
                resultadoDiv.textContent = "Por favor, ingrese un título";
                return;
            }
            tituloInput.disabled = true;
            xhr = new XMLHttpRequest();
            
            xhr.open('POST', 'servidor.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onload = function(evento) {
			if (evento.target.status == 200) {
				gestionarRespuestaJSON(evento); // Llamamos a la función de gestión de respuesta
			} else {
            resultadoDiv.textContent = " No se pudo obtener la respuesta del servidor";
            tituloInput.disabled = false;
			}
			};
            // Enviamos el dato 'titulo'
            xhr.send('titulo=' + tituloBusqueda.toLowerCase());
        }

        function gestionarRespuestaJSON(evento) {
            tituloInput.disabled = false; 
            // Accedemos al objeto JSON 
            const respuesta =  JSON.parse(evento.target.responseText);
            if (respuesta.encontrado) {
                const libro = respuesta.libro;
                crearTarjetaLibro(libro);
            } else {
                resultadoDiv.textContent = `Resultado: ${respuesta.mensaje}`;
            }
        }
		
        function crearTarjetaLibro(libro) {
            
            resultadoDiv.replaceChildren(); 
            
            const titulo = libro.titulo;
            const autor = libro.autor;
            const anio = libro.anio;

            const libroDiv = document.createElement('div');
            libroDiv.style.width = '300px';
            libroDiv.style.border = '1px solid #ddd';
            libroDiv.style.borderRadius = '8px';
            libroDiv.style.padding = '15px';
            libroDiv.style.backgroundColor = '#2B7FFF'; 

            const tituloH3 = document.createElement('h3');
            tituloH3.textContent = titulo;
            tituloH3.style.color = '#FFFFFF'; 
            tituloH3.style.marginTop = '10';
            
            const autorP = document.createElement('p');
            autorP.textContent = `Autor: ${autor}`;
            autorP.style.fontStyle = 'italic';
            autorP.style.fontWeight = 'bold';
            autorP.style.color = '#FFFFFF'; 

            const anioP = document.createElement('p');
            anioP.textContent = `Año: ${anio}`;
            anioP.style.color = '#FFFFFF'; 

            libroDiv.appendChild(tituloH3);
            libroDiv.appendChild(autorP);
            libroDiv.appendChild(anioP);

            resultadoDiv.appendChild(libroDiv);
        }