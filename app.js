// // start logic when page is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   // picking up elements
//   const bird = document.querySelector(".bird");
//   const gameDisplay = document.querySelector(".game-container");
//   const ground = document.querySelector(".ground");

//   let birdLeft = 220;
//   let birdBottom = 100;
//   let gravity = 2;
//   let isGameOver = false;
//   let gap = 400;

//   //   start game function
//   function startGame() {
//     //asrgdgrsrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//     birdBottom -= gravity;
//     bird.style.bottom = birdBottom + "px";
//     bird.style.left = birdLeft + "px";
//   }
//   //   by this gravity pulls bird down
//   let gameTimerId = setInterval(startGame, 20);
//   //   jump function

//   // jump on space key, 32 emans space key
//   function control(e) {
//     if (e.keyCode === 32) {
//       jump();
//     }
//   }
//   // jumping
//   function jump() {
//     if (birdBottom < 500) birdBottom += 50;
//     bird.style.bottom = birdBottom + "px";
//     console.log(birdBottom);
//   }
//   document.addEventListener("keyup", control);
//   // genetarion obstacles
//   function generateObstacle() {
//     let obstacleLeft = 500;
//     // here i generate random nubmers so obstacles generate with different height from each other
//     let randomHeight = Math.random() * 60;
//     let obstacleBottom = randomHeight;
//     const obstacle = document.createElement("div");
//     const topObstacle = document.createElement("div");
//     if (!isGameOver) {
//       obstacle.classList.add("obstacle");
//       topObstacle.classList.add("topObstacle");
//     }
//     gameDisplay.appendChild(obstacle);
//     gameDisplay.appendChild(topObstacle);
//     obstacle.style.left = obstacleLeft + "px";
//     topObstacle.style.left = obstacleLeft + "px";
//     obstacle.style.bottom = obstacleBottom + "px";
//     topObstacle.style.bottom = obstacleBottom + gap + "px";
//     // obsticle moving from roght to left
//     function moveObstacle() {
//       obstacleLeft -= 2;
//       obstacle.style.left = obstacleLeft + "px";
//       topObstacle.style.left = obstacleLeft + "px";
//       // dissapear obsticle when it moves to very right
//       if (obstacleLeft <= -60) {
//         clearInterval(timerId);
//         gameDisplay.removeChild(obstacle);
//         gameDisplay.removeChild(topObstacle);
//       }
//       // stop game when bird reaches ground
//       if (
//         (obstacleLeft > 200 &&
//           obstacleLeft < 280 &&
//           birdLeft === 220 &&
//           (birdBottom < obstacleBottom + 153 ||
//             birdBottom > obstacleBottom + gap - 200)) ||
//         birdBottom === 0
//       ) {
//         gameOver();
//         clearInterval(timerId);
//       }
//     }
//     let timerId = setInterval(moveObstacle, 20);
//     // generate every new obstacles 3 seconds
//     if (!isGameOver) setTimeout(generateObstacle, 3000);
//   }
//   generateObstacle();

//   // I wrote function for game over
//   function gameOver() {
//     clearInterval(gameTimerId);
//     console.log("game over");

//     isGameOver = true;
//     document.removeEventListener("keyup", control);
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");

  let birdLeft = 220;
  let birdBottom = 300;
  let gravity = 1.5;
  let isGameOver = false;
  let gap = 500;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  let gameTimerId = setInterval(startGame, 20);

  function jump() {
    if (birdBottom < 600) birdBottom += 60;
    bird.style.bottom = birdBottom + "px";
  }

  function control(e) {
    if (e.code === "Space") jump();
  }

  document.addEventListener("keydown", control);

  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 200;
    let obstacleBottom = randomHeight;

    const obstacle = document.createElement("div");
    const topObstacle = document.createElement("div");

    if (!isGameOver) {
      obstacle.classList.add("obstacle");
      topObstacle.classList.add("topObstacle");
    }

    gameDisplay.appendChild(obstacle);
    gameDisplay.appendChild(topObstacle);

    obstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";

    topObstacle.style.left = obstacleLeft + "px";
    topObstacle.style.bottom = obstacleBottom + gap + "px";

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + "px";
      topObstacle.style.left = obstacleLeft + "px";

      if (obstacleLeft <= -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
        gameDisplay.removeChild(topObstacle);
      }

      if (
        obstacleLeft > 180 &&
        obstacleLeft < 280 &&
        birdLeft === 220 &&
        (birdBottom < obstacleBottom + 150 ||
         birdBottom > obstacleBottom + gap - 150)
      ) {
        gameOver();
        clearInterval(timerId);
      }

      if (birdBottom <= 0) {
        gameOver();
        clearInterval(timerId);
      }
    }

    let timerId = setInterval(moveObstacle, 20);
    if (!isGameOver) setTimeout(generateObstacle, 3000);
  }

  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    isGameOver = true;
    document.removeEventListener("keydown", control);
    console.log("Game Over");
    document.getElementById("demo").textContent = "Game Over!"
  }
});
