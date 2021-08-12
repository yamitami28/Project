//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",function(e){

    document.getElementById("button").onclick = function(e){

        
        validarFormulario()
    }
})

function validarFormulario() {
    var usuario = document.getElementById('email').value;
    if(usuario.length == 0) {
        alert('Ingresa tu cuenta de email')
        return;
    }
    var clave = document.getElementById('password').value;
    if (clave.length == 0){
        alert('Ingresa tu contraseña');
        return;
    }
    else {
        alert("Bienvenido a tu e_Commerce favorito");
        window.location.href = "./index.html";
    }
    
}

        
