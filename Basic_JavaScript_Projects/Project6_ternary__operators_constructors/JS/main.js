function Ride_Function() {//compairs user input to Height value of 52 
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52)? "You are too short":"You are tall enough";// displays string based on input
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";// concatenates to string options that is displayed
}

function VotingFunction() {//compairs user input to votingAge value of 18
    var votingAge, CanVote;
    votingAge = document.getElementById("votingAge").value;
    CanVote = (votingAge < 18)? "You are too young":"You are old enough";//displays string based on input
    document.getElementById("Vote").innerHTML = CanVote + " to vote.";// concatenates to string options that is displayed
}

function Vehicle(Make,Model,Year,Color) {//struture for "Vehicle" objects
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");// object instance
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");// object instance
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");// object instance
function myFunction() {// function that concatenates object aspects in to string
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Book(Cover,Genre,Year,Author) {// structure for "Book" objects
    this.Book_Cover = Cover;
    this.Book_Genre = Genre;
    this.Book_Year = Year;
    this.Book_Author = Author;
}
var The_Time_Machine = new Book("Hard-back","Science-Fiction",1895,"H.G Wells");// object instance
var The_Hobbit = new Book("Paper-back","Fantasy",1937,"J.R.R.Tolkien");// object instance
var Pride_and_Prejudice = new Book("Hard-back","realism",1813,"Jane Austin");// object instance
function Booklist() {// function that concatenates object aspects in to string
    document.getElementById("New_and_This").innerHTML = 
    "The Hobbit is a " + The_Hobbit.Book_Genre + " written by " + The_Hobbit.Book_Author + " in " + The_Hobbit.Book_Year + ".";
}

function count_Function() {// nested function that adds 1 to a set number
    document.getElementById("counting").innerHTML = count();
    function count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function AddFunction() {// nested function that adds 2 to a set number
    document.getElementById("nested_Function").innerHTML = x();
    function x() {
        var y = 20;
        function addTwo() {y +=2}
        addTwo();
        return y;
    }
}
