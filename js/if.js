/*
Palyginimo salyga (if):
galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
NAUDOTINI: >, <, >=, <=, ===, !==
nenaudotini: ==, !=
*/

/*
Galimos strukturos:
if () {}
if () {} else {}
if () {} else {} ... else if {}
if () {} else {} ... else if {} else {}
*/

const accountBalance = 200;
const transfer = 200;

if (accountBalance < transfer){
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

if (accountBalance >= transfer){
    console.log('Banko zinute: pavedimas padarytas.');
}

if (accountBalance >= transfer){
    console.log('Banko zinute: pavedimas padarytas.');
} else {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

const akys = 'zalios';

if (akys === 'melynos') {
    console.log('Grazios sirdies zmogus');
} else if (akys === 'zalios') {
    console.log('Melagiai...');
} else if (akys === 'raudonos') {
    console.log('Programuotojas..');
} else {
    console.log('A tu turi akis???');
}

console.log('Pirmas bandymas baigtas. Kas toliau?...');


const akys2 = 'zalios';

if (akys2 === 'melynos') {
    console.log('Grazios sirdies zmogus');
} else {
    if (akys2 === 'zalios') {
        console.log('Melagiai...');
    } else {
        if (akys2 === 'raudonos') {
            console.log('Programuotojas..');
        } else {
            console.log('A tu turi akis???');
        }
    }
}

console.clear();

const pirmas = 8;
const antras = 88;

if (pirmas === antras) {
    console.log(true);
} else {
    console.log(false);
}

// ascii table
const zodis1 = 'a';
const zodis2 = 'b';

if (zodis1 === zodis2) {
    console.log(true);
} else {
    console.log(false);
}