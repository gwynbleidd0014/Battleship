import { Gameboard, Ship, Player } from "../src/js/game";

describe("Board", () => {
  test("Places ship on board", () => {
    const ship = new Ship("Submarine", 3);
    const result = [...new Gameboard().board];

    result[0][0] = "Submarine";
    result[0][1] = "Submarine";
    result[0][2] = "Submarine";

    expect(new Gameboard().placeShip([0, 0], true, ship)).toEqual(result);

    const gameBoard = new Gameboard();
    gameBoard.placeShip([0, 0], true, ship);
    expect(gameBoard.ships).toEqual({
      Submarine: ship,
    });
  });

  test("Recieves attack correctly", () => {
    const gameBoard = new Gameboard();
    const ship = new Ship("Submarine", 3);
    const result = { ...ship };
    result.hits = 1;
    gameBoard.placeShip([0, 0], true, ship);
    gameBoard.receiveAttack(2, 2);
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.board[2][2]).toBe("Missed");
    expect(ship).toEqual(result);
  });

  test("All ships sunk", () => {
    const gameBoard = new Gameboard();
    gameBoard.placeShip([0, 0], true, new Ship("Submarine", 1));
    gameBoard.placeShip([2, 0], true, new Ship("Destroyer", 1));
    gameBoard.ships.Submarine.hit();
    gameBoard.ships.Destroyer.hit();

    expect(gameBoard.allShipsSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("Hit increases number of hits", () =>
    expect(new Ship("Dummy", 2).hit()).toBe(1));
  test("Shows state of ship", () =>
    expect(new Ship("Dummy", 2).isSunk()).toBe(false));
});

describe("Player", () => {
  test("Player makes move properly", () => {
    const jon = new Player("Jon");
    const enemyGameBoard = new Gameboard();

    jon.makeMove(enemyGameBoard, [0, 0]);

    expect(enemyGameBoard.board[0][0]).toBe("Missed");
  });

  test("Ai makes move Properly", () => {
    const jon = new Player("Jon", true);
    const enemyGameBoard = new Gameboard();
    const length = jon.available.length;

    jon.makeMove(enemyGameBoard);
    expect(jon.available.length).toBe(length - 1);
  });
});
