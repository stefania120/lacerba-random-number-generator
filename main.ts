function randomNubmerGenrator(min: number, max: number) {
  const randomNubmerGenrator = Math.random();

  // randomNubmerGenrator * (max - min) + min
  // randomNubmerGenrator = 0 => min
  // randomNubmerGenrator = 1 => max

  return Math.trunc(randomNubmerGenrator * (max - min) + min);
}

function RNGSequence(len: number, min: number, max: number) {
  const res: number[] = [];
  for (let i = 0; i < len; i++) {
    res.push(randomNubmerGenrator(min, max));
  }
  return res;
}

const myArr = RNGSequence(100, 5, 10);
console.log(myArr);
