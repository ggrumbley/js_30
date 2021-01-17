export const validAnagram = (str1, str2) => {
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
