var Alphabet = require(__dirname + '/../data/pIqaD-klingon-alphabet');

exports.getNameInHexa = function () {
    //var name = "Uhura";
    //var name = "chab";
    var name = "tlHch";
    var hexadecimalName = "";
    var alphabet = Alphabet.alphabet;
    var hexadecimalLetter = "";
    var stack = "";

    for (var i = 0; i < name.length;) {
        var letter = name[i];
        console.log("Read from name: " + letter);
        console.log("Read from alphabet: " + alphabet[letter]);

        //hexadecimalLetter = getFromAlphabet(alphabet, letter);
        letter = "";
        stack = "";
        var j = i;
        var addI = 0;

        if (name[j] === " ") {
            stack = "0x0020";
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
        console.log("addI " + addI);
        i = i + addI;

        if (stack !== "")
            hexadecimalName += stack + " ";
        else {
            console.log("Invalid input");
            break;
        }

    }

    console.log("The hexadecimal value for the name " + name + " is " + hexadecimalName);
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