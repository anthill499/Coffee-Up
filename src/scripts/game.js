import Order from "./order";

class Game {

    constructor(ctx) {
        this.ctx = ctx,
        this.level = 0,
        this.phase = 1,
        this.score = 100,
        this.multiplier = 1
        this.gameRunning = false;
        this.currentOrder = null;
        this.mainKeyBinds();
        this.inputKeys = [];

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
    }

    // Key Binds
    mainKeyBinds() {
    // Main Key-down events
        window.addEventListener('keydown', e => this.handleUserInput(e));
    };

// ------------GAME LOGIC ------------------------------------------------

    // Start, Game loop;
    gameLoop() {
        console.log("game is still running");

        if (this.gameRunning === true && this.score > 0) {
            requestAnimationFrame(this.gameLoop.bind(this));
        } else {
            console.log("game stopped");
        }
    };

    // Start the game;
    startGame() {
        this.gameRunning = true;
        this.gameLoop()
    }

    // Stop the game;
    stopGame () {
        this.gameRunning = false;
        this.currentOrder = null; // currentOrder is set to null when game stops;
    }

    // Making order
    createOrder() {
        const newOrder = new Order(this.level, this.phase);
        this.currentOrder = newOrder.generateRandomOrder();
        return this.slice();
    }
    
    // Restart order
    RestartOrder(currentOrder, longerOrder) {   
        const longerLength = longerOrder.length         // Length of placeholder order
        const currentLength = currentOrder.length       // Length of current order

        // iterates over range from i to the longerlength
        for (let i = currentLength; i < longerLength; i++) {
            currentOrder.push(longerOrder[i]);          //pushes each element that is not in currentOrder to 
        };
        this.decrementScore();                          // Decrement Score if you have to restart the order.
        this.incrementMultiplier();
        return currentOrder;
    }

    handleUserInput(e) {
        if (!this.gameRunning) {                                 // if this.gameRunning === false
            if (e.code === "Space") {                            // "Press Space to start/unpause the game"
                const bodyTag = document.querySelector('body');
                bodyTag.removeAttribute('id')
                this.startGame();
            } else if (e.code === "KeyP") {
                throw new Error("inside !condition");
            }
        } else {                                                 // if this.gameRunning === true
            if (e.code === "KeyP") {                             // "Press P to stop game"
                this.stopGame();
                const bodyTag = document.querySelector('body');
                bodyTag.setAttribute('id', 'game-lost')
            } else if (e.code === Order.leftKey) {

                this.inputKeys.push(Order.leftKey)
            } else if (e.code === Order.rightKey) {

                this.inputKeys.push(Order.rightKey)
            } else if (e.code === Order.upKey) {

                this.inputKeys.push(Order.upKey)
            } else if (e.code === Order.downKey) {

                this.inputKeys.push(Order.downKey)
            } else if (e.code === Order.DS_SMALL) {
                this.inputKeys.push(Order.DS_SMALL)
            } else if (e.code === Order.DS_MEDIUM) {
                this.inputKeys.push(Order.DS_MEDIUM)
            } else if (e.code === Order.DS_LARGE) {
                this.inputKeys.push(Order.DS_LARGE)
            } else if (e.code === Order.CTRC) {
                this.inputKeys.push(Order.CTRC)
            } else if (e.code === Order.CTCB) {
                this.inputKeys.push(Order.CTCB)
            } else if (e.code === Order.CTL) {
                this.inputKeys.push(Order.CTL)
            } else if (e.code === Order.CTCAP) {
                this.inputKeys.push(Order.CTCAP)
            } else if (e.code === Order.TTAP) {
                this.inputKeys.push(Order.TTAP)
            } else if (e.code === Order.TSUG) {
                this.inputKeys.push(Order.TSUG)
            } else if (e.code === Order.TMILK) {
                this.inputKeys.push(Order.TMILK)
            } else if (e.code === Order.TEMPHOT) {
                this.inputKeys.push(Order.TEMPHOT)
            } else if (e.code === Order.TEMPCOLD) {
                this.inputKeys.push(Order.TEMPCOLD)
            } else {
                throw new Error("Invalid Key Input")
            };
        }
    }


};
export default Game;
