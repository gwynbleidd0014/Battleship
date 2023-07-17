const startingBoardEl = document.querySelector(".starting-board");

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

  const isXAxis = true;

  flipper.addEventListener("click", () => {
    isXAxis = !isXAxis;
    prepeareShips();
  });

  cells.forEach((cell, i) => {
    cell.addEventListener("mouseover", (e) => mouseIn(e, isXAxis, 3, i));
    cell.addEventListener("mouseout", (e) => mouseOut(e, isXAxis, 3, i));
  });
}

function mouseIn(e, isXAxis = true, length, i) {
  let targetEl = e.target;
  let col = (i + 1) % 10;
  let row = Math.floor(i + 1 / 10);

  const rowInbound = col === 0 ? false : col + length <= 11;
  const colInbound = row === 0 ? false : row + length <= 11;
  for (let i = 0; i < length; i++) {
    const color = rowInbound ? "green" : "red";
    targetEl.style.backgroundColor = color;
    targetEl = targetEl.nextElementSibling;

    if (isXAxis) {
      if (col === 0 ? true : col + i > 10) break;
    } else {
      if (row + i > 10) break;
    }
  }
}

function mouseOut(e, isXAxis = true, length) {
  let targetEl = e.target;
  for (let i = 0; i < length; i++) {
    targetEl.style.backgroundColor = "white";
    targetEl = targetEl.nextElementSibling;
  }
}

export { drawBoard, prepeareShips };
