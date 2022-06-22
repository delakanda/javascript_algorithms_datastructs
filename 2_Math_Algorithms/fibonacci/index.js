//  Problem - Given the number 'n', find the first 'n' elements of the fibonacci sequence
//  Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones


//  MY SOLUTION
function fibonacci (n) {
  const fib = []

  for (let i = 0; i < n; i++) {
    if(fib.length < 2) {
      fib.push(i)
    } else {
      fib.push( (fib[i-2] + fib[i-1]) )
    }
  }

  return fib
}


//  TEACHER's SOLUTION
function fibonacci_instructor (n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

//  This algorithm has a time complexity of (Big-O) - O(n)

console.log(">>>>", fibonacci(0))
console.log(">>>>", fibonacci(1))
console.log(">>>>", fibonacci(2))
console.log(">>>>", fibonacci(3))
console.log(">>>>", fibonacci(5))
console.log(">>>>", fibonacci(7))

console.log(">>>>", fibonacci_instructor(0))
console.log(">>>>", fibonacci_instructor(1))
console.log(">>>>", fibonacci_instructor(2))
console.log(">>>>", fibonacci_instructor(3))
console.log(">>>>", fibonacci_instructor(5))
console.log(">>>>", fibonacci_instructor(7))