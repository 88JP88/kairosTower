
<div class="container email-section" id="generalUsers" style="text-align: center;">

  <div id="containerBtn" class="card-container">
            <!-- Contenido de la sección expandible -->
        </div>
  
    <div id="containerGeneralUsersInfo" class="card-container"> 
           <!-- Contenido de la sección expandible -->
           
        </div>
        <div id="containerGeneralUsersData" class="card-container">
            <!-- Contenido de la sección expandible -->
           
        </div>
       
       
 
    
  
  
</div>
<script>
    // Función para cambiar la sección activa
    function changeSection(section) {
      // Ocultar todas las secciones
      const sections = document.getElementsByClassName('email-section');
      for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
      }

      // Mostrar la sección seleccionada
      const selectedSection = document.getElementById(section);
      selectedSection.style.display = 'block';

      // Agregar clase "active" al enlace seleccionado
      const links = document.getElementsByTagName('a');
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
      }
     // event.target.classList.add('active');
    }

    // Función para mostrar el formulario de enviar mensaje
    function showForm() {
      const formSection = document.getElementById('form');
      formSection.classList.toggle('show-form');
    }

    
  </script>