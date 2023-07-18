import { Gameboard, Ship, Player } from "./game";

const startingBoardEl = document.querySelector(".starting-board");
const placeCarrierEl = document.querySelector(".place-carrier");

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
      mouseOut(e, shipTypes[order][1] + 1, i, cells)
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
  // const rowInbound = col + length - 1 <= 10 && col !== 0;
  const inBound = checkIfSafe(
    length,
    e.target,
    parsePosition(e.target),
    index,
    arr
  );
  const colInbound = row + length <= 10;

  for (let i = 0; i < length; i++) {
    if (isXAxis) {
      const color = inBound ? "green" : "red";
      targetEl.style.backgroundColor = color;
      targetEl = targetEl.nextElementSibling;
      if (col + i === 0 || col + i === 10 || index + i === 99) return;
    } else {
      const color = inBound ? "green" : "red";
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
  let [r, c] = parsePosition(el);
  let col = (index + 1) % 10;
  let row = Math.floor(index / 10);
  // const rowInbound = col + shipTypes[order][1] - 1 <= 10 && col !== 0;
  // const colInbound = row + shipTypes[order][1] <= 10;
  const inBound = checkIfSafe(
    shipTypes[order][1],
    el,
    parsePosition(el),
    index,
    arr
  );

  if (isXAxis && inBound) {
    board.placeShip(
      [r, c],
      isXAxis,
      new Ship(shipTypes[order][0], shipTypes[order][1])
    );

    if (order === 5) startGame();
    order++;
    displayCurrentShip();
  } else if (!isXAxis && inBound) {
    board.placeShip(
      [r, c],
      isXAxis,
      new Ship(shipTypes[order][0], shipTypes[order][1])
    );
    if (order === 5) startGame();
    order++;
    displayCurrentShip();
  }
}

function checkIfSafe(length, el, [r, c], index, arr) {
  const free = notTaken(el, length, index, arr);
  const isInBound = inBound(el, length, r, c, index, arr);
  const safe = free && isInBound;
  return safe;
}

function notTaken(el, length, index, arr) {
  if (isXAxis) {
    for (let i = 0; i < length; i++) {
      if (el.classList.contains("taken")) return false;
      el = el?.nextElementSibling ? el.nextElementSibling : el;
    }
    return true;
  } else {
    for (let i = 0; i < length; i++) {
      if (el.classList.contains("taken")) return false;
      if (index + 10 < 99) {
        el = arr[index + 10];
        index += 10;
      }
    }
    return true;
  }
}

function inBound(el, length, r, c, index, arr) {
  if (isXAxis) {
    for (let i = 0; i < length; i++) {
      if (parsePosition(el)[0] !== r) return false;
      el = el?.nextElementSibling ? el.nextElementSibling : el;
    }
    return true;
  } else {
    for (let i = 0; i < length; i++) {
      if (index > 99) return false;
      if (index + 10 < 99) {
        el = arr[index + 10];
      }
      index += 10;
    }
    return true;
  }
}

function parsePosition(el) {
  return el.dataset.pos.split(",").map((s) => parseInt(s));
}

function displayCurrentShip() {
  placeCarrierEl.textContent = `PLACE YOUR ${shipTypes[order][0]}`;
}

export { drawBoard, prepeareShips };
