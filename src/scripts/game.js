import Order from "./order";
import * as gameUtils from "./gameUtil";

class Game {
  constructor(ctx) {
    (this.ctx = ctx),
      (this.level = 1),
      (this.phase = 1),
      (this.score = 100),
      (this.multiplier = 1);
    this.gameRunning = false;
    this.currentOrder = null; // [["drinksize", "small", etc.], ["drinksize", "medium", etc.]]
    this.mainKeyBinds();
    this.inputKeys = [];
    this.currentOrderPlayed = null; // ["drinksize", "small", etc.]
    this.isPaused = null;
    this.scoreBoardActive = false;
    this.timer = null; // Timer in seconds
    this.actualTimer = null; // Actual Timer
    this.soundPaused = true;
    this.myBeatPaused = true;
  }

  //Increment functions
  incrementCurrentLevel() {
    this.level += 1;
    this.multiplier = 1;
    if (this.level % 7 === 1 && this.level !== 1) {
      this.incrementPhase();
    }
  }

  incrementMultiplier() {
    this.multiplier += 1;
  }

  resetMultiplier() {
    this.multiplier = 1;
  }

  incrementScore() {
    this.score += 5;
  }

  incrementPhase() {
    this.phase += 1;
  }

  decrementScore() {
    this.score -= 5 * this.multiplier;
    this.incrementMultiplier();
  }

  // ScoreBoard
  showScoreBoard() {
    const scoreBoard = document.getElementById("scoreboard-div");

    const showPhase = document.createElement("p");
    showPhase.innerText = `Phase: ${this.phase}`;

    const showLevel = document.createElement("p");
    showLevel.innerText = `Level: ${this.level}`;

    const showScore = document.createElement("p");
    showScore.innerText = `Sales: ${this.score}`;

    const showTimer = document.createElement("p");
    if (this.timer >= 10) {
      showTimer.innerText = `timer: 0:${this.timer}`;
    } else {
      showTimer.innerText = `timer: 0:0${this.timer}`;
    }

    scoreBoard.appendChild(showPhase);
    scoreBoard.appendChild(showLevel);
    scoreBoard.appendChild(showScore);
    scoreBoard.appendChild(showTimer);
  }

  removeScoreBoard() {
    const scoreBoard = document.getElementById("scoreboard-div");
    if (scoreBoard.hasChildNodes()) {
      for (let i = scoreBoard.childNodes.length - 1; i >= 0; i--) {
        scoreBoard.removeChild(scoreBoard.childNodes[i]);
      }
    }
  }

  // Timer functions
  setOrderTime() {
    this.timer = this.phase > 1 ? 10 : 1000;
  }

  timeClock() {
    if (this.timer > 0 && this.gameRunning && !this.isPaused) {
      this.timer -= 1;
    } else if (this.timer < 1 || this.score <= 0) {
      // this.gameRunning = false;
      this.stopGame();
    }
  }

  setTimer() {
    this.actualTimer = setInterval(this.timeClock.bind(this), 1000);
  }

  // Key Binds
  mainKeyBinds() {
    // Main Key-down events
    window.addEventListener("keydown", (e) => this.handleUserInput(e));
  }

  // Sound
  turnOnSound() {
    const airpods = document.getElementById("bangers");
    this.soundPaused = false;
    airpods.play();
    this.pauseMyBeat();
  }

  turnOffSound() {
    const airpods = document.getElementById("bangers");
    this.soundPaused = true;
    airpods.pause();
    this.pauseMyBeat;
  }

  playMyBeat() {
    const myBeat = document.getElementById("mybeat");
    this.myBeatPaused = false;
    myBeat.play();
    this.turnOffSound();
  }

  pauseMyBeat() {
    this.myBeatPaused = true;
    const myBeat = document.getElementById("mybeat");
    myBeat.pause();
  }

  //-------------GAME LOGIC ------------------------------------------------------

  // Start, Game loop;
  gameLoop() {
    if (this.gameRunning === true && this.score > 0) {
      this.removeScoreBoard();
      this.showScoreBoard();
      requestAnimationFrame(this.gameLoop.bind(this));
    } else if (
      this.gameRunning === true &&
      (this.score <= 0 || this.timer <= 0)
    ) {
      this.stopGame();
    }
  }

  // Start the game;
  startGame() {
    gameUtils.removeFilter();
    gameUtils.removeGOScreen();
    gameUtils.removeStartScreen();
    this.gameRunning = true;
    this.createOrders();
    this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder);
    gameUtils.printOrder(this.currentOrderPlayed);
    this.turnOnSound();
    this.gameLoop();
  }

  // Stop the game;
  stopGame() {
    this.resetStats();
    gameUtils.removeOrderComponents();
    this.removeScoreBoard();
    gameUtils.showGOScreen();
    gameUtils.playGameOverSound();
    clearInterval(this.actualTimer);
  }

  // Pause and Resume Game;
  togglePause() {
    const bodyTag = document.querySelector("body");
    if (!this.gameRunning) {
      gameUtils.removePauseScreen();
      this.gameRunning = true; // unpause
      bodyTag.removeAttribute("id");
      this.isPaused = false;
      this.showScoreBoard();
      gameUtils.printOrder(this.currentOrderPlayed);
      gameUtils.addGreensBack(this.inputKeys);
      this.setTimer();
    } else {
      // pause
      gameUtils.showPauseScreen();
      bodyTag.setAttribute("id", "game-lost");
      this.removeScoreBoard();
      gameUtils.removeOrderComponents();
      this.gameRunning = false;
      this.isPaused = true;
      clearInterval(this.actualTimer);
    }
  }

  resetStats() {
    (this.level = 1),
      (this.phase = 1),
      (this.score = 100),
      (this.multiplier = 1);
    this.gameRunning = false;
    this.currentOrder = null; // [["drinksize", "small", etc.], ["drinksize", "medium", etc.]]
    this.inputKeys = [];
    this.currentOrderPlayed = null;
    this.isPaused = null;
    this.timer = null;
  }

  // Making the full order list every level
  createOrders() {
    const newOrder = new Order(this.level, this.phase);
    this.currentOrder = newOrder.generateRandomOrders();
  }

  // event handler
  handleUserInput(e) {
    if (!this.gameRunning) {
      if (e.code === "Space" && this.isPaused === null) {
        this.startGame(); // toggles sound already
        this.setOrderTime(); // HERE
        this.setTimer(); // HERE
      } else if (e.code === "KeyP" && this.isPaused) {
        this.togglePause();
        this.gameLoop();
      } else if (e.code === "Digit0" && this.isPaused) {
        this.stopGame();
        gameUtils.removePauseScreen();
        gameUtils.removeFilter();
        gameUtils.removeGOScreen();
        gameUtils.showStartScreen();
      } else if (e.code === "KeyM" && !this.soundPaused) {
        this.turnOffSound();
      } else if (e.code === "KeyM" && this.soundPaused) {
        this.turnOnSound();
      } else if (e.code === "KeyN" && this.myBeatPaused) {
        this.playMyBeat();
      } else if (e.code === "KeyN" && !this.myBeatPaused) {
        this.pauseMyBeat();
      }
    } else {
      if (e.code === "KeyP" && this.isPaused !== true) {
        this.togglePause();
      } else if (Object.keys(Order.drinkDictionary).includes(e.code)) {
        this.inputKeys.push(e.code); // PUSHES KEYCODE INTO INPUTKEYS ARRAY
        if (!gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) {
          gameUtils.playErrorSound();
          this.decrementScore();
          this.inputKeys = [];
          gameUtils.removeOrderComponents();
          gameUtils.printOrder(this.currentOrderPlayed);
        } else if (
          gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys) &&
          this.inputKeys.length === this.currentOrderPlayed.length
        ) {
          // ^ if compared arrays are the same, and key input and COP length are the same => move on to next array
          this.incrementScore(); // increment score bc we put in the right key input.
          this.setOrderTime(); // HEREEEEEEE !!!
          if (this.currentOrder.length !== 0) {
            // if your current level's full order is not done. // move on to the next array.
            gameUtils.playSound();
            this.inputKeys = [];
            gameUtils.removeOrderComponents();
            this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder);
            gameUtils.printOrder(this.currentOrderPlayed);
            gameUtils.addGreensBack(this.inputKeys);
          } else {
            // if your current level's full order is done. // move on to the next level
            gameUtils.playSound();
            this.inputKeys = [];
            this.createOrders();
            this.resetMultiplier();
            this.incrementCurrentLevel();
            gameUtils.removeOrderComponents();
            this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder);
            gameUtils.printOrder(this.currentOrderPlayed);
          }
        } else if (
          gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys) &&
          this.inputKeys.length !== this.currentOrderPlayed.length
        ) {
          // ^ if compared arrays are the same, and key input and COP length are NOT the same => WE'RE STILL IN THE SAME ARRAY'S TURN
          gameUtils.removeOrderComponents();
          gameUtils.printOrder(this.currentOrderPlayed);
          gameUtils.addGreensBack(this.inputKeys);
        }
      } else if (e.code === "KeyM" && !this.soundPaused) {
        this.turnOffSound();
      } else if (e.code === "KeyM" && this.soundPaused) {
        this.turnOnSound();
      } else if (e.code === "KeyN" && this.myBeatPaused) {
        this.playMyBeat();
      } else if (e.code === "KeyN" && !this.myBeatPaused) {
        this.pauseMyBeat();
      }
    }
  }
}

export default Game;
