// Elements
const board = document.querySelector(".board");
const sizeBtn = document.querySelector(".size-btn");
const colorPicker = document.querySelector(".color-picker");

//function to create divs inside board 16x16
const createGrid = function (size) {
  for (row = 0; row < size; row++) {
    for (col = 0; col < size; col++) {
      const tile = document.createElement("div");
      board.appendChild(tile);
    }
  }
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};

const colorGrid = function (e) {
  if (e.target === board) return;
  const color = colorPicker.value;
  e.target.style.backgroundColor = color;
};

const changeGridSize = function () {
  const size = prompt("How many squares do You wish?");
  if (16 > +size || !size || 100 < +size) return;
  board.textContent = "";
  createGrid(size);
};

board.addEventListener("mouseover", colorGrid);
sizeBtn.addEventListener("click", changeGridSize);
