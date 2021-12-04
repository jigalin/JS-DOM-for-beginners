// UNSURE WHAT'S GOING ON BELOW? Check out main-NOTATED.js.

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Error: please enter a name and email.";

    setTimeout(() => {
      msg.innerHTML = null;
      msg.classList.remove("error");
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
  }
}
