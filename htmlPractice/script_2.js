// part 3 

// ques 1
const arr = [19,20 ,30 ,40 ,100 ,50];
const n =3;


const arr2 = [];

for(let i = 0 ; i < n ; i++  ){
    arr2.push(arr[i])
}

// console.log(arr2);

// ques 2

const dearr = [1,2,3,4,5,6,7,8]
const dummyarr =[]
// .slice(-3)

for (let i =dearr.length - 3; i < dearr.length; i++) {
   
        // dummyarr.push(dearr[dearr.length - i])
        dummyarr.push(dearr[i])
}

// console.log(dummyarr);

// ques 3

const string = " "

if(!string){
    // console.log('true');
} else {
    // console.log('string is not empty');
}


// ques 4

const char = "SAAHJd"

for (let i = 0; i < char.length; i++) {
   if (char[i] === char[i].toLowerCase()) {
    // console.log("lowercase exist" , char[i]);
   }
    
}

// ques 5
const dummystring = "       sanjoyy.    "

// console.log(dummystring.trim());

// ques 6

const testArray = [1,2,3,45,5,6,];

let gg = 6 
 
if (testArray.includes(gg)) {
    console.log('exists');
}

try {
    const response = fetch('');
    response.json()
    
} catch (error) {
    console.log(error)
}
