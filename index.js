function isPalindrome(word) {
  // Write your algorithm here
  return word.split("").reverse().join("")===word ? true: false;
  
}

/* 
  Add your pseudocode here
  split and reverse original word

  check if the reversed word is equal to original word
    return true
  if it's not equal
  return false
*/

/*
  Add written explanation of your solution here
  
  Does the word in reverse has the same meaning as the original word? if yes,
  it should return true else false


  



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>',isPalindrome('abba') );

  console.log('Expecting: true');
  console.log('=>',isPalindrome('a') );

  console.log('Expecting: false');
  console.log('=>',isPalindrome('ab') );

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
