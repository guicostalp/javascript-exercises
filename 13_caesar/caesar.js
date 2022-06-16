const caesar = function(phrase, index) {

    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    "W", "X", "Y", "Z"];


    findPosition = alphabet.indexOf(phrase);

    newPosition = alphabet[findPosition + index];

    return newPosition


};

// Do not edit below this line
module.exports = caesar;