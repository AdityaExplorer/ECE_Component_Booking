document.addEventListener("DOMContentLoaded", function() {
    let bookMove = document.getElementById("go_to_Bok_section");
    let bookLink = document.getElementById("book_sec");

    bookMove.addEventListener("click", function(event) {
        event.preventDefault();

        // Scroll to the top smoothly
        bookLink.scrollIntoView({ behavior: "smooth" });
    });
})



   function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ productName, price });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');


  };
    

  const buyBtns = document.querySelectorAll('#buyButton');

buyBtns.forEach(function(buyBtn) {
  buyBtn.addEventListener('click', function() {
    window.location.href = 'cart.html';
  });
});


//   const buttons = document.querySelectorAll(".buttons")

//   buttons.forEach((button)=>{
//    button.addEventListener("click",(e)=>{
//     // console.log(e.target.parentNode.childNodes[1].innerHTML.split(":")[1])
//     console.log(e.target)
//    })
//   })