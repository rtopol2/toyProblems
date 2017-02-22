// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// The order of the permutations doesn't matter.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function permutations(string) {
  let permutations = {};
  function recurse (str, remaining) {
    if (str.length === string.length) permutations[str] = true;
    else {
      for (let i=0; i<remaining.length; i++) {
        recurse(str+remaining[i], remaining.substring(0,i) + remaining.substring(i+1))
      }
    }
  } 
  recurse('', string);
  return Object.keys(permutations);
}