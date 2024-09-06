document.querySelector("#sign").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});


document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-container');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartIcon = document.getElementById('icon');
  const closeCartBtn = document.getElementById('close-cart');
  
  let cart = [];

  cartIcon.addEventListener('click', () => {
      cartContainer.classList.toggle('hidden');
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
          const card = button.closest('.card');
          const title = card.querySelector('.card-title').innerText;
          const price = 300; 
          const weight = card.querySelector('.weight-select').value;
          const item = {
              title,
              price,
              weight
          };
          addToCart(item);
      });
  });

  function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>${item.title} </div>
            <div>&#8377 ${item.price} x ${item.quantity}</div>
            <button class="remove-item" data-index="${index}">X</button>
        `;
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            removeItem(index);
        });
        cartItems.appendChild(cartItem);
    });
    cartTotal.innerHTML = `Total: &#8377 ${total}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

  function addToCart(item) {
      const existingItem = cart.find(cartItem => cartItem.title === item.title && cartItem.weight === item.weight);
      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          item.quantity = 1;
          cart.push(item);
      }
      updateCart();
  }

 


  function toggleCart() {
      cartContainer.classList.toggle('hidden');
  }

  closeCartBtn.addEventListener('click', toggleCart);



  document.querySelector("#b").addEventListener("click", function(event) {
    event.preventDefault();
    searchProduct();
});

function searchProduct() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


});

// Script.js 
document.querySelector("#contac").addEventListener("click", function() {
    document.querySelector("#wrap").classList.add("active");
});

document.querySelector("#closed").addEventListener("click", function() {
    document.querySelector("#wrap").classList.remove("active");
});

function validate() { 
    let name = document.getElementById("name").value; 
    let subject = document.getElementById("subject").value; 
    let phone = document.getElementById("phone").value; 
    let email = document.getElementById("email").value; 
    let message = document.getElementById("message").value; 
    let error_message = document.getElementById("error_message"); 

    error_message.style.padding = "10px"; 

    let errors = []; 

    if (name.length < 5) { 
        errors.push("Please Enter a valid Name");
    } 
    if (subject.length < 10) { 
        errors.push("Please Enter a Correct Subject");
    } 
    if (isNaN(phone) || phone.length != 10) { 
        errors.push("Please Enter a valid Phone Number");
    } 
    if (email.indexOf("@") == -1 || email.length < 6) { 
        errors.push("Please Enter a valid Email");
    } 
    if (message.length <= 40) { 
        errors.push("Please Enter More Than 40 Characters");
    } 

    if (errors.length > 0) { 
        error_message.innerHTML = errors.join("<br>"); 
        return false;
    } else { 
        alert("Form Submitted Successfully!"); 
        return true;
    }
}
  
