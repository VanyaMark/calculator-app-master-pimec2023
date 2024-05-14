// Buena suerte!
//Extract from DOM number buttons and operators in arrays
let numberButtons = document.querySelectorAll('[data-num]');
let mathOperators = document.querySelectorAll('[data-opearot]');

//Extract from DOM other buttons in variables
let delButton = document.querySelector('[data-delete]');
let resetButton = document.querySelector('[data-reset]');
let outputButton = document.querySelector('[data-output]');

//Declare functions handling event listeners
const numberButtonClick = (num) => {
    console.log(num)
}

//Add click event listener to all number buttons
numberButtons.forEach( (numberButton) => {
    numberButton.addEventListener('click', (event) => numberButtonClick(event.target.dataset.num))
})