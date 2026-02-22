let attempt=0;
let sahipassword = "harsh";

let userpassword = prompt ("Password batao bhai");
    attempt++;


while (  attempt < 3 && sahipassword !==  userpassword)
    {   
    userpassword = prompt ("Bhai sahii passsword batao");
    attempt++;
}
if (attempt=== 3&& sahipassword !== userpassword){
    console.error("Account locked");
}
else {
    console.log("Account opened");
}