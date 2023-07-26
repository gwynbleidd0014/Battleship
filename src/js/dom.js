import { Gameboard, Ship, Player } from "./game";

const startingBoardEl = document.querySelector(".starting-board");
const placeCarrierEl = document.querySelector(".place-carrier");
const placeCarrierViewEl = document.querySelector(".place-carrier-view");

const playerOneBoardEl = document.querySelector(".player1-board");
const playerTwoBoardEl = document.querySelector(".player2-board");
const gameViewEl = document.querySelector(".game-view");

let isXAxis = true;
let placingFaze = true;
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

function drawBoard(el, additionalClassName) {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const div = document.createElement("div");
      div.className = `cell ${additionalClassName}`;
      div.dataset.pos = r + "," + c;
      el.appendChild(div);
    }
  }
}

function drawBoardWithShips(el, additionalClassName, board) {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const div = document.createElement("div");
      div.className = `cell ${additionalClassName}`;
      div.dataset.pos = r + "," + c;
      if (board[r][c] !== "Free") div.style.backgroundColor = "green";
      el.appendChild(div);
    }
  }
}

function drowPlacingBoard() {
  drawBoard(startingBoardEl, "placing-cell");
}

function drawGameViewBoards() {
  drawBoardWithShips(playerOneBoardEl, "game-view-cell", player1Board.board);
  // drawBoard(playerTwoBoardEl, "game-view-cell");
  drawBoardWithShips(playerOneBoardEl, "game-view-cell", player2Board.board);
}

function prepeareShips() {
  const cells = document.querySelectorAll(".placing-cell");
  const flipper = document.querySelector(".flip-btn");

  flipper.addEventListener("click", () => {
    isXAxis = !isXAxis;
  });

  cells.forEach((cell, i) => {
    cell.addEventListener("mouseover", (e) => {
      if (!placingFaze) return;
      mouseIn(e.target, shipTypes[order][1], i, cells);
    });
    cell.addEventListener("mouseout", (e) => {
      if (!placingFaze) return;
      mouseOut(e.target, shipTypes[order][1] + 1, i, cells, player1Board.board);
    });
    cell.addEventListener("click", (e) => {
      registerShip(e.target, parsePosition(e.target), player1Board, i, cells);
    });
  });
}

function mouseIn(el, length, index, arr) {
  const [inBound, numberOfCellsToColor] = checkIfSafe(
    parsePosition(el),
    player1Board.board,
    length
  );
  colorCells(el, numberOfCellsToColor, inBound, index, arr);
}

function mouseOut(el, length, index, arr, board) {
  for (let i = 0; i < length; i++) {
    const [r, c] = parsePosition(el);
    if (isXAxis) {
      if (board[r][c] === "Free") el.style.backgroundColor = "white";
      el = el.nextElementSibling;
      if (index + i === 99) return;
    } else {
      if (board[r][c] === "Free") el.style.backgroundColor = "white";
      if (index + 10 > 99) return;
      el = arr[index + 10];
      index += 10;
    }
  }
}

function registerShip(el, start, gameBoard, index, arr) {
  const [inBound, numberOfCellsToColor] = checkIfSafe(
    parsePosition(el),
    gameBoard.board,
    shipTypes[order][1]
  );

  if (!inBound) return;

  const ship = new Ship(shipTypes[order][0], shipTypes[order][1]);
  gameBoard.placeShip(start, isXAxis, ship);

  order++;

  if (order === 5) {
    placingFaze = false;
    drawGameView();
  }

  colorCells(el, numberOfCellsToColor, inBound, index, arr);
}

function checkIfSafe(pos, board, length, horizontal = isXAxis) {
  const [r, c] = pos;

  let safeSpots = 0;

  if (horizontal) {
    for (let i = c; i < board[r].length; i++) {
      if (board[r][i] !== "Free") break;
      safeSpots++;
    }
  } else {
    for (let i = r; i < board.length; i++) {
      if (board[i][c] !== "Free") break;
      safeSpots++;
    }
  }

  if (safeSpots < length) {
    return [false, safeSpots];
  } else {
    return [true, length];
  }
}

function parsePosition(el) {
  return el.dataset.pos.split(",").map((s) => parseInt(s));
}

function colorCells(el, numberOfCellsToColor, inBound, index, arr) {
  for (let i = 0; i < numberOfCellsToColor; i++) {
    const color = inBound ? "green" : "red";
    if (isXAxis) {
      el.style.backgroundColor = color;
      el = el?.nextElementSibling;
    } else {
      el.style.backgroundColor = color;
      if (index + 10 > 99) return;
      el = arr[index + 10];
      index += 10;
    }
  }
}

function drawGameView() {
  placeCarrierViewEl.classList.add("hidden");
  gameViewEl.classList.remove("hidden");
  player2Board.placeShipsRandomly(shipTypes);
  drawGameViewBoards();
}

function randomPosition() {
  const randomRow = Math.floor(Math.random() * 10);
  const randomCol = Math.floor(Math.random() * 10);
  return [randomRow, randomCol];
}

function displayCurrentShip() {
  placeCarrierEl.textContent = `PLACE YOUR ${shipTypes[order][0]}`;
}

function addEventListenersToGameViewBoards() {
  const firstBoard = playerOneBoardEl.querySelectorAll(".cell");
  const secondBoard = playerTwoBoardEl.querySelectorAll(".cell");

  // firstBoard.forEach((el) => {
  //   el.addEventListener("click");
  // });

  secondBoard.forEach((el) => {
    el.addEventListener("click", (e) => {
      const result = makeMove(player2Board, parsePosition(e.target));
      colorPos(result, e.target);
    });
  });
}

function makeMove(gameBoard, pos) {
  return gameBoard.recieveHit(pos[0], pos[1]);
}

function colorPos(type, el) {
  if (type === "Miss") {
    el.style.backgroundColor = "purple";
  } else if (type === "Hit") {
    el.style.backgroundColor = "red";
  }
}

export {
  drowPlacingBoard,
  prepeareShips,
  checkIfSafe,
  randomPosition,
  drawGameViewBoards,
};
