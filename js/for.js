const kiek = 5;

for (let i = 0; i <= kiek; i++) {
    //logika (i++ arba i = i + 1)
    console.log(i);
}

console.log('----------');

/*
Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?
*/

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    pajamos = pajamos + alga;
    //pajamos = i * alga;
    console.log(`${i}) ${pajamos} pinigu`);
}

console.log('----------');

/*
Parasyti skaicius nuo 8 iki 4 imtinai.
*/

for (let i=8; i>=4; i--) {
    console.log(i);
}

console.log('----------');

/*
Isvardinti ciferblato skaicius nuo duotos valandos iki galo.
*/

const valanda = 10;
const maxValandu = 12;

for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + ' val');
}

console.log('----------');

/*
Duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
Spausdiname: "Aplankiau: Miesto pavadinimas."
*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];

for (let i = 0; i < miestai.length; i++) {
    const miestoPavadinimas = miestai[i];
    // console.log(`Aplankiau ${miestai[i]}.`);
    console.log(`Aplankiau ${miestoPavadinimas}.`);
}

console.log('----------');

/*
Isvardinti saraso narius is galo
*/

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = abc.length - 1; i >= 0; i--) {
    console.log(abc[i]);
}

console.log('----------');

// -----------------
const text = 'labas';

for (let i=0; i < text.length; i++) {
    console.log(text[i]);
}

console.log(text.length);

/*
Duodamas zodis ir is jo reikia isrinkti kas antra raide ir isspausdinti kas gaunasi.
pvz.: abcdef -> bdf
pvz.:pomidoras (2) -> oioa
pvz.:pomidoras (3) -> mos
pvz.:pomidoras (4) -> ia
pvz.:pomidoras (5) -> d
*/
console.log('----------');

const zodis = 'abcdef';
let kiekis = '';
console.log(zodis);

for (let i = 1; i < zodis.length; i = i + 2) {
    const raide = zodis[i];
    kiekis = kiekis + zodis[i];
    // console.log(zodis[i]);
    console.log(kiekis);
}

console.log('----------');

const zodis2 = 'pomidoras';
const step = 3;
let rez = '';

for (let i = step - 1; i < zodis2.length; i = i + step) {
    const raide2 = zodis2[i];
    rez = rez + raide2;
}

console.log(rez);