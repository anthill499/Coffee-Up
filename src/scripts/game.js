
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

    animate() {

        // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        // this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(coffeeShopBackground, 0, 0, canvas.width, canvas.height)
        this.ctx.drawImage(cashierPicture, 0, 0, 16, 32, 240, 120, 110, 200)
        this.ctx.requestAnimationFrame(animate);
        // this.animate();
        this.animate()
    }


}

export default Game;