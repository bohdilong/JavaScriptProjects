function ADD() {                
    var addition = 10+10;       
    document.getElementById("add").innerHTML = "10+10=" + addition;
}

function SUB() {
    var subtraction = 20-10;
    document.getElementById("sub").innerHTML = "20-10=" + subtraction;
}

function MULTI() {
    var multipulcation = 10*10;
    document.getElementById("multi").innerHTML = multipulcation;  //trying a different way to display math problem
}

function DIVIDE() {
    var division = 30/5;
    document.getElementById("divide").innerHTML = division;  //trying a different way to display math problem
}

function modulusOperator() {
    var remainder = 60%7;
    document.getElementById("remain").innerHTML = "60 devided by 7 has a remainder of " + remainder;
}

function unary() {
    var negative = 10;
    document.getElementById("neg").innerHTML = "The opposite of +10 is " + -negative;
}

function AddByOne() {
    var x = 5;
    x++
    document.getElementById("increase").innerHTML = "5+1="+ x;
}

function MinusOne() {
    var y = 7;
    y--
    document.getElementById("decrease").innerHTML = "7 minus 1 is " + y;
}

window.alert(Math.random(),10 * 50);