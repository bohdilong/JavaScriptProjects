var x = 24;// global variable
function sum_1() {// adds x and y variables
    var y = 20;
    document.write(y + x );
}

function sum_2() {// trys to add x and y
    document.write(y + x );
}

function GetDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function WorkDay() {
    if (new Date().getDay() < 3) {
        document.getElementById("work").innerHTML = "How was your weekend?";
    }
    if (new Date().getDay() >= 4) {
        document.getElementById("work").innerHTML = "what are you doing here on your day off?"
    }
}