"use strict";
function appendOperation(s) {
    resultArea.innerText += s;
}
function calculateResult() {
    resultArea.innerText = eval(resultArea.innerText);
}
function deleteLast() {
    resultArea.innerText = resultArea.innerText.substring(0, resultArea.innerText.length - 1);
}
function clearScreen() {
    resultArea.innerText = "";
}
let resultArea;
let calculate;
let del;
let res;
let operation;
document.addEventListener("DOMContentLoaded", () => {
    resultArea = document.getElementById("resultArea");
    calculate = document.getElementById("calculate");
    del = document.getElementById("del");
    res = document.getElementById("res");
    operation = document.getElementsByTagName("button");
    del.addEventListener("click", () => {
        deleteLast();
    });
    res.addEventListener("click", () => {
        clearScreen();
    });
    calculate.addEventListener("click", () => {
        calculateResult();
    });
    for (let i = 0; i <= operation.length - 1; i++) {
        if (operation[i].innerText != "=" && operation[i].innerText != "DEL" && operation[i].innerText != "RESET") {
            operation[i].addEventListener("click", () => {
                appendOperation(operation[i].innerText);
            });
        }
    }
});
