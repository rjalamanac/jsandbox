// Obtener los botones por su ID
var logButton = document.getElementById("logButton");
var clearButton = document.getElementById("clearButton");

// Agregar un evento clic para registrar en la consola
logButton.addEventListener("click", function () {
    console.log("Esto es un mensaje registrado en la consola.");
});

// Agregar un evento clic para limpiar la consola
clearButton.addEventListener("click", function () {
    console.clear();
});
