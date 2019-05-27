function power(num, exp) {
  if (num === 1 || exp === 0) return 1;
  return num * (power(num, exp - 1));
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
