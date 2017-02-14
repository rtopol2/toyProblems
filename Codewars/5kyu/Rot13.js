function rot13(message){
  
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let dict = {};

  // populate dictionary object with key value pairs for constant lookup time
  alphabet.split('').forEach((char, i) => {
    dict[char] = code[i];
    dict[char.toLowerCase()] = code[i].toLowerCase();
  });
  
  return message.split('').map(char => dict[char] ? dict[char] : char).join('');
}