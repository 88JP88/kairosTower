
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