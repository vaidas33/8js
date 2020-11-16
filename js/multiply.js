/*
SKAICIAI: 
- sveikieji
- desimtainiai
- teigiami/neigiami
- NaN
- Infinity
- -Infinity
*/

function multiply(a, b) {
    // input validation
    // jeigu a nera skaicius, tai rodom klaida
    // jeigu tai nera number
    if (typeof a !== 'number') {
        console.error('ERROR: pirmoji reiksme ne skaiciaus tipo');
        return false;
    }
    if ('' + a === NaN) {
        console.error('ERROR: pirmoji reiksme ne normalus skaicius');
        return false;
    }
    if (typeof b !== 'number') {
        console.error('ERROR: antroji reiksme ne skaiciaus tipo');
        return false;
    }
    // if ('' + a === NaN) {
    if (isNaN(b)) {
        console.error('ERROR: pirmoji reiksme ne normalus skaicius');
        return false;
    }

    // function logic
    const rez = a * b;

    // function result
    return rez;
}

console.log(multiply('labas', 5));
console.log(multiply(5));
console.log(multiply());
console.log(multiply(2, 2));
console.log(multiply(2, 5));
console.log(multiply(-2, 5));
console.log(multiply('labas', 'ok'));
console.log(multiply(2, NaN));
