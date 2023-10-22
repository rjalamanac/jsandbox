// Declarar una cadena
var frase = "JavaScript es un lenguaje de programación poderoso.";

// Obtener la longitud de la cadena
var longitud = frase.length;

// Convertir la cadena a mayúsculas
var mayusculas = frase.toUpperCase();

// Encontrar la posición de una palabra en la cadena
var posicion = frase.indexOf("poderoso");

// Extraer una parte de la cadena
var subcadena = frase.slice(0, 10);

// Reemplazar una palabra en la cadena
var nuevaFrase = frase.replace("poderoso", "versátil");

// Mostrar los resultados en el párrafo
var output = document.getElementById("output");
output.textContent = "Longitud de la cadena: " + longitud + "\n";
output.textContent += "Cadena en mayúsculas: " + mayusculas + "\n";
output.textContent += "Posición de 'poderoso': " + posicion + "\n";
output.textContent += "Subcadena: " + subcadena + "\n";
output.textContent += "Cadena modificada: " + nuevaFrase;
