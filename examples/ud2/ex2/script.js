// Obtener el botón y el elemento de resultado por su ID
var calculateButton = document.getElementById("calculateButton");
var result = document.getElementById("result");

// Agregar un evento clic al botón para realizar una operación errónea
calculateButton.addEventListener("click", function () {
    var x = 10;
    var y = 0;
    var z = x / y; // Esto provocará un error en tiempo de ejecución
    result.textContent = "El resultado es: " + z;
});
