const btn = document.getElementById('button')
const div =document.querySelector("div")
const heading = document.querySelector("h1")

btn.addEventListener('click' , ()=>{
    let char = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 15);
        color+= char[random];
       
        
    }
    heading.innerText = color
    btn.style.backgroundColor=color
    div.style.backgroundColor=color

})