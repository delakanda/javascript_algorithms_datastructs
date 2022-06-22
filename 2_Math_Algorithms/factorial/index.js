//  Problem - Given an integer 'n', find the factorial of that integer
//  The factorial of a non-negative integer 'n', denoted by n!, is the product of all positive integers less than or equal to 'n'

function factorial (n) {
  let product = 1;
  for (i = n; i > 0; i--) {
    product *= i
  }
  return product
}

//  This algorithm has a time complexity of (Big-O) - O(n)

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))