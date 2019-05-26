
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Time Complexity - O(n)
function factorialIterative(num) {
  let total = 1;
  for (let i = num; i > 1; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
