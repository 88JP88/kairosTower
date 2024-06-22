

<! DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KAIROS TOWER</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

  
    <link rel="icon" type="image/x-icon" href="public/KAIROS2.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
 
   <!--links fullcalendar-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.6.0/main.css">
     <!--<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js"></script>-->
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.6.0/main.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.6.0/locales-all.js"></script>
    <link rel="stylesheet" href="style/styleSession.php">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
 
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"
>
 




<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
    <img  viewBox="0 0 640 160" fill="none" src="public/KAIROS2.png">

    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navMenu" class="navbar-menu">
    <div class="navbar-start">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
      <i class="fas fa-users"></i>Usuarios
      </a>
      <div class="navbar-dropdown">
          <a class="navbar-item"
          onclick="

             
             
              eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');
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
              getApiData(getGeneralUsers,
                      {
                        'apiService':'apiCore',
                        'apiVersion':'v1',
                        'endPoint':'getGeneralUsers'
                    },
                      {
                        'containerData':'tableGeneralUsers',
                        'containerInfo':'containerGeneralUsersInfo'
                    },
                      {
                        'filter':'all',
                        'param':'unlock',
                        'value':'all'
                    }
                        );
               ">
            Generales
          </a>
          <a class="navbar-item is-selected"
          onclick="
             
              eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');
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
              getApiData(getInternalUsers,
                      {
                        'apiService':'apiCore',
                        'apiVersion':'v1',
                        'endPoint':'getInternalUsers'
                    },
                      {
                        'containerData':'tableGeneralUsers',
                        'containerInfo':'containerGeneralUsersInfo'
                    },
                      {
                        'filter':'unlock',
                        'param':'unlock',
                        'value':'all'
                    }
                        );
              ">
            Internos
          </a>
          
        </div>
</div>
     

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
        <i class="fas fa-users"></i>Clientes
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item"
          onclick="
             
                            eraseContainers('containerGeneralUsersData','containerGeneralUsersInfo');

              createTable('tableInternalClients','containerGeneralUsersData', [
                                'Acciones',
                                'Id',
                                'Cliente',
                                'Comentarios',
                                'Tipo de Cliente',
                                'Responsable',
                                'Contacto',
                                'Activo',
                                'Parámetros'
                            ]);
              getApiData(getInternalClients,
                      {
                        'apiService':'apiCore',
                        'apiVersion':'v1',
                        'endPoint':'getInternalClients'
                    },
                      {
                        'containerData':'tableInternalClients',
                        'containerInfo':'containerGeneralUsersInfo'
                    },
                      {
                        'filter':'unlock',
                        'param':'unlock',
                        'value':'all'
                    }
                        );

              ">
            Generales
          </a>
         
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
      <a class="navbar-item">
        Documentation
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info is-rounded"
          onclick="openModMyProfile('importantes');profileInfoLog();">
            <strong>Perfil</strong>
          </a>
          <a class="button is-light"
          onclick="openModCloseSession();">
            Log out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  </head>

  <body class="box" style="backgroud-color:#2a2b2e;">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>




  <div id="containerGeneralUsersInfo" class="card-container"> 
           <!-- Contenido de la sección expandible -->
           
        </div>
        <div id="containerGeneralUsersData" class="box table-container">
            <!-- Contenido de la sección expandible -->
           

        </div>
       



                     

        
    <script>
     
        function toggleExpandableSection() {
            const expandableSection = document.getElementById("expandable-section");
            if (expandableSection.style.display === "block") {
                expandableSection.style.display = "none";
            } else {
                expandableSection.style.display = "block";
            }
        }
 





        function toggleExpandableSection1() {
            const expandableSection1 = document.getElementById("expandable-section1");
            if (expandableSection1.style.display === "block") {
                expandableSection1.style.display = "none";
            } else {
                expandableSection1.style.display = "block";
            }
        }
   
        function toggleExpandableSection3() {
            const expandableSection1 = document.getElementById("expandable-section3");
            if (expandableSection1.style.display === "block") {
                expandableSection1.style.display = "none";
            } else {
                expandableSection1.style.display = "block";
            }
        }
   
        function toggleExpandableSection4() {
            const expandableSection1 = document.getElementById("expandable-section4");
            if (expandableSection1.style.display === "block") {
                expandableSection1.style.display = "none";
            } else {
                expandableSection1.style.display = "block";
            }
        }
    </script>


    
</body>
</html>

<script  src="scripts/data/credentials.js"></script>
<script  src="scripts/data/endPoints.js"></script>
<script  src="scripts/data/showNotify.js"></script>
<script  src="scripts/gets/messageVariables.js"></script>
<script  src="scripts/gets/getSessionVariables.js"></script>
<script  src="scripts/gets/sessionStatus.js"></script>
<script  src="scripts/gets/profileInfoLog.js"></script>
<script  src="scripts/gets/getMySessions.js"></script>
<script  src="scripts/gets/getUsers.js"></script>
<script  src="scripts/gets/getInternalClients.js"></script>
<script  src="scripts/posts/postFullCalendar.js"></script>
<script  src="scripts/posts/postStores.js"></script>
<script  src="scripts/posts/postAssignRoom.js"></script>
<script  src="scripts/posts/postCatalogs.js"></script>
<script  src="scripts/posts/postCategories.js"></script>
<script  src="scripts/posts/postCustomer.js"></script>
<script  src="scripts/posts/postDelivery.js"></script>
<script  src="scripts/posts/postProducts.js"></script>
<script  src="scripts/gets/main.CreateResources.js"></script>
<script src="qrcodejs/qrcode.min.js"></script>
<script  src="scripts/gets/modal.os.js"></script>
<script  src="scripts/posts/os.postPlaces.js"></script>

<div id="loading-container" class="loading-container">
  <div class="loading-icon"></div>
</div>








<div class="tabs is-centered is-boxed box">
  <ul>
    <li class="is-active" data-tab="pictures">
      <a>
        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li data-tab="music">
      <a>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li data-tab="videos">
      <a>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li data-tab="documents">
      <a>
        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
<div id="pictures" class="tab-content is-active box">
    <h2>Pictures</h2>
    <p>This is the content for the Pictures tab.</p>
</div>

<div id="music" class="tab-content box">
    <h2>Music</h2>
    <p>This is the content for the Music tab.</p>
</div>

<div id="videos" class="tab-content box">
    <h2>Videos</h2>
    <p>This is the content for the Videos tab.</p>
</div>

<div id="documents" class="tab-content box">
    <h2>Documents</h2>
    <p>This is the content for the Documents tab.</p>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs ul li');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      
      const target = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        if (content.id === target) {
          content.classList.add('is-active');
        } else {
          content.classList.remove('is-active');
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Add a click event on each of them
$navbarBurgers.forEach( el => {
  el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

  });
});

});
</script>
<style>
        .tab-content {
            display: none;
        }
        .tab-content.is-active {
            display: block;
        }
    </style>