// Declarar un objeto persona
var persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid",
    esEstudiante: true
};

// Acceder a las propiedades del objeto
var nombre = persona.nombre;
var edad = persona.edad;
var ciudad = persona.ciudad;
var esEstudiante = persona.esEstudiante;

// Crear un mensaje con las propiedades del objeto
var mensaje = "Nombre: " + nombre + "\n";
mensaje += "Edad: " + edad + "\n";
mensaje += "Ciudad: " + ciudad + "\n";
mensaje += "Es estudiante: " + (esEstudiante ? "Sí" : "No");

// Mostrar el mensaje en el párrafo
var output = document.getElementById("output");
output.textContent = mensaje;
