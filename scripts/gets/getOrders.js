








let contador=1;
async function getClientOrdersPromise(data,containerData,containerInfo) {
    return new Promise(async (resolve, reject) => {
        try {
            document.getElementById("loading-container").style.display = "flex";
            const url1 = window.location.href;
            const urlObj = new URL(url1);

            if (containerInfo === "clientId") {
                clientId = urlObj.searchParams.get("clientId");
                value = urlObj.searchParams.get("storeId");
                const storetype = urlObj.searchParams.get("st");

               

                if(storetype==="ecm"){
                   
                   
                  
                     const publicgroupsTableBody = document.querySelector("#"+containerData+" tbody");
                     // Borramos los datos antiguos
                     publicgroupsTableBody.innerHTML = "";
                     data.orders.forEach(info => {
                       const row = document.createElement("tr");
                      // const deliveryAddArray = JSON.parse(info.deliveryAdd);
                       const disRulesArray = JSON.parse(info.distanceRules);
                       const deliveryAddArray = JSON.parse(info.deliveryAdd);
                       row.innerHTML = `
                      
                     
                       <td>
                       
                       <div class="edit-container">
                   
                      
                     
                       <button onclick="openModal('clientOrdersModPayload');createTable('tableClientOrdersPayload','containerOrdersTablePayload', [
                        'Producto',
                        'Descripción',
                        'Precio',
                        'Cantidad',
                        'Total',
                        'Subtotal',
                        'Descuento',
                        'Tienda',
                        'Categoría'
                    ]);getApiData(getClientOrders,'apiClient','v1','getClientOrders','tableClientOrdersPayload','${info.clientId}','byStore','orderId','${info.orderId}');" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES">
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
                       ${deliveryAddArray[0].deliveryAdd.paramOne}  ${deliveryAddArray[0].deliveryAdd.startStreet} ${deliveryAddArray[0].deliveryAdd.paramOneLet} ${deliveryAddArray[0].deliveryAdd.paramOneBis} ${deliveryAddArray[0].deliveryAdd.paramCardinaleOne}
                      # ${deliveryAddArray[0].deliveryAdd.paramSecond} ${deliveryAddArray[0].deliveryAdd.startAvenue} ${deliveryAddArray[0].deliveryAdd.paramSecondLet} ${deliveryAddArray[0].deliveryAdd.paramSecondBis} ${deliveryAddArray[0].deliveryAdd.paramCardinaleSecond}
                       ${deliveryAddArray[0].deliveryAdd.context} ${deliveryAddArray[0].deliveryAdd.paramDescription}
                         </td>
                     
              
                       <td>${info.deliveryName} ${info.deliveryLastName}
                       <select id='delivery${contador}'></select>
                       <button onclick="putOrderStatusStatus(this,&quot;${info.orderId}&quot;,&quot;deliveryPerson&quot;)" class="btn btn-primary1 delete-button" title="ASIGNAR ENTREGA">
                       <i class="fas fa-plus"></i>
                       </button><button onclick="putOrderStatusStatus(this,&quot;${info.orderId}&quot;,&quot;deliveryStatus&quot;,&quot;${info.deliveryPerson}&quot;)" class="btn btn-primary1 delete-button" title="ASIGNAR ENTREGA">
                       <i class="fas fa-eye"></i>
                       </button>
                       </td>
                       
                       <td>${info.deliveryStatus}</td>
                    
                         
                       `;
                      
                       
                  
                       publicgroupsTableBody.appendChild(row);
                       getClientDelivery1('delivery'+contador);
                       contador++;
                     }
                     
                     );
                     document.getElementById("loading-container").style.display = "none";
                   
                    }
                    if(storetype==="pos"){
                       
                        
                           const publicgroupsTableBody = document.querySelector("#"+containerData+" tbody");
                           // Borramos los datos antiguos
                           publicgroupsTableBody.innerHTML = "";
                           data.orders.forEach(info => {
                             const row = document.createElement("tr");
                             row.innerHTML = `
                            
                           
                             <td>
                             
                             <div class="edit-container">
                         
                            
                           
                             
                             
                             <button onclick="openModal('clientOrdersModPayload');createTable('tableClientOrdersPayload','containerOrdersTablePayload', [
                                'Producto',
                                'Descripción',
                                'Precio',
                                'Cantidad',
                                'Total',
                                'Subtotal',
                                'Descuento',
                                'Tienda',
                                'Categoría'
                            ]);getApiData(getClientOrders,'apiClient','v1','getClientOrders','tableClientOrdersPayload','${info.clientId}','byStore','orderId','${info.orderId}');" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="CONFIGURACIONES">
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
                        
                          }

                document.getElementById("loading-container").style.display = "none";
                resolve(data);
            } else {
                const publicgroupsTableBody = document.querySelector("#" + containerData + " tbody");
                // Borramos los datos antiguos
                publicgroupsTableBody.innerHTML = "";
                data.orders.forEach(info => {
                  const orderPayloadString = info.orderPayload;
            
                  // Convertir el string JSON a un objeto
                  const orderPayload = JSON.parse(orderPayloadString);
                 // console.log(typeof orderPayload);
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
                // código para cuando clientId no es "clientId"
            }
        } catch (error) {
            console.error("Error:", error);
            document.getElementById("loading-container").style.display = "none";
            reject(error);
        }
    });
}

// Llamada a la función con await

async function getClientOrders(data,containerData,containerInfo) {
    try {
        const message = await getClientOrdersPromise(data, containerData, containerInfo);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}