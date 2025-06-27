function add(a, b) {
    console.log(a + b);
    }

function subtract(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}
 function divide(a, b)
{
    console.log(a / b);
}

function mathOperation(a, b, callback) {
    callback(a, b);
}

mathOperation(5, 4, add);
mathOperation(10, 2, subtract);
mathOperation(3, 7, multiply);
mathOperation(8, 2, divide);



