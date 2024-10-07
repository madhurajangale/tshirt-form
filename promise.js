function calculator(num1, num2, operator) {
    return new Promise((resolve, reject) => {
        if (typeof num1 != 'number' || typeof num2 != 'number') {
            reject("Error: Both inputs must be numbers.");
        }
        switch (operator) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject("Error: Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Error: Invalid operator. Use '+', '-', '*', or '/'.");
        }
    });
}
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

calculator(num1, num2, operator)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));
