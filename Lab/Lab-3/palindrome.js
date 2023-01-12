const prompt = require("prompt-sync")({sigint:true});
let palindrome= function (num){
    let temp, rev=0, r;
    temp=num;
    while (num!=0) {
        r= num%10;
        rev= rev*10+r;
        num= parseInt(num/10);
    }
    if (rev==temp) {
        console.log(`${temp} is a palindromic number.`);
    }
    else{
        console.log(`${temp} is not a palindromic number.`);
    }
};
let number = prompt("Enter a number");
palindrome(number);