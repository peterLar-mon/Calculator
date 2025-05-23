function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    return { number1, number2 };
}

function add() {
    const { number1, number2 } = getNumbers();
    const result = number1 + number2;
    displayResult(result);
}

function subtract() {
    const { number1, number2 } = getNumbers();
    const result = number1 - number2;
    displayResult(result);
}

function multiply() {
    const { number1, number2 } = getNumbers();
    const result = number1 * number2;
    displayResult(result);
}

function divide() {
    const { number1, number2 } = getNumbers();
    if (number2 === 0) {
        alert("Dělení nulou není povoleno!");
        return;
    }
    const result = number1 / number2;
    displayResult(result);
}

function displayResult(result) {
    document.getElementById('result').textContent = 'Výsledek: ' + result;
}