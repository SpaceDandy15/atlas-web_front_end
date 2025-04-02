// Function to process payment
function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
  }
  
  // Function to process order
  function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayment(amount); // Call to processPayment
    console.log(`${orderId} has been fully processed`);
  }
  
  // Main part of the code
  console.log("Processing orders");
  
  processOrder(12321, 10.99);
  processOrder(12322, 12.99);
  processOrder(12323, 15.00);
  
  console.log("All the orders have been processed");
  