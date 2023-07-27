import { Gameboard, Ship, Player } from "./game";

const startingBoardEl = document.querySelector(".starting-board");
const placeCarrierEl = document.querySelector(".place-carrier");
const placeCarrierViewEl = document.querySelector(".place-carrier-view");

const playerOneBoardEl = document.querySelector(".player1-board");
const playerTwoBoardEl = document.querySelector(".player2-board");
const gameViewEl = document.querySelector(".game-view");
const flipper = document.querySelector(".flip-btn");

const gameOverViewEl = document.querySelector(".game-over-view");
const messageEl = document.querySelector(".message");
const playAgainEl = document.querySelector(".play-again");

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

let player1Board = new Gameboard();
let player2Board = new Gameboard();

let player1 = new Player("Jake");
let player2 = new Player("AI", true);

playAgainEl.addEventListener("click", (e) => {
  resetGame();

  resetUi();
});

flipper.addEventListener("click", () => {
  isXAxis = !isXAxis;
});

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
  startingBoardEl.innerHTML = "";
  drawBoard(startingBoardEl, "placing-cell");
}

function drawGameViewBoards() {
  playerOneBoardEl.innerHTML = "";
  playerTwoBoardEl.innerHTML = "";
  drawBoardWithShips(playerOneBoardEl, "game-view-cell", player1Board.board);
  drawBoard(playerTwoBoardEl, "game-view-cell");
}

function prepeareShips() {
  const cells = document.querySelectorAll(".placing-cell");

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
    startGame();
    return;
  }

  colorCells(el, numberOfCellsToColor, inBound, index, arr);
  displayCurrentShip();
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

function startGame() {
  drawGameView();
  addEventListenersToGameViewBoards();
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

  secondBoard.forEach((el) => {
    el.addEventListener("click", (e) => {
      makeMove(player2Board, parsePosition(e.target), e.target);
      makeAiMove(player1Board);
      if (player2Board.allShipsSunk()) gameOver(player1.name);
      if (player1Board.allShipsSunk()) gameOver(player2.name);
    });
  });
}

function makeMove(gameBoard, pos, el) {
  const result = player1.makeMove(gameBoard, pos);
  colorPos(result[0], el);
}

function makeAiMove(gameBoard) {
  const result = player2.makeMove(gameBoard);
  const el = playerOneBoardEl.querySelector(
    `[data-pos="${result[1]},${result[2]}"]`
  );

  colorPos(result[0], el);
}

function gameOver(winner) {
  if (winner === player1.name) {
    messageEl.textContent = "You won";
  } else {
    messageEl.textContent = "You lose";
  }
  gameOverViewEl.classList.remove("hidden");
}

function resetGame() {
  player1Board = new Gameboard();
  player2Board = new Gameboard();
  player1 = new Player("Jake");
  player2 = new Player("AI", true);
  isXAxis = true;
  placingFaze = true;

  order = 0;
}

function resetUi() {
  drowPlacingBoard();
  prepeareShips();
  placeCarrierViewEl.classList.remove("hidden");
  gameViewEl.classList.add("hidden");
  gameOverViewEl.classList.add("hidden");
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
