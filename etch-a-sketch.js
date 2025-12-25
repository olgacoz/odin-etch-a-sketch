const container = document.querySelector('#container');
let squaresPerRow = 16;
let squaresPerColumn = squaresPerRow;

// get the width of container
const containerWidth = container.offsetWidth;

// find square width and height
let squareWidth = containerWidth / squaresPerRow;

for (let i = 0; i < squaresPerRow; i++) {
  // create a div with class row
  const row = document.createElement('div');
  row.classList.add('row');

  for (let i = 0; i < squaresPerColumn; i++) {
    // create a div with class square
    const square = document.createElement('div');
    square.classList.add('square');

    // set the width and height of square
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareWidth}px`;

    row.appendChild(square);
  }
  container.appendChild(row);
}