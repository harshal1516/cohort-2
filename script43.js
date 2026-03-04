// var btn=document.querySelector('button')
// var box= document.querySelector('#box')

// btn.addEventListener('click',function(){
//     // console.log("hello");
//      var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
//     // console.log(c1,c2,c3);

// box.style.backgroundColor=`rgb(${c1},${c2},${c3})`

// })

// var arr =['vedant','Harshal', 'Abhi','Manik','Bhatt','Emu']

// var a= Math.floor(Math.random()*arr.length)

// console.log(arr[a]);

var arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "blue",
  },
  {
    team: "RCB",
    primary: "Red",
    secondary: "Black",
  },
  {
    team: "MI",
    primary: "Blue",
    secondary: "Gold",
  },

  {
    team: "KKR",
    primary: "Purple",
    secondary: "Gold",
  },
    {
    team: "SRH",
    primary:"Orange",
    secondary: "Black",
  },
    {
    team: "RR",
    primary: "BLUE",
    secondary: "silver",
  },
    {
    team: "PBKS",
    primary: "CRIMSON",
    secondary: "Gold",
  },
];
// console.log(arr[2].team);

// var a= Math.floor(Math.random()*arr.length)
// console.log(arr[a]);

var btn = document.querySelector("button");

var h1 = document.querySelector("h1");

var main = document.querySelector("main");

btn.addEventListener("click", function () {
  var Winner =arr[ Math.floor(Math.random() * arr.length)];
h1.innerHTML=Winner.team
h1.style.backgroundColor=Winner.secondary
main.style.backgroundColor=Winner.primary
});
