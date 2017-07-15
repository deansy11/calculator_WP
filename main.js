// // variables for the 'clear' and 'screen' blocks
// let screen = document.getElementById("screen");
// let clear = document.getElementById("clear");
//
//
// function buttonValue() {
//   for(let i = 0; i < )
// }
//
//   let value = document.calcBox.button.value;
//   let parsedButtons = parseInt(value);
//   let numButton = document.calcBox.screen.value += parsedButtons;
//
//
// let allButtons = document.querySelectorAll()
//
//
// let values = []
//
//
// // create a variable to hold button value in an array and loop through
//
// let arrayValues = document.getElementByClass()

//
// function updateDisplay(num) {
//   screenEl.innerHTML = num;
// }
//
// // adding 'click' event listener to buttons
// let buttonFunction = document.querySelectorAll("button");
//
//
// buttonFunction.addEventListener("click", buttonValue);
//
// function buttonValue(newNum) {
//   let buttonNumber = buttonFunction.value;
//   screenEl.innerHTML = buttonNumber;
// }



// document.getElementByClass("button").onclick = function() {
//
// }


// let screen = document.getElementById("screen");
let screen = document.querySelector("h2");
let num = document.querySelectorAll("button");

let length = num.length;

for(let i = 0; i < length; i++) {
  num[i].addEventListener("click", function() {
    let number = this.value;
    let display = screen.innerHTML += number;
  }

)
}

let operators = document.querySelectorAll("operator");
let opLength = operators.length;

for(let t = 0; t < opLength; t++) {
  opLength[i].addEventListener("click", function(){
    let opInputs = this.value;
    let display = screen.innerHTML += opInputs;
  }

)
}

// document.querySelector("equal").addEventListener("click" function() {
//   if(screen.innerHTML === output) {
//     screen.innerHTML = eval(output);
//   } else {
//     screen.innerHTML = "";
//   }
// } );
