//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",function(e){

    document.getElementById("button").onclick = function(e){

          
       validarFormulario()
     
       // document.getElementById("usuario").innerHTML = sessionStorage.getItem("usuarioDelEmail");   


    }

})

function validarFormulario() {
    var usuario = document.getElementById('email').value;
    var clave = document.getElementById('password').value;
    if(usuario.length == 0 || clave.length == 0) {
        alert('Ingresa todos los campos requeridos')
        return;
    }
    else {

        sessionStorage.setItem("usuarioDelEmail", usuario);  
        window.location.href = "./home.html";
    }
    
}

        
