/**********************************
 * Ciklo for panaudojimas
 **********************************/
// 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 - 0
// 0 - 4 (1+2+3+4=10)
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

const nuo = 0;
const iki = 4;

let sum = 0;

for (let i = nuo; i <= iki; i++) {
    sum = sum + i;
    // console.log(i, '=>', sum);
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki} suma yra ${sum}`);

// jeigu:
// nuo > iki
// nuo <iki

const nuo2 = 10;
const iki2 = 0;

let sum2 = 0;

if (nuo2 < iki2)
    for (let i = nuo2; i <= iki2; i++) {
        sum2 = sum2 + i;
        // console.log(i, '=>', sum2);
    }
else {
    for (let i = iki2; i <= nuo2; i++) {
        sum2 = sum2 + i;
    }
}

console.log(`Skaičių intervale tarp ${nuo2} ir ${iki2} suma yra ${sum2}`);
