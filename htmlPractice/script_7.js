// ques 1

const arrayAverage = (arr)=>{
    let ave = 0;
    for (let i = 0; i < arr.length; i++) {
        ave += arr[i]
        
    }
   ave = ave /( arr.length)
   console.log(ave);
}

// arrayAverage([8,9])

// ques 2 
const isEven = (num)=>{
    if (num % 2 === 0) {
        console.log('even')
    } else{
    console.log('not')}
}

// isEven(1)
// ques 3

const obj = {
    message : "hello. Sanjoy",
    logMessage() {
        console.log(this.message)
    }
};

// setTimeout( ()=> obj.logMessage()  , 1000)

// ques 4
let length = 4
function callback(){
    console.log(this.length);
}

const object = {
    length : 5,
    method(callback){
        callback()
    }
}
// object.method(callback ,1)

// console.log(this)