function displayNum(num) {
    
    currentInput += num
    updateDisplay()
    // displayData.textContent = formatFraction(Number(currentInput))
}

function additionBtnClicked() {
    if (currentInput !== "") {
       currentValue = Number(currentInput) 
       expression = formatFraction(currentValue)
    }
    
    currentInput = ""
    operator = "+"
    expression += " + "
    updateDisplay()
}

function subtractionBtnClicked() {
    if (currentInput !== "") {
      currentValue = Number(currentInput) 
      expression = formatFraction(currentValue) 
    }
    
    currentInput = ""
    operator = "-"
    updateDisplay()
}

function displayOneQuarter() {
   currentInput = String(Number(currentInput || 0) + quarterInch)
   updateDisplay()
}

function displayHalfInch() {
    currentInput = String(Number(currentInput || 0) + halfInch)
    updateDisplay()
}

function displayThreeQuarter() {
    currentInput = String(Number(currentInput || 0) + threeQuarter)
    updateDisplay()
}

function displayOneEigth() {
    currentInput = String(Number(currentInput || 0) + oneEighth)
    updateDisplay()
}

function displayThreeEigth() {
    currentInput = String(Number(currentInput || 0) + threeEighth)
    updateDisplay()    
}

function displayFiveEigth() {
    currentInput = String(Number(currentInput || 0) + fiveEighth)
    updateDisplay()    
}

function displaySevenEigth() {
    currentInput = String(Number(currentInput || 0) + sevenEighth)
    updateDisplay()    
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function calculate() {

   let secondValue = Number(currentInput)

   //Adds second num to expression
   expression += formatFraction(secondValue)

   if (operator === "+") {
    currentValue += secondValue
   } else if (operator === "-") {
    currentValue -= secondValue
   }

   //Show full expression + result
   displayData.textContent = expression + " = " + formatFraction(currentValue)

   //Reset for next calulation
   currentInput = ""
   operator = null 
   expression = formatFraction(currentValue) // allows chaining
   
}

function updateDisplay() {
    let inputPart = currentInput ? formatFraction(Number(currentInput)) : ""
    displayData.textContent = expression + inputPart
}

function formatFraction(value) {
    const fractionMap = {
        0.125: "1/8",
        0.25: "1/4",
        0.375: "3/8",
        0.5: "1/2",
        0.625: "5/8",
        0.75: "3/4",
        0.875: "7/8"
    }

    let whole = Math.floor(value)
    let decimal = value - whole

    //Fix floating point issues
    decimal = Math.round(decimal * 1000) / 1000

    if (decimal === 0) return String(whole)

    if (fractionMap[decimal]) {
        if (whole === 0) {
            return fractionMap[decimal]
        }
        return `${whole} ${fractionMap[decimal]}`
    }

    return value.toFixed(2) // fallback
}

//Clear data from display and resets variables
function clearData() {
    displayData.textContent = ""
    currentInput = ""
    currentValue = 0
    operator = null
}

let halfInch = 0.50
let quarterInch = .25
let threeQuarter = .75
let oneEighth = 0.125
let threeEighth = 0.375
let fiveEighth = 0.625
let sevenEighth = 0.875

let currentValue = 0 //num for calculation
let currentInput = ""
let operator = null
let expression = "" //string for display

let currentData = document.getElementById("current-data-el")
let displayData = document.getElementById("display-data-el")
displayData.textContent = ""
