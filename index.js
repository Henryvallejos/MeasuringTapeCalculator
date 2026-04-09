function displayNum(num) {
    
    if (hasAdditionBtnClicked) {
        currentValue += Number(num)
        console.log("currentValue", currentValue)
        hasAdditionBtnClicked = false
    }
    else if (hasSubtractionBtnClicked) {
        currentValue -= Number(num)
        console.log("currentValue", currentValue)
        hasSubtractionBtnClicked = false
    }
    else {
        currentValue += Number(num)
    }
 
    displayData.textContent += num
    console.log("num", num)
}

function additionBtnClicked() {
    hasAdditionBtnClicked = true
    displayData.textContent += " + "
    console.log("addition clicked")
}

function subtractionBtnClicked() {
    hasSubtractionBtnClicked = true
    displayData.textContent += " - "
    console.log("subtraction clicked")
}

function displayOneQuarter() {
    displayData.textContent += " 1/4"
    currentValue += quarterInch
    console.log("current value ",currentValue)
    console.log("current data ",currentData)
}

function displayHalfInch() {
    displayData.textContent += " 1/2"
    currentValue += halfInch
}

function displayThreeQuarter() {
    displayData.textContent += " 3/4"
    currentValue += threeQuarter
}

function displayInch() {
    displayData.textContent += " inch/inches"
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function calculate() {

   displayData.textContent = currentValue

}


function clearData() {
    displayData.textContent = ""
    currentData = ""
    currentValue = 0
}

let halfInch = 0.50
let quarterInch = .25
let threeQuarter = .75
let oneEighth = 0.125
let threeEighth = 0.375
let fiveEighth = 0.625
let sevenEighth = 0.875
let hasAdditionBtnClicked = false
let hasSubtractionBtnClicked = false

let currentValue = 0

let currentData = document.getElementById("current-data-el")
let displayData = document.getElementById("display-data-el")
displayData.textContent = ""
