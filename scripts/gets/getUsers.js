



async function getGeneralUsersPromise(data, containerData, containerInfo) {
    return new Promise(async (resolve, reject) => {
        try {
document.getElementById("loading-container").style.display = "flex";
// 1. Crear un contenedor para el botón

const buttonContainer = document.getElementById("containerBtn");
  if (buttonContainer) {
    buttonContainer.innerHTML = '';
  }

// 2. Crear el botón dentro del contenedor
const button = document.createElement("button");
button.type = "button";
button.classList.add("btn", "btn-primary1", "edit-button1");
button.setAttribute("style", "color: #C70039;");
button.setAttribute("title", "VER USUARIOS ACTIVOS");
button.innerHTML = '<i class="fas fa-eye"></i>';

// Agregar el evento onclick para ejecutar las funciones
button.onclick = function() {
  createTable('tableGeneralUsers','containerGeneralUsersData', [
    'Acciones',
    'Id',
    'Usuario',
    'Nombre',
    'Contacto',
    'Correo',
    'Rol',
    'Activo'
  ]);
  getApiData(getGeneralUsers, {
    'apiService':'apiCore',
    'apiVersion':'v1',
    'endPoint':'getGeneralUsers'
  }, {
    'containerData':'tableGeneralUsers',
    'containerInfo':'containerGeneralUsersInfo'
  }, {
    'filter':'all',
    'param':'unlock',
    'value':'all'
  });
};

// 3. Agregar el contenedor con el botón al DOM
buttonContainer.appendChild(button);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad

const button1 = document.createElement("button");
button1.type = "button";
button1.classList.add("btn", "btn-primary1", "edit-button1");
button1.setAttribute("style", "color: #C70039;");
button1.setAttribute("title", "VER USUARIOS INACTIVOS");
button1.innerHTML = '<i class="fas fa-eye-slash"></i>';

button1.onclick = function() {
    createTable('tableGeneralUsers','containerGeneralUsersData', [
      'Acciones',
      'Id',
      'Usuario',
      'Nombre',
      'Contacto',
      'Correo',
      'Rol',
      'Activo'
    ]);
    getApiData(getGeneralUsers, {
      'apiService':'apiCore',
      'apiVersion':'v1',
      'endPoint':'getGeneralUsers'
    }, {
      'containerData':'tableGeneralUsers',
      'containerInfo':'containerGeneralUsersInfo'
    }, {
      'filter':'all',
      'param':'lock',
      'value':'all'
    });
  };
  buttonContainer.appendChild(button1);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad

const button2 = document.createElement("button");
button2.type = "button";
button2.classList.add("btn", "btn-primary1", "edit-button1");
button2.setAttribute("style", "color: #C70039;");
button2.setAttribute("title", "CREAR USUARIO INTERNO");
button2.innerHTML = '<i class="fas fa-user-plus"></i>';

button2.onclick = function() {
    openModCreateUser();
    getInternalClientsList();
  };
  buttonContainer.appendChild(button2);
document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad


if (data.response && data.response.response == "true") {







    if(data.response.sentData.param=="unlock"){
  
        const cardContainer11 = document.querySelector("#"+containerData+" tbody");
        const cardContainer11Info = document.getElementById(containerInfo);
        cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
        cardContainer11Info.innerHTML = ""; 
        
        const card11Info = document.createElement("div");
        card11Info.classList.add("card");
        
            card11Info.innerHTML = ` <p><H2>USUARIOS GENERALES</H2></p><p>${data.response.apiMessage}</p>`;
            cardContainer11Info.appendChild(card11Info);
      data.users.forEach(info => {
        const row = document.createElement("tr");
        row.innerHTML = `
       
      
      
        <td>
        <div class="edit-container"><button onclick="editGenUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;0&quot;)" class="btn btn-primary1 edit-button" title="BLOQUEAR"><i class="fas fa-ban"></i></button></div></td>
        <td>${info.userId}</td>
        <td>${info.userName}</td>
        <td>${info.name} ${info.lastName}</td>
        <td>${info.contact}</td>
        <td>${info.email}</td>
        <td>${info.rolId}</td>
        <td><div class="edit-container"><input type="text" class="form-control label-input" id="${info.userId}" value="${info.isActive}"> <button onclick="editGenUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
          
          
        `;
  
        cardContainer11.appendChild(row);
      });
      document.getElementById("loading-container").style.display = "none";
   
  
  
  
      
    }
    if(data.response.sentData.param=="lock"){
  
        const cardContainer11 = document.querySelector("#"+containerData+" tbody");
        const cardContainer11Info = document.getElementById(containerInfo);
        cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
        cardContainer11Info.innerHTML = ""; 
        
        const card11Info = document.createElement("div");
        card11Info.classList.add("card");
            card11Info.innerHTML = ` <p><H2>USUARIOS GENERALES</H2></p><p>${data.response.apiMessage}</p>`;
            cardContainer11Info.appendChild(card11Info);
      data.users.forEach(info => {
        const row = document.createElement("tr");
        row.innerHTML = `
       
        <td><button onclick="editGenUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;1&quot;)" class="btn btn-primary1 edit-button" title="DESBLOQUEAR"><i class="fas fa-check"></i></button>
        <button onclick="editGenUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR"><i class="fas fa-trash"></i></button>
      </td>
      
        <td>${info.userId}</td>
        <td>${info.userName}</td>
        <td>${info.name} ${info.lastName}</td>
        <td>${info.contact}</td>
        <td>${info.email}</td>
        <td>${info.rolId}</td>
        <td><div class="edit-container"><input type="text" class="form-control label-input" id="${info.userId}" value="${info.isActive}"> <button onclick="editGenUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button1" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
         
          
        `;
  
        cardContainer11.appendChild(row);
      });
      document.getElementById("loading-container").style.display = "none";
   
  
    }
    resolve("Usuarios obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

}
else {
  // Manejar el caso donde la respuesta no es 'true'
  const cardContainer11 = document.getElementById(containerData);
  cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
  const cardContainer11Info = document.getElementById(containerInfo);

  cardContainer11Info.innerHTML = ""; 
  const card11Info = document.createElement("div");
  card11Info.classList.add("card");
      card11Info.innerHTML = `<p><H2>USUARIOS GENERALES</H2></p> <p>${data.response.apiMessage}</p>
      <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
      cardContainer11Info.appendChild(card11Info);

 
  //console.error("La respuesta no es 'true' "+data.response.response);
  document.getElementById("loading-container").style.display = "none";
}
} catch(error) {
    console.error("Error:", error);
    document.getElementById("loading-container").style.display = "none";
    reject(error); // Rechaza la promesa si hay un error
}
});
     }
     


     async function getGeneralUsers(data, containerData, containerInfo) {
        try {
            const message = await getGeneralUsersPromise(data, containerData, containerInfo);
            console.log(message); // Manejar el mensaje de éxito
        } catch (error) {
            console.error(error); // Manejar el error
        }
    }






    async function getInternalUsersPromise(data, containerData, containerInfo) {
        return new Promise(async (resolve, reject) => {
            try {
    document.getElementById("loading-container").style.display = "flex";
    

    const buttonContainer = document.getElementById("containerBtn");
    if (buttonContainer) {
      buttonContainer.innerHTML = '';
    }


  // 2. Crear el botón dentro del contenedor
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "btn-primary1", "edit-button1");
  button.setAttribute("style", "color: #C70039;");
  button.setAttribute("title", "VER USUARIOS ACTIVOS");
  button.innerHTML = '<i class="fas fa-eye"></i>';
  
  // Agregar el evento onclick para ejecutar las funciones
  button.onclick = function() {
    createTable('tableGeneralUsers','containerGeneralUsersData', [
      'Acciones',
      'Id',
      'Usuario',
      'Nombre',
      'Contacto',
      'Correo',
      'Rol',
      'Activo'
    ]);
    getApiData(getInternalUsers, {
      'apiService':'apiCore',
      'apiVersion':'v1',
      'endPoint':'getInternalUsers'
    }, {
      'containerData':'tableGeneralUsers',
      'containerInfo':'containerGeneralUsersInfo'
    }, {
      'filter':'unlock',
      'param':'unlock',
      'value':'all'
    });
  };
  
  // 3. Agregar el contenedor con el botón al DOM
  buttonContainer.appendChild(button);
  document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad
  
  const button1 = document.createElement("button");
  button1.type = "button";
  button1.classList.add("btn", "btn-primary1", "edit-button1");
  button1.setAttribute("style", "color: #C70039;");
  button1.setAttribute("title", "VER USUARIOS INACTIVOS");
  button1.innerHTML = '<i class="fas fa-eye-slash"></i>';
  
  button1.onclick = function() {
      createTable('tableGeneralUsers','containerGeneralUsersData', [
        'Acciones',
        'Id',
        'Usuario',
        'Nombre',
        'Contacto',
        'Correo',
        'Rol',
        'Activo'
      ]);
      getApiData(getInternalUsers, {
        'apiService':'apiCore',
        'apiVersion':'v1',
        'endPoint':'getInternalUsers'
      }, {
        'containerData':'tableGeneralUsers',
        'containerInfo':'containerGeneralUsersInfo'
      }, {
        'filter':'lock',
        'param':'lock',
        'value':'all'
      });
    };
    buttonContainer.appendChild(button1);
  document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad
  
  const button2 = document.createElement("button");
  button2.type = "button";
  button2.classList.add("btn", "btn-primary1", "edit-button1");
  button2.setAttribute("style", "color: #C70039;");
  button2.setAttribute("title", "CREAR USUARIO INTERNO");
  button2.innerHTML = '<i class="fas fa-user-plus"></i>';
  
  button2.onclick = function() {
    openModCreateUser();
      //getInternalClientsList();
    };
    buttonContainer.appendChild(button2);
  document.body.appendChild(buttonContainer); // Puedes ajustar el contenedor según tu necesidad
  





    if (data.response && data.response.response == "true") {
        if(data.response.sentData.param=="unlock"){
      
            const cardContainer11 = document.querySelector("#"+containerData+" tbody");
            const cardContainer11Info = document.getElementById(containerInfo);
            cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
            cardContainer11Info.innerHTML = ""; 
            
            const card11Info = document.createElement("div");
            card11Info.classList.add("card");
                card11Info.innerHTML = ` <p><H2>USUARIOS INTERNOS</H2></p><p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);
          data.users.forEach(info => {
            const row = document.createElement("tr");
            row.innerHTML = `
           
          
            <td><button onclick="editIntUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;0&quot;)" class="btn btn-primary1 edit-button" title="BLOQUEAR"><i class="fas fa-ban"></i></button></td>
            <td>${info.userId}</td>
            <td>${info.userName}</td>
            <td>${info.name} ${info.lastName}</td>
            <td>${info.contact}</td>
            <td>${info.email}</td>
            <td>${info.rolId}</td>
            <td>
            <div class="edit-container"><input type="text" class="form-control label-input" id="${info.userId}" value="${info.isActive}"><button onclick="editIntUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
              
              
            `;
      
            cardContainer11.appendChild(row);
          });
          document.getElementById("loading-container").style.display = "none";
       
      
      
      
          
        }
        if(data.response.sentData.param=="lock"){
      
            const cardContainer11 = document.querySelector("#"+containerData+" tbody");
            const cardContainer11Info = document.getElementById(containerInfo);
            cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
            cardContainer11Info.innerHTML = ""; 
            
            const card11Info = document.createElement("div");
            card11Info.classList.add("card");
                card11Info.innerHTML = ` <p><H2>USUARIOS GENERALES</H2></p><p>${data.response.apiMessage}</p>`;
                cardContainer11Info.appendChild(card11Info);
          data.users.forEach(info => {
            const row = document.createElement("tr");
            row.innerHTML = `
           
            <td><button onclick="editIntUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;1&quot;)" class="btn btn-primary1 edit-button" title="DESBLOQUEAR"><i class="fas fa-check"></i></button>
            <button onclick="editIntUserStatus(this,&quot;${info.userId}&quot;,&quot;status&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR"><i class="fas fa-trash"></i></button>
          </td>
          
            <td>${info.userId}</td>
            <td>${info.userName}</td>
            <td>${info.name} ${info.lastName}</td>
            <td>${info.contact}</td>
            <td>${info.email}</td>
            <td>${info.rolId}</td>
            <td>
            <div class="edit-container"><input type="text" class="form-control label-input" id="${info.userId}" value="${info.isActive}"><button onclick="editIntUser(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="EDITAR"><i class="fas fa-edit"></i></button></div></td>
           
              
            `;
      
            cardContainer11.appendChild(row);
          });
          document.getElementById("loading-container").style.display = "none";
      
      
      
      
          
        }
        resolve("Usuarios obtenidos exitosamente: "+data.response.apiMessage); // Resuelve la promesa cuando los catálogos se obtienen correctamente

    }
    else {
      // Manejar el caso donde la respuesta no es 'true'
      const cardContainer11 = document.getElementById(containerData);
      cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
      const cardContainer11Info = document.getElementById(containerInfo);
    
      cardContainer11Info.innerHTML = ""; 
      const card11Info = document.createElement("div");
      card11Info.classList.add("card");
          card11Info.innerHTML = `<p><H2>USUARIOS INTERNOS</H2></p> <p>${data.response.apiMessage}</p>
          <p>El filtro solicitado fue-> FILTRO: ${data.response.sentData.filter}, PARÁMETRO: ${data.response.sentData.param}, VALOR: ${data.response.sentData.value}</p>`;
          cardContainer11Info.appendChild(card11Info);
    
     
      //console.error("La respuesta no es 'true' "+data.response.response);
      document.getElementById("loading-container").style.display = "none";
    }
    } catch(error) {
        console.error("Error:", error);
        document.getElementById("loading-container").style.display = "none";
        reject(error); // Rechaza la promesa si hay un error
    }
    });
         }
         
        
         async function getInternalUsers(data, containerData, containerInfo) {
            try {
                const message = await getInternalUsersPromise(data, containerData, containerInfo);
                console.log(message); // Manejar el mensaje de éxito
            } catch (error) {
                console.error(error); // Manejar el error
            }
        }

async function getInternalUserListPromise(data, containerData, containerInfo) {

   
    
    var reposSelect = document.getElementById(containerData);
    while (reposSelect.firstChild) {
        reposSelect.removeChild(reposSelect.firstChild);
    }

    if (data.users && data.users.length > 0) {
        await Promise.all(data.users.map(info => {
            return new Promise(resolve => {
                const option = document.createElement("option");
                option.value = info.userId+"|"+info.name+" "+info.lastName;
        option.text = info.name+" "+info.lastName;
                reposSelect.add(option);
                resolve();
            });
        }));
        return "Usuarios";
    } else {
        throw new Error("No se encontraron usuarios en los datos proporcionados.");
    }
  
   }


   async function getInternalUserList(data, containerData, containerInfo) {
    try {
        await getInternalUserListPromise(data, containerData, containerInfo);
        //console.log("Operación completada con éxito"); // Manejar el mensaje de éxito
    } catch (error) {
        console.error(error); // Manejar el error
    }
}



async function getGeneralUserListPromise(data, containerData, containerInfo) {

   
    
  var reposSelect = document.getElementById(containerData);
  while (reposSelect.firstChild) {
      reposSelect.removeChild(reposSelect.firstChild);
  }

  if (data.users && data.users.length > 0) {
      await Promise.all(data.users.map(info => {
          return new Promise(resolve => {
              const option = document.createElement("option");
              if(info.clientId==sessionStorage.getItem("clientNow")){
              option.value = info.userId+"|"+info.name+" "+info.lastName;
      option.text = info.name+" "+info.lastName;
              reposSelect.add(option);
          }
              resolve();
          });
      }));
      return "Usuarios";
  } else {
      throw new Error("No se encontraron usuarios en los datos proporcionados.");
  }

 }


 async function getGeneralUserList(data, containerData, containerInfo) {
  try {
      await getGeneralUserListPromise(data, containerData, containerInfo);
      //console.log("Operación completada con éxito"); // Manejar el mensaje de éxito
  } catch (error) {
      console.error(error); // Manejar el error
  }
}