function dictionary(){
    var vehicle = {
        make: "ford",
        model: "GT 40",
        style: "sports car",
        color: "blue",
        year: "1965",
        engine: "V8",
    };
    delete vehicle.color;
    document.getElementById("Dictionary").innerHTML = vehicle.color;
}