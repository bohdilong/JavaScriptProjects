function CatString() { // concatenates sen_1 through 4 in to full sentence
    var sen_1 = "Here is "; // part of sentence
    var sen_2 = "a sentence "; // part of sentence
    var sen_3 = "that I have "; // part of sentence
    var sen_4 = "concatenated.";// part of sentence
    var full_sentence = sen_1.concat(sen_2,sen_3,sen_4); // concatenates parts together
    document.getElementById("SenCat").innerHTML = full_sentence; // displays sentence
}

function slice_Method() { // cuts out and displays a specified section of the sentence
    var sentence = "Whatever can happen at any time can happen today.";// sentence to be used
    var section = sentence.slice(-6,-1);// specifies the letter
    document.getElementById("slice").innerHTML = section; // displays chosen letters
}

function Upper(){ // changes and displays string as all uppercase letters
    var y = "hello world"// original string to be manipulated
    document.getElementById("upper").innerHTML = y.toUpperCase(); // displays uppercase string
}

function StringMethod() {// changes and displays integer as sting
    var z = 34; // original integer
    document.getElementById("int2str").innerHTML = z.toString()// displays string
}

function PrecMethod() {// get and displays a specified amount of digits of a number
    var p = 11385.9303953434534598;// original integer
    document.getElementById("nailDriver").innerHTML = p.toPrecision(7);// displays the first 7 digits of the original number
}

function Fix() { // displays total amount of digits to be shown; in this case it would add 00 to far right of the decimal point
    var num = 54.782; // original number
    document.getElementById("strfix").innerHTML = num.toFixed(7); // displays new number
}

function PrimValue() {
    var num = "23.45"
    document.getElementById("primNum").innerHTML = num.valueOf();
}