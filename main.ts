function RNG(min: number, max: number) {
  const rng = Math.random();
  // rng * (max - min) + min
  // rng = 0 → min // rng = 1 → max
  return Math.trunc(rng * (max - min) + min);
}

function RNGSequence(len: number, min: number, max: number) {
  if (len > max - min) {
    throw new Error(`cannon find ${len} numbers between ${min} and ${max}`);
  }
  const res: number[] = [];
  while (res.length < len) {
    const rn = RNG(min, max);
    if (res.includes(rn)) {
      continue;
    }
    res.push(rn);
  }
  return res;
}

const ruote = [
  "Bari",
  "Cagliari",
  "Firenze",
  "Genova",
  "Milano",
  "Napoli",
  "Palermo",
  "Roma",
  "Torino",
  "Venezia",
  "Nazionale",
];

const estrazioni: { [ruota: string]: number[] } = {};

for (const ruota of ruote) {
  const estrazione = RNGSequence(5, 1, 100);
  estrazioni[ruota] = estrazione;
}

const container = document.getElementById("cnt");
if (container) {
  const pre = document.createElement("pre");
  pre.innerText = JSON.stringify(estrazioni, null, 2);
  container.appendChild(pre);
}
