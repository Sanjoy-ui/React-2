const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const blueBtn = document.querySelector(".blue");
const yellowBtn = document.querySelector(".yellow");

// console.log(randomHighlight)


let interval = ()=>{
     setInterval(() => {
  // console.log('first')
  let randomHighlight = Math.floor(Math.random() * 4 + 1); // generate random number
  console.log(randomHighlight);
    redBtn.style.backgroundColor = ''
    blueBtn.style.backgroundColor = ''
    greenBtn.style.backgroundColor = ''
    yellowBtn.style.backgroundColor = ''

  if (randomHighlight === 1) {
    redBtn.style.backgroundColor = '#ff4444'
    redBtn.addEventListener('click' ,(e)=>{
    alert('click')
  })
  } else if (randomHighlight === 2) {
        greenBtn.style.backgroundColor = '#44ff44'

  } else if (randomHighlight === 3) {
        blueBtn.style.backgroundColor = '#4444ff'

  } else if (randomHighlight === 4) {
        yellowBtn.style.backgroundColor = '#ffff44'

  }

  
}, 3000);
}
interval()


