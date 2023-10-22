// Declarar variables y asignar valores
var nombre = "Juan";
var edad = 30;
var esEstudiante = true;
var coloresFavoritos = ["azul", "verde", "rojo"];

// Crear un mensaje con las variables
var mensaje = "Hola, soy " + nombre + ". Tengo " + edad + " años.";
if (esEstudiante) {
    mensaje += " Soy estudiante.";
} else {
    mensaje += " No soy estudiante.";
}
mensaje += " Mis colores favoritos son: " + coloresFavoritos.join(", ") + ".";

// Mostrar el mensaje en el párrafo
var output = document.getElementById("output");
output.textContent = mensaje;
