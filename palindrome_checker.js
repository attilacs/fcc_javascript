const alphanumericRegex = /[a-z0-9]/i;

const isAlphanumeric = char => alphanumericRegex.test(char);

const removeSpecialCharacters =
    str => [...str].filter(isAlphanumeric).join("").toLowerCase();

const reverseString = str => [...str].reverse().join("");

const palindrome =
    str =>
        removeSpecialCharacters(str) === reverseString(removeSpecialCharacters(str));

palindrome("eye");