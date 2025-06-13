// start logic when page is loaded
document.addEventListener("DOMContentLoaded", () => {
  // picking up elements
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;

  //   start game function

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }
  //   by this gravity pulls bird down
  let timerId = setInterval(startGame, 20);
  //   jump function

  // jump on space key, 32 emans space key
  function control(e) {
    if (e.keyCode === 32) {
      jump();
    }
  }
  // jumping
  function jump() {
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
    console.log(birdBottom);
  }
  document.addEventListener("keyup", control);

  // genetarion obstacles
  function generateObstacle() {
    let obstacleLeft = 500;
    // here i generate random nubmers so obstacles generate with different height from each other
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";
  }
  generateObstacle();
  //obsticle moving from roght to left
});
