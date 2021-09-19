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
                let productRelatedProducts = document.getElementById("productRelatedProducts");
    
            
                productName.innerHTML = product.name;
                productDescription.innerHTML = product.description;
                productCost.innerHTML = product. currency + ` ` + product.cost;
                productSoldCount.innerHTML = `Producto vendido ` + product.soldCount + ` veces`;
                productCategory.innerHTML = `Categoría: ` + product.category ;
                productRelatedProducts.innerHTML = product.relatedProducts;
    
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

 window.onload = function fechaPagina(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
  }

 document.addEventListener("DOMContentLoaded", function (e) {

    var boton = document.getElementById("botonComentario");

    boton.addEventListener("click", function(){

    var comentarioNuevo = document.getElementById("comentarioNuevo").value;
    var usuarioNuevo = document.getElementById("usuarioNuevo").value;
    var fechaNueva = document.getElementById('fechaActual').value;

    document.getElementById("comentarioNuevo").value = "";
    document.getElementById("usuarioNuevo").value = "";

    let nuevoComentario = '';
    
    nuevoComentario += `
    
    <div id="generaComentario">
    <div class="list-group-item list-group-item-action">
    <div class="container mt-5">
                <dd> <p>` + usuarioNuevo + ` &nbsp; <small class="text-muted"> ` + fechaNueva + `</small> </p>
                </dd>    

                 <dd>
                     <p> ` + comentarioNuevo + `</p>
                 </dd>
            </div>        
        </div>
    </div>
    `
    document.getElementById("generaComentario").innerHTML += nuevoComentario

    });
});