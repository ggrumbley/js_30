function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3)); // 6
console.log(sumRange(4)); // 10
console.log(sumRange(10)); // 55
