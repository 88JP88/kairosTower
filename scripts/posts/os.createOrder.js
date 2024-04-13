

function createOsOrder(tableId) {
    let shoppingCartOS = [];
    // Inicializar el arreglo para el carrito de compras
    shoppingCartOS = [];
tableId=sessionStorage.getItem('siteNow');
    // Verificar si hay elementos seleccionados para esta mesa
    if (selectedItemsByTable[tableId] && Array.isArray(selectedItemsByTable[tableId])) {
        const selectedItems = selectedItemsByTable[tableId];

        // Iterar sobre los elementos seleccionados para esta mesa
        selectedItems.forEach(item => {
            const {
                uniqueId,
                isDiscount
            } = item;

            // Crear el objeto de producto para esta mesa
            const productObj = {
                product:{
                uniqueId,
                isDiscount}
            };

            // Agregar el producto al carrito de compras
            shoppingCartOS.push(productObj);
        });
    }
    var totall={
        'paymentInfo':{
        'total':sessionStorage.getItem('totalFounds'),
        'subTotal':sessionStorage.getItem('subTotalFounds')}
    };
    shoppingCartOS.push(totall);
console.log(JSON.stringify(shoppingCartOS));
    // Devolver el carrito de compras con los productos de la mesa especificada
    return shoppingCartOS;
}
