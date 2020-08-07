// Complete the alternatingCharacters function below.
function alternatingCharacters(string) {

  let currentCharacter = '';
  let nextCharacter = '';
  let duplicateCouter = 0;

  // string.forEach((char, index) => {
  //   (char === string[index +1]{
  //     duplicateCouter++
  //   })
  // });

  //  find consecutive duplicate characters in a string

  // for ( let i = 0; i < string.length - 1; i++) {
  //   currentCharacter = string[i];
  //   nextCharacter = string[i + 1]

    // if (currentCharacter === nextCharacter) {
    //   duplicateCouter++
    // }

  //   if (string[i] === string[i + 1]){
  //     duplicateCouter++
  //   }
  // }
  return duplicateCouter;
}
console.log(alternatingCharacters('AAABBB'));