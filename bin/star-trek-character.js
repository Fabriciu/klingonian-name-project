'use strict';
var Alphabet = require(__dirname + '/../data/pIqaD-klingon-alphabet');

exports.getNameInHexa = function (name) {
    var hexadecimalName = "";
    var alphabet = Alphabet.alphabet;
    var hexadecimalLetter = "";
    var stack = "";

    for (var i = 0; i < name.length;) {
        var letter = "";
        stack = "";
        var j = i;
        var addI = 0;

        if (name[j] == ' ') {
            stack = "0x0020";
            addI = 1;
        } else {
            for (var l = 0; l < 3; l++) {
                if (name[j] !== undefined) {
                    letter += name[j];
                    hexadecimalLetter = getFromAlphabet(alphabet, letter, l);
                    if (hexadecimalLetter !== "") {
                        stack = hexadecimalLetter;
                        addI = l + 1;
                    }
                    j++;
                }
            }
        }
        
        i = i + addI;

        if (stack !== "")
            hexadecimalName += stack + " ";
        else {
            break;
        }

    }

    console.log(hexadecimalName);
};

function getFromAlphabet(alphabet, letter, index) {

    if (alphabet[letter] != undefined) {
        return alphabet[letter].hexa;
    } else if (index == 0 && alphabet[letter.toLowerCase()] != undefined) {
        return alphabet[letter.toLowerCase()].hexa;
    } else if (index == 0 && alphabet[letter.toUpperCase()] != undefined) {
        return alphabet[letter.toUpperCase()].hexa;
    }

    return "";
}