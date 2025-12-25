const container = document.querySelector('#container');
let squaresPerLine = 16;

// get the width of container
const containerWidth = container.offsetWidth;

// find square width and height
let squareWidth = containerWidth / squaresPerLine;

for (let i = 0; i < squaresPerLine; i++) {
    // create a div with class square
    let square = document.createElement('div');
    square.classList.add('square');

    // set the width and height of square
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareWidth}px`;

    container.appendChild(square);
}