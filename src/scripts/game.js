import Order from "./order";
import * as gameUtils from "./gameUtil"

class Game {
    constructor(ctx) {
        this.ctx = ctx,
        this.level = 1,
        this.phase = 1,
        this.score = 100,
        this.multiplier = 1
        this.gameRunning = false;
        this.currentOrder = null;       // [["drinksize", "small", etc.], ["drinksize", "medium", etc.]]
        this.mainKeyBinds();
        this.inputKeys = [];
        this.currentOrderPlayed = null; // ["drinksize", "small", etc.]
        this.isPaused = null;   
        this.scoreBoardActive = false;  
        this.timer = null;              // Timer in seconds
        // this.actualTimer = null;        // Actual Timer
    };   

    //Increment functions
    incrementCurrentLevel() {
        this.level += 1
        this.multiplier = 1;
        if (this.level % 7 === 1 && this.level !== 1) { this.incrementPhase(); }
    }

    incrementMultiplier() {
        this.multiplier += 1
    }

    resetMultiplier() {
        this.multiplier = 1
    }

    incrementScore() {
        this.score += 5;
    }

    incrementPhase() {
        this.phase += 1
    }

    decrementScore() {
        this.score -= (5 * this.multiplier);
        this.incrementMultiplier();
    }

    // ScoreBoard
    showScoreBoard() {
        const scoreBoard = document.getElementById('scoreboard-div')

        const showPhase = document.createElement('p')
        showPhase.innerText = `Phase: ${this.phase}`

        const showLevel = document.createElement('p')
        showLevel.innerText = `Level: ${this.level}`

        const showScore = document.createElement('p')
        showScore.innerText = `Score: ${this.score}`
        
        const showTimer = document.createElement('p')
        if (this.timer >= 10) {
            showTimer.innerText = `timer: 0:${this.timer}`
        } else {
            showTimer.innerText = `timer: 0:0${this.timer}`
        }

        scoreBoard.appendChild(showPhase)
        scoreBoard.appendChild(showLevel)
        scoreBoard.appendChild(showScore)
        scoreBoard.appendChild(showTimer)
    }

    removeScoreBoard() {
        const scoreBoard = document.getElementById('scoreboard-div')
        if (scoreBoard.hasChildNodes()) {
            for (let i = scoreBoard.childNodes.length - 1; i >= 0; i--) {
                scoreBoard.removeChild(scoreBoard.childNodes[i]);
            }
        }
    }

    // Timer functions

    setOrderTime() {
        this.timer = 12;
    }

    timeClock() {
        if (this.timer > 0 && this.gameRunning) {
            this.timer -= 1;
        } else if (this.timer < 1 || this.score <= 0) {
            // this.gameRunning = false;
            this.stopGame();
        };
    }

    setTimer() {
        setInterval(this.timeClock.bind(this), 1000)
    };
    
    // Key Binds
    mainKeyBinds() {
    // Main Key-down events
        window.addEventListener('keydown', e => this.handleUserInput(e));
    };

//-------------GAME LOGIC ------------------------------------------------------

    // Start, Game loop;
    gameLoop() {
        console.log("game is still running");
        if (this.gameRunning === true && this.score > 0) {
            this.removeScoreBoard();
            this.showScoreBoard();
            requestAnimationFrame(this.gameLoop.bind(this));
        } else if (this.gameRunning === true && (this.score <= 0 || this.timer <= 0))  {
            this.stopGame();
        };
    };

    // Start the game;
    startGame() {
        this.gameRunning = true;
        this.createOrders();
        this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder);
        gameUtils.printOrder(this.currentOrderPlayed);
        this.gameLoop();
    };

    // Stop the game;
    stopGame() {
        this.resetStats();
        const bodyTag = document.querySelector('body');
        bodyTag.setAttribute('id', 'game-lost');
        gameUtils.removeOrderComponents();
        this.removeScoreBoard();
    };

    // Pause and Resume Game;
    togglePause() { 
        const bodyTag = document.querySelector('body');
        if (!this.gameRunning) {            // unpause
            this.gameRunning = true
            bodyTag.removeAttribute('id');
            this.isPaused = false;
            this.setTimer();
        } else {                            // pause
            this.gameRunning = false
            bodyTag.setAttribute('id', 'game-lost');
            this.isPaused = true;
        };
    };

    resetStats() {
        this.level = 1,
        this.phase = 1,
        this.score = 100,
        this.multiplier = 1
        this.gameRunning = false;
        this.currentOrder = null;           // [["drinksize", "small", etc.], ["drinksize", "medium", etc.]]
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
                console.log("start game")                                                                                                             
                this.startGame();       
                this.setOrderTime();    // HERE
                this.setTimer();        // HERE
            } else if (e.code === "KeyP") {
                console.log("unpause")
                this.togglePause();
                this.gameLoop();
            } else if (e.code === "Digit0") {
                this.stopGame();
            };
        } else {                                                   
            if (e.code === "KeyP" && this.isPaused !== true) {   
                console.log("paused")
                this.togglePause(); 
            } else if (Object.keys(Order.drinkDictionary).includes(e.code)) {
                this.inputKeys.push(e.code);                    // PUSHES KEYCODE INTO INPUTKEYS ARRAY
                if (!gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) {   
                    this.decrementScore();
                    this.inputKeys = [];
                    gameUtils.removeOrderComponents();
                    gameUtils.printOrder(this.currentOrderPlayed);        
                } else if ((gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) && this.inputKeys.length === this.currentOrderPlayed.length) {    
                    // ^ if compared arrays are the same, and key input and COP length are the same => move on to next array
                    this.incrementScore();                     // increment score bc we put in the right key input.
                    this.setOrderTime()     // HEREEEEEEE !!!
                    if (this.currentOrder.length !== 0) {      // if your current level's full order is not done. // move on to the next array.
                        this.inputKeys = [];
                        gameUtils.removeOrderComponents();
                        this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder);
                        gameUtils.printOrder(this.currentOrderPlayed);
                        gameUtils.addGreensBack(this.inputKeys);
                    } else {                                   // if your current level's full order is done. // move on to the next level
                        this.inputKeys = [];
                        this.createOrders();
                        this.resetMultiplier();
                        this.incrementCurrentLevel();
                        gameUtils.removeOrderComponents();
                        this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder);
                        gameUtils.printOrder(this.currentOrderPlayed);
                    };
                } else if ((gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) && this.inputKeys.length !== this.currentOrderPlayed.length) {
                    // ^ if compared arrays are the same, and key input and COP length are NOT the same => WE'RE STILL IN THE SAME ARRAY'S TURN
                    gameUtils.removeOrderComponents()
                    gameUtils.printOrder(this.currentOrderPlayed);
                    gameUtils.addGreensBack(this.inputKeys);
                };
            } else {
                console.log("I N V A L I D K E Y P R E S S");
            };
        };
    };
};

export default Game;