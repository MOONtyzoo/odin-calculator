let calculator = document.querySelector("#calculator")
let display = document.querySelector("#display-text")

let displayNumber = ""
let rememberedNumber =  ""

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
            alert("equals")
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
    alert("Operation " + opStr)
}

function clearCalculator() {
    displayNumber = ""
    updateDisplay()
}

function deleteNum() {
    displayNumber = displayNumber.substring(0, displayNumber.length-1)
    updateDisplay()
}