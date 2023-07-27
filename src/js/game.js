import { checkIfSafe, randomPosition } from "./dom.js";

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
    try {
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
    } catch (e) {
      console.log(e);
      console.log(start[0], ship.length, isHorisontal);
    }
  }

  placeShipsRandomly(shipTypes) {
    for (let [name, length] of shipTypes) {
      const isXAxis = Math.floor(Math.random() * 2) + 1 === 1 ? true : false;
      const ship = new Ship(name, length);
      let cond = true;
      let pos = null;
      while (cond) {
        pos = randomPosition();
        cond = !checkIfSafe(pos, this.board, ship.length, isXAxis)[0];
      }
      this.placeShip(pos, isXAxis, ship);
    }
  }

  receiveAttack(r, c) {
    if (!(r >= 0 && r < this.board.length && c >= 0 && c < this.board.length))
      return "No such position";
    if (this.board[r][c] === "Free") {
      this.board[r][c] = "Missed";
      return "Miss";
    } else {
      const ship = this.ships[this.board[r][c]];
      ship.hit();
      return "Hit";
    }
  }

  allShipsSunk() {
    for (let ship of Object.values(this.ships)) {
      if (ship.length > ship.hits) return false;
    }
    return true;
  }
}

class Player {
  constructor(name, ai = false) {
    this.name = name;
    this.ai = ai;
    if (ai) {
      this.available = [];
      for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
          this.available.push([r, c]);
        }
      }
    }
  }

  makeMove(enemyGameBoard, pos) {
    let result = [];
    if (!this.ai) result[0] = enemyGameBoard.receiveAttack(pos[0], pos[1]);
    else {
      const index = Math.floor(Math.random() * this.available.length);
      result[0] = enemyGameBoard.receiveAttack(
        this.available[index][0],
        this.available[index][1]
      );
      result[1] = this.available[index][0];
      result[2] = this.available[index][1];
      this.available.splice(index, 1);
    }
    return result;
  }
}

export { Gameboard, Ship, Player };
