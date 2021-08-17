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
        this.currentOrder = null; // [["drinksize", "small", etc.], ["drinksize", "medium", etc.]]
        this.mainKeyBinds();
        this.inputKeys = [];
        this.currentOrderPlayed = null; // ["drinksize", "small", etc.]
        this.isPaused = null;            
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
            requestAnimationFrame(this.gameLoop.bind(this));
        } else if (this.gameRunning === true && this.score <= 0) {
            console.log("you lost, dude");
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
        bodyTag.removeAttribute('id');
    };

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
        this.level = 1,
        this.phase = 1,
        this.score = 100,
        this.multiplier = 1
        this.gameRunning = false;
        this.currentOrder = null;           // [["drinksize", "small", etc.], ["drinksize", "medium", etc.]]
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
        if (!this.gameRunning) {                                // if this.gameRunning === false
            if (e.code === "Space" && this.isPaused === null) { // Refactor!
                console.log("start game")                                                // "Press Space to start/unpause the game"                                                                
                this.startGame();                               // startGame;
            } else if (e.code === "KeyP") {
                console.log("unpause")
                this.togglePause();
                this.gameLoop();
            } else if (e.code === "Digit0") {
                this.stopGame();
            };
        } else {                                                    // if this.gameRunning === true
            if (e.code === "KeyP" && this.isPaused !== true) {   
                                                                // "Press P to stop game"
                console.log("paused")
                this.togglePause(); 
            } else if (Object.keys(Order.drinkDictionary).includes(e.code)) {
                this.inputKeys.push(e.code);    // PUSHES KEYCODE INTO INPUTKEYS ARRAY

                if (!gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) {   
                    this.decrementScore();
                    this.inputKeys = [];
                    gameUtils.removeOrderComponents();
                    gameUtils.printOrder(this.currentOrderPlayed);
                } else if ((gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) && this.inputKeys.length === this.currentOrderPlayed.length) {    
                    // ^ if compared arrays are the same, and key input and COP length are the same => move on to next array
                    this.incrementScore();           // increment score bc we put in the right key input.

                    if (this.currentOrder !== []) {      // if your current level's full order is not done. // move on to the next array.
                        
                    } else {                             // if your current level's full order is done. // move on to the next level
                        this.removeOrderComponents();
                        this.incrementCurrentLevel();
                        this.createOrders();
                        this.currentOrderPlayed = gameUtils.dequeue(this.currentOrder)
                        this.printOrder(this.currentOrderPlayed);
                    };
                } else if ((gameUtils.orderComparer(this.currentOrderPlayed, this.inputKeys)) && this.inputKeys.length !== this.currentOrderPlayed.length) {
                    // ^ if compared arrays are the same, and key input and COP length are NOT the same => WE'RE STILL IN THE SAME ARRAY'S TURN

                    gameUtils.removeOrderComponents()
                    // METHOD WHERE YOU PRINT OUT THE GREEN PARTS
                    gameUtils.printOrder(this.currentOrderPlayed);
                };
                console.log(e.code)
            } else {
                console.log("I N V A L I D K E Y P R E S S")

            };
        };
    };

};

export default Game;
