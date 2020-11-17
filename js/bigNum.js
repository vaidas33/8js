function bigNum(list) {
    // input validation
    if (typeof list !== 'object') {
        return 'Netinkamas tipas';
    }

    const size = list.length;

    if (size === 0) {
        return 'Sarasas yra tuscias';
    }
    // logic
    let biggestNumber = -Infinity;
    for (let i = 0; i < size; i++) {
        const num = list[i];
        // console.log(num);

        // saraso elemento validacija
        if (typeof num !== 'number') {
            continue;
        }

        //logika

        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }

    // post logic validation
    if (biggestNumber === -Infinity) {
        return 'Sarase nerastas nei vienas normalus skaicius';
    }

    //return
    return biggestNumber;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum([]));
console.log(bigNum([-Infinity, NaN, true, false, [], [8], 'ads']));

console.log(bigNum([1]));
console.log(bigNum([1, 2, 3]));
console.log(bigNum([-5, 78, 14, 0, 18]));
console.log(bigNum([-5, -2, -1, -8, -7]));

console.log(bigNum([1, 2, 3, 'labas']));
console.log(bigNum([1, 'labas', 3, 2]));
console.log(bigNum(['labas', 1, 3, 2]));

console.log(bigNum([NaN, 2, 3]));
console.log(bigNum([2, NaN, 3]));
