function validateForm() {
    let x = document.form["myform"]["fname"]["lname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}