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
        this.currentOrder = null;           // [["drinksize", "small", etc.], ["drinksize", "medium", etc.]]
        this.mainKeyBinds();
        this.inputKeys = [];
        this.currentOrderPlayed = null;     
        this.isPaused = null;            
    }   

    //Increment functions
    incrementCurrentLevel() {
        this.level += 1
    }

    incrementMultiplier() {
        this.multiplier += 1
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
            // handles extreme situations 
            if (this.currentOrder.length > 0 && this.currentOrderPlayed.length === 0) { // whole list length still there
                this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder)          // but currentplayed list is not there
            } else if (this.currentOrder.length === 0) {                        // when whole lists length is 0                      
                this.incrementCurrentLevel();
                if (this.level % 7 === 1) { this.incrementPhase(); }
                this.currentOrderPlayed = null
            }
            
            // DDR type-function goes here, should have a while condition.
            requestAnimationFrame(this.gameLoop.bind(this));
        } else if (this.score <= 0) {
            alert("you lost")
        }
    };

    // Start the game;
    startGame() {
        this.gameRunning = true;
        this.createOrders();
        this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder);
        this.gameLoop();
    };

    // Stop the game;
    stopGame() {
        this.gameRunning = false;
        this.level = 1;
        this.phase = 1;
        this.score = 100;
        this.multiplier = 1;
        this.currentOrder = null;      // currentOrder is set to null when game stops;
        this.isPaused = null;
        const bodyTag = document.querySelector('body');
        bodyTag.removeAttribute('id');
    }

    // Pause and Resume Game;
    togglePause() { 
        const bodyTag = document.querySelector('body');
        if (!this.gameRunning) {
            this.gameRunning = true
            bodyTag.removeAttribute('id');
            this.isPaused = false;
        } else {
            this.gameRunning = false
            bodyTag.setAttribute('id', 'game-lost');
            this.isPaused = true;
        }
    };

    // Making order
    createOrders() {
        const newOrder = new Order(this.level, this.phase);
        this.currentOrder = newOrder.generateRandomOrders();
    }

    // event handler
    handleUserInput(e) {
        if (!this.gameRunning) {                                 // if this.gameRunning === false
            if (e.code === "Space" && this.isPaused === null) {                            // "Press Space to start/unpause the game"                                                                // Refactor!
                this.startGame();
            } else if (e.code === "KeyP") {
                this.togglePause();
                this.gameLoop();
            } else if (e.code === "Digit0"){
                this.stopGame();
            }
        } else {                                                 // if this.gameRunning === true
            if (e.code === "KeyP") {                             // "Press P to stop game"
                this.togglePause(); 
            } else if (Object.values(Order.ingredientKeys).includes(e.code) || Object.values(Order.categoryKeys).includes(e.code)) {
                this.inputKeys.push(e.code)
                if (!gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) {  // if inputkeys isnt the same as the COP
                    this.inputKeys = []
                    this.decrementScore();
                }   
            } else {
                console.log("just press p")
            };
        };
    };
};
export default Game;
