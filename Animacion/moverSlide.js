
let index = 0;

let slidesPerPage = 3;
let slideWidth = 300;
document.addEventListener('DOMContentLoaded', ()=>{



let track = document.getElementById("track");
let slides = document.querySelectorAll(".slide");



// Número máximo de páginas
let maxIndex = Math.ceil(slides.length / slidesPerPage) - 1;

// Botón siguiente
document.getElementById("next").addEventListener("click", function() {
  if (index < maxIndex) {
    index++;
    move();
  }
});

// Botón anterior
document.getElementById("prev").addEventListener("click", function() {
  if (index > 0) {
    index--;
    move();
  }
});

})


// Función de movimiento
function move() {
  let desplazamiento = index * slidesPerPage * slideWidth;
  track.style.transform = "translateX(-" + desplazamiento + "px)";
}