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

            let productNameHTML  = document.getElementById("productName");
                let productDescriptionHTML = document.getElementById("productDescription");
                let productCostHTML = document.getElementById("productCost");
                let productSoldCountHTML = document.getElementById("productSoldCount");
                let productCategoryHTML = document.getElementById("productCategory");
                let productRelatedProductsHTML = document.getElementById("productRelatedProducts");
    
            
                productNameHTML.innerHTML = product.name;
                productDescriptionHTML.innerHTML = product.description;
                productCostHTML.innerHTML = product. currency + ` ` + product.cost;
                productSoldCountHTML.innerHTML = `Producto vendido ` + product.soldCount + ` veces`;
                productCategoryHTML.innerHTML = `Categoría: ` + product.category ;
                productRelatedProductsHTML.innerHTML = product.relatedProducts;
    
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
  
            
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
            <div class="container mt-5">
                    <dt>Calificación</dt>
                        <dd>
                            <p class="fa fa-star" id="productDescription"> ` + comments.score + `</p>
                        </dd>
                    <dt>Descripción</dt>
                        <dd>
                            <p> ` + comments.description + `</p>
                        </dd>
                    <dt>Usuario </dt>
                        <dd>
                            <p> ` + comments.user + `</p>
                        </dd> 
                    <dt>Tiempo de publicación</dt>
                        <dd>
                            <p> ` + comments.dateTime + `</p>
                        </dd>
                </div>        
            </div>
            `
    
            document.getElementById("comment").innerHTML = htmlContentToAppend;
        }
    }

    //la funcion getJSONData esta en init.js aca la estoy llamando

       
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){ // resultObj es un nombre habitual
        if (resultObj.status === "ok") 
        {
            commentsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showComments(commentsArray);
        }
    });

 });