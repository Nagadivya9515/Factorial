function factorial() {
    let n = document.getElementById("inputNumber").value;
    let result = 1;
    for(let i=2;i<=n;i++) {
        result *= i;
    }
    document.getElementById("dynamicContent").textContent = result;
}

function clearInput() {
    document.getElementById("inputNumber").value = "";
    document.getElementById("dynamicContent").textContent = " here :";
}