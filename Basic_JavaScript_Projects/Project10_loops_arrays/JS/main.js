function Call_loop() {//prints 1 through 5
    var digit = "";
    var counter = 1;// counter to see how many times we have gone through the loop
    while (counter < 6) {// compairs counter to loop limit
        digit += "<br>" + counter;//digit = digit + counter
        counter++;// adds one to counter
    }
    document.getElementById("loop").innerHTML = digit;
}

function strlen() { // shows how many characters are in the string "Hello World" including spaces
    var str = "Hello World"; // string "Hello World"
    document.getElementById("length").innerHTML = str.length; // counts characters in between ""
}

var instruments = ["guitar","drums","piano","bass","violin","trumpet","flute"];// list of instruments
var content = "";
var y;
function for_loop(){ // loop function that displays list items one at a time 
    for (y = 0; y < instruments.length; y++) { // compairs item index to total index count, displays it, and adds 1 
    content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function array_Function() { // array of object properties and displays chosen property in a string 
    var books = [];
    books [0] = "Harry Potter";
    books [1] = "War of the Worlds";
    books [2] = "Dune";
    books [3] = "Count of Monte Christo";
    document.getElementById("Array").innerHTML = "My favorite book is " + books[2] + "."; 
}

function constant_function() {// showcases const keyword; function prints list items in a string
    const musical_instrument = {type:"guitar", brand:"Fender", color:"black"};
    document.getElementById("constant").innerHTML = "MY favorite instrument is a " + musical_instrument.color + " " 
    + musical_instrument.brand + " " + musical_instrument.type + ".";
}

var a = "apple"; // showcases the differents between var and let
document.write(a);
{
    let a = "orange";
    document.write("<br>" + a);

}
document.write("<br>" + a);

document.getElementById("demo").innerHTML = Myfunc("Jose");

function Myfunc(name) { // showcases return statement; function prints "hello Jose"
    return "hello " + name;
}

let Book = { // showcase of "this" statement; function uses "this" statement to add Book properties into sting
    name: "The Invisible Man",
    author: "H.G. Wells",
    cover: "hard-back",
    year: "1897",
    description: function () {
        return "One of my favorite is " + this.name + " written by " + this.author + " in the year " + this.year;
    }
};
document.getElementById("THIS").innerHTML = Book.description() 

let num = "";
let i = 0;
let num2 = "";

for (let x = 0; x < 5; x++) { //showcases the use of break statement; for loop will iterate 0 through 5 but stopping at three where we put the break
    if (x === 3) break;
    num += x + "<br>";

document.getElementById("BREAK").innerHTML = num;
}

while (i < 5) {// showcases the use of continue statement; while loop will check if i is less than 5, adds 1 to i, skips 3, and continues to 4
    i++;
    if (i===3) continue;
    num2 += i +"<br>";

document.getElementById("CONTINUE").innerHTML = num2;
}