// PARAMETERS
// Parameters are the variables that are listed as part of a function definition. They act as placeholders for the values that will be passed to the function when it is called. Parameters allow us to create reusable functions that can work with different inputs. When a function is called, the values passed to it are assigned to the corresponding parameters, allowing the function to perform its operations using those values.
// ARGUMENTS
// Arguments are the actual values that are passed to a function when it is called. They are the data that the function operates on. When a function is invoked, the arguments are assigned to the corresponding parameters defined in the function's declaration. The number and type of arguments passed to a function should match the parameters defined in the function for it to work correctly. Arguments can be of any data type, including numbers, strings, arrays, objects, and even other functions.
function aalooparatha() {
    console.log("Aloo Paratha is a delicious Indian flatbread stuffed with spiced mashed potatoes.");
    console.log("It is the best dish n the most prominent int the breakfast");
    
 
}   
aalooparatha();

//  RESTPARAMETER
// It is used to represent an indefinite number of arguments as an array. It allows us to pass a variable number of arguments to a function, which can be accessed as an array within the function. The rest parameter syntax is denoted by three dots (...) followed by the name of the parameter.
function abcd (a,b,...c) {  
    console.log(a,b,c);
}
abcd(1,2,3,4,5,6,7,8,9);

// HOISTING
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For variables declared with var, they are hoisted and initialized with undefined, while for let and const, they are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration. Function declarations are fully hoisted, allowing you to call them before their actual declaration in the code.

console.log(x); // Output: undefined
var x = 5;  // The declaration of x is hoisted, but its initialization is not, so it is undefined at this point.
// variables declared with let and const are hoisted but not initialized, so accessing them before declaration will result in a ReferenceError.

greet(); // Output: "Hello, World!"
function greet() {
    console.log("Hello, World!");
}
// In this example, the function greet is hoisted, allowing us to call it before its actual declaration in the code.
// However, if we try to call a function expression before its declaration, it will result in a TypeError because only the variable declaration is hoisted, not the assignment.
 
// POSITIONAL ARGUMENTS
// Positional arguments are the most common type of arguments in programming. They are passed to a function in a specific order, and the function uses the position of the arguments to determine their meaning. For example, if a function takes two parameters, the first argument passed to the function will be assigned to the first parameter, and the second argument will be assigned to the second parameter. This means that the order of the arguments is important when calling a function with positional arguments.
function abcd (a,b ,c,d) {
    console.log(a,b,c,d);
}
abcd(1,2,3,4); // Output: 1 2 3 4
// In this example, the function abcd takes four parameters (a, b, c, d) and we pass four arguments (1, 2, 3, 4) in a specific order. The function assigns the first argument to parameter a, the second argument to parameter b, the third argument to parameter c, and the fourth argument to parameter d. Therefore, the output will be 1 2 3 4.

function abcd()
{
    function defg(){
        console.log("This is a nested function.");
    }
    defg(); // Calling the nested function
}
abcd(); // Output: "This is a nested function."
// In this example, we have a function abcd that contains another function defg inside it. The nested function defg is defined within the scope of the outer function abcd. When we call the outer function abcd, it executes and calls the nested function defg, which then prints "This is a nested function." to the console.