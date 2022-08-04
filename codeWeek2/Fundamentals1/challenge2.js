dolphinsScores = [96, 108, 89];
koalasScores = [88, 91, 110];

function calculateAverageScore(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

console.log("Dolphins Average Score:", calculateAverageScore(dolphinsScores));
console.log("Koala Average Score:", calculateAverageScore(koalasScores));

if (
  calculateAverageScore(dolphinsScores) > calculateAverageScore(koalasScores)
) {
  console.log("Dolphins win!");
} else if (
  calculateAverageScore(dolphinsScores) < calculateAverageScore(koalasScores)
) {
  console.log("Koalas win!");
} else {
  console.log("It's a tie!");
}
