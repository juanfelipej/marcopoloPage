// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón de cerrar
var closeBtn = document.getElementsByClassName("close")[0];

// Mostrar el modal cuando la página cargue
window.onload = function() {
    modal.style.display = "block";
}

// Cerrar el modal cuando se hace clic en la X
closeBtn.onclick = function() {
  modal.style.display = "none";
}