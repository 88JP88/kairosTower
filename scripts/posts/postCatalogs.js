
document.getElementById("postCatalogbtn").addEventListener("click", function() {
  // Obtén los valores de los campos
  var product = document.getElementById("list-productListstadd").value;
  var category = document.getElementById("list-categoryListstadd").value;
  var stock = document.getElementById("cstock").value;
  var sstock = document.getElementById("cstocks").value;
  var minqty = document.getElementById("cminqty").value;
  var maxqty = document.getElementById("cmaxqty").value;
  var store = document.getElementById("list-storeListstadd").value;
  var outprice = document.getElementById("coutprice").value;
  var promo = document.getElementById("cpromo").value;
  var discount = document.getElementById("cdiscount").value;
  var unidad = document.getElementById("list-unidad").value;
  var unidadcal = document.getElementById("list-unidadcalculo").value;
  var unitqty = document.getElementById("cunitqty").value;
  var unitunit = document.getElementById("list-unitunit").value;
  
var clientIdNow=sessionStorage.getItem('clientNow');

  // Construye la URL para la solicitud GET
  var url = "controller/postCatalog.php?" +
            "clientId=" + encodeURIComponent(clientIdNow) +
            "&productId=" + encodeURIComponent(product) +
            "&categoryId=" + encodeURIComponent(category) +
            "&stock=" + encodeURIComponent(stock)+
            "&secStock=" + encodeURIComponent(sstock)+
            "&minQty=" + encodeURIComponent(minqty)+
            "&maxQty=" + encodeURIComponent(maxqty)+
            "&storeId=" + encodeURIComponent(store)+
            "&outPrice=" + encodeURIComponent(outprice)+
            "&promoId=" + encodeURIComponent(promo)+
            "&discount=" + encodeURIComponent(discount)+
            "&unit=" + encodeURIComponent(unidad)+
            "&readUnit=" + encodeURIComponent(unidadcal)+
            "&unitQty=" + encodeURIComponent(unitqty)+
            "&unitUnit=" + encodeURIComponent(unitunit);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página
      
    
      getMessage();
      
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
});


