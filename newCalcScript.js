const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const tools = document.querySelector(".tools");
const numbers = document.querySelector(".numbers");
let previousVal = null;
let currentVal = null;
let state = null;
let prevState = null;
let newCalc = true;

function display(event) {
  let digit = event.target.textContent;
  if (event.target.localName === "button") {
    if (state === null) {
      if (screen.value.includes(".") && digit === ".") {
        return;
      }
      if (screen.value === "0" || newCalc) {
        screen.value = digit;
        newCalc = false;
      } else {
        screen.value = screen.value + digit;
      }
    }
    if(state){
      if(currentVal && currentVal.includes('.') && digit === '.'){
        return
      }
    }
    if (state === "addition") {
      if (!previousVal) {
        previousVal = screen.value;
        screen.value = digit;
        currentVal = screen.value;
        prevState = "addition";
      } else {
        screen.value = screen.value + digit;
        currentVal = screen.value;
        prevState = "addition";
      }
    }
    if (state === "subtraction") {
      if (!previousVal) {
        previousVal = screen.value;
        screen.value = digit;
        currentVal = screen.value;
        prevState = "subtraction";
      } else {
        screen.value = screen.value + digit;
        currentVal = screen.value;
        prevState = "subtraction";
      }
    }
    if (state === "multiplication") {
      if (!previousVal) {
        previousVal = screen.value;
        screen.value = digit;
        currentVal = screen.value;
        prevState = "multiplication";
      } else {
        screen.value = screen.value + digit;
        currentVal = screen.value;
        prevState = "multiplication";
      }
    }
    if (state === "division") {
      if (!previousVal) {
        previousVal = screen.value;
        screen.value = digit;
        currentVal = screen.value;
        prevState = "division";
      } else {
        screen.value = screen.value + digit;
        currentVal = screen.value;
        prevState = "division";
      }
    }
  }
}

function reset(event, value = "0") {
  screen.value = value; 
  previousVal = null;
  currentVal = null;
  state = null;
  prevState = null;
  newCalc = true;
}

function operators(event) {
  state = event.target.className;

  if (state === "equal" && prevState === "addition") {
    screen.value = Number(previousVal) + Number(currentVal); 
    reset(event, screen.value); 
    // console.log({previousVal, currentVal});
  }
  if (state === "equal" && prevState === "subtraction") {
    screen.value = Number(previousVal) - Number(currentVal);
    reset(event, screen.value);
  }
  if (state === "equal" && prevState === "multiplication") {
    screen.value = Number(previousVal) * Number(currentVal);
    reset(event, screen.value);
  }
  if (state === "equal" && prevState === "division") {
    screen.value = Number(previousVal) / Number(currentVal);
    reset(event, screen.value);
  }
  if (state === "addition" && currentVal) {
    screen.value = Number(previousVal) + Number(currentVal); 
    reset(event, screen.value);
  }
  if (state === "subtraction" && currentVal) {
    screen.value = Number(previousVal) - Number(currentVal);
    reset(event, screen.value);
  }
  if (state === "multiplication" && currentVal) {
    screen.value = Number(previousVal) * Number(currentVal);
    reset(event, screen.value);
  }
  if (state === "division" && currentVal) {
    screen.value = Number(previousVal) / Number(currentVal);
    reset(event, screen.value);
  }
}


numbers.addEventListener("click", display);
clear.addEventListener("click", reset);
tools.addEventListener("click", operators);
