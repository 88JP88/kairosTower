function showNotify(mensaje, tipo) {
    const notificacion = document.getElementById('notification');
    const notificacionText = document.getElementById('notificationText');

    notificacionText.textContent = mensaje;
    notificacion.classList.remove('error'); // Remover clase de error (en caso de que esté presente)

    if (tipo === 'error') {
        notificacion.classList.add('error');
        iconType="warning";
    }else{
        iconType="success";

    }
   
  

    // Desaparecer la notificación después de 3 segundos
   

    Swal.fire({
        position: "top-end",
        icon: iconType,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInTopRight
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
      });
}
