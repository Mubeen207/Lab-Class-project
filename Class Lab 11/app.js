let divEl = document.getElementById("div");
function arrChk() {
    let arr = [Object, undefined, NaN, Number, String, null];
    for (let i = 0; i <= arr.length; i++) {
        console.log(typeof arr[i], arr[i]);
    }
}
// arrChk();
function stringChk() {
    let string = prompt("Enter your word do you want to reverse");
    let result = '"';
    for (let i = string.length - 1; i >= 0; i--) {
        result = result + string[i];
    }
    let p = document.createElement("p");
    let pText = document.createTextNode(result + '"');
    p.appendChild(pText);
    divEl.appendChild(p);
}
// stringChk();
function calculator() {

    let num1 = +prompt("Enter Your First Number");
    let num2 = +prompt("Enter Your Seconde Number");
    let opreator = prompt("Enter your Oprator");
    let result = 0;
    if (opreator === "/") {
        result = num1 / num2;
    }
    else if (opreator === "*") {
        result = num1 * num2;
    }
    else if (opreator === "-") {
        result = num1 - num2;
    }
    else if (opreator === "+") {
        result = num1 + num2;
    } else {
        result = "Error";
    }

    let p = document.createElement("p");
    let pText = document.createTextNode(num1 + " " + opreator + " " + num2 + " = " + " " + result);
    p.appendChild(pText);
    divEl.appendChild(p);
}
// calculator();
function sum() {

    let number = [1, 2, 3, 4, 5, 6, 96, 15, 215, 154, 5454, 5454];
    let result = 0;
    let equation = "";
    for (let i = 0; i < number.length; i++) {
        result += number[i];
        equation += " + " + number[i];
    }
    let p = document.createElement("p");
    let pText = document.createTextNode(equation + " = " + result);
    p.appendChild(pText);
    divEl.appendChild(p);
}
sum();