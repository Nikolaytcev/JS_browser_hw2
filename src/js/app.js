import Game from "./game/game";

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".board");
  const game = new Game(element);
  game.createElements(4);

  const cellElements = element.querySelectorAll(".cell");
  let elemWithPic =
    cellElements[Math.floor(Math.random() * cellElements.length)];
  game.insertPicture(elemWithPic);

  setInterval(() => {
    game.clearCell(elemWithPic);
    elemWithPic = cellElements[Math.floor(Math.random() * cellElements.length)];
    game.insertPicture(elemWithPic);
  }, 500);
});
