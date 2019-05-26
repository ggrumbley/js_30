// Frequency Counter Pattern Example
// My solution - Time Complexity of O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for(let char of str1) {
    const charIndex = str2.indexOf(char);
    if(charIndex >= 0) {
      str2 = str2.slice(0, charIndex) + str2.slice(charIndex + 1);
    } else {
      return false;
    }
  }
  return true;
}


console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
