/********************************
 * KINTAMIEJI
 *******************************/
// primityvios reiksmes
const age = 99;
console.log(age);
const year = 2020;
console.log(year);
const luckyNumber = 9;
console.log(luckyNumber);

const name = 'Johny';
console.log(name);
const city = 'Abu Dabis';
console.log(city);
const airplane = 'Boeing 747';
console.log(airplane);

// komplekcines reiksmes
const marks = [10, 7, 4, 8, 6];
console.log(marks);
const lottery = [13, 7, 24, 2];
console.log(lottery);

const cities = ['Big Apple (NY)', 'Sudney', 'Lisabona', 'Troskunai', 'Los Angel (LA)'];
console.log(cities);
const names = ['Chuck', 'Bruce', 'Wonder Woman', 'Algimantas', 'Walter', 'Xena'];
console.log(names);

/********************************
 * VEIKSMAI
 *******************************/
const sum = age + year + luckyNumber;
console.log(sum);

// const zodziai = name + ' ' + city + ' ' + airplane;
const zodziai = `${name} ${city} ${airplane}`;
console.log(zodziai);

// marks, lottery
// logika: 1 - 2 + 3 - 4 + 5

// 10 - 7 + 4 - 8 + 6 = 5
// const marksMath = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];
let marksMath = 0;
marksMath = marksMath + marks[0];
marksMath = marksMath - marks[1];
marksMath = marksMath + marks[2];
marksMath = marksMath - marks[3];
marksMath = marksMath + marks[4];
console.log(marksMath);

// 13 - 7 + 24 - 2 = 28
// const lotteryMath = lottery[0] - lottery[1] + lottery[2] - lottery[3] + lottery[4];
let lotteryMath = 0;
lotteryMath = lotteryMath + lottery[0];
lotteryMath = lotteryMath - lottery[1];
lotteryMath = lotteryMath + lottery[2];
lotteryMath = lotteryMath - lottery[3];
console.log(lotteryMath);

// cities, names
let allCities = ``;
allCities = allCities + cities[4];
allCities = allCities + `, ` + cities[3];
allCities = allCities + `, ` + cities[2];
allCities = allCities + `, ` + cities[1];
allCities = allCities + `, ` + cities[0];
console.log(allCities);

/***************************
 * Kintamųjų palyginimas
 ****************************/
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”
// 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// A) kuris didesnis
// B) kuris mažesnis
// C) ar jie lygūs
// D) ar jie nelygūs
// E) kuris didesnis arba lygus
// F)kuris mažesnis arba lygus

const num1 = 6;
const num2 = 3;
const num3 = 5;
if (num1 > num2) {
    console.log('Pomidoras');
} else if (num1 > num3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (num3 < num2) {
    console.log('Pomidoras');
} else {
    if (num3 < num1) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kita karta...');
    }
}

// 2. Išvesti teksto tipo kintamųjų ilgius

const text = 'Labas';
const text2 = 'vakaras';
console.log(`${text.length}`);
console.log(`${text2.length}`);

// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

if (text.length >= text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (text.length <= text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (text.length === text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

// 4. Išvesti sąrašo tipo kintamųjų ilgius

const sarasas = ['Vilnius', 'Kaunas', 'Klaipeda'];
console.log(sarasas[0].length);
console.log(sarasas[1].length);
console.log(sarasas[2].length);

// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

if (sarasas[0].length >= sarasas[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (sarasas[2].length <= sarasas[1].length) {
    console.log('Pomidoras');
} else if (sarasas[2].length <= sarasas[0].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

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

console.log('1 For ciklo uzduotis (0-0)');

for (let i = 0; i <= 0; i++) {
    console.log(i);
}

// let interval = 0;

// for (let i = 0; i <= 4; i++) {
//     const cccc = cccc[i];
//     // interval = interval + i;
//     console.log(ccc);
// }

console.log(`-------------------------`);
