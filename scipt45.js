// var user = 'harsh'
// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click',function(){
//     h1.innerHTML='changing user'

// setTimeout(function(){
// h1.innerHTML='hello i m prem'
    
// },2000)
// })

// var a = 0

// var int = setInterval(function(){
//     a++
//     console.log(a);
    
// },1100)
// clearInterval(int)

var a = 0
var int = setInterval(()=>{
    a++
    console.log(a);
    
},100);

setTimeout(()=>{
    clearInterval(int)
},5000);