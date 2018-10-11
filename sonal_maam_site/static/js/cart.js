var shoppingCart = {
    aInternal: [],
    aListener: function (val) {
    },
    set a(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get a() {
        return this.aInternal;
    },
    registerListener: function (listener) {
        this.aListener = listener;
    }
};

function saveCart(Cart) {
    Cookies.set('cart', {cart: Cart});
    updateCartCount();
    updateTotal();
}

function loadCart() {
    var cart = Cookies.getJSON('cart');
    if (cart) {
        shoppingCart.a = Cookies.getJSON('cart').cart;
    }
    else {
        shoppingCart.a = [];
    }
}


function addToCart(prodID, prodName, prodCost) {
    var prodQuant = parseInt($('#count-' + prodID.toString()).text());
    var product = {};
    product.id = prodID;
    product.name = prodName;
    product.cost = prodCost;
    product.quantity = prodQuant;
    shoppingCart.a.push(product);
    shoppingCart.a = shoppingCart.a;

    return true;
}

function removeFromCart(prodID) {
    shoppingCart.a = shoppingCart.a.filter(function (value, index, arr) {
        return value.id !== prodID
    });
    $('#item-' + prodID).remove();
    updateCartCount();
    return true;
}

function updateCartCount() {
    var total = shoppingCart.aInternal.reduce(function (total, product) {
        return total + product.quantity;
    }, 0);
    if (total>9){
    $('.cart-value').text('+');}
    else {
        $('.cart-value').text(total);}

}

function updateTotal() {
    shoppingCart.aInternal.forEach(function (product) {
        var total = product.quantity * product.cost;
        $(`#total-${product.id}`).text('$' + total.toFixed(1).toString());
    });

}

function decrementCartItem(prodID) {
    $(`#count-${prodID}`).text(parseInt($(`#count-${prodID}`).text()) - 1);
    if (parseInt($(`#count-${prodID}`).text()) < 0) {
        $(`#count-${id}`).text(1);
    }
    for (let i = 0; i < shoppingCart.a.length; i++) {
        if (shoppingCart.a[i].id === prodID) {
            shoppingCart.a[i].quantity -= 1;
            break;
        }
    }
    saveCart(shoppingCart.aInternal);
    return true;
}

function incrementCartItem(prodID) {
    $(`#count-${prodID}`).text(parseInt($(`#count-${prodID}`).text()) + 1);
    for (let i = 0; i < shoppingCart.a.length; i++) {
        if (shoppingCart.a[i].id === prodID) {
            shoppingCart.a[i].quantity += 1;
            break;
        }
    }
    saveCart(shoppingCart.aInternal);
    return true;
}


function cartSubmit() {
    var url = 'cart';
    var form = $('<form action="' + url + '" method="post">' +
        '<input type="text" name="cart" value="' + encodeURI(JSON.stringify(shoppingCart.a))
        + '" />' +
        '</form>');
    $('body').append(form);
    form.submit();
    return true;

}

shoppingCart.registerListener(saveCart);
$(document).ready(
    loadCart);