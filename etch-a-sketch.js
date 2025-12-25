const container = document.querySelector('#container');
const containerWidth = container.offsetWidth; // get container width

drawSquareGrid(16);
container.addEventListener('mouseover', colorSquare);

function drawSquareGrid(squaresPerRow) {
  const squaresPerColumn = squaresPerRow;
  
  // find width and height of square
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

function colorSquare(e) {
  const target = e.target;
  if (target.matches('.square')) {
    const compStyle = window.getComputedStyle(target);

    // Get the current background-color value:
    const value = compStyle.backgroundColor;

    // Get all color components (alpha may not be there if = 1):
    const parts = value.match(/[\d.]+/g);

    // If alpha is not there, add it:
    if (parts.length === 3) {
      parts.push(1);
    }

    // Modify alpha, prevent it go beyond 1 (fully opaque)
    parts[3] = Math.min(1, parseFloat(parts[3]) + 0.10);

    target.style.backgroundColor = `rgba(${ parts.join(',') })`;
  }
}