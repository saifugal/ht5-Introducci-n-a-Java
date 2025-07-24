function suma() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerText = "Resultado: " +
    resultado;
}
function resta() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado; 
}
function multi() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
function div() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 / n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function potencia() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = Math.pow(n1, n2);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function raizCuadra() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let resultado = Math.sqrt(n1);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}