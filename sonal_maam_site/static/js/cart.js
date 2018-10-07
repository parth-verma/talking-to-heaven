var shoppingCart = {
  aInternal:[],
  aListener: function(val) {},
  set a(val) {
    this.aInternal = val;
    this.aListener(val);
  },
  get a() {
    return this.aInternal;
  },
  registerListener: function(listener) {
    this.aListener = listener;
  }
};

function saveCart(Cart){
    console.log(Cart);
Cookies.set('cart',{cart:Cart});
updateCartCount();
updateTotal();
}
function loadCart(){
shoppingCart.a = Cookies.getJSON('cart').cart || [];
}
function addToCart(prodID, prodName, prodCost){
    var prodQuant = parseInt($('#count-' + prodID.toString()).text());
    var product = {};
    product.id = prodID;
    product.name = prodName;
    product.cost = prodCost;
    product.quantity = prodQuant;
    shoppingCart.a.push(product);
    shoppingCart.a = shoppingCart.a;
    console.log(product);

    return true;
}

function removeFromCart(prodName){
    shoppingCart = shoppingCart.a.filter(function (value, index, arr) {
        return value.name !== prodName
    });
    return true;
}

function updateCartCount(){
    $('.cart-value').text(shoppingCart.aInternal.reduce(function (total, product) {
        return total + product.quantity;
    },0));
}

function updateTotal(){
    for( product in shoppingCart.a){
        var total = product.quantity * product.price;
        $(`#total-${product.id}`).text(total);
    }
}
shoppingCart.registerListener(saveCart);
$(document).ready(
loadCart);