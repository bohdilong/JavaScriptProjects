function ADD() {                
    var addition = 10+10;       
    document.getElementById("add").innerHTML = "10+10=" + addition;//function that adds 10+10
}

function SUB() {
    var subtraction = 20-10;
    document.getElementById("sub").innerHTML = "20-10=" + subtraction;//funtion that subtracts 10 from 20
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
    document.getElementById("remain").innerHTML = "60 devided by 7 has a remainder of " + remainder;// shows the remainder of 60 divided by 7
}

function unary() {
    var negative = 10;
    document.getElementById("neg").innerHTML = "The opposite of +10 is " + -negative;//shows the negavite of 10
}

function AddByOne() {
    var x = 5;
    x++
    document.getElementById("increase").innerHTML = "5+1="+ x;// 1 increment from 5
}

function MinusOne() {
    var y = 7;
    y--
    document.getElementById("decrease").innerHTML = "7 minus 1 is " + y;// 1 decrement from 7
}

window.alert((Math.random() * 50)+10);// displays random between 10 and 50 