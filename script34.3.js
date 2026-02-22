let password= "harshal123";

let pass = prompt("Enter your password:");

if (pass === null){
    console.error("u cancelled it");
}   
else {
    if (pass === password){
        console.log("Matched!");
    }else{
        console.log("NOT MATCHED!");
        
    }
}