/* DOM - Document Object Model is a programming interface for web documents. It represents the page so that programs can change the document structure
FRONT END KI JS
DOM 4 PILLARS
SELECTION OF ELEMENTS
CHANGIG html
CHANGING CSS
EVENTS LISTENERS */

//  var h1 = document.querySelector("h1")
//  var h2 = document.querySelector("button")
//  h1.innerHTML= "Hello GOTHAM!" // This will change the content of h1 to "Hello World"
//  h2.innerHTML= "Welcome to DOM Manipulation" // This will change the content of h2 to "Welcome to DOM Manipulation"
 

//  h1.style.color = "pink" // This will change the color of h1 to red
//  h1.style.backgroundColor = "red" // This will change the background color of h1 to yellow
//  h2.style.color = "red" // This will change the color of h2 to blue
//  h2.style.backgroundColor = "green" // This will change the background color of h2 to light gray

// var box = document.querySelector("#box")
//  box.innerHTML = "hey there" // This will change the content of the div with id "box" to "hey there"
//  box.style.backgroundColor = "blue" // This will change the background color of the div with id "box" to blue
//     box.style.width = "200px" // This will change the width of the div with id "box" to 200px 


// h2.addEventListener('click',function(){
//     console.log('HEllo BATMAN');
    
// h1.style.fontSize='60px'
// })

var inc= document.querySelector('#inc')
var dec= document.querySelector('#dec')

var h2 = document.querySelector('h2')
var a =0

inc.addEventListener('click',function(){o
    a++
    console.log(a);
    h2.innerHTML = a
    

})


dec.addEventListener('click',function(){
    a--
    console.log(a);
    h2.innerHTML = a
    

})