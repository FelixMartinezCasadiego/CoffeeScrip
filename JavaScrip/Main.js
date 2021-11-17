// Creación de eventos

let boton = document.getElementById('botonPrincipal');

boton.addEventListener('click', respuestaClick);

function respuestaClick(){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('emailForm').value;
    var sugerForm = document.getElementById('sugerForm').value;

    if(nombre == ""){
        alert('Ingrese un nombre en el campo Nombre');
        return false;
    };

    if(email == ""){
        alert('Por favor ingrese email en el campo Email');
        return false;
    };

    if(sugerForm == ""){
        alert('Se te ha olvidado colocar la sugerencia');
        return false;
    };

    var contenido = '<p> Tu nombre es: <strong>' + nombre + '</strong></p>';
    contenido += '<p> Tu email es: <strong>' + email + '</strong></p>';
    contenido += '<p> Sugerencia: <strong>' + sugerForm + '</strong></p>';

    document.getElementById('resultado').innerHTML = contenido;
};


