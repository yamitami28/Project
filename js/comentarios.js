for (let index = 0; index < product.relatedProducts.length; index++) {
    let productosRelacionados = product.relatedProducts[index];
    

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")                
        {
            related = resultObj.data;
            
            for (let z = 0; z < productosRelacionados.length; z++) {
                let nameRelatedProduct = product[productosRelacionadosz].name;
                
                let relacionados = "";
                relacionados += `
                <h8 class="mb-1"> `+ productosRelacionados + nameRelatedProduct ` </h8> <br>
                `
                document.getElementById("productRelatedProducts").innerHTML= relacionados;
            }

            
            }
        });

}