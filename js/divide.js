// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

const nuo = 0;
const iki = 11;
const daliklis = 3;

let kiekis = 0;

// % - matematinis operatorius, dalybos liekana
for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        // console.log(i, i % daliklis);
        kiekis++;
    }
}

console.log(
    `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis}`
);
