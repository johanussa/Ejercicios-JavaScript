class Billete {
    constructor(valor, cantidad) {      // Clase de tipo Billete
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

let billetes = [];
let giveMoney = [];
let cantMoney = 0;
let cantBilletes = 0;
let moneyDisable = 0;

billetes.push( new Billete(100000, 20) );       // Cada objeto de tipo Billete se introduce en el arreglo
billetes.push( new Billete( 50000, 20) );       // Recibe como parametros el valor y la cantidad de billetes
billetes.push( new Billete( 20000, 20) );
billetes.push( new Billete( 10000, 20) );

let btnExit = document.getElementById("btn-exit");
let cantRetiro = document.getElementById("retiro");
let resRetiro = document.getElementById("response");
let getMoney = document.getElementById("show-money");
let btnBack = document.getElementById("btn-back-main");
let btnRetManu = document.getElementById("btn-retirar2");   // Tomamos los elementos del DOM que seran requeridos por su ID
let btnRetirar = document.getElementById("btn-retirar1");
let containMain = document.getElementById("containMain");
let containCant = document.getElementById("containCant");
let selectMoney = document.getElementById("selectMoney");
let valorManual = document.getElementById("input-money");
let valueRet1 = document.getElementsByClassName("option1");
let valueRet2 = document.getElementsByClassName("option2");

valueRet1[0].addEventListener("click", () => { valueMoney(valueRet1[0].value); });
valueRet1[1].addEventListener("click", () => { valueMoney(valueRet1[1].value); });      // Segun la cantidad de dinero seleccionada
valueRet1[2].addEventListener("click", () => { valueMoney(valueRet1[2].value); });      // se activa la funcion que asigna ese valor a la variable
valueRet1[3].addEventListener("click", () => { valueMoney(valueRet1[3].value); });      // cantMoney y se envia como argumento el valor de la casilla

valueRet2[0].addEventListener("click", () => { valueMoney(valueRet2[0].value); });
valueRet2[1].addEventListener("click", () => { valueMoney(valueRet2[1].value); });
valueRet2[2].addEventListener("click", () => { valueMoney(valueRet2[2].value); });

valueRet2[3].addEventListener("click", () => {  
    containCant.style.display = "none";
    selectMoney.style.display = "inline-block";
});

btnExit.addEventListener("click", () => {
    containMain.style.display = "none";
    Swal.fire('Que tenga un buen dia, gracias por usar nuestros servicios');
});

btnRetirar.addEventListener("click", () => {    // En cada paso que sigue el usuario, 
    containMain.style.display = "none";         // se muestran y se ocultan otras pantallas
    containCant.style.display = "block";
});

valorManual.addEventListener("change", () => {  // Al introducir el valor manual
    cantMoney = parseInt(valorManual.value);    // el valor del retiro se actualiza
});

btnRetManu.addEventListener("click", () => {
    if (cantMoney >= 10000 && (cantMoney / 1000) % 10 == 0 && cantMoney <= 2500000) { 
        valueMoney(); retirarMoney();             
        selectMoney.style.display = "none";     // Condicional que solo permite la continuacion de la ejecucion del programa 
        valorManual.value = "";                 // si la cantidad del retiro que se introdujo es mayor de 110 mil
    } else {                                    // que es multiplo de 10 por lo que la denominacion de los billetes
        Swal.fire({                             // pueda cumplir con el retiro solicitado, sino, lanza un aviso
            icon: 'error',
            title: 'Lo sentimos !',
            text: 'Pero el valor introducido ' + cantMoney + ' No es valido, vuelvelo a intentar',
        });
    }    
});

btnBack.addEventListener("click", () => {       // Permite despues de hacer un retiro, realizar otro
    getMoney.style.display = "none";
    containMain.style.display = "block";
    resRetiro.innerHTML = "";
});

function valueMoney(valor) {

    moneyDisable = 0;
    for (const billete of billetes) { 
        moneyDisable += (billete.valor * billete.cantidad);         // Si el usuario elije la opcion de retirar el valor que se encuentra
    }                                                               // dependiendo de la casilla que escoja, esta actualiza la variable cantMoney
    switch (valor) {                                                // que hace referencia a la cantidad de dinero que se desea retirar 
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
                                                                                    // Funcion que evalua si se puede o no realizar la transaccion
    showMoney();                                                                    // La cantidad de dinero disponible en el cajero siempre debera 
    if (moneyDisable >= cantMoney) {                                                // ser mayor a la cantidad requerida
        for (const billete of billetes) {                                           // Se recorre el array donde se almacenan los Billetes
            if (cantMoney > 0) {                                                    // y con cada billete, segun la cantidad que haya, se hace el retiro 
                cantBilletes = parseInt(cantMoney / billete.valor);                 // Por cada evaluacion de cada billete se resta al valor del retiro 
                if (cantBilletes > billete.cantidad) {                              // la cantidad de dinero que se pudo retirar por decir, de 100 mil, 
                    cantBilletes = billete.cantidad;                                // si hay billetes de esta denominacion se restara uno a cantidad
                }                                                                   // Para saber cunatos billetes se pueden dar se hace la division de la 
                giveMoney.push( new Billete(billete.valor, cantBilletes) );         // cantidad del retiro por la denominacion del billete
                billete.cantidad -= cantBilletes;                                   // En cada evaluacion la cantidad de billetes y su denominacion se almacenan en otro array 
                cantMoney -= (billete.valor * cantBilletes);                        // en el cual mostraremos en pantalla aquellos cuya cantidad sean mayor a 0
            }                                                                       // Se actualiza el valor a retirar       
        } printMoney();
    } else { 
        Swal.fire({
            icon: 'error',                                                          // Si el valor del retiro solicitado es mayor a la cantidad de dinero
            title: 'Lo sentimos !!',                                                // con el que dispone el cajero, se lanza un mensaje de error       
            text: 'Pero este cajero no cuenta con esa cantidad de dinero ' + 
                '- El saldo disponible es de: ' + moneyDisable,
        });
        resRetiro.innerHTML = "Dinero disponible : " + moneyDisable;                // Se muestra en pantalla la cantidad de dinero que queda disponible
    }                                                                               // para que el usuario lo sepa
}
function printMoney() {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su transacción, ha sido realizada con exito !!',
        showConfirmButton: false,
        timer: 2500
    });
    for (const billete of giveMoney) {
        if (billete.cantidad > 0) {                                             // Se muestra los billetes y las cantidades de cada uno que deberian ser 
            resRetiro.innerHTML += billete.cantidad + " Billetes de $ "         // extraidos por el usuario
                + billete.valor + "<br />"; 
        }
    } giveMoney = [];
}
function showMoney() {      
    containCant.style.display = "none";
    cantRetiro.innerHTML = "$ " + cantMoney;        // Muestra el valor del retiro
    getMoney.style.display = "inline-block";
}