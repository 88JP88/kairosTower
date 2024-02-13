function generarID() {
    // Generar un número aleatorio y convertirlo a cadena
    let numeroAleatorio = Math.floor(Math.random() * 100000000); // Genera un número aleatorio entre 0 y 99999999
    let idAleatorio = numeroAleatorio.toString().padStart(8, '0'); // Asegura que tenga 8 dígitos completando con ceros a la izquierda si es necesario
    return idAleatorio;
  }
  

// Mostrar el carrito de compras actual
var totality=0;
var subtotality=0;
let shoppingCart = [];
let shoppingCartPayment = [];
let shoppingProducts = [];
let products=[];


async function addToCartPromise(uniqueId, productName, price, quantity, outPrice, id, catalogId, productId, sku, categoryId, categoryName, storeId, storeName, description, discount, isDiscount, promoId, isPromo, unit, readUnit, unitQty, unitUnit, imgProduct, spcProduct, minQty, maxQty, stock) {
    return new Promise(async (resolve, reject) => {
        var qtyvalue = document.getElementById(quantity).value;
        var total1 = price * qtyvalue;
        var subtotal1 = outPrice * qtyvalue;

        if (+qtyvalue > +stock) {
            reject("Cantidad supera el stock actual " + stock + " " + qtyvalue);
        } else if (+qtyvalue <= +stock) {
            var resultado = await paramsValidation(maxQty, minQty, qtyvalue, readUnit);
            if (resultado === "true") {
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
                shoppingCart.push({ item });

                totality = totality + total1;
                subtotality = subtotality + subtotal1;

                updateCartView(uniqueId);
                resolve("Producto agregado al carrito con éxito.");
            } else {
                reject(resultado);
            }
        }
    });
}


async function addToCart(uniqueId, productName, price, quantity, outPrice, id, catalogId, productId, sku, categoryId, categoryName, storeId, storeName, description, discount, isDiscount, promoId, isPromo, unit, readUnit, unitQty, unitUnit, imgProduct, spcProduct, minQty, maxQty, stock) {
    try {
        const message = await addToCartPromise(uniqueId, productName, price, quantity, outPrice, id, catalogId, productId, sku, categoryId, categoryName, storeId, storeName, description, discount, isDiscount, promoId, isPromo, unit, readUnit, unitQty, unitUnit, imgProduct, spcProduct, minQty, maxQty, stock);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
  }

  async function removeFromCartPromise(uniqueId, productName, price, quantity, outPrice, id) {
    return new Promise(async (resolve, reject) => {
        const indexToRemove = shoppingCart.findIndex(item => item.item.uniqueId === uniqueId);

        var total1 = price * quantity;
        var subtotal1 = outPrice * quantity;

        if (indexToRemove !== -1) {
            const removedItem = shoppingCart.splice(indexToRemove, 1);

            totality = totality - total1;
            subtotality = subtotality - subtotal1;

            updateCartView(uniqueId);
            resolve("Producto eliminado del carrito con éxito.");
        } else {
            reject("El producto no se encontró en el carrito.");
        }
    });
}

async function removeFromCart(uniqueId, productName, price, quantity, outPrice, id) {
    try {
        const message = await removeFromCartPromise(uniqueId, productName, price, quantity, outPrice, id);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
  }

  var totality=0;



  async function updateCartViewPromise(id) {
    return new Promise((resolve, reject) => {
        const cartItemsDiv = document.getElementById('cartItems');
        const cartItemsDiv1 = document.getElementById('cartItems1');
        const cartItemsDiv12 = document.getElementById('cartItems1' + id);
        cartItemsDiv.innerHTML = ''; // Limpiar el contenido anterior del carrito
        cartItemsDiv1.innerHTML = '';
        cartItemsDiv12.innerHTML = '';
        if (shoppingCart.length === 0) {
            cartItemsDiv.textContent = 'El carrito está vacío';
            resolve(); // Resuelve la promesa, ya que no hay elementos en el carrito
        } else {
            const ul = document.createElement('ul');
            shoppingCart.forEach(item => {
                const li = document.createElement('li');
                const deleteButton = document.createElement('button'); // Crear botón eliminar
                deleteButton.textContent = 'Eliminar'; // Texto del botón
                deleteButton.addEventListener('click', async function() {
                    // Función para eliminar el elemento del carrito al hacer click en el botón
                    try {
                        await removeFromCartPromise(item.item.uniqueId, item.item.productName, item.item.productPrice, item.item.productQty, item.item.outPrice, id);
                        resolve(); // Resuelve la promesa después de eliminar el elemento del carrito
                    } catch (error) {
                        reject(error); // Rechaza la promesa si hay un error al eliminar el elemento
                    }
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

            var saver1 = subtotality - totality;
            li1.textContent = `Total: $${totality} `;
            li2.textContent = `Sub-Total: $${subtotality} `;
            li3.textContent = `Ahorro: $${saver1} `;

            ul1.appendChild(li1);
            ul1.appendChild(li2);
            ul1.appendChild(li3);
            cartItemsDiv1.appendChild(ul1);
        }
    });
}


async function updateCartView(id) {
    try {
        const message = await updateCartViewPromise(id);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
  }






  async function arrayToHTMLCardsPromise(container) {
    return new Promise((resolve, reject) => {
        const cardsContainer = document.getElementById(container);
        if (!cardsContainer) {
            reject("El contenedor especificado no existe.");
        } else {
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
                    <p>Ahorro: $${item.item.subTotalShopping - item.item.totalShopping}</p>
                    <button class="btn btn-primary" onClick=" removeFromCart('${item.item.uniqueId}','${item.item.productName}',${item.item.productPrice},${item.item.productQty},${item.item.outPrice},${item.item.uniqueId}).then(() => { arrayToHTMLCardsPromise(container); arrayToHTMLCardsPayloadPromise(); }).catch(error => { console.error(error); });">Remover</button>
                `;

                card.innerHTML = cardContent;
                cardsContainer.appendChild(card);
            });
            resolve("Tarjetas actualizadas correctamente.");
        }
    });
}

async function arrayToHTMLCards(container) {
    try {
        const message = await arrayToHTMLCardsPromise(container);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
  }


  async function arrayToHTMLCardsPayloadPromise(container) {
    return new Promise((resolve, reject) => {
        const cardsContainer = document.getElementById(container);
        if (!cardsContainer) {
            reject("El contenedor especificado no existe.");
        } else {
            var pType = document.getElementById('list-paymentType').value;
            var pMethod = document.getElementById('list-paymentMethod').value;
            var pBank = document.getElementById('list-bankMethod').value;
            var pWith = document.getElementById('paymentcash').value;
            var pExc = +pWith - totality;
            cardsContainer.innerHTML = ""; // Borra las tarjetas antiguas
            var subto = subtotality - totality;

            if (pType != "cash") {
                pWith = pType + "/" + pMethod + "/" + pBank;
                pExc = 0;
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
            shoppingCartPayment.push({ payment });
            shoppingCart.push({ payment });
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
            resolve("Resumen de pago generado correctamente.");
        }
    });
}

// Llamada a la función con await
async function arrayToHTMLCardsPayload(container) {
    try {
        const message = await arrayToHTMLCardsPayloadPromise(container);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
  }




  async function arrayToHTMLCardsPayloadEcmPromise(container) {
    return new Promise((resolve, reject) => {
        const cardsContainer = document.getElementById(container);
        if (!cardsContainer) {
            reject("El contenedor especificado no existe.");
        } else {
            var pType = document.getElementById('list-paymentTypeEcm').value;
            var pMethod = document.getElementById('list-paymentMethodEcm').value;
            var pBank = document.getElementById('list-bankMethodEcm').value;
            var pWith = document.getElementById('paymentcashEcm').value;
            var pExc = +pWith - totality;
            cardsContainer.innerHTML = ""; // Borra las tarjetas antiguas
            var subto = subtotality - totality;

            if (pType != "cash") {
                pWith = pType + "/" + pMethod + "/" + pBank;
                pExc = 0;
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
            shoppingCartPayment.push({ payment });
            shoppingCart.push({ payment });
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
            resolve("Resumen de pago generado correctamente.");
        }
    });
}

// Llamada a la función con await
async function arrayToHTMLCardsPayloadEcm(container) {
    try {
        const message = await arrayToHTMLCardsPayloadEcmPromise(container);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
  }

  async function paramsValidationPromise(maxqty, minqty, value, readUnit) {
    return new Promise((resolve, reject) => {
        if (+value < +minqty) {
            reject("La cantidad mínima debe ser: " + minqty);
        }
        if (+value > +maxqty) {
            reject("La cantidad máxima debe ser: " + maxqty);
        }
        if (+value <= +maxqty && +value >= +minqty) {
            if (readUnit === "un" || readUnit === "UN" || readUnit === "box" || readUnit === "pkg" || readUnit === "bag") {
                var isInt = esEntero(+value);
                if (esEntero(+value)) {
                    
                    resolve("true");
                } else if (isInt !== "true") {
                    reject("Cantidad incorrecta, no se admiten (puntos '.', comas ','), el producto se mide en: " + readUnit);
                }
            } else {
                resolve("true");
            }
        }
    });
}

function esEntero(numero) {
    return Number.isInteger(numero);
  }
  
async function paramsValidation(maxqty, minqty, value, readUnit) {
    try {
        const message = await paramsValidationPromise(maxqty, minqty, value, readUnit);
        
        console.log("La validación de parámetros fue exitosa:",message); // Manejar el mensaje de éxito
        return "true";
    } catch (error) {
        console.error("Error en la validación de parámetros:",error); // Manejar el error
    }
  }