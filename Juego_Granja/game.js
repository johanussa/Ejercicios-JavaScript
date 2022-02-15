let title = document.getElementById("title");
let btnStart = document.getElementById("btn-start");
let paragraph = document.getElementById("paragraph");
let canvasDraw = document.getElementById("canvas-draw");
let containHead = document.getElementById("contain-head");

let numCows = randomNumbers(2, 20);
let lienzo = canvasDraw.getContext("2d");

let cow = { url: "/assets/vaca.png", loadOk: false };
let backMap = { url: "/assets/map_farm.webp", loadOk: false };

backMap.image = new Image();
backMap.image.src = backMap.url;
backMap.image.addEventListener("load", loadBackGround);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCows);

btnStart.addEventListener("click", () => {
    
    btnStart.style.display = "none";
    paragraph.style.fontSize = "0.8em";
    paragraph.style.transition = "all 2s ease-out";
    containHead.style.margin = "0px auto 0px";
    containHead.style.transition = "all 2s ease-out";
    title.style.fontSize = "2em";
    title.style.margin = "-5px auto -10px";
    title.style.transition = "all 2s ease-out";
    canvasDraw.style.opacity = "1";
    canvasDraw.style.transition = "all 4s ease-out";
});
function loadBackGround() {
    backMap.loadOk = true;
    draw();
}
function loadCows() {
    cow.loadOk = true;
    draw();
}
function draw() {
    if (backMap.loadOk) { lienzo.drawImage(backMap.image, 0, 0); }
    if (cow.loadOk) {
        for (let i = 0; i < numCows; i++) {
            let x = randomNumbers(0, 7);  // Permite que las vacas aparezcan no tan 
            let y = randomNumbers(0, 7);  // juntas unas de las otras
            x *= 60;    // Multiplicando el num aleatorio por el tamaño de la imagen
            y *= 60;    // Asi se puede distribuir de mejor manera en el mapa
            lienzo.drawImage(cow.image, x, y);
        }
    }
}
function randomNumbers(min, max) {  // Funcion que nos permte crear numeros aleatorios
    let randomNum;                  // del rango que deseamos
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}