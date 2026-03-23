function randomNubmerGenrator(min, max) {
    var randomNubmerGenrator = Math.random();
    // randomNubmerGenrator * (max - min) + min
    // randomNubmerGenrator = 0 => min
    // randomNubmerGenrator = 1 => max
    return Math.trunc(randomNubmerGenrator * (max - min) + min);
}
function RNGDec(min, max, precision) {
    var multFactor = Math.pow(10, precision);
    return randomNubmerGenrator(min * multFactor, max * multFactor) / multFactor;
}
var myArr = RNGDec(5, 0, -1);
