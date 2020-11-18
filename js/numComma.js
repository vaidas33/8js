function numComma(number, position) {
    // return parseFloat(number.toFixed(position));
    let ats = number;
    // return number;

    // 3.1415  (2)
    // 314.15  * 10**2
    // 314     round
    // 3.14    / 10**2

    const power = 10 ** position;
    ats = number * 10 ** position;
    ats = Math.floor(ats);
    ats /= 10 ** position;

    return ats;
}

const num = 3.1415;
const rez = numComma(num, 2);

console.log(rez, '->', 3.14);
