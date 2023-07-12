import { Gameboard, Ship } from "../src/js/game";

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
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.board[0][0]).toBe("Missed");
  });
});

describe("Ship", () => {
  test("Hit increases number of hits", () =>
    expect(new Ship("Dummy", 2).hit()).toBe(1));
  test("Shows state of ship", () =>
    expect(new Ship("Dummy", 2).isSunk()).toBe(false));
});
