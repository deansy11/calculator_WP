let screen = document.querySelector("h2");
let num = document.querySelectorAll(".button");

let length = num.length;

for(let i = 0; i < length; i++) {
  num[i].addEventListener("click", function() {
    let number = this.value;
    screen.innerHTML += number;
  }
)};

let operators = document.querySelectorAll(".operator");
let opLength = operators.length;

for(let t = 0; t < opLength; t++) {
  operators[t].addEventListener("click", function(){
    let opInputs = this.value;
    screen.innerHTML += ` ${opInputs} `;
  }
)};

let clearValue = document.querySelector("#clear");
clearValue.addEventListener("click", function() {
  screen.innerHTML = "";
});

let evaluate = document.querySelector("#equal");
evaluate.addEventListener("click", function(e){
  e.preventDefault();
  let equal = screen.innerHTML.split(" ");
  let finalVal = 0;
  if (equal[1] === "/") {
    finalVal = parseInt(equal[0]) / parseInt(equal[2]);
  } else if (equal[1] === "*") {
    finalVal = parseInt(equal[0]) * parseInt(equal[2]);
  } else if (equal[1] === "-") {
    finalVal = parseInt(equal[0]) - parseInt(equal[2]);
  } else if (equal[1] === "+") {
    finalVal = parseInt(equal[0]) + parseInt(equal[2]);
  }
  screen.innerHTML = finalVal;
});
