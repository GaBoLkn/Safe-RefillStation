document.addEventListener("DOMContentLoaded", function() {
    // Función para cambiar el estado y los colores del div "alert"
    function cambiarEstado(estado) {
        var alertDiv = document.querySelector(".alert");
        var circle = alertDiv.querySelector(".circle");
        var h3 = alertDiv.querySelector("h3");

        // Cambiar el texto y el color del círculo
        circle.style.backgroundColor = estado === "Activa" ? "green" : "red";
        h3.textContent = estado;

        // Cambiar el color del texto "Activa" o "Inactiva"
        h3.style.color = estado === "Activa" ? "green" : "red";
    }

    // Esta función se puede llamar cuando llega un dato del ESP8266
    function recibirDatoDesdeESP8266(dato) {
        // Llama a la función cambiarEstado con el nuevo estado
        cambiarEstado(dato);
    }

    // Ejemplo: Llama a recibirDatoDesdeESP8266 con el estado "Inactiva" cuando llega un dato
    // recibirDatoDesdeESP8266("Inactiva");

    var socket = new WebSocket("https://gabolkn.github.io/Safe-RefillStation/");

    // Evento cuando la conexión se establece
    socket.onopen = function(event) {
        console.log("Conexión WebSocket establecida.");
    };

    // Evento cuando se recibe un mensaje del servidor
    socket.onmessage = function(event) {
        var data = event.data;
        recibirDatoDesdeESP8266(data);
    };
});