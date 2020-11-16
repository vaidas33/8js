// const pirmas1 = 2;
// const antras1 = 2;
// const suma1 = pirmas1 + antras1;
// console.log(`${pirmas1} + ${antras1} = ${suma1}`);

function sumavimas(a, b) {
    const suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
}
sumavimas(2, 5);
sumavimas(22, 55);

function pazymiuVidurkis(list) {
    let suma = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = list[i];
        suma = suma + pazymys;
    }

    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log('Neturi pazymiu...');
    } else {
        console.log(`Vidurkis: ${vidurkis}.`);
    }
}

pazymiuVidurkis([5, 8, 9]);
pazymiuVidurkis([]);
pazymiuVidurkis([5, 8, 9, 7, 10, 10]);

/*
Funkcija duoto skaiciaus kelimas kvadratu
pvz.: 2 -> 4
pvz.: 3 -3 9
*/

function kvadratu(num) {
    const rez = num * num;
    // console.log(num, '->', rez);

    return rez;
}

const duKv = kvadratu(2);
const trysKv = kvadratu(3);

console.log(duKv);
console.log(trysKv);

// console.log(kvadratu(3));
// console.log(kvadratu(1));
// console.log(kvadratu(-5));
