// Task 1: Available items in the store
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Task 2: Check if Local Storage is available
if (typeof(Storage) === "undefined") {
    alert("Sorry, your browser does not support Web storage. Try again with a better one");
} else {
    // If local storage is supported, create the store and display cart
    createStore();
    displayCart();
}

// Task 3: Function to add an item to the cart (local storage)
function addItemToCart(item) {
    // Save the item in localStorage with the item name as the key and true as the value
    localStorage.setItem(item, true);
    // Update the cart message
    displayCart();
}

// Task 4: Function to create the store (ul with list of items)
function createStore() {
    const storeUl = document.getElementById("store");

    // Loop through availableItems and create list items
    availableItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        // Add event listener to each item to add it to the cart on click
        li.onclick = function() {
            addItemToCart(item);
        };

        // Append the list item to the ul
        storeUl.appendChild(li);
    });
}

// Task 5: Function to display the cart (items in local storage)
function displayCart() {
    const cartMessage = document.getElementById("cart-message");
    const cartItems = Object.keys(localStorage);  // Get all keys (items) from local storage

    if (cartItems.length === 0) {
        cartMessage.textContent = "You have no items in your cart.";
    } else {
        cartMessage.textContent = `You previously had ${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart.`;
    }
}
