const colorPallete = document.getElementById('color-palette');
const boardChange = document.getElementById('board-change');

function addDivColorPalette() {
  for (let index = 0; index < 4; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'color';
    colorPallete.appendChild(newDiv);
  }
}

addDivColorPalette();

function addDivLinePixelBoard(n) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < n; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'line';
    pixelBoard.appendChild(newDiv);
  }
}

const boardSize = localStorage.getItem('boardSize');
if (boardSize) {
  addDivLinePixelBoard(boardSize);
} else {
  addDivLinePixelBoard(5);
}


function addDivColumnPixelBoard(n) {
  const divPixelBoard = document.getElementsByClassName('line');
  for (let index = 0; index < divPixelBoard.length; index += 1) {
    for (let index2 = 0; index2 < n; index2 += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      newDiv.style.backgroundColor = 'white';
      divPixelBoard[index].appendChild(newDiv);
    }
  }
}

if (boardSize) {
  addDivColumnPixelBoard(boardSize);
} else {
  addDivColumnPixelBoard(5);
}

function addColorInDivsPalette() {
  const div = document.getElementsByClassName('color');
  const colors = ['black', 'blue', 'aqua', 'springgreen'];
  for (let index = 0; index < div.length; index += 1) {
    div[index].style.backgroundColor = colors[index];
  }
}

addColorInDivsPalette();

function createButton() {
  const button = document.createElement('button');
  button.id = 'button-random-color';
  button.innerText = 'Cores aleatórias';
  colorPallete.appendChild(button);
}

createButton();

function createButton2() {
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  boardChange.appendChild(button);
}

createButton2();

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function randomColorPalette() {
  const divColors = document.getElementsByClassName('color');
  const cor = [];
  for (let index = 1; index < divColors.length; index += 1) {
    divColors[index].style.backgroundColor = randomColorGenerator();
    cor.push(divColors[index].style.backgroundColor);
  }

  cor.unshift('black');
  localStorage.setItem('colorPalette', JSON.stringify(cor));
}

function randomColorButton() {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', function (event) {
    event.target = randomColorPalette();
  });
}

randomColorButton();

function selectButton() {
  const colors = document.getElementsByClassName('color');
  colors[0].className = 'color selected';
}

selectButton();

function recebeClick(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const colorButtons = document.getElementsByClassName('color');
for (let index = 0; index < colorButtons.length; index += 1) {
  colorButtons[index].addEventListener('click', recebeClick);
}

function colorBgPixelBoard(event) {
  const selectButton = document.querySelector('.selected');
  const color = JSON.stringify(selectButton.style.backgroundColor);
  event.target.style.backgroundColor = JSON.parse(color);

  const coloredPixels = [];
  const divPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < divPixel.length; index += 1) {
    coloredPixels.push(window.getComputedStyle(divPixel[index]).getPropertyValue('background-color'));
  }

  localStorage.setItem('pixelBoard', JSON.stringify(coloredPixels));
}

const pixels = document.getElementsByClassName('pixel');
for (let index2 = 0; index2 < pixels.length; index2 += 1) {
  pixels[index2].addEventListener('click', colorBgPixelBoard);
}

function pixelToWhite() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function clearPixelBoard() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', function (event) {
    event.target = pixelToWhite();
    localStorage.removeItem('pixelBoard');
  });
}

clearPixelBoard();

function inputValue() {
  const input = document.querySelector('#board-size');
  const number = input.value;

  return number;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const pixelBoard = document.getElementById('pixel-board');
const btn = document.getElementById('generate-board');
btn.addEventListener('click', function () {
  if (inputValue() === '') {
    alert("Board inválido!");
  } else {
    if (inputValue() < 5) {
      aaa = 5;
      removeAllChildNodes(pixelBoard)
      addDivLinePixelBoard(aaa)
      addDivColumnPixelBoard(aaa)
      const pixels = document.getElementsByClassName('pixel');
      for (let index2 = 0; index2 < pixels.length; index2 += 1) {
        pixels[index2].addEventListener('click', colorBgPixelBoard);
      }
      saveBoardSize();
    } else if (inputValue() > 50) {
      aaa = 50;
      removeAllChildNodes(pixelBoard)
      addDivLinePixelBoard(aaa)
      addDivColumnPixelBoard(aaa)
      const pixels = document.getElementsByClassName('pixel');
      for (let index2 = 0; index2 < pixels.length; index2 += 1) {
        pixels[index2].addEventListener('click', colorBgPixelBoard);
      }
      saveBoardSize();
    } else {
      aaa = inputValue();
      removeAllChildNodes(pixelBoard)
      addDivLinePixelBoard(aaa)
      addDivColumnPixelBoard(aaa)
      const pixels = document.getElementsByClassName('pixel');
      for (let index2 = 0; index2 < pixels.length; index2 += 1) {
        pixels[index2].addEventListener('click', colorBgPixelBoard);
      }
      saveBoardSize();
    }
  }
})

function saveBoardSize() {
  const board = document.getElementsByClassName('line');
  const boardSize = board.length;
  localStorage.setItem('boardSize', JSON.stringify(boardSize));
}

function initialize() {
  const divColor = document.getElementsByClassName('color');
  const palette = localStorage.getItem('colorPalette');
  const paletteStr = JSON.parse(palette);

  if (palette) {
    for (let index = 0; index < divColor.length; index += 1) {
      divColor[index].style.backgroundColor = paletteStr[index];
    }
  }

  const divPixel = document.getElementsByClassName('pixel');
  const pixels = localStorage.getItem('pixelBoard');
  const pixelsStr = JSON.parse(pixels);

  if (pixels) {
    for (let index = 0; index < divPixel.length; index += 1) {
      divPixel[index].style.backgroundColor = pixelsStr[index];
    }
  }
}

initialize();

