const input = require('readline-sync');
let numLetters = input.question('How many letters to shift? ');

let str = "LaunchCode";

let endWord = str.slice(numLetters);
console.log(endWord);


let newWord = str.slice(0,numLetters);
console.log(newWord);

console.log(endWord + newWord);