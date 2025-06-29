/** 
function printmyname(name) {
    console.log("My name is: " + name);
}
let nametoprint = "John Doe";
printmyname(nametoprint);
printmyname("Jane Smith");
printmyname("jane smith");

function sum(a, b) {
    return a + b;
}
console.log(sum(1,2));
console.log(sum(10, 20));
console.log(sum(100, 200));


function calculatorfunction()
{
    let a = 45;
    let b = 10;
    let sum = a + b;
    let mul = a * b;
    let sub = a - b;
    let div = a / b;
    console.log("The multiplication is: " + mul);
    console.log("The sum is: " + sum);
    console.log("The subtraction is: " + sub);
    console.log("The division is: " + div);
}
calculatorfunction();


**/
function operation(a, b, op) {
    const operations = {
        add: a + b,
        sub: a - b,
        mul: a * b,
        div: a / b
    };
    console.log("The result of the operation is: " + operations[op]);
}
operation(10, 5, "add");
operation(10, 5, "sub"); 
operation(10, 5, "mul");
operation(10, 5, "div"); 



