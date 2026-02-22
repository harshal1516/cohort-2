
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
// }

// recursion in JavaScript
function abcd(){
    console.log("hello world");
    abcd();
}
abcd();