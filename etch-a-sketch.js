const container = document.querySelector('#container');
// get the width of container
const containerWidth = container.offsetWidth;

drawSquareGrid(16);

function drawSquareGrid(squaresPerRow) {
  const squaresPerColumn = squaresPerRow;
  // find square width and height
  let squareWidth = containerWidth / squaresPerRow;

  for (let i = 0; i < squaresPerRow; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < squaresPerColumn; j++) {
      const square = document.createElement('div');
      square.classList.add('square');

      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareWidth}px`;
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}