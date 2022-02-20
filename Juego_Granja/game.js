let keys = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
let posChikens = new Array();
let posCows = new Array();
let startGame = false;
let moveActive = 0;     // Creacion de variables globales
let posX = 5;
let posY = 5;
let numChiken;
let numWolfs;
let numCows;

let title = document.getElementById("title");
let btnStart = document.getElementById("btn-start");
let paragraph = document.getElementById("paragraph");
let canvasDraw = document.getElementById("canvas-draw");
let arrowUp = document.getElementById("arrowUp");       // Tomamos todos elementos con los que 
let arrowLeft = document.getElementById("arrowLeft");   // interactuaremos del HTML
let arrowDown = document.getElementById("arrowDown");
let arrowRight = document.getElementById("arrowRight");
let containHead = document.getElementById("contain-head");
let lienzo = canvasDraw.getContext("2d");

let rip = { url: "/assets/grave.png" };
let cow = { url: "/assets/vaca.png", loadOk: false };
let flag = { url: "/assets/flag.png", loadOk: false };      // Creamos objetos que obtienen informacion de 
let wolf = { url: "/assets/wolf.png", loadOk: false };      // ubicacion y el estado de carga de cada objeto
let porky = { url: "/assets/cerdo.png", loadOk: false };    
let chicken = { url: "/assets/gallina.png", loadOk: false };
let litChicken = { url: "/assets/pollo.png", loadOk: false };
let backMap = { url: "/assets/map_farm.webp", loadOk: false };

rip.image = new Image();            // Creamos los objetos imagen de cada animal 
rip.image.src = rip.url;            // que se utilizara en el mapa

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
                                            
    startGame = true;                       // Funcion que se activa al iniciar el juego, 
    btnStart.style.display = "none";        // haciendo algunas animaciones al DOM
    paragraph.style.fontSize = "0.9em";
    paragraph.style.transition = "all 2s ease-out";
    containHead.style.margin = "0px auto 0px";
    containHead.style.transition = "all 2s ease-out";
    title.style.fontSize = "2em";
    title.style.margin = "-5px auto -10px";
    title.style.transition = "all 2s ease-out";
    canvasDraw.style.display = "inline-block";
});

document.addEventListener("keydown", (event) => {

    switch (event.keyCode) {                // Las imagenes en forma de flecha interactuan al 
        case keys.LEFT:                     // momento que el usuario presiona las teclas correspondientes
            arrowLeft.style.color = "red";                                             
            break;
        case keys.UP:
            arrowUp.style.color = "red";  
            break;
        case keys.RIGHT:
            arrowRight.style.color = "red";  
            break;
        case keys.DOWN:
            arrowDown.style.color = "red";  
            break;
    }
});

function movePorky(event) {
                                // Funcion que actualiza los movimientos 
    if (startGame) {            // del cerdo y el lobo a traves del mapa
        let move = 60;          
        switch (event.keyCode) {
            case keys.LEFT:  
                if (posX >= 65) { 
                    posX -= 60; 
                    moveActive = 1; 
                    draw();
                    arrowLeft.style.color = "black";
                }                                  
                break;
            case keys.UP:
                if (posY >= 65) { 
                    posY -= 60; 
                    moveActive = 1; 
                    draw();
                    arrowUp.style.color = "black";  
                }  
                break;
            case keys.RIGHT:
                if (posX <= 420) { 
                    posX += 60; 
                    moveActive = 1; 
                    draw();
                    arrowRight.style.color = "black";  
                }  
                break;
            case keys.DOWN:
                if (posY <= 420) { 
                    posY += 60; 
                    moveActive = 1; 
                    draw();
                    arrowDown.style.color = "black";  
                }  
                break;
        }
        if (posX >= 425 && posY >= 425) {           // Si el cerdo llega al corral se 
                                                    // activa la notificacion de ganador
            document.removeEventListener("keyup", movePorky);
            Swal.fire({
                icon: 'success',
                title: 'Felicitaciones!!',
                text: 'Lograste llevar al cerdito sano y salvo a su corral y sin que ningun lobo ' + 
                    'se lo comiera en el intento, muy bien hecho. Corriste con mucha suerte.',
                confirmButtonText: '<swal-button type="confirm">Jugar de Nuevo !</swal-button>',
                confirmButtonColor: '#44991a',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                    if (result.isConfirmed) {
                        moveActive = 0; posX = 5; posY = 5;
                        posChikens = []; posCows = [];                
                        draw();
                    } else { 
                        location.reload(); 
                        startGame = false; 
                    }
              });      
        }        
    } else {
        arrowUp.style.color = "black";  
        arrowDown.style.color = "black"; 
        arrowLeft.style.color = "black";
        arrowRight.style.color = "black";  
    }
}

function loadCows() { cow.loadOk = true; draw(); }
function loadFlag() { flag.loadOk = true; draw(); }         // Funciones que se llaman en cuanto se carga cada imagen requerida 
function loadWolfs() { wolf.loadOk = true; draw(); }        // y se actualiza su estado a cargada y se manda a dibujar en el mapa
function loadporky() { porky.loadOk = true; draw(); }
function loadChickens() { chicken.loadOk = true; draw(); }
function loadBackGround() { backMap.loadOk = true; draw(); }
function loadLitChickens() { litChicken.loadOk = true; draw(); }

function generartorNumber() {
    numCows = randomNumbers(2, 5);      // Funcion que me da aleatoriamente la cantidad de 
    numWolfs = randomNumbers(1, 3);     // animales de cada especie que apareceran en el mapa
    numChiken = randomNumbers(2, 5);
}

function draw() {   // Funcion que me realiza los dibujos en el canvas de cada animal
    
    document.addEventListener("keyup", movePorky);
    if (!moveActive){ generartorNumber(); }
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
                if (x >= 0 && x <= 65 && y >= 0 && y <= 65) { x += 65; y += 65; }
                if (x >= 350 && y >= 400) { y -= 85; }
                lienzo.drawImage(wolf.image, x, y);

                if (x >= (posX - 5) && x <= (posX + 60) && y >= (posY - 5) && y < (posY + 55) ) {
                    document.removeEventListener("keyup", movePorky);
                    lienzo.drawImage(rip.image, posX, posY);
                    Swal.fire({
                        position: 'top-start',          // Si uno de los lobos se encuentra en el mismo camino que el 
                        width: '370px',                 // cerdo, lanzaremos la alerta de que el cerdito ha muerto
                        icon: 'error',
                        title: 'Perdiste!!',
                        text: 'En un desafortunado encuentro, un lobo se cruzo en el mismo camino del cerdito, ' + 
                            'y este fue devorado. Quieres intentarlo una vez mas? tal vez corras con mejor suerte :)',
                        confirmButtonText: '<swal-button type="confirm">Volver a Intentarlo!</swal-button>',
                        confirmButtonColor: '#d33',
                        showCancelButton: true,
                        cancelButtonColor: '#3085d6',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            moveActive = 0; posX = 5; posY = 5;  // Si el usuario desea continuar reiniciamos el juego
                            posChikens = []; posCows = [];                
                            draw(); 
                        } else { 
                            location.reload(); 
                            startGame = false;   // Si no lo desea, volvemos al inicio
                        }
                    });   
                }               
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