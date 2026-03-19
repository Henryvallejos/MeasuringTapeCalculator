function displayZero() {
    displayData.textContent += 0
    currentData += 0
}

function displayOne() {
    displayData.textContent += 1
    currentData += 1
}

function displayTwo() {
    displayData.textContent += 2
    currentData += 2
}

function displayThree() {
    displayData.textContent += 3
    currentData += 3
}

function displayFour() {
    displayData.textContent += 4
    currentData += 4
}

function displayFive() {
    displayData.textContent += 5
    currentData += 5
}

function displaySix() {
    displayData.textContent += 6
    currentData += 6
}

function displaySeven() {
    displayData.textContent += 7
    currentData += 7
}

function displayEight() {
    displayData.textContent += 8
    currentData += 8
}

function displayNine() {
    displayData.textContent += 9
    currentData += 9
}

function displayAdditionSign() {
    displayData.textContent += "+"
    currentData += "+"
}

function displaySubtractionSign() {
    displayData.textContent += "-"
    currentData += "-"
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
        displayData.textContent = add(a, b)
        currentData += ":"

        console.log(currentData)
    
    } else if (user_input.includes("-")) {
        const [a, b] = user_input.split("-").map(Number)
        displayData.textContent += ":" + subtract(a, b)
        currentData += ":"
        console.log(currentData)
    } 

}


function clearData() {
    displayData.textContent = ""
    currentData = ""
}

function displayAri() {

}

let halfInch = 0.5
let quarterInch = .25
let threeQuarter = .75

let currentData = document.getElementById("current-data-el")
let displayData = document.getElementById("display-data-el")
displayData.textContent = ""
