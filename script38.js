// ARRAYS IN JS
// 1. Array Creation
 let arr =[654,545,658,875,789,]
    console.log(arr[3]) // 875
    console.log(arr[0]) // 654
    console.log(arr[4]) // 789
    console.log(arr[5]) // undefined

// 2. Array Methods
// a. push() - adds an element to the end of the array
arr.push(900)
console.log(arr) // [654, 545, 658, 875, 789, 900]
// b. pop() - removes the last element from the array
arr.pop()
console.log(arr) // [654, 545, 658, 875, 789]   
// c. shift() - removes the first element from the array
arr.shift()
console.log(arr) // [545, 658, 875, 789]
// d. unshift() - adds an element to the beginning of the array
arr.unshift(500)
console.log(arr) // [500, 545, 658, 875, 789]
// e. indexOf() - returns the index of the first occurrence of a specified element
console.log(arr.indexOf(875)) // 3  
// f. length - returns the number of elements in the array
console.log(arr.length) // 5
// g. slice() - returns a shallow copy of a portion of an array into a new array object
let newArr = arr.slice(1, 4)
console.log(newArr) // [545, 658, 875]  
// h. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
arr.splice(2, 1, 700) // removes 1 element at index 2 and adds 700
console.log(arr) // [500, 545, 700, 875, 789]
// i. array destructuring - allows you to unpack values from arrays into distinct variables
let [a, b, c] = arr
console.log(a) // 500
console.log(b) // 545
console.log(c) // 700

// g. array filter() - creates a new array with all elements that pass the test implemented by the provided function    
let filteredArr = arr.filter(num => num > 600)
console.log(filteredArr) // [700, 875, 789]
let arr1 = [1,2,3,4,5];
let arr2 =arr1.filter (function(val){
    return val<3; // returns true for values less than 3
})

// h. array map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let mappedArr = arr.map(num => num * 2)
console.log(mappedArr) // [1000, 1090, 1400, 1750, 1578]

//i. spread operator - allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
let arr3 = [...arr, 1000] // creates a new array by spreading the elements of arr and adding 1000 at the end[...arr is the spread operator]
console.log(arr3) // [500, 545, 700, 875, 789, 1000]

// iterating over an array using [for loop, forEach, ]
 let arr4 = [10, 20, 30, 40, 50];
 for(let i = 0; i < arr4.length; i++){
    console.log(arr4[i]) // 10, 20, 30, 40, 50
 }
 // forEach() - executes a provided function once for each array element
 let arr5 = [1, 2, 3, 4, 5];
 arr5. forEach (function(val){
    console.log(val); // 1, 2, 3, 4, 5
 });    

 //Objects in JS
// 1. Object Creation
let obj = { name: "Harsh", age: 22, city: "Pune",country: "India" }
console.log(obj.name) // Harsh
console.log(obj.age) // 22
console.log(obj.city) // Pune
console.log(obj.country) // India
// key value pairs in objects
obj.profession = "Developer" // adding a new key-value pair to the object
console.log(obj) // { name: 'Harsh', age: 22, city: 'Pune', country: 'India', profession: 'Developer' }
let obj2 = new Object()

// 2. accessing object properties
console.log(obj["name"]) // Harsh
console.log(obj["age"]) // 22
console.log(obj["city"]) // Pune
console.log(obj["country"]) // India
obj.age = 23 // updating the value of an existing property
console.log(obj) // { name: 'Harsh', age: 23, city: 'Pune', country: 'India', profession: 'Developer' } 

//3. deleting a property from an object
delete obj.age
console.log(obj) // { name: 'Harsh', city: 'Pune', country: 'India', profession: 'Developer' }

//4 . Object Methods    
// a. Object.keys() - returns an array of a given object's own enumerable property names
console.log(Object.keys(obj)) // [ 'name', 'city', 'country', 'profession' ]        
// b. Object.values() - returns an array of a given object's own enumerable property values
console.log(Object.values(obj)) // [ 'Harsh', 'Pune', 'India', 'Developer' ]    
// c. Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(obj)) // [ [ 'name', 'Harsh' ], [ 'city', 'Pune' ], [ 'country', 'India' ], [ 'profession', 'Developer' ] ]  

//5. Nested Objects
let nestedObj = {
    name: "Harsh",  
    age: 22,
    address: {
        city: "Pune",
        country: "India"

    }   
}
console.log(nestedObj.address.city) // Pune
console.log(nestedObj.address.country) // India