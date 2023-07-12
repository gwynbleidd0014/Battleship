class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
    return this.hits;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}

class Gameboard {
  constructor() {
    this.board = this.buildBoard(10);
    this.ships = {};
  }

  buildBoard(n) {
    let board = [];
    for (let r = 0; r < n; r++) {
      board.push([]);
      for (let c = 0; c < n; c++) {
        board[r].push("Free");
      }
    }
    return board;
  }

  placeShip(start, isHorisontal = true, ship) {
    let [rowCurrent, colCurrent] = start;

    if (isHorisontal) {
      for (let i = 0; i < ship.length; i++) {
        this.board[rowCurrent][colCurrent] = ship.name;
        colCurrent++;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[rowCurrent][colCurrent] = ship.name;
        rowCurrent++;
      }
    }

    this.ships[ship.name] = ship;

    return this.board;
  }

  receiveAttack(r, c) {
    if (this.board[r][c] === "Free") this.board[r][c] = "Missed";
  }
}

export { Gameboard, Ship };
