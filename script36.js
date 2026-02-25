
// let counter = 0;
// for (let i = 1; i<6; i++){
//     let num  = +prompt ("number do bhai");
//     if (num>=0) counter++;
// }
// console.log(counter);

// let balance = 1000;
// let flag = false;
// let counter = 0;
// while (balance > 0 &&  counter !==3){
//     let withdrawal = +prompt("withdrawal amount batao bhai");
//     counter++;  

//     if (withdrawal <=balance) balance-=withdrawal;   
//     else{
//          flag = true;
//             break;
//     }
// }if (flag === true)
// {
//     console.error("insufficient balance");
// }
// console.log(`Balance : ${balance}`);

// for (let i=1; i<10; i++){
//     if (i === 5)
//         continue;
//     console.log(i); 
// } continue statement is used to skip the current iteration of the loop and move to the next iteration. In this example, when i is equal to 5, the continue statement will be executed, and the console.log(i) will be skipped for that iteration. Therefore, the output will be 1, 2, 3, 4, 6, 7, 8, 9.

// recursion in JavaScript
// function abcd(n){
//     if (n === 0) return;
//     console.log(n);
//     abcd(n-1);
// }
// abcd(5);

// funtions in javascript
 
// function khankhaoo()
// {
//     console.log("thal thor khaunga");
//     console.log("kuch nahi khaunga");
//     console.log("table pe aao");
//     console.log("bartan dho lo");

// }
// khankhaoo();
// functions are reusable blocks of code that perform a specific task. They can be defined once and called multiple times throughout the program. In this example, the function khankhaoo() is defined to print a series of statements related to eating. When the function is called, it executes the code inside the function body and prints the statements to the console.

function doSomething(name, age, email){
    console.log(arguments[0]); // name
    console.log(arguments[1]);  // age
    console.log(arguments[2]);  // email    
}
doSomething("john", 25, "john@example.com");

