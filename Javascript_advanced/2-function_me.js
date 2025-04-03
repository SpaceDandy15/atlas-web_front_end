function welcomeMessage(fullName) {
    return function() {
        console.log(`Welcome ${fullName}`); // Logs the message to the console
        alert(`Welcome ${fullName}`); // Displays an alert
    };
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

// Testing in console:
guillaume(); // Should show an alert with "Welcome Guillaume"
alex();      // Should show an alert with "Welcome Alex"
fred();      // Should show an alert with "Welcome Fred"
