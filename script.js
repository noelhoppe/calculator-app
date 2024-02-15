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
function toggleThemes(n) {
    if (n == 1)
        html.setAttribute("data-theme", "normal");
    else if (n == 2)
        html.setAttribute("data-theme", "light");
    else if (n == 3)
        html.setAttribute("data-theme", "dark");
}
let resultArea;
let calculate;
let del;
let res;
let operation;
let toggleTheme;
let html;
document.addEventListener("DOMContentLoaded", () => {
    resultArea = document.getElementById("resultArea");
    calculate = document.getElementById("calculate");
    del = document.getElementById("del");
    res = document.getElementById("res");
    operation = document.getElementsByTagName("button");
    toggleTheme = document.getElementById("themeSwitcher");
    html = document.getElementById("html");
    toggleTheme.addEventListener("input", () => {
        toggleThemes(Number(toggleTheme.value));
    });
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
