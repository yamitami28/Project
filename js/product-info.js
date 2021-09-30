//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

                let productName  = document.getElementById("productName");
                let productDescription = document.getElementById("productDescription");
                let productCost = document.getElementById("productCost");
                let productSoldCount = document.getElementById("productSoldCount");
                let productCategory = document.getElementById("productCategory");    
            
                productName.innerHTML = product.name;
                productDescription.innerHTML = product.description;
                productCost.innerHTML = product. currency + ` ` + product.cost;
                productSoldCount.innerHTML = `Producto vendido ` + product.soldCount + ` veces`;
                productCategory.innerHTML = `Categoría: ` + product.category ;
    
                //Muestro las imagenes en forma de galería
                showImagesGallery(product.images);

        }
    });
});




document.addEventListener("DOMContentLoaded", function (e) {
    
   
    function showComments(array){ 

        let htmlContentToAppend = "";
        for(let i = 0; i < array.length; i++){
            let comments = array[i];
  
            var puntaje = comments.score
            var estrella = "";

            for (let j = 0; j < puntaje; j++) 
                
                estrella += `
                
                <span class="fa fa-star marcado">  </span>

                `
            
            
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
            <div class="container mt-5">
                        <dd> 
                        <p> ` + comments.user + ` &nbsp; <small class="text-muted"> ` + comments.dateTime + `</small> </p>
                        </dd>    
                         <dd>
                             <p> ` + comments.description + `</p>
                         </dd>
                        <dd>
                            <div> ` + estrella + `</div>
                        </dd>
                </div>        
            </div>
            `
    
            document.getElementById("comment").innerHTML = htmlContentToAppend;
            

        }

    }

    //la funcion getJSONData esta en init.js aca la estoy llamando\

       
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){ // resultObj es un nombre habitual
        if (resultObj.status === "ok") 
        {
            commentsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showComments(commentsArray);
        }
    });

 });



 document.addEventListener("DOMContentLoaded", function (e) {

    var boton = document.getElementById("botonComentario");

    boton.addEventListener("click", function(){

        let cantidadEstrellas = document.getElementById("cantidadEstrellas").value;

        var estrellaNueva = "";
        for (let k = 0; k < cantidadEstrellas; k++) 
                
                estrellaNueva += `<span class="fa fa-star marcado">  </span>`

    let comentarioNuevo = document.getElementById("comentarioNuevo").value;
    let usuarioNuevo = document.getElementById("usuarioNuevo").value;
    let fechaNueva = new Date()
    let fecha = fechaNueva.toLocaleString()


    document.getElementById("comentarioNuevo").value = "";
    document.getElementById("usuarioNuevo").value = "";

    let nuevoComentario = '';
    
    nuevoComentario += `
    
    <div class="list-group-item list-group-item-action">
    <div class="container mt-5">
                <dd> 
                    <p>` + usuarioNuevo + ` &nbsp; <small class="text-muted"> ` + fecha + `</small> </p>
                </dd>    
                 <dd>
                    <p> ` + comentarioNuevo + `</p>
                 </dd>
                <dd>
                    <p> ` +estrellaNueva +`</p>
                </dd>
            </div>        
        </div>
    </div>
    `
    document.getElementById("comment").innerHTML += nuevoComentario

    });
});