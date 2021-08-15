import "../src/assets/stylesheets/index.css";  
import Game from "./scripts/game";


document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('coffee-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 700;


    const newGame = new Game(ctx);
    
    


});

