// Multiple Pointers Pattern

const countUniqueValues = (arr) => new Set(arr).size;

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

function countUnique(arr) {
  if (arr.length === 0) return 0;

  let count = 0;

  arr.forEach((num) => {
    if (arr[count] !== num) {
      count++;
      arr[count] = num;
    }
  });

  return count + 1;
}

console.log(countUnique([1, 1, 1, 1, 1, 2])); // 2
console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUnique([])); // 0
console.log(countUnique([-2, -1, -1, 0, 1])); // 4
