var shoppingCart = [];

function addToCart(prodID, prodName, prodCost){
    var prodQuant = parseInt($('#count-' + prodID.toString()).text());
    var product = {};
    product.id = prodID;
    product.name = prodName;
    product.cost = prodCost;
    product.quantity = prodQuant;
    shoppingCart.push(product);
    console.log(product);
    updateCartCount();
    return true;
}

function removeFromCart(prodName){
    shoppingCart = shoppingCart.filter(function (value, index, arr) {
        return value.name !== prodName
    });
    return true;
}

function updateCartCount(){
    $('.cart-value').text(shoppingCart.reduce(function (total, product) {
        return total + product.quantity;
    },0));
}
