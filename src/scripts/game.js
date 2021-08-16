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
            // DDR type-function goes here, should have a while condition.

            requestAnimationFrame(this.gameLoop.bind(this));
        } else if (this.score <= 0) {
            alert("you lost");
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
        this.resetStats();
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
        };
    };

    // Reset Stats
    resetStats() {
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
    // Making order
    createOrders() {
        const newOrder = new Order(this.level, this.phase);
        this.currentOrder = newOrder.generateRandomOrders();
    }

    // event handler
    handleUserInput(e) {
        if (!this.gameRunning) {                                 // if this.gameRunning === false
            if (e.code === "Space" && this.isPaused === null) {       
                                     // "Press Space to start/unpause the game"                                                                // Refactor!
                this.startGame();
            } else if (e.code === "KeyP") {
                this.togglePause();
                this.gameLoop();
            } else if (e.code === "Digit0") {
                this.stopGame();
            };
        } else {                                                 // if this.gameRunning === true
            if (e.code === "KeyP" && this.isPaused === false) {   
                                          // "Press P to stop game"
                this.togglePause(); 
            } else if (Object.values(Order.ingredientKeys).includes(e.code) || Object.values(Order.categoryKeys).includes(e.code)) {
                this.inputKeys.push(e.code);
                console.log(e.code)
            } else {
                console.log("LMFAOO")
            };
        };
    };

};

export default Game;
