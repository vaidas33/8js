// Funkcija kuri kiekvienu kartu gauna 2 skaicius, o rezultatas pirmas skaicius pakelta laipsniu antru sakicium

function laipsnis(base, power) {
    let rez = 1;

    for (let i = 1; i < power; i++) {
        rez = rez * base;
    }
    return rez;
}

const kubas2 = laipsnis(2, 3);
console.log(kubas2, '->', 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024);

const minus5 = laipsnis(-5, 3);
console.log(minus5, '->', -125);

console.log('-------------------');

function faktorialas(n) {
    let rez = 1;

    for (let i = 1; i <= n; i++) {
        rez = rez * i;
    }
    return rez;
}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);
const f3 = faktorialas(3);

console.log(f0, '->', 1);

console.log('-------------------');

function lyginisFaktorialas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            rez = rez * i;
        }
    }
    return rez;
}

const lf0 = lyginisFaktorialas(0);
const lf1 = lyginisFaktorialas(1);
const lf2 = lyginisFaktorialas(2);

console.log(lf0);
