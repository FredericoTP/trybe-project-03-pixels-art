const colorPallete = document.getElementById("color-palette");

function addDivColorPalette() {
    for (let index = 0; index < 4; index += 1) {
        let newDiv = document.createElement("div");
        newDiv.className = "color";
        colorPallete.appendChild(newDiv);
    }
}

addDivColorPalette();

function addColorInDivsPalette() {
    const div = document.getElementsByClassName("color");
    const colors = ["black", "blue", "aqua", "springgreen"];
    for (let index = 0; index < div.length; index += 1) {
        div[index].style.backgroundColor = colors[index];
    }
}

addColorInDivsPalette();