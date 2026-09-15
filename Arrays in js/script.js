//Arrays are used to put value in one place rather than giving a each variable to them


// let arr = [10,20,3,4,5,6,];
// arr.push(1000); //this will add 1000 ton the last of an array

// let arr = [10,20,3,4,5,6,];
// arr.pop();// this will remove the last digit from the array

// let arr = [10,20,3,4,5,6,];
// arr.shift(); // this will remove the value from the first position in array

// let arr = [10,20,3,4,5,6,];
// arr.unshift(66); // this will add given value to the first position.

// let arr = [10,20,3,4,5,6,];
// arr.splice(2,1); // this will remeove the value from given argument that position 2 and 1 element will be removed

// let arr = [10,20,3,4,5,6,];/ aslo this willmake an copy aof an array
// let newarr= arr.slice(0,3); // this will alice the other values only keeping till the given arguments


// let arr = [10,20,3,4,5,6,];
// arr.reverse(); // this will simoly reverse the given array

// let arr = [10,20,3,4,5,6,];
// let sr = arr.sort(function(a,b){
//     return a-b  
// });  this will simply sort the given array a-b accending order b-a decending order;

// NOW FOR EACH 
// let arr = [10,20,3,4,5,6,];
// arr.forEach(function(val){
//     console.log(val);
    
// })// this will print each value in the array seperately 

// NOW MAP in JS
// map sirf tab use krana hai jb apko ek anya array banana hai pichle array ke data basis prr

// map dikhte hi saath mein ek blank array bana liye kro 

let arr = [11,23,4,5,55,];
let newarr = arr.map(function (val){
    if (val>10) 
    return 12 // return krna is mandatory
})