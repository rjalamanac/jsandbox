// Declarar un array de colores
var colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

// Agregar un nuevo color al array
colores.push("violeta");

// Eliminar el segundo color del array
colores.splice(1, 1);

// Ordenar el array alfabéticamente
colores.sort();

// Crear un mensaje con el array de colores
var mensaje = "Colores: " + colores.join(", ");

// Mostrar el mensaje en el párrafo
var output = document.getElementById("output");
output.textContent = mensaje;
