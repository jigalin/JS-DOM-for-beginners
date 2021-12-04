const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users"); // Assign all the DOM queries to local constants

myForm.addEventListener("submit", onSubmit); // Listen for submit btn to be pressed

function onSubmit(e) {
  // When an event occurs from the event listener...
  e.preventDefault(); // Prevent default actions occuring (reloading the DOM, other unwanted actions)

  if (nameInput.value === "" || emailInput.value === "") {
    // if either entry is empty,
    msg.classList.add("error"); // populate the msg class with the error css to give it a red BG
    msg.innerHTML = "Error: please enter a name and email."; // set HTMl to have an error msg.

    setTimeout(() => {
      // setTimeout(dothis, withthisdelay) - DELAY with a given ms then execude code.
      msg.innerHTML = null; // Reset the HTML text to nothing
      msg.classList.remove("error"); // Remove the error css otherwise we'll have an empty red box
    }, 3000); // timeout 3000ms
  } else {
    const li = document.createElement("li"); // create a object called li which is a li element
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`) // add text to the li
    );

    userList.appendChild(li); // add the li to the current ul that exists in the HTML

    // Clear Fields
    nameInput.value = ""; // clear the value of nameinput on submit
    emailInput.value = ""; // clear the value of email on submit
  }
}
