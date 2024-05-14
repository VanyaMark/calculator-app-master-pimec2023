// Buena suerte!
//Extract from DOM number buttons and operators in arrays
let numberButtons = document.querySelectorAll('[data-num]');
let mathOperators = document.querySelectorAll('[data-operator]');

//Extract from DOM other buttons in variables
let delButton = document.querySelector('[data-delete]');
let resetButton = document.querySelector('[data-reset]');
let outputButton = document.querySelector('[data-output]');

//Extract from DOM div elements where one should showcase the numbers and the results
let currentOperand = document.querySelector('.current-operand');
let previousOperand = document.querySelector('.previous-operand');

//State value
let numberValue = [];

//Declare functions handling event listeners
const numberButtonClick = num => {
    numberValue.push(num);
    currentOperand.textContent = numberValue.join('');
}

const mathOperatorClick = operator => {
    let firstNumberAndOperator = numberValue;
    firstNumberAndOperator = numberValue.concat(operator)
    previousOperand.textContent = firstNumberAndOperator.join('');
    currentOperand.textContent = '';
}

//Add click event listener to all number buttons
numberButtons.forEach( (numberButton) => {
    numberButton.addEventListener('click', (event) => numberButtonClick(event.target.dataset.num))
})

mathOperators.forEach( (mathOperator) =>  {
    mathOperator.addEventListener('click', (event) => mathOperatorClick(event.target.dataset.operator))
})