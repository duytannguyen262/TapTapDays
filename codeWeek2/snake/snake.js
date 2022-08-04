//board
let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

//food
let foodX;
let foodY;

let playing = true;
let speed = 100;
let score = 0;
let highscore = localStorage.getItem("highscore-snake");
document.querySelector(".highscore-number").innerHTML = highscore;

//enemy
let enemyX;
let enemyY;

let updateInterval = setInterval(update, speed);
const difficultyEl = document.getElementById("difficulty");
function changeDifficulty(e) {
  e.target.blur();
  switch (e.target.value) {
    case "easy":
      speed = 100;
      break;
    case "medium":
      speed = 75;
      break;
    case "hard":
      speed = 50;
      break;
    default:
      speed = 100;
      break;
  }
  clearInterval(updateInterval);
  updateInterval = setInterval(update, speed);
}
difficultyEl.addEventListener("change", (e) => changeDifficulty(e));

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");
  setInterval(spawnEnemy, 5000);
  placeFood();
  document.addEventListener("keyup", changeDirection);
};

function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != blockSize) {
    velocityX = 0;
    velocityY = -blockSize;
  } else if (e.code == "ArrowDown" && velocityY != -blockSize) {
    velocityX = 0;
    velocityY = blockSize;
  } else if (e.code == "ArrowLeft" && velocityX != blockSize) {
    velocityX = -blockSize;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -blockSize) {
    velocityX = blockSize;
    velocityY = 0;
  }
}

function update() {
  if (!playing) {
    return;
  }
  context.fillStyle = "#181825";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "#4cffd7";
  context.shadowColor = "#4cffd7";
  context.shadowBlur = 10;
  context.fillRect(foodX, foodY, blockSize, blockSize);

  context.fillStyle = "#ff2600";
  context.shadowColor = "#ff2600";
  context.shadowBlur = 10;
  context.fillRect(enemyX, enemyY, blockSize, blockSize);

  if (snakeX === enemyX && snakeY === enemyY) {
    playing = false;
    alert("Game Over");
  }
  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    score++;
    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore-snake", highscore);
      document.querySelector(".highscore-number").innerHTML = highscore;
    }
    document.querySelector(".score-number").innerHTML = score;

    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "#e1e1e1";
  context.shadowBlur = 0;
  snakeX += velocityX;
  snakeY += velocityY;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  if (snakeX < 0) {
    snakeX = blockSize * cols;
  } else if (snakeX > blockSize * cols) {
    snakeX = -blockSize;
  } else if (snakeY < 0) {
    snakeY = blockSize * rows;
  } else if (snakeY > blockSize * rows) {
    snakeY = -blockSize;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  //Game over
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      playing = false;
      alert("Game Over");
    }
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function spawnEnemy() {
  enemyX = Math.floor(Math.random() * cols) * blockSize;
  enemyY = Math.floor(Math.random() * rows) * blockSize;
  if (enemyX === snakeX && enemyY === snakeY) {
    spawnEnemy();
  }
}

const reset = () => {
  score = 0;
  playing = true;
  btnPause.innerHTML = "Pause";
  placeFood();
  document.querySelector(".score-number").innerHTML = 0;

  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  velocityX = 0;
  velocityY = 0;

  snakeBody = [];
};

const btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", reset);

const btnPause = document.querySelector(".pause");
btnPause.addEventListener("click", () => {
  if (playing) {
    playing = false;
    btnPause.innerHTML = "Resume";
  } else {
    playing = true;
    btnPause.innerHTML = "Pause";
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playing = false;
    btnPause.innerHTML = "Resume";
  }
});
