// let
let bandau = 0;
bandau = ++bandau;
console.log(`Uzduotis: ${bandau}`);

bandau = ++bandau;
console.log(`Uzduotis: ${bandau}`);

bandau = ++bandau;
console.log(`Uzduotis: ${bandau}`);

// ----------------------------------------

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

console.log('2 Funkcijos uzduotis');

function daugyba(skaicius1, skaicius2) {
    const suma = skaicius1 * skaicius2;
    return suma;
}

console.log(daugyba(1, 2));
console.log(daugyba(3, 2));
console.log(daugyba(1, 3));
