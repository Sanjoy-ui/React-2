const arr = [1,2,3,4,5,6,2,3] // ques 1
const num = 2;

// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === num) {
//     arr.splice(i,1)
//    }
    
// }
const newArr = arr.filter((item )=> {
    if (item !== num ) {
        return item
    }
} )
// console.log(newArr);

// ques 2

let nums = 1246123456788907;

let numsinString = String(nums)

const count = numsinString.length

// console.log(count);

// ques 3
let number = 0 ;

for (let i = 0; i < numsinString.length; i++) {
  
   number += Number(numsinString[i])
  
   
    
}

// console.log(number);

// ques 4

const fac = 5;

let factorial = 1;
for (let i = fac ; i >=  1 ; i--) {
  factorial *= i
    
}
// console.log(factorial);


// ques 5
const largestNumsInArr = [1,2,3,4,50,6,7,8];
let largest = 0 ;

for (let i = 0; i < largestNumsInArr.length; i++) {
   if (largest < largestNumsInArr[i]) {
    largest = largestNumsInArr[i]
   }
    
}

// console.log(largest);

