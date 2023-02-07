// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(string) {
  let countedLetters = {};

  for (let letter of string) {
    if (letter !== ' ') { // filter out the space ... continue
      if (countedLetters[letter]) {
        countedLetters[letter] += 1;
      } else {
        countedLetters[letter] = 1;
      }
    }
  }
  return countedLetters;
};





// TEST CODES
console.log(countLetters('lighthouse in the house labs'));