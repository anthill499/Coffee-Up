
class Game {

    constructor(ctx) {
        this.ctx = ctx,
        this.level = 0,
        this.phase = 1,
        this.score = 100,
        this.multiplier = 1
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

    // start, game loop

    gameLoop() {
        console.log("please don't exceed max callstack")
        // window.requestAnimationFrame(this.gameLoop)
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    start () {
        this.gameLoop()
        
    }


    // event handlers

}

export default Game;

