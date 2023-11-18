let $ = document;
let keyboardResult = $.querySelector(".keyboardResult");
let KeyboardKeys = $.querySelectorAll(".row");
let EN = $.querySelector("#EN");
let FA = $.querySelector("#FA");

$.addEventListener("keypress", (e) => {
  AppendToDom(e);
  let keypress = e.key.toUpperCase();
  let screenKeyboard = $.getElementById(keypress);
  console.log(e.key);
  screenKeyboard.classList.add("hit");
  screenKeyboard.addEventListener("animationend", () => {
    screenKeyboard.classList.remove("hit");
  });
});
$.addEventListener("keyup", (e) => {
  if (e.code === "Backspace") {
    keyboardResult.innerHTML = keyboardResult.innerHTML.slice(0, -1);
  }
  if (e.code === "ShiftRight") {
    keyboardResult.innerHTML = "";
    EN.classList.toggle("hidden");
    FA.classList.toggle("hidden");
    keyboardResult.classList.toggle('letter');
  }
  if (e.code === "ShiftLeft") {
    keyboardResult.innerHTML = "";
    EN.classList.toggle("hidden");
    FA.classList.toggle("hidden");
    keyboardResult.classList.toggle('letter');
  }
});
