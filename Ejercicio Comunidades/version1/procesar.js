var xhr;
var autonomias;
var provincias;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos select
    autonomiasSelect = document.getElementById('autonomias');
    provinciasSelect = document.getElementById('provincias');

    // 2. Agregar el event listener al select de autonomías para detectar cambios
    // Cuando el usuario elige una nueva autonomía, se llama a enviarPeticionAJAX
    autonomiasSelect.addEventListener('change', enviarPeticionAJAX, false);
});


function enviarPeticionAJAX() {
    // El valor seleccionado es 'this.value' (el valor de autonomiasSelect)
    let autonomiaElegida = autonomiasSelect.value;
    
    // Si el valor es '0' (la opción por defecto), no hacemos nada o limpiamos el select de provincias
    if (autonomiaElegida === '0') {
        provinciasSelect.innerHTML = '<option value="0">--Primero elija una autonomía--</option>';
        return;
    }
    
    // Inicializar el objeto XMLHttpRequest
    xhr = new XMLHttpRequest();

    // 4. Configurar el manejador de eventos para el cambio de estado
    xhr.addEventListener('readystatechange', gestionarRespuesta, false); 
    
    // 5. Abrir la petición: GET a servidor.php con el parámetro 'autonomia'
    // La sintaxis correcta para el query string es 'servidor.php?autonomia=valor_elegido'
    xhr.open('GET', 'servidor.php?autonomia=' + autonomiaElegida, true);
    
    // 6. Enviar la petición
    xhr.send(null);     
}




// 7. Función para gestionar la respuesta de la petición AJAX
function gestionarRespuesta() {
    // Comprobar que la operación ha finalizado (readyState 4)
    if (xhr.readyState === 4) {
        // Comprobar que la respuesta ha sido exitosa (status 200)
        if (xhr.status === 200) {
            
            // Limpiar el select de provincias antes de añadir las nuevas opciones
            provinciasSelect.innerHTML = '';
            
            //TEXTO PLANO
            const respuestaTexto = xhr.responseText.trim(); // Eliminar espacios en blanco innecesarios
            
            // 1. Verificar si hay respuesta válida
            if (respuestaTexto) {
                
                try {
                    // 2. Dividir la cadena de texto usando la coma y el espacio como delimitador
                    // Esto crea el array: ['La Coruña', ' Lugo', ' Orense', ' Pontevedra']
                    let provinciasArray = respuestaTexto.split(', '); 
                    
                    // Si el PHP usa solo coma: respuestaTexto.split(',');
                    // Si el PHP usa coma y espacio: respuestaTexto.split(', ');
                    
                    // Iterar sobre el array de provincias y crear las opciones
                    provinciasArray.forEach(provincia => {
                        // Limpiar cualquier espacio extra que quede
                        const nombreProvincia = provincia.trim(); 
                        
                        // Solo añadimos si el nombre no está vacío
                        if (nombreProvincia) {
                            const option = document.createElement('option');
                            // Usamos el nombre limpio para el valor y el texto
                            option.value = nombreProvincia; 
                            option.textContent = nombreProvincia;
                            provinciasSelect.appendChild(option);
                        }
                    });
                
                } catch (error) {
                    // Este catch capturaría errores si la división no funciona, aunque es raro con split()
                    console.error("Error al procesar la lista de provincias:", error);
                    provinciasSelect.innerHTML = '<option value="0">Error al procesar los datos</option>';
                }

            } else {
                 // Si la respuesta está vacía (autonomía no tiene provincias o error)
                provinciasSelect.innerHTML = '<option value="0">No se encontraron provincias</option>';
            }
            
        } else {
            // Manejar errores de servidor (404, 500, etc.)
            console.error('Error en la petición AJAX. Estado:', xhr.status);
            provinciasSelect.innerHTML = '<option value="0">Error de comunicación con el servidor</option>';
        }
    }
}

