document.write(typeof "basketball");//displays "string" type
document.write("13" + 5);//concatenates to 135
document.write(isNaN("45"));// displays as false because "45" is a number
document.write(isNaN("This is a number"));// displays as true because "This is a number" is not a number

function Inf(){ //function that displays infinity
    var x = (2e310)
    document.getElementById("infinity").innerHTML=x;
}

function negInf(){// function that displays negative infinity
    var y = (-2e310)
    document.getElementById("-infinity").innerHTML=y;
}

document.write(20<=15);//compairs 20 and 15 and displays false
document.write(6>3);//compairs and displays true because 6 is greater than 3
console.log(2+2);// adds 2 and 2 and displays 4 in the console
console.log(20 > 40)//compairs and displays false in the console because 20 is not greater than 40
console.log((2*7)==(42/3));//compairs the product of 2 and 7 and the quotent of 42 and 3 and displays true in the console
console.log((6*8)==9)// compairs the product of 6 and 8 and the number 9 and displays false in the console

a = 30
b = 30
console.log(a===b);// compairs the value of a and b; also compairs the data type and displays true in the console because both are the same 
console.log("seven"===7);// compairs  the string "seven" and the integer 7 and displays false in the console because the data types are different
console.log("8"===8);// compairs  the string "8" and the integer 8 and displays false in the console because the data types are different
console.log(9===4);// compairs the integer 9 and the integer 4 and displays false because the two integers are different
console.log((7<9)&&(6>=4));// compairs 7<9 and 6>=4 and displays true in the console because both are true
console.log((8>10)&&(6<8));// compairs 8>10 and 6<8 and displays false in the console because not both are true   
console.log((7<=8)||(9<4));// compairs 7<=8 and 9<4 and displays true in the console because one not both are true 
console.log((1>4)||(5<=3));// compairs 1>4 and 5<=3 and displays false in the console because both are false

function notFunction() { // this function displays 20>10 as false
    document.getElementById("Not").innerHTML = !(20>10);
}

function NotAgain() { // this function displays 5>10 as true 
    document.getElementById("not_not").innerHTML = !(5>10);
}