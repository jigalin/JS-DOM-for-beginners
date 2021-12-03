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
