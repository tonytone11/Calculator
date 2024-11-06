// selecting display for numbers and results
const display = document.querySelector(".user-input");

// function for my AC button - clear all
function clearDisplay() {
    display.textContent = "0";
}

// I need a function to add the number and the operators to the display
function toTheDisplay(value) {
    // if display shows "0" or "Error", then add new value
    if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = value; // add new value
    } else {
        display.textContent += value; // chain the value to the display
    }
}

// function for the DEL button, one character removed
function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1); // removes last character if there is + than 1
    } else {
        display.textContent = "0"; // if there is 1 char left, it will reset to "0"
    }
}

// function to calculate everything thats on the display
function calculate() {
    try {
        let result = eval(display.textContent);
        display.textContent = result; // shows result
    } catch (error) {
        display.textContent = "Error"; // displays this message if calc fails
    }
}

// event listeners to my number buttons
const numBtns = document.querySelectorAll(".number");
numBtns.forEach(function (button) {
    button.addEventListener("click", function () {
        const value = button.textContent.trim(); // gets the text from inside the button
        toTheDisplay(value); // displays the button number text on the user-input
    })
})

// event listeners to my operands 
const operationBtns = document.querySelectorAll(".operations");
operationBtns.forEach(function (button) {
    const value = button.textContent.trim(); // gets the text from inside the button

    if (value === "AC") {
        button.addEventListener('click', clearDisplay); // clears display when "AC" is clicked
    } else if (value === "DEL") {
        button.addEventListener("click", deleteLast); // deletes last char when "DEL" is clicked
    } else if (value === "=") {
        button.addEventListener("click", calculate); // calculates result when "=" is clicked
    } else {
        button.addEventListener("click", function () {
            toTheDisplay(value); // displays the button operator text on the user-input
        })
    }
})