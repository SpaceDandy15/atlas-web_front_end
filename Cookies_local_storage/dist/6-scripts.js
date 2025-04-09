// Array of available items
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Check if sessionStorage is available
if (typeof(Storage) === "undefined") {
  alert("Sorry, your browser does not support Web storage. Try again with a better one");
} else {
  // When the window loads, create the store and display the cart
  window.onload = function() {
    createStore();
    displayCart();
  };

  // Function to add items to the cart and save them in sessionStorage
  function addItemToCart(item) {
    // Store the item in sessionStorage
    sessionStorage.setItem(item, true);
    displayCart(); // Update the cart message after adding an item
  }

  // Function to create the store (UL with list items)
  function createStore() {
    const ul = document.getElementById("store");  // Get the <ul> element by ID

    availableItems.forEach(item => {
      const li = document.createElement("li");  // Create <li> for each item
      li.textContent = item;  // Set text content to the item name
      li.onclick = () => addItemToCart(item);  // Add event listener to each item
      ul.appendChild(li);  // Append <li> to the <ul>
    });
  }

  // Function to display the cart (Number of items in sessionStorage)
  function displayCart() {
    let itemCount = 0;

    // Loop through sessionStorage and count the number of items in the cart
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (sessionStorage.getItem(key) === "true") {
        itemCount++;
      }
    }

    // If there are items in the cart, display the message
    const cartMessageElement = document.getElementById("cart-message");
    if (itemCount > 0) {
      const message = `You previously had ${itemCount} item${itemCount > 1 ? "s" : ""} in your cart.`;
      cartMessageElement.textContent = message;  // Update the message in the cart-message div
    }
  }
}
