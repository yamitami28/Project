//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    
    function showProductsList(array){ // misma function que en ejercicio 4.6

        let htmlContentToAppend = "";
        for(let i = 0; i < array.length; i++){
            let products = array[i];
    
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail"   >
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted"> `+ products.currency +` ` + products.cost + `  </small>
                            
                        </div>
                        <small class="text-muted"> ` + products.soldCount +` </small>
                        
                        
    <p> `+ products.description+ ` </p>
                    </div> 
                </div>
            </div>
            `
    
            document.getElementById("list").innerHTML = htmlContentToAppend;
        }
    }

    //la funcion getJSONData esta en init.js aca la estoy llamando

    getJSONData(PRODUCTS_URL).then(function(resultObj){ // resultObj es un nombre habitual
        if (resultObj.status === "ok") 
        {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    });



const ORDER_ASC_BY_PRICE = "AZ";
const ORDER_DESC_BY_PRICE = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
var currentCategoriesArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

document.getElementById("sortAsc").onclick = function(e){
    let result = [];
    result = productsArray.sort(function(a, b) {
        if ( a.cost < b.cost ){ return -1; }
        if ( a.cost > b.cost ){ return 1; }
        return 0;
    });

    showProductsList(result);
}

document.getElementById("sortDesc").onclick = function(e){
    let result = [];
    result = productsArray.sort(function(a, b) {
        if ( a.cost > b.cost ){ return -1; }
        if ( a.cost < b.cost ){ return 1; }
        return 0;
    });

    showProductsList(result);
}

document.getElementById("sortByCount").onclick = function(e){
    let result = [];
    result = productsArray.sort(function(a, b) {
        let aCount = parseInt(a.productCount);
        let bCount = parseInt(b.productCount);

        if ( aCount > bCount ){ return -1; }
        if ( aCount < bCount ){ return 1; }
        return 0;
    });

    showProductsList(result);
}

});