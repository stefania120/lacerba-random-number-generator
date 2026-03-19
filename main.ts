function randomNubmerGenrator(min: number, max: number) {
  const randomNubmerGenrator = Math.random();

  // randomNubmerGenrator * (max - min) + min
  // randomNubmerGenrator = 0 => min
  // randomNubmerGenrator = 1 => max

  return Math.trunc(randomNubmerGenrator * (max - min) + min);
}

function RNGDec( min: number, max: number, precision: number) {
  if(precision < 0) {
    throw new Error('precision must be a positive number');
  }
  if(!Number.isInteger(precision)) {
    throw new Error('precision must be an integer number');
  }
  const multFactor = Math.pow(10, precision);
  return randomNubmerGenrator(min * multFactor, max * multFactor) / multFactor;
}

console.log(RNGDec(5, 10, 2)); 