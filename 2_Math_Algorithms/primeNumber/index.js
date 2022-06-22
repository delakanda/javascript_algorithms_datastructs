//  Problem - Given an integer 'n', determine of the number is prime or not
//  A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

function isPrime (n) {
  if(n < 2) return false

  for(let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
} // BIG - O --- O(n)

function isPrimeOptimized (n) {
  if(n < 2) return false

  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
} // BIG - O --- O(sqrt(n))

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(10))
console.log("**************")
console.log(isPrimeOptimized(1))
console.log(isPrimeOptimized(2))
console.log(isPrimeOptimized(4))
console.log(isPrimeOptimized(5))
console.log(isPrimeOptimized(10))