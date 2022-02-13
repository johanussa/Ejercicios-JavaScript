let keys = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 }
let posX = 500;
let posY = 275;
let moveMouse;

let canvasDraw = document.getElementById("space-draw");
let btnReset = document.getElementById("btn-clear");
let pencil = document.getElementById("size-pencil");
let penCol = document.getElementById("input-color");
let back = document.getElementById("input-back");
let lienzo = canvasDraw.getContext("2d");

let backColor = back.value;
let sizePencil = pencil.value;
let pencilColor = penCol.value;

canvasDraw.addEventListener("mouseleave", () => { moveMouse = 0; });
pencil.addEventListener("change", e => { sizePencil = e.target.value; });
penCol.addEventListener("change", e => { pencilColor = e.target.value; });
btnReset.addEventListener("click", () => { canvasDraw.width = canvasDraw.width; })
document.addEventListener("keyup", drawKeys);

back.addEventListener("change", e => { 
    backColor = e.target.value;
    canvasDraw.style.backgroundColor = backColor;
});
canvasDraw.addEventListener("mousedown", (e) => {
    moveMouse = 1;
    posX = e.layerX;
    posY = e.layerY;
    drawLine(pencilColor, posX, posY, posX - 2, posY - 2);
});
canvasDraw.addEventListener("mouseup", (e) => {
    moveMouse = 0;
    posX = e.layerX;
    posY = e.layerY;
});
canvasDraw.addEventListener("mousemove", (e) => {
    if (moveMouse) {
        drawLine(pencilColor, posX, posY, e.layerX, e.layerY);
        posX = e.layerX;
        posY = e.layerY;    
    } 
});

function drawLine(color, xinit, yinit, xfinal, yfinal) {
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = parseInt(sizePencil);
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function drawKeys(event) {

    let move = 10;
    switch (event.keyCode) {
        case keys.UP:
            drawLine(pencilColor, posX, posY, posX, posY - move);
            posY -= move; break;
        case keys.DOWN:
            drawLine(pencilColor, posX, posY, posX, posY + move);
            posY += move; break;
        case keys.LEFT:
            drawLine(pencilColor, posX, posY, posX - move, posY);
            posX -= move; break;
        case keys.RIGHT:
            drawLine(pencilColor, posX, posY, posX + move, posY);
            posX += move; break;
    }
}