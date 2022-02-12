let keys = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 }
let posX = 500;
let posY = 275;

let canvasDraw = document.getElementById("space-draw");
let pencil = document.getElementById("size-pencil");
let lienzo = canvasDraw.getContext("2d");

let sizePencil = pencil.value;

pencil.addEventListener("change", e => { sizePencil = e.target.value; });
document.addEventListener("keyup", draw);

function drawLine(color, xinit, yinit, xfinal, yfinal) {
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = parseInt(sizePencil);
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function draw(event) {

    let move = 10;
    switch (event.keyCode) {
        case 38:
            drawLine("red", posX, posY, posX, posY - move);
            posY -= move; break;
        case 40:
            drawLine("red", posX, posY, posX, posY + move);
            posY += move; break;
        case 37:
            drawLine("red", posX, posY, posX - move, posY);
            posX -= move; break;
        case 39:
            drawLine("red", posX, posY, posX + move, posY);
            posX += move; break;
    }
}