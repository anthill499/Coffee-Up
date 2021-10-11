import "../src/assets/stylesheets/index.css";
import Game from "./scripts/game";
import * as gameUtils from "../src/scripts/gameUtil";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("coffee-canvas");
  const ctx = canvas.getContext("2d");
  // canvas.width = 900;
  // canvas.height = 700;
  const newGame = new Game(ctx);
  const modal = document.getElementById("modal");
  const button = document.getElementById("instructions");
  const div = document.querySelector(".close");

  button.addEventListener("click", () => {
    modal.style.display = "block";
    gameUtils.playClickSound();
  });

  div.addEventListener("click", () => {
    modal.style.display = "none";
    gameUtils.playClickSound();
  });

  document.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
