'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = localStorage.getItem('highscore');
document.querySelector('.highscore').textContent = highscore;

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function (e) {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guessNumber) {
      document.querySelector('.message').textContent = 'Please enter a number!';

      //Player wins
    } else if (guessNumber === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct number!';

      document.querySelector('.number').textContent = secretNumber;
      score += 3;
      document.querySelector('.score').textContent = score;

      document.querySelector('.continue').style.display = 'block';

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.color = '#60b347';

      document.querySelector('.guess').textContent = '';

      document.querySelector('.check').disabled = 'true';

      if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
        document.querySelector('.highscore').textContent = highscore;
      }

      //When guess is wrong
    } else if (guessNumber !== secretNumber) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? '🔥 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💀 You lost!';
    document.querySelector('.score').textContent = '0';
    document.querySelector('.guess').value = '';
  }
});

const resetLayout = () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.color = '#222222';
  document.querySelector('.continue').style.display = 'none';
  document.querySelector('.check').removeAttribute('disabled');
};

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function (e) {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  resetLayout();
});

const continueBtn = document.querySelector('.continue');
continueBtn.addEventListener('click', function (e) {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  resetLayout();
});
