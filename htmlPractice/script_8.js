// ques 1

const arr = [1,2,3,4,5];

const square = arr.map((item)=>{
    return item*item ;
});

// console.log(square)

const sum = square.reduce((acc , val)=>{
  return ( acc + val)

})
// console.log(sum)

// ques 2

const plus5 = arr.map(item => item + 5)

// console.log(plus5)

// ques 3\

const arraa = ['sanjoy', 'rahul', 'bluelock' , 'sakamoto'];

const upper = arraa.map(name => name.toUpperCase())

// console.log(upper)

// ques 4
const ary = [1,2,3,4,5];

function doubleAndReturnArgs(arr , ...arg){
    const doubleArg = arg.map(item => item*2)
    return [...arr , ...doubleArg]
}

// console.log(doubleAndReturnArgs(ary , 10 ,20 , 30))

// ques 5

const obj1={
    name : 'sanjoy',
    age : 19
}
const obj2={
    name: 'rahul',
    age : 25
}

const objMerge = (obj1 , obj2)=>{
   const newObject = {...obj1 ,...obj2 }

   const merge = {
    name : `${obj1.name} ${obj2.name}`,
    age : `${obj1.age } ${obj2.age}`
   }
   return merge
}

console.log(objMerge(obj1 ,obj2))