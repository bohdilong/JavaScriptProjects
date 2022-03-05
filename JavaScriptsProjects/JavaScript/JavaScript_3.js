function displaytype(character) {
    var charactertype = character.getAttribute("data-character_type");
    alert(charactertype + " is in the" + character.innerHTML + " universe!");
}