function checkPalindrome(inputString) {
  const reversedString = inputString.split('').reverse().join('');
  return inputString === reversedString;
}
