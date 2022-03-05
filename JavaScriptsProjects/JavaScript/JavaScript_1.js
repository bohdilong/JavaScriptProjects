function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "red":
            Color_Output = "Red" + Color_String;
            break;
        case "yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "green":
            Color_Output = "Green" + Color_String;
            break;
        case "blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "purple":
            Color_Output = "Purple" + Color_String;
            break;
            default:
                Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function hello_world_function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

grd.addColorStop(0, "red");
grd.addColorStop(1, "green");

ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100);