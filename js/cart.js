//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    function showProductCart(array){ // preguntar por el a

        let HTMLCarrito = "";
            let carrito = array.articles[0];
  
            HTMLCarrito += `

            <div class="container">
            <div class="text-center p-4">
              <h2>Carrito de compras</h2>
            
            <div class="row justify-content-md-center">
              <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Información del producto</h4>
                <form class="needs-validation" id="sell-info">
                  <div class="row">
                    <div class="col-md-6 mb-3">

                      <label for="productName">`+ carrito.name +`</label> 
                      
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8 order-md-1">

                        <img src="` + carrito.src + `" class="img-thumbnail"   >
                    </div>       
                        
                        </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <label for="zip">Precio</label>

                    <br><span class = "cuadrado">  ` + carrito.unitCost + ` <\span>

                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">Moneda</label>
                        
                    <br><span class = "cuadrado">    ` + carrito.currency + `<\span>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-md-3 mb-3">
                        <label for="productCountInput">Cantidad</label>
                        <input type="number" class="form-control" id="productCountInput" placeholder="" required="" value="1" min="0">
                        <div class="invalid-feedback">
                          La cantidad es requerida.
                        </div>
                      </div>
                    </div>
                  <hr class="mb-4">
    
                 
                  <hr class="mb-4">
                  <h4 class="mb-3">Costos</h4>
                  <ul class="list-group mb-3">
                      <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 class="my-0">Subtotal</h6>
                          <small class="text-muted">Unitario del producto</small>
                        </div>
                        <span class="text-muted" id="productCostText">` + carrito.unitCost * carrito.count+ ` </span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 class="my-0">P0rcentaje</h6>
                          <small class="text-muted">Según el tipo de publicación</small>
                        </div>
                        <span class="text-muted" id="comissionText">-</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                        <span>Total ($)</span>
                        <strong id="totalCostText">-</strong>
                      </li>
                    </ul>
                  <hr class="mb-4">
                  <button class="btn btn-primary btn-lg" type="submit">Vender</button>
                </form>
              </div>
            </div>
          </div>
        </div>         

            `
            document.getElementById("productoCarrito").innerHTML = HTMLCarrito;
            document.getElementById("productCountInput").value = carrito.count;


    }


    getJSONData(CART_INFO_URL).then(function(resultObj){ // resultObj es un nombre habitual
        if (resultObj.status === "ok") 
        {
            productoCarrito = resultObj.data;
            //Muestro las categorías ordenadas
            showProductCart(productoCarrito);
        }

    });

});