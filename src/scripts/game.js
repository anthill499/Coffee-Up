import Order from "./order";
class Game {

    constructor(ctx) {
        this.ctx = ctx,
        this.level = 0,
        this.phase = 1,
        this.score = 100,
        this.multiplier = 1
        this.gameRunning = false;
        this.registerKeyBinds();
    }   

    incrementCurrentLevel() {
        this.level += 1
    }

    incrementMultiplier() {
        this.multiplier += 1
    }

    incrementScore() {
        this.score += 5;
    }

    decrementScore() {
        this.score -= (5 * this.multiplier);
    }


    // Start, Game loop;
    gameLoop() {
        console.log("please don't exceed max callstack");

        if (this.gameRunning === true) {
            requestAnimationFrame(this.gameLoop.bind(this));
        } else {
            console.log("finished");
        }
    };

// ------------GAME LOGIC ------------------------------------------------

    // Start the game;
    startGame() {
        this.gameRunning = true;
        this.gameLoop()
    }

    // Stop the game;
    stopGame () {
        this.gameRunning = false;
    }

    // Making order
    createOrder() {
        const newOrder = new Order(this.ctx, this.level, this.phase);
        return newOrder.generateRandomOrder();

        // [[ArrowUp, S, ArrowLeft, Regular Coffee, ArrowRight, Tapioca, ArrowDown, Hot], 
        //  [ArrowUp, S, ArrowLeft, Regular Coffee, ArrowRight, Tapioca, ArrowDown, Hot] ]
    }

    // Restart order
    RestartOrder(currentOrder, longerOrder) {   
        // Example
        // [1, 2, 3, 4]
        // [1, 2] 

        // Length of placeholder order
        const longerLength = longerOrder.length
        // Length of current order
        const currentLength = currentOrder.length

        // iterates over range from i to the longerlength
        for (let i = currentLength; i < longerLength; i++) {
            //pushes each element that is not in currentOrder to currentOrder
            currentOrder.push(longerOrder[i]);
        }
        return currentOrder;
    }

    // event handlers
    registerKeyBinds() {

        // Start and End Game
        window.addEventListener('keydown', e => {
            
            if (e.code === "Space" && !this.gameRunning) {
                this.startGame();
            } else if (e.code === "KeyP" && this.gameRunning) {         // "Press P to stop game"
                this.stopGame();
                console.log("why arent you stopping");
            } else {
                throw new Error("come on man!");
            }
        });
    };


    



}

export default Game;

