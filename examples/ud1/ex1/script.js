// Obtener el botón y el párrafo por su ID
const button = document.getElementById("changeTextButton");
const demo = document.getElementById("demo");

// Agregar un evento clic al botón
button.addEventListener("click", function () {
    // Cambiar el texto del párrafo
    demo.innerHTML = "¡El texto ha sido cambiado!";
});
