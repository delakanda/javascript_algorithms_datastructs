## NOTES ON COMMON ALGORITHM TERMS

### TIME COMPLEXITY
The amount of time taken by an algorithm to run, as a function of input size

Sometimes there is a time - space complexity trade-off

### Asymptotic notations
Mathematical tooks to represent time and space complexity

 - Big-O Notation for worst case complexity <-------- MOST IMPORTANT AND MOST USED AND ASKED FOR
 - Omega Notation for best case complexity
 - Theta notation for average case complexity

### BIG-O Notation
Describs the complexity of an algorithm using algebraic notations

#### Big-O Time Complexity

##### Quadratic Time Complexity

```
function summation(n) {
  let sum = 0; // <--- RUNS 1 time
  for (let i = 1; i <= n; i++) {
    sum += i; // <---- RUNS n times
  }
  return sum; // <---- RUNS 1 time
}
```

Analysis of the above algorithm => time complexity = n + 2
As n grows, 2 becomes insignificant and n is the worst case scenario

=> Big-O notation of this algorithm is O(n) -> **linear time complexity**

##### Constant Time Complexity

```
function summation(n) {
  return (n * (n+1)) / 2; // <---- RUNS ONCE
}
```

Since the above algorithm runs once, Big-O notation of this is O(1) <--- Constant time

##### Quadratic Time Complexity

```
for(i = 1; i <= n; i++) {
  for(j = 1; j <= i; j++) {
    // code here
  }
}
```
The time complexity here is Quadratic -> O(n^2)
so for a quadratic like 3n^2 + 5n + 1, the less dominant terms are dropped in favor of the worst case scenario: 3n^2 and since n^2 is the most dominant that is selected for the Big-O notation

##### Logarithmic Time Complexity
Input size reduces by half on every iteration -> O(logn) - logarithmic


### SPACE COMPLEXITY
The amount of memory taken by an algorithm to run, as a function of input size

#### CONSTANT SPACE COMPLEXITY
O(1) -> If no extra memory needed in algorithm or amount of memory doesn't depend on input size
e.g : sorting algorithms in which the sorting is done on the array itself and doesn't need another array

#### LINEAR SPACE COMPLEXITY
O(n) -> If space needed grows with proportion to input size

#### LOGARITHMIC SPACE COMPLEXITY
Extra space needed grows, but not at the same rate as input size. The curve will plateau at a point

## JAVASCRIPT ALGORITHM TIME COMPLEXITIES ON DATA STRUCTURES

#### Objects Big-O
- Insert - O(1)
- Remove  - O(1)
- Access - O(1)
- Search for value - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)


#### Arrays Big-O
- Insert / Remove at end of array - O(1)
- Insert / Remove at beginning of array - O(n) <--- this is because the indices have to be shifted to accomodate the newly added item at beginning
- Access item in array using index - O(1)
- Search - O(n)
- push() / pop() - O(1)
- Shift /unshift/ concat / slice/ splice - O(n)
- forEach / map / filter / reduce - O(n)

