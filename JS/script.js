
let num1;
let num2;
let ans = 0;
let sum = document.getElementById("add");
let sub = document.getElementById("sub");
let multi = document.getElementById("multi");
let div = document.getElementById("div");
let square = document.getElementById("square");
let cube = document.getElementById("cube");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
function addition() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    ans = num1 + num2;
    result.value = ans;
}
function subtraction() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    ans = num1 - num2;
    result.value = ans;
}
function multiplication() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    ans = num1 * num2;
    result.value = ans;
}
function division() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    ans = num1 / num2;
    result.value = ans;
}
function findSquare() {
    num1 = Number(document.getElementById("num1").value);
    ans = num1 * num1;
    result.value = ans;
}
function findCube() {
    num1 = Number(document.getElementById("num1").value);
    ans = num1 * num1 * num1;
    result.value = ans;
}
function clearAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    result.value = "";

}

sum.addEventListener('click', addition);
sub.addEventListener('click', subtraction);
multi.addEventListener('click', multiplication);
div.addEventListener('click', division);
square.addEventListener('click', findSquare);
cube.addEventListener('click', findCube);
reset.addEventListener('click', clearAll);




