let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');
    
    cartItemsContainer.innerHTML = '';

    cartTotal = 0;
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        cartItemsContainer.appendChild(cartItemElement);

        cartTotal += item.price;
    });

    totalElement.textContent = cartTotal.toFixed(2);
}

function checkout() {
    // Aquí puedes implementar la lógica de pago o redirigir a una página de pago.
    
    alert('¡Ingresa el Total en la pasarela de pagos y haz Click en CONTINUAR!');
    
}



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
