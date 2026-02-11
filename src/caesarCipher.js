const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function isCharacter(value) {
    return (/^[a-zA-Z]/).test(value) && value.length === 1;
}

function checkCase(char) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return "uppercase";
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        return "lowercase";
    } else {
        return "not a letter";
    }
}

function incCheck(num) {
  return ((num % 26) + 26) % 26;
}

export const caesarCipher = (string, increment) => {
    return string.split('').map((char) => {
        if (!isCharacter(char)) {
            return char;
        } else if (checkCase(char) === 'lowercase') {
            let finalInc = lowercaseAlphabet.indexOf(char) + increment;
            return lowercaseAlphabet[incCheck(finalInc)];

        } else if (checkCase(char) === 'uppercase') {
            let finalInc = uppercaseAlphabet.indexOf(char) + increment;
            return uppercaseAlphabet[incCheck(finalInc)];
        }
    }).join('');
}