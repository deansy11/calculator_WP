
// let arrayValues = document.getElementByClass()

//
// function updateDisplay(num) {
//   screenEl.innerHTML = num;
// }

// function buttonValue(newNum) {
//   let buttonNumber = buttonFunction.value;
//   screenEl.innerHTML = buttonNumber;
// }


// let screen = document.getElementById("screen");
let screen = document.querySelector("h2");
let num = document.querySelectorAll("button");

let length = num.length;

for(let i = 0; i < length; i++) {
  num[i].addEventListener("click", function() {
    // could also use 'this.value' instead of num[i]
    let number = num[i].value;
    let display = screen.innerHTML += number;
  }
)};

let operators = document.querySelectorAll("operator");
let opLength = operators.length;

for(let t = 0; t < opLength; t++) {
  opLength[i].addEventListener("click", function(){
  // could also use 'this.value' instead of num[i]
    let opInputs = num[i].value;
    let display = screen.innerHTML += opInputs;
  }
)};

let clearValue = document.querySelector("#clear");
clearValue.addEventListener("click", function() {
  screen.innerHTML = "";
});

// I left this trying to figure out how to create a function that will evaluate the 'screen.innerHTML' to the total and then will display that value on the screen. I kept getting totals that equaled [object] so I tried using parseInt on the value but then the screen returned 'NAN'
let evaluate = document.querySelector("#equal");
evaluate.addEventListener("click", function(){
  let finalVal = eval(screen);
  let parseVal = parseInt(finalVal);
  screen.innerHTML = parseVal;
  // console.log(finalVal);
  // let display = parseInt(finalVal);
  // screen.innerHTML = eval(finalVal);
  // parseInt(screen);
  //
  // let display = eval(screen.innerHTML);
  // let totalVal = display += "totalVal";
  // screen.innerHTML = totalVal;
});
