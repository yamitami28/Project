let productCount = document.getElementById("productCountInput");
let productCost = 100;
let comissionPercentage = 0.15;
let MONEY_SYMBOL = "$";
let DOLLAR_CURRENCY = "Dólares (USD)";
let PESO_CURRENCY = "Pesos Uruguayos (UYU)";
let DOLLAR_SYMBOL = "USD ";
let PESO_SYMBOL = "UYU ";
let PERCENTAGE_SYMBOL = '%';
let SUCCESS_MSG = "¡Se ha realizado la publicación con éxito! :)";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

function updateTotalCosts(){
 
  let comissionCostHTML = document.getElementById("comissionText");
  let totalCostHTML = document.getElementById("totalCostText");
  let subtotal = productCost*productCount
  let unitCostToShow = MONEY_SYMBOL + productCost;
  let comissionToShow = Math.round((comissionPercentage * 100));
  let totalCostToShow = MONEY_SYMBOL + (Math.round(productCost * comissionPercentage * 100) / 100 + subtotal) ;

  productCost.innerHTML = unitCostToShow;
  comissionCostHTML.innerHTML = comissionToShow;
  totalCostHTML.innerHTML = totalCostToShow;
}

document.addEventListener("DOMContentLoaded", function(e){

    function showProductCart(array){ // preguntar por el a

        let HTMLCarrito = "";

          let carrito = array.articles[0];
          
          productCost = carrito.unitCost;  
          
          
          function updateTotalCosts(){
 
            let comissionCostHTML = document.getElementById("comissionText");
            let totalCostHTML = document.getElementById("totalCostText");
            let subtotal = productCost*productCount
            let unitCostToShow = MONEY_SYMBOL + productCost;
            let comissionToShow = Math.round((comissionPercentage * 100));
            let totalCostToShow = MONEY_SYMBOL + (Math.round(productCost * comissionPercentage * 100) / 100 + subtotal) ;
          
            productCost.innerHTML = unitCostToShow;
            comissionCostHTML.innerHTML = comissionToShow;
            totalCostHTML.innerHTML = totalCostToShow;
          }
           
  
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
                        
                    <br><span class = "cuadrado"> ` + carrito.currency + `<\span>
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
                  <h5 class="mb-3">Tipo de publicación</h5>
                      <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                          <input id="premiumradio" name="publicationType" type="radio" class="custom-control-input" checked="" required="">
                          <label class="custom-control-label" for="premiumradio">Premium (15%)</label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input id="expressradio" name="publicationType" type="radio" class="custom-control-input" required="">
                          <label class="custom-control-label" for="expressradio">Express (7%)</label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input id="standardradio" name="publicationType" type="radio" class="custom-control-input" required="">
                          <label class="custom-control-label" for="standardradio">Stándar (5%)</label>
                        </div>
                        <div class="row">
                          <button type="button" class="m-1 btn btn-link" data-toggle="modal" data-target="#contidionsModal">Ver condiciones</button>
                        </div>
                      </div>
                 
                  <hr class="mb-4">
                  <h4 class="mb-3">Costos</h4>
                  <ul class="list-group mb-3">
                      <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 class="my-0">Subtotal</h6>
                          <small class="text-muted">Unitario del producto</small>
                        </div>
                        <span class="text-muted" id="productCostText">` + carrito.unitCost * productCount+ ` </span>
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
            
            document.getElementById("productCountInput").addEventListener("change", function(){
              productCount = this.value;
              updateTotalCosts();
            });

            document.getElementById("premiumradio").addEventListener("change", function(){
              comissionPercentage = 0.13;
              updateTotalCosts();
          });
          
          document.getElementById("expressradio").addEventListener("change", function(){
              comissionPercentage = 0.07;
              updateTotalCosts();
          });
      
          document.getElementById("standardradio").addEventListener("change", function(){
              comissionPercentage = 0.03;
              updateTotalCosts();
          });

          }

          getJSONData(CART_INFO_URL).then(function(resultObj){ // resultObj es un nombre habitual
            if (resultObj.status === "ok") 
            {
                productoCarrito = resultObj.data;
                //Muestro las categorías ordenadas
                showProductCart(productoCarrito);
          
                console.log(document.getElementById("productCountInput").value)
            }
          
          });
   
});

