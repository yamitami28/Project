//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    function showProductCart(array){ // preguntar por el a

        let HTMLCarrito = "";
            let carrito = array.articles[0];
  
            HTMLCarrito += `
            
            <div class="list-group-item list-group-item-action"> 
                <div class="row">
   
                <div> <label > Cantidad del producto</label> <br> <input id="cantidadIngresada" type="number" ` + carrito.count +`>     
                </div>
                    <div class="col-3">
                        <img src="` + carrito.src + `" class="img-thumbnail"   >
                    </div>
                    
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ carrito.name +`</h4>
                            <small class="text-muted"> `+ carrito.currency +` ` + carrito.unitCost + `  </small>
                            
                        </div>
                    </div>    
                </div>        
            </div>
            `

            document.getElementById("productoCarrito").innerHTML = HTMLCarrito;
    }


    getJSONData(CART_INFO_URL).then(function(resultObj){ // resultObj es un nombre habitual
        if (resultObj.status === "ok") 
        {
            productoCarrito = resultObj.data;
            //Muestro las categorías ordenadas
            console.log(productoCarrito)
            showProductCart(productoCarrito);
        }

    });

});