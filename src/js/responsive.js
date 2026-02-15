const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(expression);

        if (result === Infinity || isNaN(result)) {
            display.value = "Erro";
        } else {
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = "Erro";
        setTimeout(() => clearDisplay(), 1500);
    }
}