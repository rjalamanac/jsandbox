// Declarar una clase llamada "Persona"
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Crear una instancia de la clase "Persona"
const persona1 = new Persona("Luis", 30);

// Llamar al método "saludar" de la instancia
const saludo = persona1.saludar();

// Mostrar el saludo en el párrafo
const output = document.getElementById("output");
output.textContent = saludo;
