function randomNubmerGenrator(min: number, max: number) {
  const randomNubmerGenrator = Math.random();

  // randomNubmerGenrator * (max - min) + min
  // randomNubmerGenrator = 0 => min
  // randomNubmerGenrator = 1 => max

  return Math.trunc(randomNubmerGenrator * (max - min) + min);
}

function RNGSequence(len: number, min: number, max: number) {
  const res: number[] = [];
  while (res.length < len) {
    const rn = randomNubmerGenrator(min, max);
    if (res.includes(rn)) {
    continue;
    }
    res.push(rn);
  }
  return res;
}

const myArr = RNGSequence(10, 0, 100);
console.log(myArr);