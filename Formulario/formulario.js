// formulario.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const listaDatos = document.getElementById("lista-datos");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores ingresados
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;

        // Crear un nuevo elemento de lista
        const listItem = document.createElement("li");
        listItem.textContent = `Nombre: ${nombre}, Correo: ${correo}, Teléfono: ${telefono}`;

        // Agregar el elemento a la lista
        listaDatos.appendChild(listItem);

        // Limpiar los campos del formulario
        form.reset();
    });
});


