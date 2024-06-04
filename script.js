const display = document.getElementById("display");

//function appendToDisplay have one parameter which is "input" because we are passing in a character when we call a function as we can see in html page.
function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearScreen() {
  display.value = "";
}

//Error Handling----> [try---catch]
