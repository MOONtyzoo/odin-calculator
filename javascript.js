let calculator = document.querySelector("#calculator")
let display = document.querySelector("#display-text")

let displayNumber = ""
let rememberedNumber =  ""
let currentOperation = ""

let overwriteNextInput = false

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
    const displayCharLimit = 15
    let textContent = displayNumber

    if (displayNumber.length > displayCharLimit) {
        // Checking for exponential notation
        if (displayNumber.indexOf("e") == -1) {
            textContent = parseInt(textContent).toExponential(displayCharLimit - 10)
        }
        if (displayNumber.indexOf("e") != -1) {
            let mantissa = displayNumber.substring(0, displayNumber.indexOf("e"))
            let exponent = displayNumber.substring(displayNumber.indexOf("e"), displayNumber.length)
            mantissa = displayNumber.substring(0, displayCharLimit - exponent.length - 5)
            textContent = mantissa + exponent
        }

    }

    displayNumber = textContent
    display.textContent = textContent
}

function numpadInput(numStr) {
    if (displayNumber.indexOf("e") != -1) {return}

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

    if (overwriteNextInput == true) {
        displayNumber = numStr
        overwriteNextInput = false
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
    displayNumber = answer.toString()
    updateDisplay()
    currentOperation = ""
    overwriteNextInput = true
}

function clearCalculator() {
    displayNumber = ""
    rememberedNumber = ""
    currentOperation = ""
    updateDisplay()
}

function deleteNum() {
    displayNumber = displayNumber.substring(0, displayNumber.length-1)
    if (overwriteNextInput == true) {
        displayNumber = ""
        overwriteNextInput = false
    }
    updateDisplay()
}