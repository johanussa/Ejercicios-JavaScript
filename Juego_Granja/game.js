let keys = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
let posCows = new Array();
let posWolfs = new Array();
let posChikens = new Array();
let moveActive = 0;
let posX = 5;
let posY = 5;

let title = document.getElementById("title");
let btnStart = document.getElementById("btn-start");
let paragraph = document.getElementById("paragraph");
let canvasDraw = document.getElementById("canvas-draw");
let containHead = document.getElementById("contain-head");

let numCows = randomNumbers(2, 5);
let numWolfs = moveActive ? none : randomNumbers(1, 3); 
let numChiken = randomNumbers(2, 5);
let lienzo = canvasDraw.getContext("2d");

let cow = { url: "/assets/vaca.png", loadOk: false };
let flag = { url: "/assets/flag.png", loadOk: false };
let wolf = { url: "/assets/wolf.png", loadOk: false };
let porky = { url: "/assets/cerdo.png", loadOk: false };
let chicken = { url: "/assets/gallina.png", loadOk: false };
let litChicken = { url: "/assets/pollo.png", loadOk: false };
let backMap = { url: "/assets/map_farm.webp", loadOk: false };

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCows);

flag.image = new Image();
flag.image.src = flag.url;
flag.image.addEventListener("load", loadFlag);

porky.image = new Image();
porky.image.src = porky.url;
porky.image.addEventListener("load", loadporky);

wolf.image = new Image();
wolf.image.src = wolf.url;
wolf.image.addEventListener("load", loadWolfs);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChickens);

litChicken.image = new Image();
litChicken.image.src = litChicken.url;
litChicken.image.addEventListener("load", loadLitChickens);

backMap.image = new Image();
backMap.image.src = backMap.url;
backMap.image.addEventListener("load", loadBackGround);

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
document.addEventListener("keyup", movePorky);

function movePorky(event) {
    let move = 60;
    switch (event.keyCode) {
        case keys.LEFT:  
            if (posX >= 65) { 
                posX -= 60; 
                moveActive = 1; 
                draw();
            }                                  
            break;
        case keys.UP:
            if (posY >= 65) { 
                posY -= 60; 
                moveActive = 1; 
                draw();
            }  
            break;
        case keys.RIGHT:
            if (posX <= 420) { 
                posX += 60; 
                moveActive = 1; 
                draw();
            }  
            break;
        case keys.DOWN:
            if (posY <= 420) { 
                posY += 60; 
                moveActive = 1; 
                draw();
            }  
            break;
    }
}

function loadCows() {
    cow.loadOk = true;
    draw();
}
function loadFlag() {
    flag.loadOk = true;
    draw();
}
function loadWolfs() {
    wolf.loadOk = true;
    draw();
}
function loadporky() {
    porky.loadOk = true;
    draw();
}
function loadChickens() {
    chicken.loadOk = true;
    draw();
}
function loadBackGround() {
    backMap.loadOk = true;
    draw();
}
function loadLitChickens() {
    litChicken.loadOk = true;
    draw();
}
function draw() {

    if (backMap.loadOk) { 
        lienzo.drawImage(backMap.image, 0, 0); 
        if (cow.loadOk) {
            for (let i = 0; i < numCows; i++) {
                if (moveActive) {
                    let x = posCows[i][0];
                    let y = posCows[i][1];
                    lienzo.drawImage(cow.image, x, y);
                } else {
                    let x = randomNumbers(0, 7);  // Permite que las vacas aparezcan no 
                    let y = randomNumbers(0, 7);  // tan juntas unas de las otras
                    x *= 60;   // Multiplicando el num aleatorio por el tamaño de la imagen
                    y *= 60;   // Asi se puede distribuir de mejor manera en el mapa
                    if (x >= 0 && x <= 75 && y >= 0 && y <= 65) { x += 70; }
                    posCows.push([x, y]);
                    lienzo.drawImage(cow.image, x, y);
                }
            }
        }
        if (chicken.loadOk) {       
            for (let i = 0; i < numChiken; i ++) {
                if (moveActive) {
                    let x = posChikens[i][0];
                    let y = posChikens[i][1];
                    lienzo.drawImage(chicken.image, x, y);
                } else {
                    let x = randomNumbers(0, 7) * 60;
                    let y = randomNumbers(0, 7) * 60;
                    posChikens.push([x, y]);
                    if (x == 0 && y == 0) { x += 60; }
                    lienzo.drawImage(chicken.image, x, y);
                }
            }
        }
        if (litChicken.loadOk) {
            for (let i = 0; i < (numChiken + 2); i ++) {
                let x = randomNumbers(0, 30) * 16;
                let y = randomNumbers(0, 30) * 16;
                lienzo.drawImage(litChicken.image, x, y);
            }
        }
        if (porky.loadOk) { lienzo.drawImage(porky.image, posX, posY); }
        if (wolf.loadOk) {
            for (let i = 0; i < numWolfs; i ++) {                
                let x = randomNumbers(0, 7) * 60;
                let y = randomNumbers(0, 7) * 60;
                posWolfs.push([x, y]);
                if (x >= 0 && x <= 65 && y >= 0 && y <= 65) { x += 65; y += 65; }
                if (x >= 350 && y >= 400) { y -= 85; }
                lienzo.drawImage(wolf.image, x, y);                
            }
        }
        if (flag.loadOk) { lienzo.drawImage(flag.image, 440, 360); }
    }
}
function randomNumbers(min, max) {  // Funcion que nos permte crear numeros aleatorios
    let randomNum;                  // del rango que deseamos
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}