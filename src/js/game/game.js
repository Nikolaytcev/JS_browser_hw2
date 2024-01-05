export default class Game {
  constructor(element) {
    this._element = element;
  }

  createElements(quantity) {
    for (let i = 0; i < quantity; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      this._element.appendChild(cell);
    }
  }

  insertPicture(element) {
    const picture = document.createElement("img");
    picture.src = "../../img/goblin.png";
    picture.className = "picture";
    element.appendChild(picture);
  }

  clearCell(element) {
    const picture = element.querySelector(".picture");
    picture.remove();
  }
}
