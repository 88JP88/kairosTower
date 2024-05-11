


  async function getOrdersOSPromise(data, containerData, containerInfo,modelView) {
    return new Promise(async (resolve, reject) => {
        document.getElementById("loading-container").style.display = "flex";

        var idin = 1;
        try {
            if (data.response && data.response.response == "true") {






              if(modelView=="table"){
               
                const cardContainer11 = document.querySelector("#"+containerData+" tbody");
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                cardContainer11Info.innerHTML = ""; 
                
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                
                    card11Info.innerHTML = ` <p><H4>ORDENES</H4></p><p>${data.response.apiMessage}</p>`;
                    cardContainer11Info.appendChild(card11Info);
           // Crear el primer botón
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.classList.add('btn', 'btn-primary1', 'edit-button1');
    button1.style.color = '#C70039';
    button1.title = 'VER USUARIOS ACTIVOS';
    button1.style.height = '50px'; 
    button1.onclick = function() {
      eraseContainers('containerOSData','containerOSInfo');
      createTable('tableInternalClients2','containerOSData', [
                                'Estado',
                        'Total',
                        'Sub-Total',

                        'Ahorro',
                        'Pago',
                        'Responsable',
                        'Catálogo'
                        ]);
                    getApiData(getOrdersOS,
                      {
                        'apiService':'apiOS',
                        'apiVersion':'v1',
                        'endPoint':'getOrders'
                    },
                      {
                        'containerData':'containerOSData',
                        'containerInfo':'containerOSInfo',
                        'modelView':'table',
                    },
                      {
                        'filter':'all',
                        'param':'all',
                        'value':'all'
                    }
                        );

                        getApiData(getSitesList,
                          {
                            'apiService':'apiOS',
                            'apiVersion':'v1',
                            'endPoint':'getSites'
                        },
                          {
                            'containerData':'OSSelectSiteFilterFilter',
                            'containerInfo':'containerOSInfo',
                            'modelView':'table',
                        },
                          {
                            'filter':'all',
                            'param':'all',
                            'value':'all'
                        }
                            );
                            getApiData(getPlacesList,
                              {
                                'apiService':'apiOS',
                                'apiVersion':'v1',
                                'endPoint':'getPlaces'
                            },
                              {
                                'containerData':'OSSelectPlaceOSFilter',
                                'containerInfo':'containerOSInfo',
                                'modelView':'table',
                            },
                              {
                                'filter':'all',
                                'param':'all',
                                'value':'all'
                            }
                                );
                                getApiData(getEmployeesList,
                                  {
                                    'apiService':'apiOS',
                                    'apiVersion':'v1',
                                    'endPoint':'getEmployees'
                                },
                                  {
                                    'containerData':'OSSelectOwnerOSFilter',
                                    'containerInfo':'containerOSInfo',
                                    'modelView':'table',
                                },
                                  {
                                    'filter':'all',
                                    'param':'all',
                                    'value':'all'
                                }
                                    );

    
    };
    // Crear el icono del primer botón
    const icon1 = document.createElement('i');
    icon1.classList.add('fas', 'fa-globe');
    icon1.style.fontSize = '22px'; // Ajusta el tamaño del icono aquí
    button1.appendChild(icon1);
    
    // Crear el primer contenedor div
    const div1 = document.createElement('div');
    div1.classList.add('mb-3');
    // Agregar la etiqueta y el select al primer contenedor div
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'currency');
    label1.textContent = 'Busqueda por estado de orden';
    div1.appendChild(label1);
    const select = document.createElement('select');
    select.id = 'OSOrdersOSFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'created';
    option2.textContent = 'Creadas';
    const option3 = document.createElement('option');
    option3.value = 'open';
    option3.textContent = 'Abiertas';
    const option4 = document.createElement('option');
    option4.value = 'inProgress';
    option4.textContent = 'En proceso';
    const option5 = document.createElement('option');
    option5.value = 'ready';
    option5.textContent = 'Listas';
    const option6 = document.createElement('option');
    option6.value = 'delivered';
    option6.textContent = 'Entregadas';

    const option7 = document.createElement('option');
    option7.value = 'finished';
    option7.textContent = 'Finalizadas';
    const option8 = document.createElement('option');
    option8.value = 'cancelled';
    option8.textContent = 'Canceladas';
    

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);
    div1.appendChild(select); 
    cardContainer11Info.appendChild(button1);
    cardContainer11Info.appendChild(div1);

     // Crear el segundo botón
     const button2 = document.createElement('button');
     button2.setAttribute('type', 'button');
     button2.classList.add('btn', 'btn-primary1', 'edit-button1');
     button2.style.color = '#C70039';
     button2.title = 'VER USUARIOS INACTIVOS';
     button2.id = 'filtercatalogs';
     button2.style.height = '50px'; 

     // Crear el icono del segundo botón
     const icon2 = document.createElement('i');
     icon2.classList.add('fas', 'fa-filter');
     

     const div2 = document.createElement('div');
     div2.classList.add('mb-3');
     // Agregar la etiqueta y el input al segundo contenedor div
     
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     div1.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSOrdersOSFilter").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
  'Estado',
'Total',
'Sub-Total',

'Ahorro',
'Pago',
'Responsable',
'Catálogo'
]);
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOSData',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'orderStatus',
'param':'all',
'value':param
}
);
getApiData(getSitesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getSites'
},
  {
    'containerData':'OSSelectSiteFilterFilter',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
    getApiData(getPlacesList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getPlaces'
    },
      {
        'containerData':'OSSelectPlaceOSFilter',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );
        getApiData(getEmployeesList,
          {
            'apiService':'apiOS',
            'apiVersion':'v1',
            'endPoint':'getEmployees'
        },
          {
            'containerData':'OSSelectOwnerOSFilter',
            'containerInfo':'containerOSInfo',
            'modelView':'table',
        },
          {
            'filter':'all',
            'param':'all',
            'value':'all'
        }
            );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });




    const div1pro = document.createElement('div');
    div1pro.classList.add('mb-3');

    const labelpro = document.createElement('label');
    labelpro.setAttribute('for', 'currency');
    labelpro.textContent = 'Excluir estado de orden';
    div1pro.appendChild(labelpro);
    const selectpro = document.createElement('select');
    selectpro.id = 'OSOrdersStateOSFilter';
    selectpro.classList.add('form-control');
    selectpro.name = 'currency';
    selectpro.required = true;
   
    const option2pro = document.createElement('option');
    option2pro.value = 'created';
    option2pro.textContent = 'Creadas';
    const option3pro = document.createElement('option');
    option3pro.value = 'open';
    option3pro.textContent = 'Abiertas';
    const option4pro = document.createElement('option');
    option4pro.value = 'inProgress';
    option4pro.textContent = 'En progreso';
    const option5pro = document.createElement('option');
    option5pro.value = 'ready';
    option5pro.textContent = 'Listas';
    const option6pro = document.createElement('option');
    option6pro.value = 'delivered';
    option6pro.textContent = 'Entregadas';

    const option7pro = document.createElement('option');
    option7pro.value = 'finished';
    option7pro.textContent = 'Finalizadas';
    const option8pro = document.createElement('option');
    option8pro.value = 'cancelled';
    option8pro.textContent = 'Canceladas';
    
    
    selectpro.appendChild(option2pro);
    selectpro.appendChild(option3pro);
    selectpro.appendChild(option4pro);
    selectpro.appendChild(option5pro);
    selectpro.appendChild(option6pro);
    selectpro.appendChild(option7pro);
    selectpro.appendChild(option8pro);
    div1pro.appendChild(selectpro); 
    cardContainer11Info.appendChild(div1pro);

     // Crear el segundo botón
     const button3 = document.createElement('button');
     button3.setAttribute('type', 'button');
     button3.classList.add('btn', 'btn-primary1', 'edit-button1');
     button3.style.color = '#C70039';
     button3.title = 'VER USUARIOS INACTIVOS';
     button3.id = 'filtercatalogs';
     button3.style.height = '50px'; 
     // Crear el icono del segundo botón
     const icon2pro = document.createElement('i');
     icon2pro.classList.add('fas', 'fa-filter');
     

     button3.appendChild(icon2pro);
     div1pro.appendChild(button3);




     const div1cat = document.createElement('div');
div1cat.classList.add('mb-3');

const labelcat = document.createElement('label');
labelcat.setAttribute('for', 'currency');
labelcat.textContent = 'Estado de pago';
div1cat.appendChild(labelcat);

const selectcat = document.createElement('select');
selectcat.id = 'OSPaymentStatusOSFilter';
selectcat.classList.add('form-control');
selectcat.name = 'currency';
selectcat.required = true;

const option2cat = document.createElement('option');
option2cat.value = 'unPayed';
option2cat.textContent = 'Sin pagos';

const option3cat = document.createElement('option');
option3cat.value = 'inProgress';
option3cat.textContent = 'En progreso';

const option4cat = document.createElement('option');
option4cat.value = 'payed';
option4cat.textContent = 'Pagos';


selectcat.appendChild(option2cat);
selectcat.appendChild(option3cat);
selectcat.appendChild(option4cat);

div1cat.appendChild(selectcat); 
cardContainer11Info.appendChild(div1cat);
const button4 = document.createElement('button');
button4.setAttribute('type', 'button');
button4.classList.add('btn', 'btn-primary1', 'edit-button1');
button4.style.color = '#C70039';
button4.title = 'VER USUARIOS INACTIVOS';
button4.id = 'filtercatalogs';
button4.style.height = '50px'; 

const icon2cat = document.createElement('i');
icon2cat.classList.add('fas', 'fa-filter');




button4.appendChild(icon2cat);
div1cat.appendChild(button4);







const div1plc = document.createElement('div');
div1plc.classList.add('mb-3');

const labelplc = document.createElement('label');
labelplc.setAttribute('for', 'currency');
labelplc.textContent = 'Excluir estado de pago';
div1plc.appendChild(labelplc);

const selectplc = document.createElement('select');
selectplc.id = 'OSPaymentStatusExcludeOSFilter';
selectplc.classList.add('form-control');
selectplc.name = 'currency';
selectplc.required = true;

const option2plc = document.createElement('option');
option2plc.value = 'unPayed';
option2plc.textContent = 'Sin pagos';

const option3plc = document.createElement('option');
option3plc.value = 'inProgress';
option3plc.textContent = 'En progreso';

const option4plc = document.createElement('option');
option4plc.value = 'payed';
option4plc.textContent = 'Pagos';



selectplc.appendChild(option2plc);
selectplc.appendChild(option3plc);
selectplc.appendChild(option4plc);

div1plc.appendChild(selectplc);
cardContainer11Info.appendChild(div1plc);


const button5 = document.createElement('button');
button5.setAttribute('type', 'button');
button5.classList.add('btn', 'btn-primary1', 'edit-button1');
button5.style.color = '#C70039';
button5.title = 'VER USUARIOS INACTIVOS';
button5.id = 'filtercatalogs';
button5.style.height = '50px'; 
const icon2plc = document.createElement('i');
icon2plc.classList.add('fas', 'fa-filter');



button5.appendChild(icon2plc);
div1plc.appendChild(button5);

     button3.addEventListener('click', function() {
              
      var param = document.getElementById("OSOrdersStateOSFilter").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
  'Estado',
'Total',
'Sub-Total',

'Ahorro',
'Pago',
'Responsable',
'Catálogo'
]);
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOSData',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'orderStatusExcludeOne',
'param':'all',
'value':param
}
);
getApiData(getSitesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getSites'
},
  {
    'containerData':'OSSelectSiteFilterFilter',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
    getApiData(getPlacesList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getPlaces'
    },
      {
        'containerData':'OSSelectPlaceOSFilter',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );
        getApiData(getEmployeesList,
          {
            'apiService':'apiOS',
            'apiVersion':'v1',
            'endPoint':'getEmployees'
        },
          {
            'containerData':'OSSelectOwnerOSFilter',
            'containerInfo':'containerOSInfo',
            'modelView':'table',
        },
          {
            'filter':'all',
            'param':'all',
            'value':'all'
        }
            );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });

    button4.addEventListener('click', function() {
              
      var param = document.getElementById("OSPaymentStatusOSFilter").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
  'Estado',
'Total',
'Sub-Total',

'Ahorro',
'Pago',
'Responsable',
'Catálogo'
]);
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOSData',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'paymentStatus',
'param':'all',
'value':param
}
);
getApiData(getSitesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getSites'
},
  {
    'containerData':'OSSelectSiteFilterFilter',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
    getApiData(getPlacesList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getPlaces'
    },
      {
        'containerData':'OSSelectPlaceOSFilter',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );
        getApiData(getEmployeesList,
          {
            'apiService':'apiOS',
            'apiVersion':'v1',
            'endPoint':'getEmployees'
        },
          {
            'containerData':'OSSelectOwnerOSFilter',
            'containerInfo':'containerOSInfo',
            'modelView':'table',
        },
          {
            'filter':'all',
            'param':'all',
            'value':'all'
        }
            );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });

    button5.addEventListener('click', function() {
              
      var param = document.getElementById("OSPaymentStatusExcludeOSFilter").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
  'Estado',
'Total',
'Sub-Total',

'Ahorro',
'Pago',
'Responsable',
'Catálogo'
]);
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOSData',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'paymentStatusExcludeOne',
'param':'all',
'value':param
}
);
getApiData(getSitesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getSites'
},
  {
    'containerData':'OSSelectSiteFilterFilter',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
    getApiData(getPlacesList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getPlaces'
    },
      {
        'containerData':'OSSelectPlaceOSFilter',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );
        getApiData(getEmployeesList,
          {
            'apiService':'apiOS',
            'apiVersion':'v1',
            'endPoint':'getEmployees'
        },
          {
            'containerData':'OSSelectOwnerOSFilter',
            'containerInfo':'containerOSInfo',
            'modelView':'table',
        },
          {
            'filter':'all',
            'param':'all',
            'value':'all'
        }
            );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });
             

    const div1place = document.createElement('div');
    div1place.classList.add('mb-3');
    
    const labelplace = document.createElement('label');
    labelplace.setAttribute('for', 'currency');
    labelplace.textContent = 'Busqueda por puesto';
    div1place.appendChild(labelplace);
    
const selectSite = document.createElement('select');
selectSite.id = 'OSSelectSiteFilterFilter';
selectSite.classList.add('form-control');
selectSite.name = 'currency';
selectSite.required = true;

div1place.appendChild(selectSite);
cardContainer11Info.appendChild(div1place);



const button6 = document.createElement('button');
button6.setAttribute('type', 'button');
button6.classList.add('btn', 'btn-primary1', 'edit-button1');
button6.style.color = '#C70039';
button6.title = 'VER USUARIOS INACTIVOS';
button6.id = 'filtercatalogs';
button6.style.height = '50px'; 
const icon2sites = document.createElement('i');
icon2sites.classList.add('fas', 'fa-filter');



button6.appendChild(icon2sites);
div1place.appendChild(button6);


button6.addEventListener('click', function() {
              
  var param = document.getElementById("OSSelectSiteFilterFilter").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
'Estado',
'Total',
'Sub-Total',

'Ahorro',
'Pago',
'Responsable',
'Catálogo'
]);
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOSData',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'bySite',
'param':'all',
'value':param
}
);
getApiData(getSitesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getSites'
},
  {
    'containerData':'OSSelectSiteFilterFilter',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
    getApiData(getPlacesList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getPlaces'
    },
      {
        'containerData':'OSSelectPlaceOSFilter',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );
        getApiData(getEmployeesList,
          {
            'apiService':'apiOS',
            'apiVersion':'v1',
            'endPoint':'getEmployees'
        },
          {
            'containerData':'OSSelectOwnerOSFilter',
            'containerInfo':'containerOSInfo',
            'modelView':'table',
        },
          {
            'filter':'all',
            'param':'all',
            'value':'all'
        }
            );
   // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
  
    // Aquí puedes agregar la funcionalidad que deseas para el botón 2
});




const div1site = document.createElement('div');
div1site.classList.add('mb-3');

const labelsite = document.createElement('label');
labelsite.setAttribute('for', 'currency');
labelsite.textContent = 'Busqueda por tienda';
div1site.appendChild(labelsite);

const selectPlace = document.createElement('select');
selectPlace.id = 'OSSelectPlaceOSFilter';
selectPlace.classList.add('form-control');
selectPlace.name = 'currency';
selectPlace.required = true;

div1site.appendChild(selectPlace);
cardContainer11Info.appendChild(div1site);



const button7 = document.createElement('button');
button7.setAttribute('type', 'button');
button7.classList.add('btn', 'btn-primary1', 'edit-button1');
button7.style.color = '#C70039';
button7.title = 'VER USUARIOS INACTIVOS';
button7.id = 'filtercatalogs';
button7.style.height = '50px'; 
const icon2places = document.createElement('i');
icon2places.classList.add('fas', 'fa-filter');



button7.appendChild(icon2places);
div1site.appendChild(button7);


button7.addEventListener('click', function() {
          
var param = document.getElementById("OSSelectPlaceOSFilter").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
'Estado',
'Total',
'Sub-Total',

'Ahorro',
'Pago',
'Responsable',
'Catálogo'
]);
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOSData',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'byPlace',
'param':'all',
'value':param
}
);
getApiData(getSitesList,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getSites'
},
{
'containerData':'OSSelectSiteFilterFilter',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'all',
'param':'all',
'value':'all'
}
);
getApiData(getPlacesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getPlaces'
},
  {
    'containerData':'OSSelectPlaceOSFilter',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
    getApiData(getEmployeesList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getEmployees'
    },
      {
        'containerData':'OSSelectOwnerOSFilter',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );
// getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);

// Aquí puedes agregar la funcionalidad que deseas para el botón 2
});









const div1Owner = document.createElement('div');
div1Owner.classList.add('mb-3');

const labelowner = document.createElement('label');
labelowner.setAttribute('for', 'currency');
labelowner.textContent = 'Busqueda por asignado';
div1Owner.appendChild(labelowner);

const selectOwner = document.createElement('select');
selectOwner.id = 'OSSelectOwnerOSFilter';
selectOwner.classList.add('form-control');
selectOwner.name = 'currency';
selectOwner.required = true;

div1Owner.appendChild(selectOwner);
cardContainer11Info.appendChild(div1Owner);



const button8 = document.createElement('button');
button8.setAttribute('type', 'button');
button8.classList.add('btn', 'btn-primary1', 'edit-button1');
button8.style.color = '#C70039';
button8.title = 'VER USUARIOS INACTIVOS';
button8.id = 'filtercatalogs';
button8.style.height = '50px'; 
const icon2owner = document.createElement('i');
icon2owner.classList.add('fas', 'fa-filter');



button8.appendChild(icon2owner);
div1Owner.appendChild(button8);


button8.addEventListener('click', function() {
          
var param = document.getElementById("OSSelectOwnerOSFilter").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
'Estado',
'Total',
'Sub-Total',

'Ahorro',
'Pago',
'Responsable',
'Catálogo'
]);
getApiData(getOrdersOS,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getOrders'
},
{
'containerData':'containerOSData',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'byOwner',
'param':'all',
'value':param
}
);
getApiData(getSitesList,
{
'apiService':'apiOS',
'apiVersion':'v1',
'endPoint':'getSites'
},
{
'containerData':'OSSelectSiteFilterFilter',
'containerInfo':'containerOSInfo',
'modelView':'table',
},
{
'filter':'all',
'param':'all',
'value':'all'
}
);
getApiData(getPlacesList,
  {
    'apiService':'apiOS',
    'apiVersion':'v1',
    'endPoint':'getPlaces'
},
  {
    'containerData':'OSSelectPlaceOSFilter',
    'containerInfo':'containerOSInfo',
    'modelView':'table',
},
  {
    'filter':'all',
    'param':'all',
    'value':'all'
}
    );
    getApiData(getEmployeesList,
      {
        'apiService':'apiOS',
        'apiVersion':'v1',
        'endPoint':'getEmployees'
    },
      {
        'containerData':'OSSelectOwnerOSFilter',
        'containerInfo':'containerOSInfo',
        'modelView':'table',
    },
      {
        'filter':'all',
        'param':'all',
        'value':'all'
    }
        );
// getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);

// Aquí puedes agregar la funcionalidad que deseas para el botón 2
});
         
              data.orders.forEach(info => {
               
               
                const row = document.createElement("tr");
                
                const backgroundColor = info.infoOrder.params.isActive === "0" ? "  #cc0007" : "#ffffff";
               // const activo1 = info.infoElement.params.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
                
                row.innerHTML = `
               
              
              
                
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.infoOrder.info.infoOrder.orderStatus.status}
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.infoOrder.info.infoPayload.infoPayment.total}
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.infoOrder.info.infoPayload.infoPayment.subTotal}
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.infoOrder.info.infoPayload.infoPayment.saver}
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.infoOrder.info.infoOrder.paymentStatus.status}
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.infoOrder.info.infoOrder.ownerStatus.name}
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                
                <ul>
                    ${info.infoOrder.info.infoProducts.map(product => `<li><button> Remover</button>${product.product.productName}</li>`).join('')}
                  </ul>
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.siteName}
                </td>
                <td style="background-color: ${backgroundColor};"> <div class="edit-container">
                ${info.placeName}
                </td>
                `;
               
                cardContainer11.appendChild(row);
                
                //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
                //getClientCategoriesList('all','all','all',idin);
               
               // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');
          
             
                idin++;
               
              });
          
             
              
              
          
            }
              

    if(modelView=="tableOS"){
               
      const cardContainer11 = document.querySelector("#"+containerData+" tbody");
      const cardContainer11Info = document.getElementById(containerInfo);
      cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
      cardContainer11Info.innerHTML = ""; 
      
      const card11Info = document.createElement("div");
      card11Info.classList.add("card");
      
          card11Info.innerHTML = ` <p><H4>ORDENES</H4></p><p>${data.response.apiMessage}</p>`;
          cardContainer11Info.appendChild(card11Info);

        let creadas=0;
        let abiertas=0;
        let enprogreso=0;
        let listas=0;
        let entregadas=0;
        let finalizadas=0;
        let canceladas=0;

        var totalValue=0;
        var subTotalValue=0;

        var saveValue=0;

          data.orders.forEach(info => {
     
     
      const row = document.createElement("tr");
      
      const backgroundColor = info.infoOrder.params.isActive === "0" ? "  #cc0007" : "#ffffff";
     // const activo1 = info.infoElement.params.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
     
      row.innerHTML = `
     
    
    
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
     
     
      ${info.infoOrder.info.infoOrder.orderStatus.status=="created"?`${creadas++}<button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;opened&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
     Abrir Orden
      </button> <button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;cancelled&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Cancelar Orden
       </button>`:``}


      ${info.infoOrder.info.infoOrder.orderStatus.status=="opened"?`${abiertas++}<button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;inProgress&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Procesar Orden
       </button> <button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;cancelled&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Cancelar Orden
       </button>`:``}


      ${info.infoOrder.info.infoOrder.orderStatus.status=="inProgress"?`${enprogreso++}<button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;ready&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Orden Lista
       </button> <button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;cancelled&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Cancelar Orden
       </button>`:``}



      ${info.infoOrder.info.infoOrder.orderStatus.status=="ready"?`${listas++}<button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;inProgress&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Procesar Orden
       </button> <button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;delivered&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
       Entregar Orden
        </button> <button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;cancelled&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Cancelar Orden
       </button>`:``}


      ${info.infoOrder.info.infoOrder.orderStatus.status=="delivered"?`${entregadas++}<button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;inProgress&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Procesar Orden
       </button> <button onclick="openModal('OSOrdersVerify');" class="btn btn-primary1 delete-button" title="EDITAR">
       Finalizar Orden
        </button> <button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;cancelled&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Cancelar Orden
       </button>`:``}
      ${info.infoOrder.info.infoOrder.orderStatus.status=="finished"?`${finalizadas++}`:``}
      ${info.infoOrder.info.infoOrder.orderStatus.status=="cancelled"?`${canceladas++}<button onclick="editOSOrder(this,&quot;${info.clientId}&quot;,&quot;${info.orderId}&quot;,&quot;orderStatus&quot;,&quot;created&quot;,&quot;status&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
      Reabrir Orden
       </button>`:``}


     
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.infoOrder.info.infoOrder.orderStatus.status}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.infoOrder.info.infoPayload.infoPayment.total}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.infoOrder.info.infoPayload.infoPayment.subTotal}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.infoOrder.info.infoPayload.infoPayment.saver}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.infoOrder.info.infoOrder.paymentStatus.status}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.infoOrder.info.infoOrder.ownerStatus.name}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.infoOrder.info.infoOrder.customerStatus.name}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      
      <ul>
          ${info.infoOrder.info.infoProducts.map(product => `<li><button> Remover</button>${product.product.productName} ${product.product.qty}</li>`).join('')}
        </ul>
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.siteName}
      </td>
      <td style="background-color: ${backgroundColor};"> <div class="edit-container">
      ${info.placeName}
      </td>
      `;
     
      cardContainer11.appendChild(row);
      
      //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
      //getClientCategoriesList('all','all','all',idin);
     
     // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');

   totalValue=(totalValue)+parseFloat(info.infoOrder.info.infoPayload.infoPayment.total);

   subTotalValue=(subTotalValue)+parseFloat(info.infoOrder.info.infoPayload.infoPayment.subTotal);

   saveValue=(saveValue)+parseFloat(info.infoOrder.info.infoPayload.infoPayment.saver);
   idin++;
     
    });

   
    drawTotalsOnScreen('containerOrdersVerificationInfo',totalValue,subTotalValue,saveValue);
    drawPieChart([['Creadas', creadas], ['Abiertas', abiertas], ['En progreso', enprogreso], ['Listas', listas], ['Entregadas', entregadas],['Finalizadas', finalizadas],['Canceladas', canceladas]], 'chart_div_Orders_os', 'Total de Ordenes','circle');
console.log([['Creadas', creadas], ['Abiertas', abiertas], ['En progreso', enprogreso], ['Listas', listas], ['Entregadas', entregadas],['Finalizadas', finalizadas],['Canceladas', canceladas]]);

  }


              if(modelView=="card"){
                const cardContainer11 = document.getElementById(containerData);
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);

                for (const info of data.delivery) {
                    const card11 = document.createElement("div");
                    card11.classList.add("card");
                    const backgroundColor = info.isActive === "0" ? "#cc0007" : "#ffffff";
                    const activo1 = info.isActive === "0" ? "INACTIVO" : "ACTIVO";
                    const disRulesArray = JSON.parse(info.distanceRules);
                    card11.innerHTML = `
          <div class="card-body" style="background-color: ${backgroundColor};">
          <h5 class="card-title">
          <p class="card-text"> <i class="fas fa-guitar"></i></p>
        
         

      </h5>
      <p class="card-text">Nombre del repartidor:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryName}" title="${info.deliveryName}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      <p class="card-text">Apellido del repartidor:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryLastName}" title="${info.deliveryLastName}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryLastName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      
      
      
     <p class="card-text">
      <div class="edit-container">
      ${info.isActive !== "0" ? `<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
<i class="fas fa-ban"></i>
</button>` 
: `<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
<i class="fas fa-check"></i>
</button>`}${activo1} 

</div>
             
          


      <p class="card-text">Correo:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryMail}" title="${info.customerMail}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryMail&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
      <p class="card-text">Teléfono:
      <div class="edit-container">
<input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryContact}" title="${info.deliveryContact}">
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryContact&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>

      <p class="card-text">Reglas de distancia y tiempo:
      <div class="edit-container">
      <p class="card-text">
      Calle inicio
      <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startStreet']}" title=" ${disRulesArray[0]['distance']['startStreet']}">
    </p>
    </div>
    <p class="card-text"> Cardinalidad inicio
    <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarStreetStart');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

    <!-- Popup -->
    <div id="popCarStreetStart" class="popup">
      <p>NORTE (N)<br>SUR (S)</p>
      <button onclick="closePopup('popCarStreetStart')">Cerrar</button>
    </div>
    <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startLocationStreet']}" title=" ${disRulesArray[0]['distance']['startLocationStreet']}">
  </p>
    <p class="card-text">
    Calle fin
    <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endStreet']}" title=" ${disRulesArray[0]['distance']['endStreet']}">
  </p>
  <p class="card-text">
  Cardinalidad fin
  <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarStreetEnd');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

  <!-- Popup -->
  <div id="popCarStreetEnd" class="popup">
    <p>NORTE (N)<br>SUR (S)</p>
    <button onclick="closePopup('popCarStreetEnd')">Cerrar</button>
  </div>
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endLocationStreet']}" title=" ${disRulesArray[0]['distance']['endLocationStreet']}">
</p>
  <p class="card-text">
  carrera inicio
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startAvenue']}" title=" ${disRulesArray[0]['distance']['startAvenue']}">
</p>
<p class="card-text">
Cardinalidad inicio
<button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarAvenueStart');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

<!-- Popup -->
<div id="popCarAvenueStart" class="popup">
  <p>ESTE (EST)<br>OESTE (OES)</p>
  <button onclick="closePopup('popCarAvenueStart')">Cerrar</button>
</div>
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startLocationAvenue']}" title=" ${disRulesArray[0]['distance']['startLocationAvenue']}">
</p>
<p class="card-text">
Carrera fin
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endAvenue']}" title=" ${disRulesArray[0]['distance']['endAvenue']}">
</p>
<p class="card-text">
Cardinalidad fin
<button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarAvenueEnd');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
   

<!-- Popup -->
<div id="popCarAvenueEnd" class="popup">
<p>ESTE (EST)<br>OESTE (OES)</p>
<button onclick="closePopup('popCarAvenueEnd')">Cerrar</button>
</div>
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endLocationAvenue']}" title=" ${disRulesArray[0]['distance']['endLocationAvenue']}">
</p>

<p class="card-text">
Tiempo inicio
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startTime']}" title=" ${disRulesArray[0]['distance']['startTime']}">
</p>
<p class="card-text">
Cardinalidad fin
<input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endTime']}" title=" ${disRulesArray[0]['distance']['endTime']}">
</p>
<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;customerPhone&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
<i class="fas fa-edit"></i>
</button>
</div>
      </p>
     
      
      <p class="card-text">
      <div class="edit-container">

<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;del&quot;,&quot;data&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
<i class="fas fa-trash"></i>
</button>
</div>
      </p>
              
          </div>
          
      `;

      cardContainer11.appendChild(card11);
   //   getClientCategoriesList3('all','all','all',idin1);
      //getClientStoresList13('all','all','all',idin1);

      idin1++;
                }
              }
                document.getElementById("loading-container").style.display = "none";
                resolve("Repartidores obtenidos exitosamente: " + data.response.apiMessage);
            } else {
                const cardContainer11 = document.getElementById(containerData);
                cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
                const cardContainer11Info = document.getElementById(containerInfo);
                cardContainer11Info.innerHTML = "";
                const card11Info = document.createElement("div");
                card11Info.classList.add("card");
                card11Info.innerHTML = `<p>ORDENES</p><p>${data.response.apiMessage}</p>
                                         <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
                cardContainer11Info.appendChild(card11Info);

    // Crear el primer botón
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.classList.add('btn', 'btn-primary1', 'edit-button1');
    button1.style.color = '#C70039';
    button1.title = 'VER USUARIOS ACTIVOS';
    button1.onclick = function() {
      eraseContainers('containerOSData','containerOSInfo');
      createTable('tableInternalClients2','containerOSData', [
                        'Elemento',
                        'Comentarios',
                        'Puesto',
                        'Tipo'
                    ]);
               getApiData(getElementsOS,
             {
               'apiService':'apiOS',
               'apiVersion':'v1',
               'endPoint':'getElements'
           },
             {
               'containerData':'containerOSData',
               'containerInfo':'containerOSInfo',
               'modelView':'table',
           },
             {
               'filter':'all',
               'param':'all',
               'value':'all'
           }
               );

 

    
    };
    // Crear el icono del primer botón
    const icon1 = document.createElement('i');
    icon1.classList.add('fas', 'fa-globe');
    button1.appendChild(icon1);
    
    // Crear el primer contenedor div
    const div1 = document.createElement('div');
    div1.classList.add('mb-3');
    // Agregar la etiqueta y el select al primer contenedor div
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'currency');
    label1.textContent = 'Busqueda por parámetro';
    div1.appendChild(label1);
    const select = document.createElement('select');
    select.id = 'OSElementsFilter';
    select.classList.add('form-control');
    select.name = 'currency';
    select.required = true;
   
    const option2 = document.createElement('option');
    option2.value = 'name';
    option2.textContent = 'Nombre elemento';
    const option3 = document.createElement('option');
    option3.value = 'comments';
    option3.textContent = 'Comentarios';
    const option4 = document.createElement('option');
    option4.value = 'placeId';
    option4.textContent = 'Ubicación';
    const option5 = document.createElement('option');
    option5.value = 'siteId';
    option5.textContent = 'Puesto';
    const option6 = document.createElement('option');
    option6.value = 'type';
    option6.textContent = 'Tipo de elemento';

    
    
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    div1.appendChild(select); 
    cardContainer11Info.appendChild(button1);
    cardContainer11Info.appendChild(div1);

     // Crear el segundo botón
     const button2 = document.createElement('button');
     button2.setAttribute('type', 'button');
     button2.classList.add('btn', 'btn-primary1', 'edit-button1');
     button2.style.color = '#C70039';
     button2.title = 'VER USUARIOS INACTIVOS';
     button2.id = 'filtercatalogs';
     // Crear el icono del segundo botón
     const icon2 = document.createElement('i');
     icon2.classList.add('fas', 'fa-sort');
     

     const div2 = document.createElement('div');
     div2.classList.add('mb-3');
     // Agregar la etiqueta y el input al segundo contenedor div
     const label2 = document.createElement('label');
     label2.classList.add('form-label');
     label2.innerHTML = '<i class="fas fa-guitar"></i> Parámetro en especifico';
     div2.appendChild(label2);
     const input = document.createElement('input');
     input.setAttribute('type', 'text');
     input.classList.add('form-control');
     input.id = 'OSElementsValue';
     input.placeholder = 'Ingresa palabra a buscar';
     div2.appendChild(input);
     button2.appendChild(icon2);
     cardContainer11Info.appendChild(div2);
     cardContainer11Info.appendChild(button2);


     button2.addEventListener('click', function() {
              
      var param = document.getElementById("OSElementsFilter").value;
var value = document.getElementById("OSElementsValue").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
                  'Elemento',
                  'Comentarios',
                  'Puesto',
                  'Tipo'
              ]);
         getApiData(getElementsOS,
       {
         'apiService':'apiOS',
         'apiVersion':'v1',
         'endPoint':'getElements'
     },
       {
         'containerData':'containerOSData',
         'containerInfo':'containerOSInfo',
         'modelView':'table',
     },
       {
         'filter':'filter',
         'param':param,
         'value':value
     }
         );
       // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
      
        // Aquí puedes agregar la funcionalidad que deseas para el botón 2
    });
                document.getElementById("loading-container").style.display = "none";
                reject("Error al obtener los repartidores: " + data.response.apiMessage);
            }
        } catch (error) {
            document.getElementById("loading-container").style.display = "none";
            reject("Error al procesar los datos: " + error);
        }
    });
}

async function getOrdersOS(data, containerData, containerInfo,modelView) {
    try {
        const message = await getOrdersOSPromise(data, containerData, containerInfo,modelView);
        console.log(message); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}



async function getPlacesListPromise(data, containerData, containerInfo) {
  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
      reposSelect.removeChild(reposSelect.firstChild);
  }

  await Promise.all(data.places.map(info => {
      return new Promise(resolve => {
          const option = document.createElement("option");
          option.value = info.placeId;
          option.text = info.infoPlace.info.name;
          reposSelect.add(option);
          resolve();
      });
  }));

  if (data.categories && data.categories.length > 0) {
      return "Ubicaciones";
  } else {
      throw new Error("No se encontraron categorías en los datos proporcionados.");
  }
}

async function getPlacesList(data, containerData, containerInfo) {
try {
    const message = await getPlacesListPromise(data, containerData, containerInfo);
    // console.log(message); // Manejar el mensaje de éxito
} catch (error) {
    console.error(error); // Manejar el error
}
}









async function getOrdersProductsOSPromise(data, containerData, containerInfo,modelView) {
  return new Promise(async (resolve, reject) => {
      document.getElementById("loading-container").style.display = "flex";

      var idin = 1;
      try {
          






            

  if(modelView=="table"){
             console.log(data);
    const cardContainer11 = document.querySelector("#"+containerData+" tbody");
    const cardContainer11Info = document.getElementById(containerInfo);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    cardContainer11Info.innerHTML = ""; 
    
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
    
        card11Info.innerHTML = ` <p><H4>PRODUCTOS</H4></p>`;
        cardContainer11Info.appendChild(card11Info);

 
        const productsHTML = data.infoOrder.info.infoProducts.map(product => `
        <tr>
            <td style="background-color: ${backgroundColor};">
                <div class="edit-container">
                    <button>${product.product.productName}</button>
                </div>
            </td>
        </tr>
    `).join('');
   
    cardContainer11.innerHTML = productsHTML;
    
    //getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
    //getClientCategoriesList('all','all','all',idin);
   
   // getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');

 
    idin++;
   
  }
    

  if(modelView=="tableOS"){
    console.log(data);
const cardContainer11 = document.querySelector("#"+containerData+" tbody");
const cardContainer11Info = document.getElementById(containerInfo);
cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
cardContainer11Info.innerHTML = ""; 

const card11Info = document.createElement("div");
card11Info.classList.add("card");

card11Info.innerHTML = ` <p><H4>PRODUCTOS</H4></p>`;
cardContainer11Info.appendChild(card11Info);


const productsHTML = data.infoOrder.info.infoProducts.map(product => `
<tr>
   <td style="background-color: ${backgroundColor};">
       <div class="edit-container">
           <button>${product.product.productName}</button>
       </div>
   </td>
</tr>
`).join('');

cardContainer11.innerHTML = productsHTML;

//getApiData(getClientCategoriesList,'apiCom','v1','getCategories','list-categoriesList'+idin,info.categoryId+"|"+info.parentId,'all','all','all');
//getClientCategoriesList('all','all','all',idin);

// getApiData(getClientStoresList,'apiCom','v1','getStores','list-storesListstore'+idin,'containerCustomersInfo','all','all','all');


idin++;

}

 
  
  




              document.getElementById("loading-container").style.display = "none";
              resolve("Repartidores obtenidos exitosamente: " );
       
      } catch (error) {
          document.getElementById("loading-container").style.display = "none";
          reject("Error al procesar los datos: " + error);
      }
  });
}
async function getOrdersProductsOS(data, containerData, containerInfo,modelView) {
  try {
      const message = await getOrdersProductsOSPromise(data, containerData, containerInfo,modelView);
      console.log(message); // Manejar el mensaje de éxito
  } catch (error) {
      console.error(error); // Manejar el error
  }
}





function drawTotalsOnScreen(containerData,total,subtotal,save){


  const cardContainer11 = document.getElementById(containerData);

  cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas

  const div2 = document.createElement('div');
  div2.classList.add('card');
  // Agregar la etiqueta y el input al segundo contenedor div
  const row = document.createElement("div");
 
  row.classList.add('card-text');
  row.innerHTML = `
 
 <div class="edit-container" style="margin-bottom: 10px;">
 <p class="card-text" style="display: inline-block; margin-right: 10px;">
  TOTAL : ${total}
 </p>
 </div>
 <div class="edit-container" style="margin-bottom: 10px;">
 <p class="card-text" style="display: inline-block; margin-right: 10px;">
  SUBTOTAL : ${subtotal}
 </p>
 </div>
 <div class="edit-container" style="margin-bottom: 10px;">
 <p class="card-text" style="display: inline-block; margin-right: 10px;">
  AHORRO : ${save}
 </p>
 </div>
 
 
 

  
  `;
 
  div2.appendChild(row);

  
  cardContainer11.appendChild(div2);

}
















async function getOrdersCalculateOSPromise(data, containerData, containerInfo,modelView) {
  return new Promise(async (resolve, reject) => {
      document.getElementById("loading-container").style.display = "flex";

      var idin = 1;
      try {
          if (data.response && data.response.response == "true") {






           
            

  if(modelView=="table"){
             
    const cardContainer11 = document.querySelector("#"+containerData+" tbody");
    const cardContainer11Info = document.getElementById(containerInfo);
    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
    cardContainer11Info.innerHTML = ""; 
    
    const card11Info = document.createElement("div");
    card11Info.classList.add("card");
    
        card11Info.innerHTML = ` <p><H4>ORDENES</H4></p><p>${data.response.apiMessage}</p>`;
        cardContainer11Info.appendChild(card11Info);

    
        const ordersCalculate = data.ordersCalculate;

        // Crear una fila para mostrar los datos de ordersCalculate
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${ordersCalculate.total}</td>
            <td>${ordersCalculate.subTotal}</td>
            <td>${ordersCalculate.saver}</td>
            <td>${ordersCalculate.saver + ordersCalculate.pointsValue}</td>
            <td>${ordersCalculate.previusTotal}</td>
            <td>${ordersCalculate.productCounter}</td>

            <td>${ordersCalculate.selectCounter}</td>
            <td>${ordersCalculate.pointsValue}</td>
            <td>${ordersCalculate.totalPoints}</td>
            <td>${ordersCalculate.applyPointsTrue}</td>
            <td>${ordersCalculate.applyPointsFalse}</td>
            <td>${ordersCalculate.notApplyPoints}</td>







            <!-- Agrega aquí más columnas si es necesario -->
        `;
        cardContainer11.appendChild(row);
 
 // drawTotalsOnScreen('containerOrdersVerificationInfo',totalValue,subTotalValue,saveValue);
  //drawPieChart([['Creadas', creadas], ['Abiertas', abiertas], ['En progreso', enprogreso], ['Listas', listas], ['Entregadas', entregadas],['Finalizadas', finalizadas],['Canceladas', canceladas]], 'chart_div_Orders_os', 'Total de Ordenes','circle');
//console.log([['Creadas', creadas], ['Abiertas', abiertas], ['En progreso', enprogreso], ['Listas', listas], ['Entregadas', entregadas],['Finalizadas', finalizadas],['Canceladas', canceladas]]);

}


           
              document.getElementById("loading-container").style.display = "none";
              resolve("Repartidores obtenidos exitosamente: " + data.response.apiMessage);
          } else {
              const cardContainer11 = document.getElementById(containerData);
              cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
              const cardContainer11Info = document.getElementById(containerInfo);
              cardContainer11Info.innerHTML = "";
              const card11Info = document.createElement("div");
              card11Info.classList.add("card");
              card11Info.innerHTML = `<p>ORDENES</p><p>${data.response.apiMessage}</p>
                                       <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
              cardContainer11Info.appendChild(card11Info);

  // Crear el primer botón
  const button1 = document.createElement('button');
  button1.setAttribute('type', 'button');
  button1.classList.add('btn', 'btn-primary1', 'edit-button1');
  button1.style.color = '#C70039';
  button1.title = 'VER USUARIOS ACTIVOS';
  button1.onclick = function() {
    eraseContainers('containerOSData','containerOSInfo');
    createTable('tableInternalClients2','containerOSData', [
                      'Elemento',
                      'Comentarios',
                      'Puesto',
                      'Tipo'
                  ]);
             getApiData(getElementsOS,
           {
             'apiService':'apiOS',
             'apiVersion':'v1',
             'endPoint':'getElements'
         },
           {
             'containerData':'containerOSData',
             'containerInfo':'containerOSInfo',
             'modelView':'table',
         },
           {
             'filter':'all',
             'param':'all',
             'value':'all'
         }
             );



  
  };
  // Crear el icono del primer botón
  const icon1 = document.createElement('i');
  icon1.classList.add('fas', 'fa-globe');
  button1.appendChild(icon1);
  
  // Crear el primer contenedor div
  const div1 = document.createElement('div');
  div1.classList.add('mb-3');
  // Agregar la etiqueta y el select al primer contenedor div
  const label1 = document.createElement('label');
  label1.setAttribute('for', 'currency');
  label1.textContent = 'Busqueda por parámetro';
  div1.appendChild(label1);
  const select = document.createElement('select');
  select.id = 'OSElementsFilter';
  select.classList.add('form-control');
  select.name = 'currency';
  select.required = true;
 
  const option2 = document.createElement('option');
  option2.value = 'name';
  option2.textContent = 'Nombre elemento';
  const option3 = document.createElement('option');
  option3.value = 'comments';
  option3.textContent = 'Comentarios';
  const option4 = document.createElement('option');
  option4.value = 'placeId';
  option4.textContent = 'Ubicación';
  const option5 = document.createElement('option');
  option5.value = 'siteId';
  option5.textContent = 'Puesto';
  const option6 = document.createElement('option');
  option6.value = 'type';
  option6.textContent = 'Tipo de elemento';

  
  
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);
  select.appendChild(option5);
  div1.appendChild(select); 
  cardContainer11Info.appendChild(button1);
  cardContainer11Info.appendChild(div1);

   // Crear el segundo botón
   const button2 = document.createElement('button');
   button2.setAttribute('type', 'button');
   button2.classList.add('btn', 'btn-primary1', 'edit-button1');
   button2.style.color = '#C70039';
   button2.title = 'VER USUARIOS INACTIVOS';
   button2.id = 'filtercatalogs';
   // Crear el icono del segundo botón
   const icon2 = document.createElement('i');
   icon2.classList.add('fas', 'fa-sort');
   

   const div2 = document.createElement('div');
   div2.classList.add('mb-3');
   // Agregar la etiqueta y el input al segundo contenedor div
   const label2 = document.createElement('label');
   label2.classList.add('form-label');
   label2.innerHTML = '<i class="fas fa-guitar"></i> Parámetro en especifico';
   div2.appendChild(label2);
   const input = document.createElement('input');
   input.setAttribute('type', 'text');
   input.classList.add('form-control');
   input.id = 'OSElementsValue';
   input.placeholder = 'Ingresa palabra a buscar';
   div2.appendChild(input);
   button2.appendChild(icon2);
   cardContainer11Info.appendChild(div2);
   cardContainer11Info.appendChild(button2);


   button2.addEventListener('click', function() {
            
    var param = document.getElementById("OSElementsFilter").value;
var value = document.getElementById("OSElementsValue").value;
eraseContainers('containerOSData','containerOSInfo');
createTable('tableInternalClients2','containerOSData', [
                'Elemento',
                'Comentarios',
                'Puesto',
                'Tipo'
            ]);
       getApiData(getElementsOS,
     {
       'apiService':'apiOS',
       'apiVersion':'v1',
       'endPoint':'getElements'
   },
     {
       'containerData':'containerOSData',
       'containerInfo':'containerOSInfo',
       'modelView':'table',
   },
     {
       'filter':'filter',
       'param':param,
       'value':value
   }
       );
     // getApiData(getProducts,'apiCom','v1','getProducts','containerProductsData','containerProductsInfo','filter',param,value);
    
      // Aquí puedes agregar la funcionalidad que deseas para el botón 2
  });
              document.getElementById("loading-container").style.display = "none";
              reject("Error al obtener los repartidores: " + data.response.apiMessage);
          }
      } catch (error) {
          document.getElementById("loading-container").style.display = "none";
          reject("Error al procesar los datos: " + error);
      }
  });
}

async function getOrdersCalculateOS(data, containerData, containerInfo,modelView) {
  try {
      const message = await getOrdersCalculateOSPromise(data, containerData, containerInfo,modelView);
      console.log(message); // Manejar el mensaje de éxito
  } catch (error) {
      console.error(error); // Manejar el error
  }
}