class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

let billetes = [];
let giveMoney = [];
let cantMoney = 0;
let cantBilletes = 0;
let moneyDisable = 0;

billetes.push( new Billete(100000, 20) );
billetes.push( new Billete( 50000, 20) );
billetes.push( new Billete( 20000, 20) );
billetes.push( new Billete( 10000, 20) );

let cantRetiro = document.getElementById("retiro");
let resRetiro = document.getElementById("response");
let getMoney = document.getElementById("show-money");
let btnRetirar = document.getElementById("btn-retirar1");
let containMain = document.getElementById("containMain");
let containCant = document.getElementById("containCant");
let selectMoney = document.getElementById("selectMoney");
let valueRet1 = document.getElementsByClassName("option1");
let valueRet2 = document.getElementsByClassName("option2");

btnRetirar.addEventListener("click", () => {
    containMain.style.display = "none";
    containCant.style.display = "block";
});

valueRet1[0].addEventListener("click", () => { valueMoney(valueRet1[0].value); });
valueRet1[1].addEventListener("click", () => { valueMoney(valueRet1[1].value); });
valueRet1[2].addEventListener("click", () => { valueMoney(valueRet1[2].value); });
valueRet1[3].addEventListener("click", () => { valueMoney(valueRet1[3].value); });

valueRet2[0].addEventListener("click", () => { valueMoney(valueRet2[0].value); });
valueRet2[1].addEventListener("click", () => { valueMoney(valueRet2[1].value); });
valueRet2[2].addEventListener("click", () => { valueMoney(valueRet2[2].value); });

valueRet2[3].addEventListener("click", () => {  
    containCant.style.display = "none";
    selectMoney.style.display = "inline-block";
});

function valueMoney(valor) {

    moneyDisable = 0;
    for (const billete of billetes) { 
        moneyDisable += (billete.valor * billete.cantidad); 
    }
    switch (valor) {
        case "20000": cantMoney = 20000; retirarMoney(); break;
        case "50000": cantMoney = 50000; retirarMoney(); break;
        case "100000": cantMoney = 100000; retirarMoney(); break;
        case "200000": cantMoney = 200000; retirarMoney(); break;
        case "300000": cantMoney = 300000; retirarMoney(); break;
        case "400000": cantMoney = 400000; retirarMoney(); break;
        case "600000": cantMoney = 600000; retirarMoney(); break;
    }
}
function retirarMoney() {
    
    showMoney();       
    if (moneyDisable >= cantMoney) {
        for (const billete of billetes) {
            if (cantMoney > 0) {
                cantBilletes = parseInt(cantMoney / billete.valor);
                if (cantBilletes > billete.cantidad) {
                    cantBilletes = billete.cantidad;
                } 
                giveMoney.push( new Billete(billete.valor, cantBilletes) );
                billete.cantidad -= cantBilletes;
                cantMoney -= (billete.valor * cantBilletes);
            }
        } printMoney();
    } else { alert("Lo siento no hay suficiente dinero en este cajero"); }
}
function printMoney() {
    for (const billete of giveMoney) {
        if (billete.cantidad > 0) {            
            resRetiro.innerHTML = billete.cantidad + " Billetes de $ " + billete.valor; 
        }
    } giveMoney = [];
}
function showMoney() {    
    containCant.style.display = "none";
    cantRetiro.innerHTML = "$ " + cantMoney; 
    getMoney.style.display = "inline-block";
}