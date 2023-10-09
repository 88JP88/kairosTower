

<main style="display: flex; justify-content: center; align-items: center;">
  

<?php
require_once 'sections/sectionHome.php';
require_once 'sections/sectionTools.php';
require_once 'sections/sectionSchedule.php';
require_once 'sections/sectionSessions.php';
require_once 'sections/sectionPersonalTask.php';
require_once 'sections/sectionInternalUsers.php';
require_once 'sections/sectionPrivateGroups.php';
require_once 'sections/sectionRepos.php';

?>


  <div id="spam" class="email-section" style="text-align: center;">
    <h2>Spam123</h2>
    
    <p>Contenido de los correos spam...</p>
  </div>

  <div id="importantes" class="email-section" style="text-align: center;">
    <h2>Importantes</h2>
    
    <p>Contenido de los correos importantes...</p>
  </div>
  <div id="leidos" class="email-section" style="text-align: center;">
    <h2>Leídos</h2>
    
    <p>Contenido de los correos leídos...</p>
  </div>
  <div id="papelera" class="email-section" style="text-align: center;">
    <h2>Eliminados</h2>
   
    <p>Contenido de los correos eliminados...</p>
  </div>
</main>


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



<script>changeSection('inbox');</script>
<style>
    main {
      padding: 20px;
    }

    .email-section {
      display: none;
    }

    .active {
      font-weight: bold;
    }

    .form-section {
      display: none;
    }

    .show-form {
      display: block;
    }

    .form-input {
      margin-bottom: 10px;
    }

    .form-textarea {
      height: 100px;
      resize: vertical;
      margin-bottom: 10px;
    }
  </style>