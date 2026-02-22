let attempts = 0;
let khulgaya = false;
let pass = "harshal123";

let password = prompt("Enter your password:");
attempts++; 

if (password === pass) khulgaya = true; 

while (password !== pass){
    if (attempts===3){
        console.error("account locked ");
        break;
    }
    password = prompt ("Enter ur password again")
    if (password === pass) khulgaya = true; 
    attempts++;
}

if (khulgaya === true)
    console.log("account opened");
    