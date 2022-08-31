const colorPallete = document.getElementById("color-palette");

function addDivColorPalette() {
  for (let index = 0; index < 4; index += 1) {
    const newDiv = document.createElement("div");
    newDiv.className = "color";
    colorPallete.appendChild(newDiv);
  }
}

addDivColorPalette();

function addDivLinePixelBoard() {
  const pixelBoard = document.getElementById("pixel-board")
  for (let index = 0; index < 5; index += 1) {
    const newDiv = document.createElement("div");
    newDiv.className = "line";
    pixelBoard.appendChild(newDiv);
  }
}

addDivLinePixelBoard();

function addDivColumnPixelBoard() {
  const divPixelBoard = document.getElementsByClassName("line")
  for (let index = 0; index < divPixelBoard.length; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const newDiv = document.createElement("div");
      newDiv.className = "pixel";
      newDiv.style.backgroundColor = "white";
      divPixelBoard[index].appendChild(newDiv);
    }
  }
}

addDivColumnPixelBoard();

function addColorInDivsPalette() {
  const div = document.getElementsByClassName("color");
  const colors = ["black", "blue", "aqua", "springgreen"];
  for (let index = 0; index < div.length; index += 1) {
    div[index].style.backgroundColor = colors[index];
  }
}

addColorInDivsPalette();

function createButton() {
  const button = document.createElement("button");
  button.id = "button-random-color";
  button.innerText = "Cores aleatórias"
  colorPallete.appendChild(button);
}

createButton();

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function randomColorPalette() {
  const divColors = document.getElementsByClassName("color");
  let cor = [];
  for (let index = 1; index < divColors.length; index += 1) {
    divColors[index].style.backgroundColor = randomColorGenerator();
    cor.push(divColors[index].style.backgroundColor);
  }
  
  cor.unshift("black");
  localStorage.setItem("colorPalette", JSON.stringify(cor));
}

function randomColorButton() {
  const button = document.getElementById("button-random-color");
  button.addEventListener("click", function(event) {
    event.target = randomColorPalette();
  })
}

randomColorButton();

function initialize() {
  const divColor = document.getElementsByClassName("color")
  let palette = localStorage.getItem("colorPalette");
  let paletteStr = JSON.parse(palette);
  
  if (palette) {
    for (let index = 0; index < divColor.length; index += 1) {
      divColor[index].style.backgroundColor = paletteStr[index];
    }
  }
}

initialize()