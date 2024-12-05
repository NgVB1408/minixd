const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');

let score = 0;
let isJumping = false;

document.addEventListener('keydown', () => {
  if (!isJumping) jump();
});

function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).bottom);
    if (dinoBottom >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (dinoBottom <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        }
        dino.style.bottom = `${dinoBottom - 5}px`;
        dinoBottom -= 5;
      }, 20);
    } else {
      dino.style.bottom = `${dinoBottom + 5}px`;
      dinoBottom += 5;
    }
  }, 20);
}

setInterval(() => {
  const cactusLeft = parseInt(window.getComputedStyle(cactus).left);
  const dinoBottom = parseInt(window.getComputedStyle(dino).bottom);

  if (cactusLeft < 70 && cactusLeft > 50 && dinoBottom <= 20) {
    alert(`Game over! Your score is ${score}`);
    score = 0;
  } else {
    score++;
    scoreDisplay.textContent = `Điểm: ${score}`;
  }
}, 50);

