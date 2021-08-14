import Game from "./scripts/game";
// const Game = require("../src/scripts/game");
//coffee shop background
const coffeeShopBackground = new Image();
coffeeShopBackground.src = "./src/assets/images/cafe_background.png";
// cashier sprite
const cashierPicture = new Image();
cashierPicture.src = "./src/assets/images/Alex_idle_16x16.png";

window.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('coffee-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 700;





    const startGame =  new Game(ctx);
    window.requestAnimationFrame(animate)
    // startGame.animate()


    
});

