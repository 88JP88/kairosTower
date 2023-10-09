
		

 
// Función para obtener los datos del API
async function getInternalClients() {
 
 //const my_profyle = sessionStorage.getItem("profileId");
 //const subdominiopagesmodelshislogs = "https://dev-koiosgateway.lugma.tech/koiosGateway/apiCore/v1/getMySessions/317Mi5bpB2rvGy6K481x/93q89NnAwIUNiOn2mOl5DqbC8/${my_profyle}/${param}";

   const subInternalClients = `${subDomain}/kairosGateway/apiCore/v1/getInternalClients/${ranCodetask} ${apiKeytask}/`;

   fetch(subInternalClients)
  
 .then(response => response.json())
 .then(data => {
   const publicgroupsTableBody = document.querySelector("#tableInternalClients tbody");
   // Borramos los datos antiguos
   publicgroupsTableBody.innerHTML = "";
   data.clients.forEach(schedule => {
     const row = document.createElement("tr");
     row.innerHTML = `
    
   
     <td><button onclick="editarStatusPTask(this,&quot;${schedule.clientId}&quot;,&quot;del&quot;)" class="btn btn-primary1">Remover</button></td>
     <td>${schedule.clientId}</td>
     <td>${schedule.clientName}</td>
     <td>${schedule.comments}</td>
     <td>${schedule.clientType}</td>
     <td>${schedule.name} ${schedule.lastName}</td>
     <td>${schedule.email} / ${schedule.contact}</td>
     
     <td>${schedule.status}</td>
     <td>${schedule.isActive}</td>
     <td>${schedule.key}</td>
       
      
       
     `;

     
     

     publicgroupsTableBody.appendChild(row);
   });
 })
 .catch(error => {
   console.error("Error:", error);
 });



}

// Llamar a la función para obtener los datos del API
//getPagesAssignModelsHislogs();



