let screen = document.querySelector("h2");
let num = document.querySelectorAll(".button");

let length = num.length;

for(let i = 0; i < length; i++) {
  num[i].addEventListener("click", function() {
    // could also use 'this.value' instead of num[i]
    let number = num[i].value;
    screen.innerHTML += number;
  }
)};

let operators = document.querySelectorAll(".operator");
let opLength = operators.length;

for(let t = 0; t < opLength; t++) {
  operators[t].addEventListener("click", function(){
  // could also use 'this.value' instead of num[i]
    let opInputs = operators[t].value;
    screen.innerHTML += opInputs;
  }
)};

let clearValue = document.querySelector("#clear");
clearValue.addEventListener("click", function() {
  screen.innerHTML = "";
});

let evaluate = document.querySelector("#equal");
evaluate.addEventListener("click", function(e){
  e.preventDefault();
  let screenTotal = screen.textContent;
  let finalVal = eval(screenTotal);
  screen.innerHTML = finalVal;
});
