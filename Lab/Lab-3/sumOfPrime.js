const prompt = require("prompt-sync")({sigint:true});
const lowerNumber = prompt('Enter lower number: ');
const higherNumber = prompt('Enter higher number: ');
let sum=0;
for (let i = lowerNumber; i <= higherNumber; i++) {
    let c = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            c = 1;
        }
    }
    if (i > 1 && c== 0) {
        sum=sum+i;
    }
}
console.log(`Sum of prime numbers from ${lowerNumber} to ${higherNumber} is ${sum}`);