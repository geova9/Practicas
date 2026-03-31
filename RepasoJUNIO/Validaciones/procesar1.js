
let numeros="0123456789";
let regexVisa=/^4\d{3}-\d{4}-\d{4}-\d{4}$/;
let regexMaster=/^5[1-5]\d{2}-\d{4}-\d{4}-\d{4}$/;
document.addEventListener('DOMContentLoaded', () => {
    let formulario = document.getElementById('f1');
    let boton = document.querySelector('input[type="submit"]');
    let pass = document.getElementById('contrasenya');
    let salario = document.getElementById('salario');
	let img=document.getElementById('logoImg');
	img.addEventListener('mouseover', disminur);
	let ventana = window.open("", "", "width=300,height=300");

    let nombre = document.getElementById('nombre');

    nombre.addEventListener('focus', function() {
        nombre.style.backgroundColor = "cyan";
    });

    nombre.addEventListener('blur', function() {
        nombre.style.backgroundColor = "white";
    });
	 salario.addEventListener("keydown", validarSalario); 

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
		
		if (!validarForm()) return;
		
		let ventana = window.open("", "", "width=300,height=300");
		let nombre = document.getElementById('nombre').value;
		let pass = document.getElementById('contrasenya').value;
        let salario = document.getElementById('salario').value;
		let tipo = document.getElementById('tipoTarjeta').value;
        let numero = document.getElementById('numTarjeta').value;
		ventana.document.write(`
		   <!DOCTYPE html>
          <html>
          <head>
         <title>Page Title</title>
         </head>
         <body>

          <h1>This is a Heading</h1>
          <ul>
           <li>Nombre:${nombre}</li>
           <li>Contraseña:${pass} </li>
           <li>Salario: ${salario}</li>
           <li>Tipo Tarjeta: ${tipo}</li>
           <li>Numero Tarjeta: ${numero}</li>
           </ul>
		    <input type="button" value="Correcto" onclick="window.close()">

          </body>
          </html> 
		
		
		
		
		`);
		
    });
});

function validarForm() {
    let okNombre = validarNombre();
    if (!okNombre) {
        return false;
    }
 
	
	let okPass = validarContraseña();
    if (!okPass) {
        return false;
    }


	
	let okTarjeta= validarTarjerta();
    if (!okTarjeta) {
        return false;
    }
    return true;
	
	
}

function validarNombre() {
    let nombre = document.getElementById('nombre');
    let nombreLimpio = nombre.value;
    if (nombreLimpio.trim().length === 0) {
        alert("NO puede quedar vacío");
        nombre.focus();
        return false;
    }
    return true;
}


function validarContraseña() {
    let pass = document.getElementById('contrasenya');
    let passLimpia = pass.value;
	//hay un espacio entre 9 _ que es igual: espacio blanco
	let regex=/^[a-z][a-zA-Z\d_\s]{3,5}\d{2}$/;
	if (passLimpia.trim().length === 0) {
        alert("PASS NO puede quedar vacío");
        return false;
    }
	//let regex=/^[a-z][a-zA-Z0-9_\s]{3,5}[0-9]{2}$/;
    
	if(!regex.test(passLimpia)){
		alert("No esta permitido: empezará letra minúscula, dos dígitos,minúsculas, mayúsculas, dígitos, espacios en blanco y el carácter _,longitud de entre 6 y 8 caracteres.");
        return false;
    }
    return true;
	
}


function validarSalario(e) {
    let salario = document.getElementById('salario');
	let salarioLimpio=salario.value;
   
    if (salarioLimpio.trim().length === 0) {
        alert("NO puede quedar vacío");
        return false;
	}
	if(!numeros.includes(e.key)){
		e.preventDefault(); // clave para que NO escriba
		alert("Solo numeros");
		return false;
	}
    
    return true;
	
	
}

function validarTarjerta() {
    let tipo = document.getElementById('tipoTarjeta').value;
    let numero = document.getElementById('numTarjeta').value.trim();

    if (numero.length === 0) {
        alert("NO puede quedar vacío");
        return false;
    }

    if (tipo === "Visa") {
        if (!regexVisa.test(numero)) {
            alert("No vale vuelve a revisarla VISA");
            return false;
        }
    }

    if (tipo === "Mastercard") {
        if (!regexMaster.test(numero)) {
            alert("No vale vuelve a revisarla Mastercard");
            return false;
        }
    }

    return true;
}

function disminur(){
	
    let elemento = event.currentTarget;

    if (elemento.offsetWidth <= 10 || elemento.offsetHeight <= 10)
        return;

    elemento.style.width = (elemento.offsetWidth - 5) + "px";
    elemento.style.height = (elemento.offsetHeight - 5) + "px";
}
	
	
	
