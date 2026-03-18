
function randomNubmerGenrator(min: number, max: number) {
    const randomNubmerGenrator = Math.random();

    // randomNubmerGenrator * (max - min) + min
    // randomNubmerGenrator = 0 => min
    // randomNubmerGenrator = 1 => max

    return Math.trunc(randomNubmerGenrator * (max - min) + min);
   ;
}



function RNGDec(min: number, max: number, precision: number) {
    const multFactor = Math.pow(10, precision);
    return randomNubmerGenrator(min * multFactor, max * multFactor) / multFactor;
}

console.log("Random number with decimals:", RNGDec(0, 10, 1)); // 2.4 
console.log("Random number with decimals:", RNGDec(0, 10, 2)); // 2.45
console.log("Random number with decimals:", RNGDec(5, 10, 5)); // 2.45678
