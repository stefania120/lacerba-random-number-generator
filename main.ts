
function generateRandomNumber(min: number, max: number) {
    const randomNubmerGenrator = Math.random();



    return Math.trunc(randomNubmerGenrator * (max - min) + min);
   ;
}

for (let i = 0; i < 10; i++) {
  console.log("Random number:", generateRandomNumber(1, 5));
}
