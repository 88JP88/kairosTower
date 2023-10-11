
 async function getInternalUsers() {
  
  document.getElementById("loading-container").style.display = "flex";
      fetch(epGetInternalUsers)
     
    .then(response => response.json())
    .then(data => {
      const publicgroupsTableBody = document.querySelector("#tableInternalUsers tbody");
   
      publicgroupsTableBody.innerHTML = "";
      data.users.forEach(info => {
        const row = document.createElement("tr");
        row.innerHTML = `
       
      
        <td><button onclick="editarStatusPTask(this,&quot;${info.userId}&quot;,&quot;del&quot;)" class="btn btn-primary1">Bloquear</button></td>
        <td>${info.userId}</td>
        <td>${info.userName}</td>
        <td>${info.name} ${info.lastName}</td>
        <td>${info.contact}</td>
        <td>${info.email}</td>
        <td>${info.rolId}</td>
        <td><input type="text" class="form-control" id="${info.userId}" value="${info.isActive}"> <button onclick="editar(this,&quot;${info.userId}&quot;,&quot;isActive&quot;)" class="btn btn-primary1">Editar</button></td>
          
          
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
   
  
  