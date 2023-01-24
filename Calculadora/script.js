const btns = document.getElementById('btns');
const inpValor = document.getElementById('value');
const acumulador = document.getElementById('acumulador');
const operadores = ['+', '-', '*', '/'];

let global = 0;
let resOK = false;
let newOperation = false;

btns.addEventListener('click', (event) => {
    let valor = event.target.value;
    if (valor !== undefined) {
        if (resOK) {
            if (!operadores.some(e => e === valor)) { inpValor.innerHTML = 0; }
            acumulador.innerHTML = '';
            resOK = false;
        }
        if (newOperation) {
            inpValor.innerHTML = 0;
            newOperation = false;
        }
        if (inpValor.innerHTML === '0' && valor !== '.') { inpValor.innerHTML = ''; }
    
        const ACTIONS = {
            c: () => reset(),
            eraser: () => eraser(),
            res: () => {
                acumulador.innerHTML += inpValor.innerHTML;
                operacion(acumulador.innerHTML);
            }
        }
        if (ACTIONS[valor]) { ACTIONS[valor]() } 
        else if (operadores.some(e => e === valor)) {
            if (inpValor.innerHTML === '') { inpValor.innerHTML = 0 }
            acumulador.innerHTML += `${inpValor.innerHTML} ${valor} `;
            newOperation = true;
        } else { inpValor.innerHTML += valor; }
    }
});
function operacion(expresion) {
    if (inpValor.innerHTML !== '') {
        inpValor.innerHTML = eval(expresion);
        resOK = true;
    } else { inpValor.innerHTML = 0; }
}
function reset() {
    acumulador.innerHTML = ``;
    inpValor.innerHTML = 0;
}
function eraser() {
    if (inpValor.innerHTML.length > 1) {
        let string = inpValor.innerHTML;
        inpValor.innerHTML = string.slice(0, string.length - 1);
    } else { inpValor.innerHTML = 0; }
}
