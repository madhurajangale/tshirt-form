function* generatePrimes(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    let number = 2; 
    while (number <= limit) {
        if (isPrime(number)) {
            yield number;
        }
        number++;
    }
}
const primeGenerator = generatePrimes(20);
for (let prime of primeGenerator) {
    console.log(prime); 
}
