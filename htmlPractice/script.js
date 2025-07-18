// ques 1
const num = 11;

if(num % 10 === 0){
    console.log("good");
}else{
    console.log("bad");
}

// ques 2
const prompt = require('prompt-sync')();


// let name = prompt("enter name")
// let age = prompt("enter age")
// alert(`user name is ${name} and age is ${age}`) 

// ques 3
let key = 4

switch (key) {
    case 1:
        console.log("jan , fab , mar");
        break;
    case 2:
        console.log("apr , may , june");
        break;
    case 3:
        console.log("july , aug , sept");
        break;
    case 4:
        console.log("oct , nov , dec");
        break;        
    
}

// ques 4

const string = "Aaaaaan"

if(string.includes("A") && string.includes("a") && string.length > 5  ){
    console.log("this string is golden");
}
else{
    console.log("not");
}

// ques 5 
let num1 = 1
let num2 = 2
let num3 = 3

if (num1 > num2 && num1 > num3) {
    console.log(num1 , " is greater");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 , " is greater");
} else if (num3 > num1 && num3 > num2) {
    console.log(num3 , " is greater");
}

// ques 6

let number1 = "32" 
let number2 = "34352" 

let last1 = number1.slice(-1)
let last2 = number2.slice(-1)

if (last1 === last2) {
    console.log('same ');
}

