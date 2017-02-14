// Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").

function firstNonRepeatingLetter(s) {
  
  let charCount = {}; // object to store index of non-repeating characters
  
  // initially set char to index
  // if char repeats, set to false 
  s.split('').forEach((char, i) => {
    if (charCount[char.toUpperCase()] === undefined && charCount[char.toLowerCase()] === undefined) {
      charCount[char] = i;
    } else {
      charCount[char.toLowerCase()] = false;
      charCount[char.toUpperCase()] = false
    }
  });
  
  // find letter with lowest index
  return Object.keys(charCount).reduce((acc, char) => {
    if (charCount[char] !== false && acc.index > charCount[char]) return { first: char, index: charCount[char]}
    else return acc
  }, {first:'', index:Infinity}).first
}