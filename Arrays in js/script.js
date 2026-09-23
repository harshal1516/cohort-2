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

// let arr = [11,23,4,5,55,];
// let newarr = arr.map(function (val){
//     if (val>10) 
//     return 12 // return krna is mandatory
// })
// jab bhi apko aisa koi case dikh jaye jaha par ek array se naya array banan and wo naya array kuch values ko rakhega tap map lagega

//now filter 

// let arr =[ 1,2,3,4,5,6,7,8];

// let newarr=arr.filter(function(val){
//     if (val>4) return  true;

// }
// );

//now reduce 

// let arr = [1,2,3,4,5,6];

// let ans = arr.reduce(function(accumulator,val)
// {
//     return accumulator+val;

// },0);

//now find 

// let arr = [1,2,3,4,5,6];

// let val = arr.find (function(val){
//     return val ===1
// })


// now some

// let arr = [10,30,32,90];
// let any = arr.some(function(val){
//     return val>85;

// });

// now every method this checks that every value should pass the condition


// let arr = [10,30,32,90];

// let eve= arr.every(function(val){
//     return val >15;
// });

// now destructing process

let arr = [1,2,3,4,5];
 let [a,b,,c]=arr;

// now spread operator 

// let arr =[1,2,3,4,5,6,7,8,9];

// let arr2 =arr;// refernce value will be in the arr2

// let arr2 = [...arr]// this will copy the whole array into this ... is the spread operator
 //also there will be no change in the main array if the change is made in the reference array.

// let items = [1,2,3,4,5,6];
// let newarr = items.slice(2,5);
// console.log(newarr);

// let names = ["a","r","e","w","c"]
//   names.sort().reverse();

// let arr = [1,2,3,4,5,6,7];
// let newarr = arr.map(function(val)
// {
//     return val*val;
// })

// let arr =[2,3,4,45,6,66];
// let newarr = arr.filter((val)=>{
//     return val>10;
// })