
<div class="container">

  <div id="copias" class="email-section" style="text-align: center;">
    <h2>API's LIBRES</h2>
    <div class="forum-post                                         ">
    <p title="Permite una busqueda directa sin interfaz o la integración en distintos sistemas."><h4><i>Obtener repositorios públicos:</i></h4> <a href="https://dev-koiosgateway.lugma.tech/koiosGateway/apiIntegrations/v1/getReposFree/{TU_PARAMETRO}/" target="_blank">https://dev-koiosgateway.lugma.tech/koiosGateway/apiIntegrations/v1/getReposFree/<b>{TU_PARAMETRO}</b>/</a> <h6>Debes reemplazar <b>{TU_PARAMETRO}</b> por una palabra clave para la bsqueda del repositorio, ejemplo:<i> https://dev-koiosgateway.lugma.tech/koiosGateway/apiIntegrations/v1/getReposFree/<b>palabras de busqueda</b>/</i>. Te retornará un formato como el siguiente -></h6>
    <b>  <pre>
{"<i>repos</i>": [{
     "repoId": "",
      "ownerId": "",
      "isPublic": "",
      "repoName": "",
      "comments": "",
      "content": "",
      "links": "",
      "repoType": "",
      "repoVersion": "",
      "userName": ""
    }]}
    </pre></b></p>

  </div>
    <p title="Permite una busqueda directa sin interfaz o la integración en distintos sistemas."><h4><i>Obtener grupos públicos:</i></h4> <a href="https://dev-koiosgateway.lugma.tech/koiosGateway/apiIntegrations/v1/getGroupsFree/" target="_blank">https://dev-koiosgateway.lugma.tech/koiosGateway/apiIntegrations/v1/getGroupsFree/</a> <h6>Con este endpoint visualizaras los grupos públicos creados en el sistema</h6></p>
   
    
    <p>Contenido del Copia...111</p>
    <p>Contenido del Copia...111</p>
    <p>Contenido del Copia...111</p>
    <p>Contenido del Copia...111</p>
    <p>Contenido del Copia...111</p>
  </div>
<div>



<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 9999;
    animation: slideIn 8s forwards, slideOut 10s forwards;
}
.notification.error {
    background-color: #f44336;
}
@keyframes slideIn {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    80% {
        transform: translateX(-10%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slideOut {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}


.container {
  margin: 20px;
}

.forum-post {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
}

.forum-post h2 {
  margin-top: 0;
}

.post-info {
  color: #666;
  font-size: 14px;
}

.post-content {
  margin-top: 10px;
}
.post-content {
    display: none;
  }
  .expanded {
    display: block;
  }

</style>