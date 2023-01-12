const prompt = require("prompt-sync")({sigint:true});
let str = prompt("Enter a string");
let result = str.split('').reverse().join('');
console.log(`Reverse of ${str} is ${result}`);