function largest(arr , num){ // ques 1
    const array = [];
    for(let i = 0 ; i < arr.length ; i++ ){
        if (arr[i] > num) {
            array.push(arr[i])
        }
    }
    return array ;
}

const num = 5 ;

const arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(largest(arr , num));

// ques 2

const unique = "aabbccdef";


function getUnique(str){
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar
        }
        
    }
    return ans
}

// console.log(getUnique(unique));

// ques 3

function countryList(list ){
    let country ,len = 0 ;
    let ans = ''
    for (let i = 0; i < list.length; i++) { 

       country = list[i];
       lenofele = country.length;
       if (len < lenofele ) {
            len = lenofele
            ans = country
           
       }
       
        
    }
    // console.log(len);
    return ans
}

const countryname =['india' , 'nepali' , 'united states of america']
// console.log(countryList(countryname));


// ques 4 

function vowelInString(str){
    let count = 0 ;
    for (let i = 0; i < str.length; i++) {
       if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'  ) {
        count++ ;
    }
        
    }
    return count ;
}

// console.log(vowelInString("sanjoyoooooeeeeeiiiiuuuu"));

// ques 5

let start = 10 ;
let end = 20;

function getRandomInRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
// console.log(getRandomInRange(start,end));