function runtwice(fn) {
  fn();
  fn();
}
runtwice(function () {
  console.log("Hello World");
});
// This code defines a function called `runtwice` that takes another function `fn` as an argument and calls it twice. When we call `runtwice` with an anonymous function that logs "Hello World" to the console, it will print "Hello World" two times.

function pure(a, b) {
  console.log(a + b);
}
pure(1, 2);
pure(1, 2);

// This code defines a function called `pure` that takes two arguments `a` and `b`, and logs their sum to the console. When we call `pure(1,2)`, it will print `3` to the console. Since the function is pure, it will always produce the same output for the same input, which is why calling `pure(1,2)` multiple times will always result in `3`.

let global = 0;
function impure(a) {
  global++;
  console.log(a + global);
}
impure(2);
impure(2);
impure(2);
// This code defines a variable global and a function called impure that takes an argument a, increases the global variable by 1, and logs the sum of a and global to the console. When we call impure(2) multiple times, it will print different results each time because the global variable is being modified. The first call will print 3 (2 + 1), the second call will print 4 (2 + 2), and the third call will print 5 (2 + 3). This function is considered impure because it has side effects (modifying the global variable) and does not always produce the same output for the same input.

function abcd({ name, age }) {
  console.log(name, age);
}
abcd({ name: "Harsh", age: 22 });
// This code defines a function called `abcd` that takes an object with properties `name` and `age` as an argument and logs those properties to the console. When we call `abcd({name: "Harsh", age: 22})`, it will print "Harsh 22" to the console. This function uses destructuring to extract the `name` and `age` properties from the input object.

let obj = {
  name: "Harsh",
  age: 22,
  fnc: function () {
    console.log(this);
  },
  fnc2: () => {
    console.log(this);
  },
};
obj.fnc();
obj.fnc2();
// This code defines an object `obj` with properties `name`, `age`, and two functions `fnc` and `fnc2`. The `fnc` function is a regular function that logs the value of `this` to the console, while `fnc2` is an arrow function that also logs the value of `this`. When we call `obj.fnc()`, it will log the `obj` itself because in a regular function, `this` refers to the object that called the function. However, when we call `obj.fnc2()`, it will log the global object (or undefined in strict mode) because arrow functions do not have their own `this` and instead inherit it from the surrounding context.

let arr = [1, 2, 3, 4, 5];
let newarr = arr.map(function (val) {
  return val * val;
});
console.log(newarr);
// This code defines an array `arr` with the values [1, 2, 3, 4, 5]. It then uses the `map` method to create a new array `newarr` where each element is the square of the corresponding element in `arr`. The anonymous function passed to `map` takes each value `val`, multiplies it by itself, and returns the result. Finally, it logs the new array `[1, 4, 9, 16, 25]` to the console.

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr2 = arr2.filter(function (val) {
  return val % 2 !== 0;
});
// This code defines an array arr2 with the values [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. It then uses the filter method to create a new array newarr2 that contains only the odd numbers from arr2. The anonymous function passed to filter checks if each value val is not divisible by 2 (i.e., if it is odd) and returns true for those values. Finally, newarr2 will contain [1, 3, 5, 7, 9].

let salary = [1000, 2000, 3000, 4000, 5000];
let ans = salary.reduce(function (acc, val) {
  return acc + val;
}, 0);
// This code defines an array salary with the values [1000,2000,3000,4000,5000]. It then uses the reduce method to calculate the total sum of the salaries. The anonymous function passed to reduce takes an accumulator acc and the current value val, and returns the sum of acc and val. the second argument to reduce (0) initialises the accumulator to 0 before the reduction starts. Finally ans will contain the total sum of the salaries.

let names = ["Harsh", "om", "Satyarth", "Rohit"];
let ans2 = names.every(function (val) {
  return val.length > 3;
});
// This code defines an array names with the values ["Harsh",om, satyarth,rohit]. It then uses the every method to check if every name in the array has a length greater than 3. The anonymous function passed to every checks if the lengh of each value val is greater than 3 and returns true if it is and false otherwise since om has a length of 2 and rohit has  a length of 5, the every method will return false and ans2 will be false.

let user = {
  name: "Harsh",
  age: 22,
  city: "pune",
};
Object.seal(user);
user.name = "Rohit";
user.age = 23;
user.city = "Mumbai";
// This code defines an object user with properties name,age, and city.It then uses Object seal to prevent any new properties from being added to the user object and also makes all existing properties non-configurable. However, it still allows us to modify the values of existing properties. so when we change user.name to rohit, user.age to 23 and user.city to mumbai, it will successfully update those properties without any error. However, if we try to add a new property to the user object, it will not work because the object is sealed.

let obj1 = {
  user: {
    name: "Harsh",
    address: { city: "Pune" },
  },
};

