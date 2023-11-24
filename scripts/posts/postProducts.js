
document.getElementById("postProductsbtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  var name = document.getElementById("pName").value;
  var descr = document.getElementById("pDesc").value;
  var ean1 = document.getElementById("pean1").value;
  var ean2 = document.getElementById("pean2").value;
  var sku = document.getElementById("psku").value;
  var ptype = document.getElementById("ptype").value;
  var pvalue = document.getElementById("pvalue").value;
  var pprovider = document.getElementById("pprovider").value;
  var imgurl = document.getElementById("pimageurl").value;
  var pspc = document.getElementById("pspc").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');

  // Construye la URL para la solicitud GET
  var url = "controller/postProduct.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&productName=" + encodeURIComponent(name) +
            "&description=" + encodeURIComponent(descr) +
            "&ean1=" + encodeURIComponent(ean1)+
            "&ean2=" + encodeURIComponent(ean2)+
            "&sku=" + encodeURIComponent(sku)+
            "&productType=" + encodeURIComponent(ptype)+
            "&providerId=" + encodeURIComponent(pprovider)+
            "&imgUrl=" + encodeURIComponent(imgurl)+
            "&techSpef=" + encodeURIComponent(pspc)+
            "&pValue=" + encodeURIComponent(pvalue);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
      document.getElementById("names1").value = "";
      document.getElementById("lastnames156").value = "";
      document.getElementById("lastnames123").value = "";
      document.getElementById("pmail134").value = "";
      document.getElementById("rol1").value = "Selecciona rol";
      document.getElementById("pass11").value = "";
      document.getElementById("pass22").value = "";
      document.getElementById("clientcomments").value = "";
      document.getElementById("clientnames").value = "";
      getMessage();
      
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


