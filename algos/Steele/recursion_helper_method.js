function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function collectOddValuesPure(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));

  return newArr;
}
console.log(collectOddValuesPure([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
