//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    function showProductsList(array){

        let htmlContentToAppend = "";
        for(let i = 0; i < array.length; i++){
            let products = array[i];
    
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted"> `+ products.currency +` ` + products.cost + ` </small>
                        </div>
    <p> `+ products.description+ ` </p>
                    </div>
                </div>
            </div>
            `
    
            document.getElementById("list").innerHTML = htmlContentToAppend;
        }
    }

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    });








    //PRODUCTS_URL

//     fetch(PRODUCTS_URL) //get
//     .then(response => response.json())
//     .then(data => {
// console.log(response)

//         for (let i = 0; i < result.length; i++) {
//             cars =result[i];


//         let name = data[i].name;
//         let description = data[i].description;
//         let cost = data[i].cost;
//         let currency = data[i].currency;
//         let imgSrc = data[i].imgSrc;
//         let soldCount = data[i].soldCount;
       
//         let tabla = "";

//         tabla +=   `  
//             <tr>
//         <td>${name}</td>
//         <td>${description}</td>
//         <td>${cost}</td>
//         <td>${currency}</td>
//         <td>${soldCount}</td>
//         <td>${imgSrc}</td>
//             </tr>
//       `
//         document.getElementById("table").innerHTML += tabla;
      
//     }

//     })
    





});

