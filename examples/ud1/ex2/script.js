// Obtener el formulario y el elemento de mensaje por su ID
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Agregar un evento de envío al formulario
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;

    if (name && email) {
        message.textContent = "Formulario enviado con éxito. Nombre: " + name + ", Correo Electrónico: " + email;
    } else {
        message.textContent = "Por favor, complete todos los campos.";
    }
});
