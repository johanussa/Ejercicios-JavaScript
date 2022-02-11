let draw = document.getElementById("star");
let botton = document.getElementById("btn-draw");
let sizeDraw = document.getElementById("inp-num");
let lienzo = draw.getContext("2d");
let canvas = document.getElementById("star");
let inpColor1 = document.getElementById("color1");
let inpColor2 = document.getElementById("color2");
let inpColor3 = document.getElementById("color3");

let color1 = inpColor1.value;
let color2 = inpColor2.value;
let color3 = inpColor3.value;

inpColor1.addEventListener("change", e => { color1 = e.target.value; drawStar(); });
inpColor2.addEventListener("change", e => { color2 = e.target.value; drawStar(); });
inpColor3.addEventListener("change", e => { color3 = e.target.value; drawStar(); });

botton.addEventListener("click", drawStar)
 
function drawLine(color, xinit, yinit, xfinal, yfinal) {  

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function drawStar() {   
    
    canvas.width = canvas.width;
    let lineas = parseInt(sizeDraw.value);

    for (let line = 0; line < lineas; line++) {

        drawLine(color1, 0, (line * 10), ((line +1) * 10), (lineas * 10));
        drawLine(color2, ((lineas - line) * 10), 0, 0, ((line +1) * 10));
        drawLine(color2, (line * 10), (lineas * 10), (lineas * 10), ((lineas - line) * 10));
        drawLine(color1, (line * 10), 0, (lineas * 10), ((line +1) * 10)); 

        if (((lineas * 10) / 2) - ((line + 1) * 10) >= -5 ) {
            drawLine(color3, (line * 10), (lineas * 10) / 2, (lineas * 10) / 2, 
                ((lineas * 10) / 2) - ((line + 1) * 10));
            drawLine(color3, ((lineas * 10) / 2), ((lineas * 10) / 2) - ((line + 1) * 10), 
                (lineas * 10) - ((line + 1) * 10), ((lineas * 10) / 2)); 
            
        }
        if (((lineas * 10) / 2) + ((line + 1) * 10) < lineas * 10 ) {            
            drawLine(color3, ((line +1) * 10), ((lineas * 10) / 2), ((lineas * 10) / 2), 
                ((lineas * 10) / 2) + ((line + 1) * 10));
            drawLine(color3, ((lineas * 10) / 2), ((lineas * 10) / 2) + ((line + 1) * 10), 
                (lineas * 10) - ((line + 1) * 10), ((lineas * 10) / 2));
        }
    }
    drawLine("white", 0, 0, 0, (lineas * 10));
    drawLine("white", 0, 0, (lineas * 10), 0);
    drawLine("white", 0, (lineas * 10), (lineas * 10), (lineas * 10));
    drawLine("white", (lineas * 10), 0, (lineas * 10), (lineas * 10));
    drawLine(color3, 0, ((lineas * 10) / 2), (lineas * 10), ((lineas * 10) / 2));
    
    if (lineas % 2 == 0) { 
        drawLine(color3, ((lineas * 10) / 2), 0, ((lineas * 10) / 2), ((lineas * 10)));
    }
}                
