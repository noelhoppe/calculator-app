function appendOperation(s:string) : void {
    resultArea.innerText += s;
}

function calculateResult():void {
    resultArea.innerText = eval(resultArea.innerText);
}

function deleteLast() : void {
    resultArea.innerText = resultArea.innerText.substring(0, resultArea.innerText.length - 1);
}

function clearScreen() :void {
    resultArea.innerText = "";
}

function toggleThemes(n:number):void {
    if (n == 1) html.setAttribute("data-theme", "normal");
    else if (n == 2) html.setAttribute("data-theme", "light");
    else if (n == 3) html.setAttribute("data-theme", "dark");
}

let resultArea: HTMLDivElement;
let calculate: HTMLButtonElement;
let del:HTMLButtonElement;
let res:HTMLButtonElement;
let operation:HTMLCollectionOf<HTMLButtonElement>
let toggleTheme: HTMLInputElement;
let html: HTMLElement;
document.addEventListener("DOMContentLoaded", () => {
    resultArea = document.getElementById("resultArea") as HTMLDivElement;
    calculate = document.getElementById("calculate") as HTMLButtonElement;
    del = document.getElementById("del") as HTMLButtonElement;
    res = document.getElementById("res") as HTMLButtonElement;
    operation = document.getElementsByTagName("button");
    toggleTheme = document.getElementById("themeSwitcher") as HTMLInputElement;
    html = document.getElementById("html") as HTMLElement;

    toggleTheme.addEventListener("input", () => {
        toggleThemes(Number(toggleTheme.value));
    })

    del.addEventListener("click", () => {
        deleteLast();
    })

    res.addEventListener("click", () => {
        clearScreen();
    })

    calculate.addEventListener("click", () => {
        calculateResult();
    })

    for (let i: number = 0; i <= operation.length - 1; i++) {
        if (operation[i].innerText != "=" && operation[i].innerText != "DEL" && operation[i].innerText != "RESET") {
            operation[i].addEventListener("click", () => {
                appendOperation(operation[i].innerText);
            })
        }
    }
})