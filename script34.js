let age = prompt("Enter your age:");
if (age=== null){
    console.error("u cancelled it");   
}
else {
    if (age.trim() === "") {
        console.error("plz write something...");
    }
    else {
        age = Number(age);
        if (isNaN(age)) {
            console.error("plz enter a valid number");
        }  else {
            console.log(`ur age is ${age}`);
            if (age <= 0) console.error("not a valid no");
            else if (age >= 18) console.log("u can  vote");            
            else console.log("u cant vote");
        }
    }
}