const inputType = document.getElementById("inputState");
const inputNum = document.getElementById("inputNum");
const inputName = document.getElementById("inputName");
const inpLast = document.getElementById("inpLast");
const inputAge = document.getElementById("inputAge");
const inpAdress = document.getElementById("inpAdress");
const inputTel = document.getElementById("inputTel");
const inpEstrat = document.getElementById("inputEstrat");
const container = document.getElementById("container");

function confirmarData() {
  let data = `Datos Almacenados con Exito !!!
    Tipo de Documento : ${inputType.value}
    Numero : ${inputNum.value}
    Nombre : ${inputName.value}
    Apellido : ${inpLast.value}
    Edad : ${inputAge.value}
    Direccion : ${inpAdress.value}
    Telefono : ${inputTel.value}
    Estrato : ${inpEstrat.value}
  `;
  alert(data);
}

// ##################################################################
//                        Ejercicio Numero 2
// ##################################################################

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const concat = document.getElementById('showString');

function concatenar() {
  if (text1.value.length > 0 && text2.value.length > 0) {
    concat.innerText = `${text1.value} ${text2.value}`
  } else {
    alert('Los datos ingresados No Son Validos !!')
  }
}

// ##################################################################
//                        Ejercicio Numero 3
// ##################################################################

const showNums = document.getElementById('showNums');
const ul = document.createElement('ul');

function generate() {
  showNums.innerText = '';
  showNums.append(ul);
  for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
      const li = document.createElement('li');
      li.innerText = i;
      ul.append(li);
    }
  }
}

// ##################################################################
//                        Ejercicio Numero 4
// ##################################################################

const showNums1000 = document.getElementById('showNums1000');

function generateAdd() {
  let suma = 0;
  for(let i = 1; i <= 1000; i ++) { suma += i; }
  showNums1000.innerText = `La sumatoria de los numeros entre 1 y 1000 es de: ${suma}`;
}

// ##################################################################
//                        Ejercicio Numero 6
// ##################################################################

const showType = document.getElementById('showType');
const typeText = document.getElementById('typeText');

function evaluarTipo() {
  if(typeText.value.length > 0) {
    if (Number(typeText.value)) {
      let num = String(typeText.value % 10);
      showType.innerText = `El valor es de tipo Numero ${num.length == 1 ? 'Entero' : 'Flotante'}`;
    } else if (typeText.value == 'true' || typeText.value == 'false') {
      showType.innerText = 'El valor es de tipo Booleano - true or false';
    } else {
      showType.innerText = 'El valor es de tipo String - Cadena de Texto';
    }
  } else { alert('El dato ingresado No es Valido !!'); }
}

// ##################################################################
//                        Ejercicio Numero 7
// ##################################################################

const inpNumPrimo = document.getElementById('inpNumPrimo');
const showPrimos = document.getElementById('showPrimos');

function generatePrimos() {  
  if (inpNumPrimo.value.length > 0 && Number(inpNumPrimo.value) > 1) {
    
    let num = Number(inpNumPrimo.value);
    const ul = document.createElement('ul');
    showPrimos.innerText = `---> Números Primos entre 1 y ${num}`;    
    showPrimos.append(ul);
    let count = 0;

    for(let i = 2; i <= num; i++) {
      let j = 1;
      while(j <= i && count < 3) {
        if(i % j == 0) { count++; }
        j++;
      }
      if (count == 2) { 
          const li = document.createElement('li');
          li.innerText = i;
          ul.append(li);
      }
      count = 0;
    }    
  } else { alert('El dato ingresado No es Valido !!'); }
}

// ##################################################################
//                        Ejercicio Numero 8
// ##################################################################

const showSquart = document.getElementById('showSquart');

function generateSquart() {
  const ul = document.createElement('ul');
  for(let i = 1; i <= 100; i++) {
    showSquart.innerText = '';
    showSquart.append(ul);
    const li = document.createElement('li');
    li.innerText = `Raiz cuadrada de ${i} : ${Math.sqrt(i)}`;
    ul.append(li);
  }
}