// Time Complexity - O(n)

const charCount = (str) => {
  let result = {};
  const lowerStr = str.toLowerCase();
  for (let char of lowerStr) {
    result[char] > 0 ? result[char]++ : result[char] = 1;
  }
  return result;
}

console.log(charCount('Hello, I am a fancy lad!'));
