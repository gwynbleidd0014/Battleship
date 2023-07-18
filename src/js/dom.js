import { Gameboard, Ship, Player } from "./game";

const startingBoardEl = document.querySelector(".starting-board");

let isXAxis = true;
let order = 0;
const shipTypes = [
  ["Carrier", 5],
  ["Battleship", 4],
  ["Cruiser", 3],
  ["Submarine", 3],
  ["Destroyer", 2],
];

const player1Board = new Gameboard();
const player2Board = new Gameboard();

const player1 = new Player("Jake");

function loadPlaceCarrierView() {
  startingBoardEl;
}

function drawBoard() {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const div = document.createElement("div");
      div.className = "cell placing-cell";
      div.dataset.pos = r + "," + c;
      startingBoardEl.appendChild(div);
    }
  }
}

function prepeareShips() {
  const cells = document.querySelectorAll(".placing-cell");
  const flipper = document.querySelector(".flip-btn");

  flipper.addEventListener("click", () => {
    isXAxis = !isXAxis;
  });

  cells.forEach((cell, i) => {
    cell.addEventListener("mouseover", (e) =>
      mouseIn(e, shipTypes[order][1], i, cells)
    );
    cell.addEventListener("mouseout", (e) =>
      mouseOut(e, shipTypes[order][1], i, cells)
    );
    cell.addEventListener("click", (e) =>
      registerShip(e.target, player1, player1Board, i, cells)
    );
  });
}

function mouseIn(e, length, index, arr) {
  let targetEl = e.target;
  let col = (index + 1) % 10;
  let row = Math.floor(index / 10);
  const rowInbound = col + length - 1 <= 10 && col !== 0;
  const colInbound = row + length <= 10;
  for (let i = 0; i < length; i++) {
    if (isXAxis) {
      const color = rowInbound ? "green" : "red";
      targetEl.style.backgroundColor = color;
      targetEl = targetEl.nextElementSibling;
      if (col + i === 0 || col + i === 10 || index + i === 99) return;
    } else {
      const color = colInbound ? "green" : "red";
      targetEl.style.backgroundColor = color;
      if (index + 10 > 99) return;
      targetEl = arr[index + 10];
      index += 10;
    }
  }
}

function mouseOut(e, length, index, arr) {
  let targetEl = e.target;
  for (let i = 0; i < length; i++) {
    if (isXAxis) {
      targetEl.style.backgroundColor = "white";
      targetEl = targetEl.nextElementSibling;
      if (index + i === 99) return;
    } else {
      targetEl.style.backgroundColor = "white";
      if (index + 10 > 99) return;
      targetEl = arr[index + 10];
      index += 10;
    }
  }
}

function registerShip(el, player, board, index, arr) {
  let [r, c] = el.dataset.pos.split(",").map((s) => parseInt(s));
  let col = (index + 1) % 10;
  let row = Math.floor(index / 10);
  const rowInbound = col + shipTypes[order][1] - 1 <= 10 && col !== 0;
  const colInbound = row + shipTypes[order][1] <= 10;

  if (isXAxis && rowInbound) {
    board.placeShip(
      [r, c],
      isXAxis,
      new Ship(shipTypes[order][0], shipTypes[order][1])
    );
    if (order === 5) startGame();
    order++;
  } else if (!isXAxis && colInbound) {
    board.placeShip(
      [r, c],
      isXAxis,
      new Ship(shipTypes[order][0], shipTypes[order][1])
    );
    if (order === 5) startGame();
    order++;
  }
}

export { drawBoard, prepeareShips };
