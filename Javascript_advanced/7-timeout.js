console.log("Start of the execution queue");

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");

// Using setTimeout with delay of 0 to log the final code block
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);
