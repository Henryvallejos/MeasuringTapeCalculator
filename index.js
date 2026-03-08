function displayZero() {
    displayData.textContent += 0
}

function displayOne() {
    displayData.textContent += 1
}

function displayTwo() {
    displayData.textContent += 2
}

function displayThree() {
    displayData.textContent += 3
}

function displayFour() {
    displayData.textContent += 4
}

function displayFive() {
    displayData.textContent += 5
}

function displaySix() {
    displayData.textContent += 6
}

function displaySeven() {
    displayData.textContent += 7
}

function displayEight() {
    displayData.textContent += 8
}

function displayNine() {
    displayData.textContent += 9
}

function displayAdditionSign() {
    displayData.textContent += "+"
}

function displaySubtractionSign() {
    displayData.textContent += "-"
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function calculate() {

   
    const user_input = displayData.textContent

    if (user_input.includes("+")) {
        const [a, b] = user_input.split("+").map(Number)
        displayData.textContent += ":" + add(a, b)
    } else if (user_input.includes("-")) {
        const [a, b] = user_input.split("-").map(Number)
        displayData.textContent += ":" + subtract(a, b)
    } 

}


function clearData() {
    displayData.textContent = ""
}

function displayAri() {

}

let halfInch = 0.5
let quarterInch = .25
let threeQuarter = .75

let previus
let displayData = document.getElementById("display-data-el")
displayData.textContent = ""
