let keys = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 }
let eraserMouse = 0;
let posX = 500;
let posY = 275;
let moveMouse;
let size;

let canvasDraw = document.getElementById("space-draw");
let backGround = document.getElementById("input-back");
let btnEraser = document.getElementById("btn.eraser");
let btnReset = document.getElementById("btn-clear");
let pencil = document.getElementById("size-pencil");
let penCol = document.getElementById("input-color");
let label = document.getElementById("label-size");

let lienzo = canvasDraw.getContext("2d");

let backColor = backGround.value;
let sizePencil = pencil.value;
let pencilColor = penCol.value;

document.addEventListener("keyup", drawKeys);
canvasDraw.addEventListener("mouseleave", () => { moveMouse = 0; });
pencil.addEventListener("change", e => { sizePencil = e.target.value; });
penCol.addEventListener("change", e => { pencilColor = e.target.value; });
btnReset.addEventListener("click", () => { canvasDraw.width = canvasDraw.width; });

backGround.addEventListener("change", e => {     
    backColor = e.target.value;
    canvasDraw.style.backgroundColor = backColor;
});
btnEraser.addEventListener("click", () => { 

    if (btnEraser.innerHTML == "Borrador") {    
        eraserMouse = 1;    
        btnEraser.innerHTML = "Borrador Activo!";  
        btnEraser.style.border = "5px groove red";
        label.innerHTML = "Tamaño Borrador";
    } else {
        eraserMouse = 0;    
        btnEraser.innerHTML = "Borrador"; 
        btnEraser.style.border = "2px outset gray";
        label.innerHTML = "Tamaño de Pincel";
    }
});
canvasDraw.addEventListener("mousedown", (e) => {
    
    moveMouse = 1;  
    size = parseInt(sizePencil) + 2;
    if (eraserMouse) {
        posX = e.layerX;
        posY = e.layerY;
        lienzo.clearRect(posX, posY, size, size);
    } else {
        posX = e.layerX;
        posY = e.layerY;
        drawLine(pencilColor, posX, posY, posX - 2, posY - 2);
    }
});
canvasDraw.addEventListener("mouseup", (e) => {

    if (eraserMouse) { moveMouse = 0; } 
    else {
        moveMouse = 0;
        posX = e.layerX;
        posY = e.layerY;        
    }
});
canvasDraw.addEventListener("mousemove", (e) => {    

    size = parseInt(sizePencil) +  2;
    if (moveMouse) {        
        if (eraserMouse) { lienzo.clearRect(e.layerX, e.layerY, size, size); } 
        else {
            drawLine(pencilColor, posX, posY, e.layerX, e.layerY);
            posX = e.layerX;
            posY = e.layerY;    
        }
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