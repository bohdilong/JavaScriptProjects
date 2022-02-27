function dictionary(){//function with multiple values
    var vehicle = {
        make: "ford",
        model: "GT 40",
        style: "sports car",
        color: "blue",
        year: "1965",
        engine: "V8",
    };
    delete vehicle.color;// deleteing color value
    document.getElementById("Dictionary").innerHTML = vehicle.color;
}