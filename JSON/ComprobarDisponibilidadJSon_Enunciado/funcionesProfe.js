			var xhr;
			var usuario;
			var alternativas;
			var resultados=null;
			//Inicializar
			document.addEventListener('DOMContentLoaded', inicializar, false);
			function inicializar() {	
					usuario = document.getElementById('nombre');
					document.getElementById('boton1').addEventListener('click', enviarPeticionAJAX, false);
			}
			//enviar petición Ajax
			function enviarPeticionAJAX(evento) {
				if (usuario.value !='' ){
					usuario.disabled = true;
					xhr = new XMLHttpRequest();
					xhr.addEventListener('readystatechange', gestionarRespuesta, true);
					xhr.open('POST', 'ajax3.php', true);
					xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					xhr.send('nombre=' + usuario.value);
				}
			}			
			//gestionar respuesta XML
			function gestionarRespuesta(evento) {
				if (evento.target.readyState == 4 && evento.target.status == 200) {
					if(resultados==null){
					resultados=document.createElement("div");
					resultados.setAttribute("id","resultados");
					document.body.appendChild(resultados);
					}
					else{
						resultados.replaceChildren();
					}
					usuario.disabled = false;
					objetoRespuesta = evento.target.responseXML;
					var disp=objetoRespuesta.getElementsByTagName('disponible')[0].firstChild.nodeValue;
					if(disp=="si"){
						etiq=document.createElement("label");
						etiq.textContent="Disponible: SI";
						resultados.appendChild(etiq);
					}
					else{
						etiq=document.createElement("label");
						etiq.textContent="Disponible: NO";
						resultados.appendChild(etiq);
					
						resultados.appendChild(document.createElement("br"));
						etiq=document.createElement("label");
						etiq.textContent="Sugerencias";
						resultados.appendChild(etiq);
						
						var lista=document.createElement("select");
						lista.setAttribute("id","lista")
						alternativas=objetoRespuesta.getElementsByTagName('login');	
						for(i=0;i<alternativas.length;i++){
							var option = new Option(alternativas[i].textContent)
							lista.add(option);
						}
						resultados.appendChild(lista);						
					}
				}
			}
			