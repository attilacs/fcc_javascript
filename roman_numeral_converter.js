function convertToRoman(num) {
    const numerals = [{ M: 1000 }, { CM: 900 }, { D: 500 }, { CD: 400 }, { C: 100 }, { XC: 90 }, { L: 50 }, { XL: 40 }, { X: 10 }, { IX: 9 }, { V: 5 }, { IV: 4 }, { I: 1 }]
    let romanNumber = "";
    for (let i = 0; i < numerals.length; i++) {
        const decimal = Object.values(numerals[i]);
        const roman = Object.keys(numerals[i]);
        while (num >= decimal) {
            romanNumber += roman;
            num -= decimal;
        }
    }
    return romanNumber;
}