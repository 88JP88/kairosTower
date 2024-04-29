function getVersions(containerData) {

   
    const cardContainer11 = document.getElementById(containerData);

    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas

  
      fetch('versions/versions.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(info => {
        const div2 = document.createElement('div');
        div2.classList.add('card');
        // Agregar la etiqueta y el input al segundo contenedor div
        const row = document.createElement("div");
       
        row.classList.add('card-text');
        row.innerHTML = `
       ${info.versions.currentVersion.versions.isDeprecated===true ? `
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       <b>${info.versions.currentVersion.versions.deprecated}
       </p>
       </div>
       `:
       
       `
       
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       Current Version:  <b>${info.versions.currentVersion.versions.version}${info.versions.currentVersion.versions.semanticLetter} </b>(${info.versions.currentVersion.versions.date})${info.versions.currentVersion.versions.isRelease===true ? ` RELEASE`:``}
       </p>
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       Comments: ${info.versions.currentVersion.versions.isAcumulative===true ? `Acumulative software version, includes: 
       <ul>
                 ${info.versions.currentVersion.versions.acumulativeVersions.map(acumulativeVersion => `<li>${acumulativeVersion.acumulativeVersion.version}</li>`).join('')}
               </ul>
       `:``}
       </p>
       
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       Previous Version:  <b>${info.versions.currentVersion.versions.previusVersion}
       </p>
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       ${info.versions.currentVersion.versions.isUpdated === true ? `Updates: ${info.versions.currentVersion.versions.changes}`:``}
       </p>
       
       
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       ${info.versions.currentVersion.versions.isNewFunction === true ? `New functions: ${info.versions.currentVersion.versions.functions}`:``}
       </p>
       
       
       </div>
       
       `}

        
        `;
       
        div2.appendChild(row);

        console.log(info.versions.currentVersion.versions.version);
        cardContainer11.appendChild(div2);

      });

    })
    .catch(error => {
      console.error("Error:", error);
    });
  
   }



   function getChangelog(containerData) {

   
    const cardContainer11 = document.getElementById(containerData);

    cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas

  
      fetch('versions/versions.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(info => {
        const div2 = document.createElement('div');
        div2.classList.add('mb-3');
        // Agregar la etiqueta y el input al segundo contenedor div
        const row = document.createElement("div");
       
        row.classList.add('card-text');
        row.innerHTML = `
      
       
       ${info.versions.changeLogs.map(changeLog => `${changeLog.changeLog.isDeprecated===true ? `
       
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       <b>${changeLog.changeLog.deprecated}
       </p>
       </div>
       `:
       
       `
       --------------------------------------------------------------------------------
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       Version:  <b>${changeLog.changeLog.version}${changeLog.changeLog.semanticLetter} </b>(${changeLog.changeLog.date})${changeLog.changeLog.isRelease===true ? ` RELEASE`:``}
       </p>
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       Comments: ${changeLog.changeLog.isAcumulative===true ? `Acumulative software version, includes: 
       <ul>
                 ${changeLog.changeLog.acumulativeVersions.map(acumulativeVersion => `<li>${acumulativeVersion.acumulativeVersion.version}</li>`).join('')}
               </ul>
       `:``}
       </p>
       
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       Previous Version:  ${changeLog.changeLog.previusVersion}
       </p>
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       ${changeLog.changeLog.isUpdated === true ? `Updates: ${changeLog.changeLog.changes}`:``}
       </p>
       
       
       </div>
       <div class="edit-container" style="margin-bottom: 10px;">
       <p class="card-text" style="display: inline-block; margin-right: 10px;">
       ${changeLog.changeLog.isNewFunction === true ? `New functions: ${changeLog.changeLog.functions}`:``}
       </p>
       
       
       </div>
       
       `}`).join('')}
       

        
        `;
       
        div2.appendChild(row);

        console.log(info.versions.currentVersion.versions.version);
        cardContainer11.appendChild(div2);

      });

    })
    .catch(error => {
      console.error("Error:", error);
    });
  
   }