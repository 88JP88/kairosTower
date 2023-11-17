
function profileInfoLog() {
  
    fetch('../controller/profileInfoLog.php')
      .then(response => response.json())
      .then(data => {
        // Aquí obtienes los nuevos valores de las variables PHP en el objeto "data"
        // Puedes acceder a los valores como data.mensaje y data.error
        // Por ejemplo:
        var name = data.name;
        var lastName = data.lastName;
        
        var sessionCounter = data.sessionCounter;
        var bgColor = data.bgColor;
        var txtColor = data.txtColor;
        var imgIcon = data.imgIcon;
        var imgGif = data.imgGif;
        var imgLogo = data.imgLogo;
        
        
  
  
        sessionStorage.setItem('sessionCounter',sessionCounter);
      sessionStorage.setItem('name',name);
      sessionStorage.setItem('lastName',lastName);
      sessionStorage.setItem('bgColor','#'+bgColor);
      sessionStorage.setItem('txtColor','#'+txtColor);
      sessionStorage.setItem('imgIcon',imgIcon);
      sessionStorage.setItem('imgGif',imgGif);
      sessionStorage.setItem('imgLogo',imgLogo);
  
      actualizarCampos();
        
  //console.log("ecee");
       
       
  
      })
      .catch(error => {
        console.error('Error al obtener las variables PHP:', error);
      
  console.log(data.name);
      });
  }