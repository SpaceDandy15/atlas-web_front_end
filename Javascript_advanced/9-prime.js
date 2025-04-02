function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  function countPrimeNumbers() {
    let primeCount = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        primeCount++;
      }
    }
    return primeCount;
  }
  
  const startTime = performance.now();
  
  const primeCount = countPrimeNumbers();
  
  const endTime = performance.now();
  
  const timeTaken = endTime - startTime;
  
  console.log(`Number of primes between 2 and 100: ${primeCount}`);
  console.log(`Execution time of printing countPrimeNumbers was ${timeTaken} milliseconds.`);
  