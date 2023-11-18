let $ = document;
let keyboardResult = $.querySelector(".keyboardResult");
let KeyboardKeys = $.querySelectorAll(".row");
let EN = $.querySelector("#EN");
let FA = $.querySelector("#FA");

$.addEventListener("keypress", (e) => {
  AppendToDom(e);
  let keypress = e.key.toUpperCase();
  let screenKeyboard = $.getElementById(keypress);
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
  if(EN.classList.contains("hidden")){
    keyboardResult.style.letterSpacing = 0 ;
  }
});
function AppendToDom(e) {
    if (FA.classList.contains("hidden")) {
      switch (true) {
        case e.code === "Shift" && e.code === "\\":
          keyboardResult.innerHTML += "|";
          break;
        case e.code === "Shift" && e.code === "]":
          keyboardResult.innerHTML += "}";
          break;
        case e.code === "Shift" && e.code === "[":
          keyboardResult.innerHTML += "{";
          break;
        case e.code === "Shift" && e.code === "'":
          keyboardResult.innerHTML += '"';
          break;
        case e.code === "Shift" && e.code === ";":
          keyboardResult.innerHTML += ":";
          break;
        case e.code === "Shift" && e.code === "/":
          keyboardResult.innerHTML += "?";
          break;
        case e.code === "Shift" && e.code === ".":
          keyboardResult.innerHTML += ">";
          break;
        case e.code === "Shift" && e.code === ",":
          keyboardResult.innerHTML += "<";
          break;
        case e.code === "Shift" && e.code === "`":
          keyboardResult.innerHTML += "~";
          break;
        case e.code === "Shift" && e.code === "1":
          keyboardResult.innerHTML += "!";
          break;
        case e.code === "Shift" && e.code === "2":
          keyboardResult.innerHTML += "@";
          break;
        case e.code === "Shift" && e.code === "3":
          keyboardResult.innerHTML += "#";
          break;
        case e.code === "Shift" && e.code === "4":
          keyboardResult.innerHTML += "$";
          break;
        case e.code === "Shift" && e.code === "5":
          keyboardResult.innerHTML += "%";
          break;
        case e.code === "Shift" && e.code === "6":
          keyboardResult.innerHTML += "^";
          break;
        case e.code === "Shift" && e.code === "7":
          keyboardResult.innerHTML += "&";
          break;
        case e.code === "Shift" && e.code === "8":
          keyboardResult.innerHTML += "^";
          break;
        case e.code === "Shift" && e.code === "9":
          keyboardResult.innerHTML += "(";
          break;
        case e.code === "Shift" && e.code === "0":
          keyboardResult.innerHTML += ")";
          break;
        case e.code === "Shift" && e.code === "-":
          keyboardResult.innerHTML += "_";
          break;
        case e.code === "Shift" && e.code === "=":
          keyboardResult.innerHTML += "+";
          break;
        case e.code === "Enter":
          keyboardResult.innerHTML += `\n`;
          break;
          case e.code === "NumpadEnter":
          keyboardResult.innerHTML += `\n`;
          break;
        default:
          keyboardResult.innerHTML += e.key;
          break;
      }
    }else if(EN.classList.contains("hidden")){
      switch (true) {
        case e.code === "Shift" && e.code === "\\":
          keyboardResult.innerHTML += "|";
          break;
        case e.code === "Shift" && e.code === "{":
          keyboardResult.innerHTML += "{";
          break;
        case e.code === "Shift" && e.code === "}":
          keyboardResult.innerHTML += "}";
          break;
        case e.code === "Shift" && e.code === "[":
          keyboardResult.innerHTML += "[";
          break;
        case e.code === "Shift" && e.code === "]":
          keyboardResult.innerHTML += "]";
          break;
        case e.code === "Shift" && e.code === "ّ":
          keyboardResult.innerHTML += "ّ";
          break;
        case e.code === "Shift" && e.code === "َ":
          keyboardResult.innerHTML += "َ";
          break;
        case e.code === "Shift" && e.code === "ِ":
          keyboardResult.innerHTML += "ِ";
          break;
        case e.code === "Shift" && e.code === "ُ":
          keyboardResult.innerHTML += "ُ";
          break;
        case e.code === "Shift" && e.code === "ٍ":
          keyboardResult.innerHTML += "ٍ";
          break;
        case e.code === "Shift" && e.code === "ٌ":
          keyboardResult.innerHTML += "ٌ";
          break;
        case e.code === "Shift" && e.code === "ْ":
          keyboardResult.innerHTML += "ْ";
          break;
        case e.code === "Shift" && e.code === "؛":
          keyboardResult.innerHTML += "؛";
          break;
        case e.code === "Shift" && e.code === ":":
          keyboardResult.innerHTML += ":";
          break;
        case e.code === "Shift" && e.code === "«":
          keyboardResult.innerHTML += "«";
          break;
        case e.code === "Shift" && e.code === "»":
          keyboardResult.innerHTML += "»";
          break;
        case e.code === "Shift" && e.code === "ة":
          keyboardResult.innerHTML += "ة";
          break;
        case e.code === "Shift" && e.code === "آ":
          keyboardResult.innerHTML += "آ";
          break;
        case e.code === "Shift" && e.code === "أ":
          keyboardResult.innerHTML += "أ";
          break;
        case e.code === "Shift" && e.code === "إ":
          keyboardResult.innerHTML += "إ";
          break;
        case e.code === "Shift" && e.code === "ي":
          keyboardResult.innerHTML += "ي";
          break;
        case e.code === "Shift" && e.code === "ئ":
          keyboardResult.innerHTML += "ئ";
          break;
        case e.code === "Shift" && e.code === "ؤ":
          keyboardResult.innerHTML += "ؤ";
          break;
        case e.code === "Shift" && e.code === "؟":
          keyboardResult.innerHTML += "؟";
          break;
        case e.code === "Shift" && e.code === "<":
          keyboardResult.innerHTML += "<";
          break;
        case e.code === "Shift" && e.code === ">":
          keyboardResult.innerHTML += ">";
          break;
        case e.code === "Shift" && e.code === "ء":
          keyboardResult.innerHTML += "ء";
          break;
        case e.code === "Shift" && e.code === "ٔ":
          keyboardResult.innerHTML += "ٔ";
          break;
        case e.code === "Shift" && e.code === "ٰ":
          keyboardResult.innerHTML += "ٰ";
          break;
        case e.code === "Shift" && e.code === "ژ":
          keyboardResult.innerHTML += "ژ";
          break;
        case e.code === "Shift" && e.code === "ٓ":
          keyboardResult.innerHTML += "ٓ";
          break;
        case e.code === "Shift" && e.code === "ك":
          keyboardResult.innerHTML += "ك";
          break;
        case e.code === "Enter":
          keyboardResult.innerHTML += `\n`;
          break;
          case e.code === "NumpadEnter":
          keyboardResult.innerHTML += `\n`;
          break;
        default:
          keyboardResult.innerHTML += e.key;
          break;
      }
    }
  }