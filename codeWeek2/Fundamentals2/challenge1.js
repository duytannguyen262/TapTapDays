dolphinsScores = [44, 23, 71];
koalasScores = [65, 54, 49];

const calcAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

const avgDolphins = calcAverage(dolphinsScores);
const avgKoalas = calcAverage(koalasScores);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas) {
    console.log("Dolphins win!");
  } else if (avgDolphins < avgKoalas) {
    console.log("Koalas win!");
  } else {
    console.log("It's a tie!");
  }
};

checkWinner(avgDolphins, avgKoalas);
