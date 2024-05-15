// Buena suerte!
//Extract from DOM number buttons and operators in arrays
let numberButtons = document.querySelectorAll("[data-num]");
let mathOperators = document.querySelectorAll("[data-operator]");

//Extract from DOM other buttons in variables
let delButton = document.querySelector("[data-delete]");
let resetButton = document.querySelector("[data-reset]");
let outputButton = document.querySelector("[data-output]");

//Extract from DOM div elements where one should showcase the numbers and the results
let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");

//State value - number array where to collect the pressed digits
let firstNumberValue = [];
let secondNumberValue = [];
let mathOperator = "";


let mathOperatorsArr = [...mathOperators].map(
  (mathOperatorButton) => mathOperatorButton.dataset.operator
);

//help functions
const mathOperation = (firstNumber, secondNumber, operator) => {
  let firstNumberToNumber = parseFloat(firstNumber.join(""));
  let secondNumberToNumber = parseFloat(secondNumber.join(""));

  let text = `${firstNumberToNumber} ${operator} ${secondNumberToNumber}`;
  console.log("text ", text);
  let result = eval(text);
  console.log("eval", result);

  return result;
};

//Declare functions handling event listeners
const numberButtonClick = (num) => {
  let checkOperator = mathOperatorsArr.includes(mathOperator);

  if (checkOperator) {
    currentOperand.textContent = "";
    secondNumberValue.push(num);
    currentOperand.textContent = secondNumberValue.join("");
  } else {
    firstNumberValue.push(num);
    currentOperand.textContent = firstNumberValue.join("");
  }
};

const mathOperatorClick = (operator) => {
  if (secondNumberValue.length > 0) {
    console.log(mathOperator)
    console.log('from mathOperatorClick after clicking second operator')
    firstNumberValue = [showResult()];
    secondNumberValue = [];
    console.log('firstNumberVal: ', firstNumberValue)
    console.log('secondNumberVal: ', secondNumberValue)
  }
  mathOperator = operator;
  let firstNumberAndOperator = firstNumberValue.concat(operator);
  previousOperand.textContent = firstNumberAndOperator.join("");
  currentOperand.textContent = "";
};

const showResult = () => {
  let finalResult = mathOperation(
    firstNumberValue,
    secondNumberValue,
    mathOperator
  );
  console.log("showResult: ", finalResult);
  currentOperand.textContent = finalResult;
  previousOperand.textContent = "";
  return finalResult;
};

const reset = () => {
    firstNumberValue = [];
    secondNumberValue = [];
    mathOperator = "";
    currentOperand.textContent = "";
    previousOperand.textContent = "";
}

const handleDel = () => {
    if (secondNumberValue.length<1) {
        firstNumberValue.pop();
        currentOperand.textContent = firstNumberValue.join('');
        console.log(`from handleDel if: firstNumber- ${firstNumberValue}, second - ${secondNumberValue}`)
    } else {
    secondNumberValue.pop();
    currentOperand.textContent = secondNumberValue.join('');
    console.log(`from handleDel else: firstNumber- ${firstNumberValue}, second - ${secondNumberValue}`)
}
}

//Add click event listener to all number buttons
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (event) =>
    numberButtonClick(event.target.dataset.num)
  );
});

mathOperators.forEach((mathOperator) => {
  mathOperator.addEventListener("click", (event) =>
    mathOperatorClick(event.target.dataset.operator)
  );
});

outputButton.addEventListener("click", showResult);
resetButton.addEventListener("click", reset);
delButton.addEventListener('click', handleDel);