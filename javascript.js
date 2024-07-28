let calculator = document.querySelector("#calculator")
let display = document.querySelector("#display-text")

let displayNumber = ""
let rememberedNumber =  ""
let currentOperation = ""

calculator.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        processInput(e.target.textContent)
    }
})

function processInput(inputStr) {
    switch(inputStr) {
        case "0":
            numpadInput("0")
            break
        case "1":
            numpadInput("1")
            break
        case "2":
            numpadInput("2")
            break
        case "3":
            numpadInput("3")
            break
        case "4":
            numpadInput("4")
            break
        case "5":
            numpadInput("5")
            break
        case "6":
            numpadInput("6")
            break
        case "7":
            numpadInput("7")
            break
        case "8":
            numpadInput("8")
            break
        case "9":
            numpadInput("9")
            break
        case "(-)":
            numpadInput("-")
            break
        case ".":
            numpadInput(".")
            break
        case "+":
            operationInput("+")
            break
        case "-":
            operationInput("-")
            break
        case "x":
            operationInput("x")
            break
        case "/":
            operationInput("/")
            break
        case "del":
            deleteNum()
            break
        case "c":
            clearCalculator()
            break
        case "=":
            performOperation()
            break
        default:
            alert("This input is not defined!")
    }
}

function updateDisplay() {
    display.textContent = displayNumber
}

function numpadInput(numStr) {
    if (numStr == "-") {
        if (displayNumber.length == 0) {
            displayNumber += numStr
        }
    } else if (numStr == ".") {
        if (displayNumber.indexOf(".") == -1) {
            displayNumber += numStr
        }
    } else {
        displayNumber += numStr
    }
    updateDisplay()
}

function operationInput(opStr) {
    if (currentOperation != "") {performOperation()}
    currentOperation = opStr
    rememberedNumber = displayNumber
    displayNumber = ""
}

function performOperation() {
    let numA = parseFloat(rememberedNumber)
    let numB = parseFloat(displayNumber)
    let answer = 0;
    switch (currentOperation) {
        case "+":
            answer = numA + numB;
            break;
        case "-":
            answer = numA - numB;
            break;
        case "x":
            answer = numA * numB;
            break;
        case "/":
            answer = numA / numB;
            break;
        default:
            answer = 0;
            break
    }
    alert(answer)
    displayNumber = answer.toString()
    updateDisplay()
    currentOperation = ""
}

function clearCalculator() {
    displayNumber = ""
    rememberedNumber = ""
    currentOperation = ""
    updateDisplay()
}

function deleteNum() {
    displayNumber = displayNumber.substring(0, displayNumber.length-1)
    updateDisplay()
}