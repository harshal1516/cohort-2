function sayHello() {
    console.log("Hello, World! This is JavaScript code running in an HTML file.");
}   sayHello();// this will call the function and print the message to the console 

function addNumbers(a,b){
    return a+b;
}
let answer = addNumbers(5,10);
console.log(answer);
// This will call the addNumbers function with arguments 5 and 10 and print the result(15)

function greet(guest = "Guest") {
    console.log (`HELLO, ${guest}! Welcome to JavaScript programming.`);
} greet ("VEDANT");
// This will call the greet function with the argument "VEDANT" and print a personalized greeting message to the console.log.

function addUnlimitedNumbers(...numbers) {
console.log(...numbers);
}
addUnlimitedNumbers(1,2,3,4,5);// rest parameter allows us to pass an unlimited number of arguments to the funtion and it will be treated as an array.

function addUnlimited(...nums) {
    let sum = 0;
for (let i = 0; i <  nums.length;i++){
    sum = sum + nums [i];
}
console.log(sum);
}   
addUnlimited(1,2,3,4,5,6,7,8,9,10);
// This will call the addUnlimited function with 10 arguments and it will calculate the sum of those numbers and print the result(55) to the console.

function addnums(...nums) {
    let ans = nums.reduce(function (accumulator,currentValue){
        return accumulator * currentValue;
    },1);
    console.log(ans);
}
addnums(1,2,3,4,5,6,7,8,9,10);
// This will call the addnums function with 10 arguments and it will calculate the product of those numbers using the reduce method and print the result(3628800) to the console.

 (function () {
    console.log("I run INSTANTLY without being called!");
 })();
// This is an Immediately Invoked Function Expression (IIFE) that runs immediately without being called. It will print the message to the console as soon as the script is loaded.

function parent (){
    let a =12;
    function child(){
        console.log(a);
    }
    child();
}
parent();
// This will call the parent funtion which defines a variable 'a' and  a nested function 'child' that has accesss to the variable 'a' due to closure. When the child function is called, it will print the value of 'a' 12 to the console.

let arr = ["apple","banana","cherry ","date","elderberry"];
arr.pop();
arr.push("fig");
arr.unshift("apple");
console.log(arr);
// This will create an array of fruits, add "fig" to the end of the array using push method, remove "apple" from the beginning of the array using shift method and print the updated array to the console. The final output will be ["banana","cherry ","date","elderberry","fig"]

let arr1 = [1,2,3,4,5,22,33,44,55];
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

let objPerson = {
    name: "Harshal",
    age: 22,    
    city: "Pune"
};

for (let key in objPerson){
    console.log(objPerson[key]);
    

}

setTimeout(function() {
    console.log("The time is up! This message is displayed after 2 seconds.");
}, 2000);
// This will set a timer that will execute the provided function after 2000 milliseconds (2 seconds). After 2 seconds, it will print the message to the console.