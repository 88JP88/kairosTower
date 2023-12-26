

function generarID() {
  // Generar un número aleatorio y convertirlo a cadena
  let numeroAleatorio = Math.floor(Math.random() * 100000000); // Genera un número aleatorio entre 0 y 99999999
  let idAleatorio = numeroAleatorio.toString().padStart(8, '0'); // Asegura que tenga 8 dígitos completando con ceros a la izquierda si es necesario
  return idAleatorio;
}




async function getClientCatalogsAdmin(filter,param,value,contenedor) {

  const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);

// Obtener el valor del parámetro "parametro1"
var clientId = urlObj.searchParams.get("clientId");



// Crear un objeto URL a partir de la URL actual


// Obtener el valor del parámetro "parametro1"
var storeId = urlObj.searchParams.get("storeId");



// Crear un objeto URL a partir de la URL actual


// Obtener el valor del parámetro "parametro1"
var st = urlObj.searchParams.get("st");

if(st==="pos"){
  document.getElementById("loading-container").style.display = "flex";
  var catid= document.getElementById("list-categoriesListPos").value;
  var catid1= document.getElementById("simil").value;
  var catid2= document.getElementById("scaracter").value;
  var catid3= document.getElementById("list-caracterspecific").value;
  var catid4= document.getElementById("list-caracterCatalog").value;
}
if(st==="ecm"){
  document.getElementById("loading-container").style.display = "flex";
  var catid= document.getElementById("list-categoriesListPos").value;
  var catid1= document.getElementById("simil").value;
}
  if(param=="categoryId"){
value=catid;
  }
  if(param=="simil"){
    value=catid1;
      }
      if(param=="specific"){
        value=catid2;
        param=catid3;
          }
          if(param=="specificCatalog"){
            param=catid4;
           // param=catid3;
              }
  //var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  //console.log(epGetClientCatalogsAdmin);
  fetch(epGetClientCatalogsAdmin + clientId+"/"+filter+storeId+"/"+param+"/"+value+"/"+st)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById(contenedor);
          
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.catalogs.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              if (info.isDiscount !== "0") {
                var result = info.discount *info.outPrice;
                var mult= result/100;
                var rest=info.outPrice-mult;
                priceToShow = `${rest}`;

                originPrice=info.outPrice;
                saver=mult;
                dicounter=info.discount;
                
              } else {
                priceToShow = `${info.outPrice}`;
                dicounter=0;
              }
//id unico de agregado al carrito
              let idGenerado = generarID();
              card11.innerHTML = `
                 
                 
             
              <div class="edit-container">

             

              <div class="card">
              <div class="card-header">
              <div id="cartItems1${idGenerado}" class="cart-items1"></div>
              <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
              <h2>${info.productName}</h2>
              <p class="item-price">${info.categoryName}</p>
            </div>
            <div class="card-body">
              <p class="item-name">${info.description}</p>


              <p class="card-text">
              <div class="edit-container">
          
    
</div>

${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
: `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
            
${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
: ``}
${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
: ``}
             
            </div>
            <div class="card-footer">
              <div>
              <p class="card-text">Cantidad:</p>
                <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
              </div>
              <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
             
            </div>
            
            
            
</div>

             
</div>
              
              
              
              
           
                      
               
                  
              `;

              cardContainer11.appendChild(card11);
              //getClientCategoriesList('all','all','all',idin);
              //getClientStoresList1('all','all','all',idin);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}
// Variable que almacenará el carrito de compras


// Ejemplo de uso de la función addToCart


// Mostrar el carrito de compras actual
var totality=0;
var subtotality=0;
let shoppingCart = [];
let shoppingCartPayment = [];
let shoppingProducts = [];
let products=[];
// Función para agregar un elemento al carrito de compras
function addToCart(uniqueId,productName, price, quantity,outPrice,id,catalogId,productId,sku,categoryId,categoryName,storeId,storeName,description,discount,isDiscount,promoId,isPromo,unit,readUnit,unitQty,unitUnit,imgProduct,spcProduct,minQty,maxQty,stock) {

  var qtyvalue = document.getElementById(quantity).value;
  var total1=price*qtyvalue;
  var subtotal1=outPrice*qtyvalue;
  if(+qtyvalue>+stock){
    alert("Cantidad supera el stock actual "+stock+" "+qtyvalue);
  }if(+qtyvalue<=+stock){

           var resultado=    paramsValidation(maxQty,minQty,qtyvalue,readUnit);
           if(resultado=="true"){

           
                const item = {
                  
                  uniqueId: uniqueId,
                  catalogId: catalogId,
                  productId: productId,
                  productName: productName,
                  productDescription: description,
                  productSku: sku,
                  imgProduct: imgProduct,
                  spcProduct: spcProduct,
                  productPrice: price,
                  outPrice: outPrice,
                  productQty: qtyvalue,
                  categoryId: categoryId,
                  categoryName: categoryName,
                  storeId: storeId,
                  storeName: storeName,
                  isDiscount: isDiscount,
                  discount: discount,
                  promoId: promoId,
                  isPromo: isPromo,
                  unit: unit,
                  readUnit: readUnit,
                  unitQty: unitQty,
                  unitUnit: unitUnit,
                  totalShopping: total1,
                  subTotalShopping: subtotal1
                  
                };

                // Agregar el elemento al carrito de compras

                
                shoppingCart.push({item});

                //console.log(JSON.stringify(shoppingCart));
                //products=[];
                // Devolver el carrito de compras actualizado (esto es opcional)
                //return shoppingCart;
                //addToCart('Producto 1', 25.99, 2);
                totality=totality+total1;
                subtotality=subtotality+subtotal1;
                    
                updateCartView(uniqueId);
           }else{
            alert(resultado);
           }
              }
}

function removeFromCart(uniqueId, productName, price, quantity, outPrice, id) {
  //console.log("Shopping Cart:", shoppingCart);

  const indexToRemove = shoppingCart.findIndex(item => item.item.uniqueId === uniqueId);


  var total1 = price * quantity;
  var subtotal1 = outPrice * quantity;

  if (indexToRemove !== -1) {
    const removedItem = shoppingCart.splice(indexToRemove, 1);
   

    totality = totality - total1;
    subtotality = subtotality - subtotal1;

    updateCartView(uniqueId);
  } else {
    console.log("El producto no se encontró en el carrito.");
  }
}

var totality=0;




function updateCartView(id) {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartItemsDiv1 = document.getElementById('cartItems1');
  const cartItemsDiv12 = document.getElementById('cartItems1' + id);
  cartItemsDiv.innerHTML = ''; // Limpiar el contenido anterior del carrito
  cartItemsDiv1.innerHTML = '';
  cartItemsDiv12.innerHTML = '';
  if (shoppingCart.length === 0) {
    cartItemsDiv.textContent = 'El carrito está vacío';
  } else {
    const ul = document.createElement('ul');
    shoppingCart.forEach(item => {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button'); // Crear botón eliminar
      deleteButton.textContent = 'Eliminar'; // Texto del botón
      deleteButton.addEventListener('click', function() {
        // Función para eliminar el elemento del carrito al hacer click en el botón
        removeFromCart(item.item.uniqueId,item.item.productName,item.item.productPrice,item.item.productQty,item.item.outPrice,id);
        
      });
      li.textContent = `${item.item.catalogId} ${item.item.productQty} ${item.item.productName} = $${item.item.productPrice} - Total: ${item.item.totalShopping}`;
      li.appendChild(deleteButton); // Agregar el botón eliminar al elemento li
      ul.appendChild(li);
    });
    cartItemsDiv.appendChild(ul);

    // Resto del código para mostrar el total, sub-total, ahorro, etc.
    
    const ul1 = document.createElement('ul');
    
  
   
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');
      const li4 = document.createElement('li');

      var saver1=subtotality-totality;
      li1.textContent = `Total: $${totality} `;
      li2.textContent = `Sub-Total: $${subtotality} `;
      li3.textContent = `Ahorro: $${saver1} `;
     

      ul1.appendChild(li1);
      ul1.appendChild(li2);
      ul1.appendChild(li3);
     cartItemsDiv1.appendChild(ul1);
/* 
      const ul2 = document.createElement('ul');
      li4.textContent = `${saver1} `;
      ul2.appendChild(li4);
      
      cartItemsDiv12.appendChild(ul2);*/
  }
}



async function getClientCategoriesListaddPost(filter,param,value) {

  var reposSelect = document.getElementById("list-categoriesListPos");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }


  const url = window.location.href;

  // Crear un objeto URL a partir de la URL actual
  const urlObj = new URL(url);
  
  // Obtener el valor del parámetro "parametro1"
  var uid = urlObj.searchParams.get("clientId");
//var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId;
      option.text = info.categoryName;
      reposSelect.add(option);
      //console.log("hola");
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 
async function getClientCategoriesList3(filter,param,value,catId) {

  var reposSelect = document.getElementById("list-categoriesList1"+catId);
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId;
      option.text = info.categoryName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 async function getClientCategoriesListadd(filter,param,value) {

  var reposSelect = document.getElementById("list-categoryListstadd");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId+"|"+info.parentId;
      option.text = info.categoryName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 
 async function getClientCategoriesListadd96(filter,param,value) {

  var reposSelect = document.getElementById("list-categoryListstadd96");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId;
      option.text = info.categoryName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 






// Define una función para mostrar el modal de confirmación cerca del botón
function showConfirmationModalNearButton(message, onConfirm, button) {
  const modalContent = document.createElement('div');
  modalContent.className = 'confirm-modal-content-near-button';

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Aceptar';
  confirmButton.className = 'confirm-button';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar';
  cancelButton.className = 'cancel-button';

  // Agrega los elementos al modal
  modalContent.appendChild(messageElement);
  modalContent.appendChild(confirmButton);
  modalContent.appendChild(cancelButton);
  document.body.appendChild(modalContent);

  // Calcula la posición del modal cerca del botón
  const buttonRect = button.getBoundingClientRect();
  const modalRect = modalContent.getBoundingClientRect();

  // Calcula la posición derecha del botón
  const buttonRight = buttonRect.left + buttonRect.width;

  // Calcula la posición del modal para que esté a la derecha del botón
  const top = buttonRect.top + window.scrollY;
  const left = buttonRight + 350; // Agrega un margen a la derecha del botón

  modalContent.style.top = top + 'px';
  modalContent.style.left = left + 'px';

  // Agrega eventos a los botones
  confirmButton.addEventListener('click', () => {
    onConfirm();
    document.body.removeChild(modalContent);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modalContent);
  });
}










function arrayToHTMLCards(container) {
  const cardsContainer = document.getElementById(container);
  cardsContainer.innerHTML = ""; // Borra las tarjetas antiguas
  shoppingCart.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = `
      <h4>${item.item.productName}</h4>
      <p>X ${item.item.productQty}</p>
      <p>Valor original $${item.item.outPrice}</p>
      <p>Valor con descuento $${item.item.productPrice}</p>
      <p>Total: $${item.item.totalShopping}</p>
      <p>Sub-Total: $${item.item.subTotalShopping}</p>
      <p>Ahorro: $${item.item.subTotalShopping-item.item.totalShopping}</p>
      <button class="btn btn-primary" onClick=" removeFromCart('${item.item.uniqueId}','${item.item.productName}',${item.item.productPrice},${item.item.productQty},${item.item.outPrice},${item.item.uniqueId});arrayToHTMLCards();arrayToHTMLCardsPayload();">Remover</button>
          
      `;

    card.innerHTML = cardContent;
    cardsContainer.appendChild(card);
  });
}



function arrayToHTMLCardsPayload(container) {
  const cardsContainer = document.getElementById(container);
  var pType= document.getElementById('list-paymentType').value;
  var pMethod= document.getElementById('list-paymentMethod').value;
  var pBank= document.getElementById('list-bankMethod').value;
  var pWith= document.getElementById('paymentcash').value;
  var pExc=+pWith-totality;
  cardsContainer.innerHTML = ""; // Borra las tarjetas antiguas
var subto=subtotality-totality;
 

if(pType!="cash"){
pWith=pType+"/"+pMethod+"/"+pBank;
pExc=0;
}
  const payment = {
    total: totality,
    subTotal: subtotality,
    saver: subto,
    paymentType: pType,
    paymentMethod: pMethod,
    bankMethod: pBank,
    payWith: pWith,
    exchangeCash: pExc
    
  };
  shoppingCartPayment = [];
  // Agregar el elemento al carrito de compras
  shoppingCartPayment.push({payment});
  shoppingCart.push({payment});
  //console.log(JSON.stringify(shoppingCart));
  shoppingCartPayment.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = `
      <h4>Resumen</h4>
      
      <p>Total: $${item.payment.total}</p>
      <p>Sub-Total: $${item.payment.subTotal}</p>
      <p>Ahorro: $${item.payment.saver}</p>
          
      `;

    card.innerHTML = cardContent;
    cardsContainer.appendChild(card);
  });
}

function arrayToHTMLCardsPayloadEcm(container) {
  const cardsContainer = document.getElementById(container);
  var pType= document.getElementById('list-paymentTypeEcm').value;
  var pMethod= document.getElementById('list-paymentMethodEcm').value;
  var pBank= document.getElementById('list-bankMethodEcm').value;
  var pWith= document.getElementById('paymentcashEcm').value;
  var pExc=+pWith-totality;
  cardsContainer.innerHTML = ""; // Borra las tarjetas antiguas
var subto=subtotality-totality;
 

if(pType!="cash"){
pWith=pType+"/"+pMethod+"/"+pBank;
pExc=0;
}
  const payment = {
    total: totality,
    subTotal: subtotality,
    saver: subto,
    paymentType: pType,
    paymentMethod: pMethod,
    bankMethod: pBank,
    payWith: pWith,
    exchangeCash: pExc
    
  };
  shoppingCartPayment = [];
  // Agregar el elemento al carrito de compras
  shoppingCartPayment.push({payment});
  shoppingCart.push({payment});
  //console.log(JSON.stringify(shoppingCart));
  shoppingCartPayment.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = `
      <h4>Resumen</h4>
      
      <p>Total: $${item.payment.total}</p>
      <p>Sub-Total: $${item.payment.subTotal}</p>
      <p>Ahorro: $${item.payment.saver}</p>
          
      `;

    card.innerHTML = cardContent;
    cardsContainer.appendChild(card);
  });
}


function paramsValidation(maxqty,minqty,value,readUnit){

if(+value<+minqty){
return "La cantidad mínima debe ser: "+minqty;
}
if(+value>+maxqty){
  return "La cantidad máxima debe ser: "+maxqty;
  }
  if(+value<=+maxqty && +value >=+minqty){

    if(readUnit=="un" || readUnit=="UN" || readUnit=="box" || readUnit=="pkg" || readUnit=="bag"){
  var isInt= esEntero(+value);
  if(esEntero(+value)){
    return "true";
  }if(isInt!="true"){
    return "Cantidad incorrecta, no se admiten (puntos '.', comas ','), el producto se mide en: "+readUnit;
  }
    }  else{
      return "true";
    }
    
    }



}

function esEntero(numero) {
  return Number.isInteger(numero);
}





 function getCustomerList(containerId) {

  var reposSelect = document.getElementById(containerId);
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }




	fetch('https://dev-kairosgateway.lugma.tech/kairosGateway/apiClient/v1/getCustomers/UfbHdZaJ%206WclAmsaP9H7SR2WmpDbl1OL9/2e44d504/all/all/all')
  .then(response => response.json())
  .then(data => {
    data.customers.forEach(info => {
      const option = document.createElement("option");
      option.value = info.customerId;
      option.text = info.customerName+" "+info.customerLastName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 
async function getClientCustomersPos(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  const url = window.location.href;
value= document.getElementById('list-customerget').value;
  // Crear un objeto URL a partir de la URL actual
  const urlObj = new URL(url);
  
  // Obtener el valor del parámetro "parametro1"
  var clientId = urlObj.searchParams.get("clientId");
  //var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  fetch(epGetClientCustomers + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-validateClientPos");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.customers.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                 

              </h5>
              <p class="card-text">Nombre: ${info.customerName}
             
              </p>
              <p class="card-text">Apellido: ${info.customerLastName}
              
              </p>

              <p class="card-text">Datos: ${info.customerMail} / ${info.customerPhone}
            
              </p>
             

             
              <p class="card-text">Puntos:
              ${info.customerPoints}
              
              </p>
              <p class="card-text">Estrellas:
              ${info.customerStars}
              
              </p>
              <p class="card-text">Cada punto equivale:
              $${info.pointsValue}
              
              </p>
              <p class="card-text">Con cada $${info.pointsEq} en compras recolectas un punto:
              
              
              </p>
              <p class="card-text">Total en puntos:
              $${info.customerPoints*info.pointsValue}
              
              </p>
             
              
          
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
           //   getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}



function putOrderPaymentStatus(button,id,param) {
  // Obtener el valor del campo de texto correspondiente al botón
  const url1 = window.location.href;
  //value= document.getElementById('list-customerget').value;
    // Crear un objeto URL a partir de la URL actual
    const urlObj = new URL(url1);
    
    // Obtener el valor del parámetro "parametro1"
    var clientId = urlObj.searchParams.get("clientId");
 if(param==="validateModal"){
  var input = document.getElementById('paymentReference').value;
  var url = 'controller/putClientOrderPayment.php?reference=' + encodeURIComponent(input)  + '&clientId=' + encodeURIComponent(clientId);

 }
 if(param==="validateList"){
  var nombre = button.previousElementSibling;
  var input = nombre.value;    
  var url = 'controller/putClientOrderPayment1.php?reference=' + encodeURIComponent(input)  + '&clientId=' + encodeURIComponent(clientId)+ '&orderId=' + encodeURIComponent(id);

 }
    

  // Construir la URL con los parámetros de la petición GET
 
  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
       // getClientStores('filter',param,value);
       getClientOrders('clientId','byStore','storeId','value','tableClientOrders');
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  
 
  }
 

  function putOrderStatusStatus(button,id,param) {
    // Obtener el valor del campo de texto correspondiente al botón
    const url1 = window.location.href;
    //value= document.getElementById('list-customerget').value;
      // Crear un objeto URL a partir de la URL actual
      const urlObj = new URL(url1);
      
      // Obtener el valor del parámetro "parametro1"
      var clientId = urlObj.searchParams.get("clientId");
  
   
    var nombre = button.previousElementSibling;
    var input = nombre.value;    
    var url = 'controller/putClientOrderStatus.php?orderId=' + encodeURIComponent(id)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(input);
  
   
      
  
    // Construir la URL con los parámetros de la petición GET
   
    // Realizar la petición GET al archivo PHP
    fetch(url)
      .then(response => {
        // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
        // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
  
        getMessage();
        getClientOrders('clientId','byStore','storeId','value','tableClientOrders');

         // getClientStores('filter',param,value);
  
        
   
      })
      .catch(error => {
        // Aquí puedes manejar los errores en caso de que la petición falle
        console.log('Error en la petición:', error);
      });
    
   
    }
   
  

    let contador=1;
  async function getClientOrders(clientId,filter,param,value,containerId) {
    //  const subInternalClients = `${subDomain}/kairosGateway/apiCore/v1/getInternalClients/${ranCodetask} ${apiKeytask}/`;
   

     document.getElementById("loading-container").style.display = "flex";


     const url1 = window.location.href;
  //value= document.getElementById('list-customerget').value;
    // Crear un objeto URL a partir de la URL actual
    const urlObj = new URL(url1);
    
    // Obtener el valor del parámetro "parametro1"
    if(clientId==="clientId"){
      
    clientId = urlObj.searchParams.get("clientId");
    value = urlObj.searchParams.get("storeId");
    var storetype=urlObj.searchParams.get("st");
    if(storetype==="ecm"){
    fetch(epGetClientOrders+clientId+"/"+filter+"/"+param+"/"+value)
     
     .then(response => response.json())
     .then(data => {
       const publicgroupsTableBody = document.querySelector("#"+containerId+" tbody");
       // Borramos los datos antiguos
       publicgroupsTableBody.innerHTML = "";
       data.orders.forEach(info => {
         const row = document.createElement("tr");
         const deliveryAddArray = JSON.parse(info.deliveryAdd);
         const disRulesArray = JSON.parse(info.distanceRules);
         row.innerHTML = `
        
       
         <td>
         
         <div class="edit-container">
     
        
       
         <button onclick="openModClientOrdersPayload();getClientOrders(&quot;${info.clientId}&quot;,&quot;byStore&quot;,&quot;orderId&quot;,&quot;${info.orderId}&quot;,&quot;tableClientOrdersPayload&quot;);" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES">
           <i class="fas fa-eye"></i>
         </button>
         
        
        
   
       
       
       </div>
   
       
   
         </td>
         <td>${info.orderId}</td>
         <td>${info.carId}</td>
         <td>${info.orderNumber}</td>
         <td>${info.vendor}</td>
         <td>${info.customer}</td>
         <td>${info.storeName}</td>
         <td>${info.total}</td>
         <td>${info.subTotal}</td>
         <td>${info.saver}</td>
         <td>${info.payWith}</td>
         <td>${info.exchange}</td>
         <td>
         <div class="edit-container">
           ${info.paymentReference === "cash" ?
           info.paymentReference
            :
             
             (info.orderProgress !== "done" && info.orderProgress !== "canceled" && info.orderProgress !== "DONE"  ?
             `<input type="text" class="form-control label-input" id="${info.orderId}" value="${info.paymentReference}" title="${info.paymentReference}" onclick="makeEditable(this)">
              <button onclick="putOrderPaymentStatus(this,&quot;${info.orderId}&quot;,&quot;validateList&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
                <i class="fas fa-edit"></i>
              </button>` :
             info.paymentReference
           ) 
           }
         </div>
       </td>
       
       
       

         
        
      
         <td>
         <div class="edit-container">${info.orderProgress}
           <select>
             ${info.orderProgress === "RECEIVED" ?
               `<option value="in_progress">EN CURSO</option>
                <option value="canceled">CANCELADA</option>` :
              info.orderProgress === "in_progress" ?
               `<option value="packing">EMPACANDO</option>
                <option value="canceled">CANCELADA</option>` :
              info.orderProgress === "packing" ?
               `<option value="ready">LISTA</option>
                <option value="canceled">CANCELADA</option>` :
              info.orderProgress === "ready" ?
               `<option value="on_way">EN CAMINO</option>
                <option value="canceled">CANCELADA</option>` :
              info.orderProgress === "on_way" ?
               `<option value="delivered">ENTREGADA</option>
                <option value="canceled">CANCELADA</option>` :
              info.orderProgress === "delivered" ?
               `<option value="done">FINALIZADA</option>
                <option value="canceled">CANCELADA</option>` :
              info.orderProgress === "done" || info.orderProgress === "DONE"  ?
               '' : '' // Aquí puedes añadir más condiciones según sea necesario
             }
           </select>
           <button onclick="putOrderStatusStatus(this,&quot;${info.orderId}&quot;,&quot;orderProgress&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
             <i class="fas fa-edit"></i>
           </button>
         </div>
       </td>
       
         
        
        
        
         <td>${info.paymentStatus}</td>
         <td>${info.bankAccount}</td>
         <td>${info.paymentMethod}</td>
         <td>${info.numberProducts}</td>
         <td>${info.numberPacks}</td>
         <td>${info.inDate} - ${info.inTime}</td>
         <td>${info.deliveryMethod}</td>
         
         <td>

         
         ${deliveryAddArray[0]['deliveryAdd']['paramOne']} ${deliveryAddArray[0]['deliveryAdd']['startStreet']}${deliveryAddArray[0]['deliveryAdd']['paramOneLet'] } ${deliveryAddArray[0]['deliveryAdd']['paramOneBis']}
         ${deliveryAddArray[0]['deliveryAdd']['paramSecond']} # ${deliveryAddArray[0]['deliveryAdd']['startAvenue']}${deliveryAddArray[0]['deliveryAdd']['paramSecondLet'] } ${deliveryAddArray[0]['deliveryAdd']['paramSecondBis']}
        Casa: ${deliveryAddArray[0]['deliveryAdd']['context']}
       </td>
       

         <td>${info.deliveryName} ${info.deliveryLastName}
         ${deliveryAddArray[0]['deliveryAdd']['startStreet'] >= disRulesArray[0]['distance']['startStreet'] && deliveryAddArray[0]['deliveryAdd']['startStreet'] <= disRulesArray[0]['distance']['endStreet'] ?
         ` <select id='delivery${contador}'></select>
         <button onclick="putOrderStatusStatus(this,&quot;${info.orderId}&quot;,&quot;deliveryPerson&quot;)" class="btn btn-primary1 delete-button" title="ASIGNAR ENTREGA">
         <i class="fas fa-plus"></i>
         </button>` : `<select id='delivery${contador}'></select>` // Aquí puedes añadir más condiciones según sea necesario
       }
         
         </td>
         
        
      
           
         `;
        
         
    
         publicgroupsTableBody.appendChild(row);
         getClientDelivery('delivery'+contador);
         contador++;
       }
       
       );
       document.getElementById("loading-container").style.display = "none";
     })
     .catch(error => {
       console.error("Error:", error);
       document.getElementById("loading-container").style.display = "none";
     });
      }
      if(storetype==="pos"){
        fetch(epGetClientOrders+clientId+"/"+filter+"/"+param+"/"+value)
         
         .then(response => response.json())
         .then(data => {
           const publicgroupsTableBody = document.querySelector("#"+containerId+" tbody");
           // Borramos los datos antiguos
           publicgroupsTableBody.innerHTML = "";
           data.orders.forEach(info => {
             const row = document.createElement("tr");
             row.innerHTML = `
            
           
             <td>
             
             <div class="edit-container">
         
            
           
             <button onclick="openModClientOrdersPayload();getClientOrders(&quot;${info.clientId}&quot;,&quot;byStore&quot;,&quot;orderId&quot;,&quot;${info.orderId}&quot;,&quot;tableClientOrdersPayload&quot;);" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES">
               <i class="fas fa-eye"></i>
             </button>
             
            
            
       
           
           
           </div>
       
           
       
             </td>
             <td>${info.orderId}</td>
             <td>${info.carId}</td>
             <td>${info.orderNumber}</td>
             <td>${info.vendor}</td>
             <td>${info.customer}</td>
             <td>${info.storeName}</td>
             <td>${info.total}</td>
             <td>${info.subTotal}</td>
             <td>${info.saver}</td>
             <td>${info.payWith}</td>
             <td>${info.exchange}</td>
            
             <td>
             <div class="edit-container">
             <input type="text" class="form-control label-input" id="${info.orderId}" value="${info.paymentReference}" title="${info.paymentReference}" onclick="makeEditable(this)"> <button onclick="putOrderPaymentStatus(this,&quot;${info.orderId}&quot;,&quot;validateList&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
          <i class="fas fa-edit"></i>
          </button>
            
             </div>
             </td>
             <td>${info.orderProgress}</td>
             <td>${info.paymentStatus}</td>
             <td>${info.bankAccount}</td>
             <td>${info.paymentMethod}</td>
             <td>${info.numberProducts}</td>
             <td>${info.numberPacks}</td>
             <td>${info.inDate} - ${info.inTime}</td>
            
          
               
             `;
        
        
             publicgroupsTableBody.appendChild(row);
           });
           document.getElementById("loading-container").style.display = "none";
         })
         .catch(error => {
           console.error("Error:", error);
           document.getElementById("loading-container").style.display = "none";
         });
          }
    }

    else{
      
      fetch(epGetClientOrders + clientId + "/" + filter + "/" + param + "/" + value)
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("#" + containerId + " tbody");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.orders.forEach(info => {
      const orderPayloadString = info.orderPayload;

      // Convertir el string JSON a un objeto
      const orderPayload = JSON.parse(orderPayloadString);
      console.log(typeof orderPayload);
      if (Array.isArray(orderPayload)) {
        orderPayload.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
         
            <td>${item.item.productName}</td>
            <td>${item.item.productDescription}</td>
            <td>${item.item.outPrice}</td>
            <td>${item.item.productQty}</td>
            <td>${item.item.totalShopping}</td>
            <td>${item.item.subTotalShopping}</td>
            <td>${item.item.discount}</td>
            <td>${item.item.storeName}</td>
            <td>${item.item.categoryName}</td>
            <!-- Agrega más columnas según tus necesidades -->
          `;
          publicgroupsTableBody.appendChild(row);
        });
      } else {
        console.error("El orderPayload no es un array");
      }
    });
    document.getElementById("loading-container").style.display = "none";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("loading-container").style.display = "none";
  });

      
      }
   
     
   
   
      
   
   }

   function getCustomerOrderData(){


    var delMeth=document.getElementById('list-deliverymethod').value;

    
      if(delMeth==="delivery"){
        const card11 = document.createElement("div");
        const cardContainer11 = document.getElementById("orderData");
        cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas  
              card11.classList.add("card");
           
             
              card11.innerHTML = `
                  <div class="card-body">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                 

              </h5>
              <div class="edit-container">
              <p class="card-text">Primer parámetro:
              <select id="selprimerparametro">
              <option value="AC">Avenida Calle</option>
              <option value="CL">Calle</option>
              <option value="DG">Diagonal</option>
              <option value="AK">Avenida Karrera</option>
              <option value="KR">Karrera</option>
              <option value="TV">Transversal</option>
              </select>
             
              </p>
              </div>
         <input type="text" class="form-control" id="deliveryAddress" value="" title="" onclick="makeEditable(this)">
         <div class="edit-container">
         <p class="card-text">
         <select id="letras1">
         <option value="">Seleccionar</option>
         <option value="A">A</option>
         <option value="B">B</option>
         <option value="C">C</option>
         <option value="D">D</option>
         <option value="E">E</option>
         <option value="F">F</option>
         <option value="G">G</option>
         <option value="H">H</option>
         <option value="I">I</option>
         <option value="J">J</option>
         <option value="K">K</option>
         <option value="L">L</option>
         <option value="M">M</option>
         <option value="N">N</option>
         <option value="O">O</option>
         <option value="P">P</option>
         <option value="Q">Q</option>
         <option value="R">R</option>
         <option value="S">S</option>
         <option value="T">T</option>
         <option value="U">U</option>
         <option value="V">V</option>
         <option value="W">W</option>
         <option value="X">X</option>
         <option value="Y">Y</option>
         <option value="Z">Z</option>
       </select>
       </p>
       </div>
       <div class="edit-container">
       <p class="card-text">
         <select id="selprimerparametrobis">
         <option value=""></option>
         <option value="BIS">Bis</option>
         </select>
         </div>
         </p>
         <div class="edit-container">
         <p class="card-text">Segundo parámetro:
         <select id="selsegundoparametro">
         <option value="AK">Avenida Karrera</option>
         <option value="KR">Karrera</option>
         <option value="TV">Transversal</option>
         <option value="AC">Avenida Calle</option>
              <option value="CL">Calle</option>
              <option value="DG">Diagonal</option>
         </select>
         </p>
         </div>
    <input type="text" class="form-control" id="deliveryAddressAv" value="" title="" onclick="makeEditable(this)">
    <div class="edit-container">
    <p class="card-text">
    <select id="letras2">
    <option value="">Seleccionar</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
    <option value="H">H</option>
    <option value="I">I</option>
    <option value="J">J</option>
    <option value="K">K</option>
    <option value="L">L</option>
    <option value="M">M</option>
    <option value="N">N</option>
    <option value="O">O</option>
    <option value="P">P</option>
    <option value="Q">Q</option>
    <option value="R">R</option>
    <option value="S">S</option>
    <option value="T">T</option>
    <option value="U">U</option>
    <option value="V">V</option>
    <option value="W">W</option>
    <option value="X">X</option>
    <option value="Y">Y</option>
    <option value="Z">Z</option>
  </select>
  </p>
  </div>
  <div class="edit-container">
  <p class="card-text">
    <select id="selsegundoparametrobis">
         <option value=""></option>
         <option value="BIS">Bis</option>
         </select>
         </p>
    </div>
    <div class="edit-container">

    <p class="card-text">Número de locación:
   
    </p>
    </div>
<input type="text" class="form-control" id="deliveryAddressHm" value="" title="" onclick="makeEditable(this)">

</div>
<div class="edit-container">

<p class="card-text">Descripción de locación:

</p>
</div>
<input type="text" class="form-control" id="deliveryAddressdes" value="" title="" onclick="makeEditable(this)">

</div>

             
             
              
          
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
           //   getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);
      }
      if(delMeth==="pickup"){

        const url1 = window.location.href;
        //value= document.getElementById('list-customerget').value;
          // Crear un objeto URL a partir de la URL actual
          const urlObj = new URL(url1);
          
          // Obtener el valor del parámetro "parametro1"
         
         var clientId = urlObj.searchParams.get("clientId");
        fetch(epGetClientPickupPoints  + clientId+"/all/all/all")
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("orderData");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.pickupPoints.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                 

              </h5>
              <p class="card-text">${info.pointName}
             
              </p>
              <p class="card-text">${info.pointAdd}
              
              </p>

              <p class="card-text">${info.cityPoint}
            
              </p>
             

             
             
              
          
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
           //   getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

        
      }
   }






   
   function getClientDelivery(containerId){


    const url1 = window.location.href;
    //value= document.getElementById('list-customerget').value;
      // Crear un objeto URL a partir de la URL actual
      const urlObj = new URL(url1);
      
      // Obtener el valor del parámetro "parametro1"
     console.log(containerId);
     var clientId = urlObj.searchParams.get("clientId");
    var reposSelect = document.getElementById(containerId);


  
  console.log(epGetClientDelivery + clientId+'/all/all/all');
  
  
    fetch(epGetClientDelivery  + clientId+"/all/all/all")
    .then(response => response.json())
    .then(data => {
      data.delivery.forEach(info => {
        const option = document.createElement("option");
        option.value = info.deliveryId;
        option.text = info.deliveryName+" "+info.deliveryLastName;
        reposSelect.add(option);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
     
   }