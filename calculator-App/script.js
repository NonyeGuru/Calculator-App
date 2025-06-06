const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function appendToDisplay(value) {
  display.value += value;
}

function clearLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-")
      .replace(/\^/g, "**");
    display.value = eval(expression);
  } catch (err) {
    display.value = "Error";
  }
}

function handleButtonClick(value) {
  if (value === "=") {
    calculate();
  } else if (value === "C") {
    clearLastCharacter();
  } else {
    appendToDisplay(value);
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    handleButtonClick(btn.textContent.trim());
  });
});
