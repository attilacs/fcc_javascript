const firstCharCode = 65;
const lastCharCode = 90 + 1;
const shiftedPlaces = 13;
const charRegex = /[A-Z]/;

const rot13 = encodedString => [...encodedString].map(decodeChar).join("");

function decodeChar(char) {
    if (charRegex.test(char)) {
        const encodedCharCode = char.charCodeAt(0);
        const tmpCharCode = encodedCharCode - firstCharCode - shiftedPlaces;
        return tmpCharCode < 0 ?
            String.fromCharCode(tmpCharCode + lastCharCode) :
            String.fromCharCode(encodedCharCode - shiftedPlaces);
    }
    return char;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC")); //"FREE CODE CAMP"