//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    
   
   
    function showProductsList(array){ // preguntar por el a

        let htmlContentToAppend = "";
        for(let i = 0; i < array.length; i++){
            let products = array[i];
  
            
            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action"> 
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail"   >
                    </div>
                    
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted"> `+ products.currency +` ` + products.cost + `  </small>
                            
                        </div>
                       
                        <div>
                            <p> `+ products.description+ ` </p>
                            <small class="text-muted"> Ejemplares vendidos: ` + products.soldCount +` </small>
                        </div>
                    </div>    
                </div>        
            </a>
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
        if ( a.soldCount > b.soldCount ){ return -1; }
        if ( a.soldCount < b.soldCount ){ return 1; }
        return 0;
    });

    showProductsList(result);
}

var minCost = undefined;
var maxCost = undefined;

function showFilterList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < productsArray.length; i++){
        let products = productsArray[i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(products.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(products.cost) <= maxCost))){

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
                        
    <p> `+ products.description+ ` </p>
    <small class="text-muted"> Ejemplares vendidos: ` + products.soldCount +` </small>
                    </div> 
                    
                </div>
                
            </div>
            `
        }

        document.getElementById("list").innerHTML = htmlContentToAppend;
    }
}




document.getElementById("rangeFilterCost").addEventListener("click", function(){
    //Obtengo el mínimo y máximo de los intervalos para filtrar por precio

    minCost = document.getElementById("rangeFilterCostMin").value;
    maxCost = document.getElementById("rangeFilterCostMax").value;

    if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
        minCost = parseInt(minCost);
    }
    else{
        minCost = undefined;
    }

    if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
        maxCost = parseInt(maxCost);
    }
    else{
        maxCost = undefined;
    }

    showFilterList();
});


});