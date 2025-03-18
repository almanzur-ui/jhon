document.addEventListener("DOMContentLoaded", function() { //Evento para desplegar formulario - Jhon//

    document.getElementById("desplegar"). addEventListener("click", function() {
    const formulario = document.getElementById("formulario");
    if(formulario.style.display === "none" || formulario.style.display === "") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
    });
    });
    
    document.addEventListener("DOMContentLoaded", function () { //Evento de validación de Formulario - Jhon//
        document.getElementById("formulario"). addEventListener("submit", validacion);
    });
    
    function validacion(evento) {
        evento.preventDefault();
        var name = document.getElementById("name").value;
        if (name.length <= 1) {
            alert("¡Escribe tu nombre!");
            return;
        }
        var email = document.getElementById("email").value;
        if (email.length <= 1) {
            alert("Tu Email está vacio");
            return;
        }
        this.submit();
    }
    