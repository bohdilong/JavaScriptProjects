x = 24;// global variable
function sum_1() {// adds x and y variables
    var y = 20;
    document.write(y + x );
}

function sum_2() {// trys to add x and y
    document.write(y + x );
}

function GetDate() {// gets the hour of the day and displays greeting if hour is before 18
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function WorkDay() {// gets day of the week and displays feedback if day is less than 3
    if (new Date().getDay() < 3) {
        document.getElementById("work").innerHTML = "How was your weekend?";
    }
    
}

function GuessingGame() { // gets number from user and displays "Congrats" if input is 7 and displays "Wrong number" if any onter number is givin
    guess = document.getElementById("guess").value;
    if (guess == 7) {
        Answer = "Congrats! You guessed Right!";
    }
    else {
        Answer = "Wrong number! Please guess again.";
    }
    document.getElementById("answer").innerHTML = Answer;
}

function Time_function() { // give response depending on the time of day
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}