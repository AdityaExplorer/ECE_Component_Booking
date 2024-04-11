function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ productName, price });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');


};