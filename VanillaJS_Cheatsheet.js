// The following code is for learning purposes only. this .JS document is non-functional. //

// ---------------------------------------------------------------------------------------
// 0. LOGGING OUTPUT - This is very useful for learning JS or debugging code,
// ---------------------------------------------------------------------------------------

// as you can log out direct strings, variables or objects.
console.log("Hello World");
console.error("This is an error"); // Red text in F12 Dev tools - uses break point to code error src.
console.warn("This is a warning"); // YELLOW text in F12 Dev tools - uses break point to code warning src.

// ---------------------------------------------------------------------------------------
// 1. VARIABLES & DATA TYPES
// ---------------------------------------------------------------------------------------

// VARIABLES - STORING DATA.
// You can declare these with:
// var, let, const

let age = 30; // let - can be directly reassigned

var count = 1; // var - globally defined, not recommended as you may face conflicts if the same name is used elsewhere.

const ticker = 1; // constant variable - cannot be directly reassigned.

// DATA TYPES - String, Number, Boolean, null, undefined

const name = "Matt"; // String
const age = 23; // Number
const rating = 4.5; // Number - Float(decimal number) is also just declared as a number.
const isCool = true; // Boolean true/false
const x = null;
const y = undefined;
let z; // undefined

// Check the type of a given variable
console.log(typeof z);

// ---------------------------------------------------------------------------------------
// 2. STRING MANIPULATION
// ---------------------------------------------------------------------------------------

// Concatenation
console.log("My name is " + name + " and I am " + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`); // works the same as above, clearer to notate. Use back quotes ``

// String methods & properties
const s = "Hello World";
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split("");

// ---------------------------------------------------------------------------------------
// 3. ARRAYS - Store multiple values in a variable
// ---------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apples", "oranges", "pears", "grapes"];
console.log(numbers, fruit);

// To get a single value, use Arr[x] format. NOTE: Arrays start at 0
console.log(fruits[1]);

// Add value to a specific array index (unsafe)
fruits[4] = "blueberries";

// Add value using push() (safe), as existing data is untouched
fruits.push("strawberries");

// Add to beginning
fruits.unshift("mangos");

// Remove last value
fruits.pop();

// Check if an object is an array
console.log(Array.isArray(fruits));

// Get the index of a given data source / string in this case
console.log(fruits.indexOf("oranges"));
// In this example - this would log 1, as oranges is in the second slot of the array. (1) - as remember, arrays start from 0.

// ---------------------------------------------------------------------------------------
// 4. OBJECTS - Storing an assortment of data including variables and arrays.
// ---------------------------------------------------------------------------------------

// OBJECT LITERALS
const person = {
  firstName: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};

// Get single value
console.log(person.name);

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = "jdoe@gmail.com";

// Array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    text: "Dinner with wife",
    isComplete: false,
  },
  {
    id: 3,
    text: "Meeting with boss",
    isComplete: true,
  },
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));

// ---------------------------------------------------------------------------------------
// 5. CONTROL STATEMENTS - for, while, loop
// ---------------------------------------------------------------------------------------

// For
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for (let i = 0; i < todos.length; i++) {
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for (let todo of todos) {
  console.log(todo.text);
}

// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function (todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function (todo) {
  return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function (todo) {
  // Return only todos where id is 1
  return todo.id === 1;
});

// ---------------------------------------------------------------------------------------
// 6. CONDITIONALS - if else switch (if this is true, then do that)
// ---------------------------------------------------------------------------------------

// Simple If/Else Statement
const x = 30;

if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

// Switch
color = "blue";

switch (color) {
  case "red":
    console.log("color is red");
  case "blue":
    console.log("color is blue");
  default:
    console.log("color is not red or blue");
}

// Ternary operator / Shorthand if
const z = color === "red" ? 10 : 20;

// ---------------------------------------------------------------------------------------
// 7. FUNCTIONAL BASED PROGRAMMING
// ---------------------------------------------------------------------------------------

// FUNCTIONS
function greet(greeting = "Hello", name) {
  if (!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

// ARROW FUNCTIONS
const greet = (greeting = "Hello", name = "There") => `${greeting} ${name}`;
console.log(greet("Hi"));

// ---------------------------------------------------------------------------------------
// 8. OBJECT ORIENTED PROGRAMMING
// ---------------------------------------------------------------------------------------

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Instantiate an object from the class
const person1 = new Person("John", "Doe", "7-8-80");
const person2 = new Person("Steve", "Smith", "8-2-90");

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// Built in constructors
const name = new String("Kevin");
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'

// ---------------------------------------------------------------------------------------
// 9. ES6 Classes
// ---------------------------------------------------------------------------------------

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "7-8-80");
console.log(person1.getBirthYear());

// ---------------------------------------------------------------------------------------
// 10. Javascript DOM element selectors - not vital if you're using a framework, but good to know.
// ---------------------------------------------------------------------------------------

// Single Element Selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));
// Multiple Element Selectors
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("item"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = 'red';

// ---------------------------------------------------------------------------------------
// 11. Javascript events
// ---------------------------------------------------------------------------------------

// Mouse Event
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById("my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

// Keyboard Event
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (e) => {
  document.querySelector(".container").append(nameInput.value);
});

// ---------------------------------------------------------------------------------------
// 12. Scripting
// ---------------------------------------------------------------------------------------

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
