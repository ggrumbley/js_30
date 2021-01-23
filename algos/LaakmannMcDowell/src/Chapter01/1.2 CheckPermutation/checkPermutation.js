const checkPermutation = (stringOne, stringTwo) => {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) return false;
  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)

    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');

    return sortedStringOne === sortedStringTwo;
};


// Tests
console.log(checkPermutation('aba', 'aab'), true);
console.log(checkPermutation('aba', 'aaba'), false);
console.log(checkPermutation('aba', 'aa'), false);
