function isPalindrome(word) {
  // Write your algorithm here
  let wordSplit = word.split("");

  let reserveWord =[];
  wordSplit.map((word) => {
    reserveWord.unshift(word);
  });

  if (word === reserveWord.join("")){
    return true;
  } else { 
    return false;
  }}


/* 
  Add your pseudocode here
*/
//break down the word to letters
//split string into array
//then compare
/*
  Add written explanation of your solution here
*/
//use split method to turn the string to letters
//create new array and insert them with unshit
//then compare the string with reserver word to the original string to get the true or false result

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
