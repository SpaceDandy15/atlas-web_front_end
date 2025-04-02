function countPrimeNumbers() {
    let primeCount = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        primeCount++;
      }
    }
    return primeCount;
  }
  
  function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  const startTime = performance.now();
  
  // Execute countPrimeNumbers 100 times
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  
  const endTime = performance.now();
  
  const timeTaken = endTime - startTime;
  
  console.log(`Execution time of calculating prime numbers 100 times was ${timeTaken} milliseconds.`);
  