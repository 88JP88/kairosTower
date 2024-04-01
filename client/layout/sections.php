



<?php
require_once '../sections/sectionHome.php';
require_once '../sections/sectionTools.php';
require_once '../sections/sectionSchedule.php';
require_once '../sections/sectionSessions.php';

require_once '../sections/sectionInternalClients.php';
require_once '../sections/sectionInternalUsers.php';
require_once '../sections/sectionInternalUsers1.php';
require_once '../sections/sectionRepos.php';

?>




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