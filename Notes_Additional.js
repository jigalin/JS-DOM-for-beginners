const todos = [
  {
    id: 1,
    text: "Meeting with Sarah",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Clean room",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Doctors Appointment",
    isCompleted: false,
  },
];

// forEach, map, filter

const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);

// Constructor function

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

// Instantiate object
const person1 = new Person("John", "Doe", "4-3-1980");

console.log(person1);

// And now - class based

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `FullName: ${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Doe", "9-3-1983");

console.log(person2.getFullName());
console.log(person1);
