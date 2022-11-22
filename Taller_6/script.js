function confirmarData() {

  const inputName = document.getElementById("inputName");
  const inpAdress = document.getElementById("inpAdress");
  const inpLast = document.getElementById("inpLast");
  const inputAge = document.getElementById("inputAge");
  const inputTel = document.getElementById("inputTel");
  const inputNum = document.getElementById("inputNum");
  const inputType = document.getElementById("inputState");
  const inpEstrat = document.getElementById("inputEstrat");

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

const dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', (e) => confirmarData()); // e.preventDefault();

// ##################################################################
//                        Ejercicio Numero 2
// ##################################################################

function concatenar() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const concat = document.getElementById('showString');

  try {
    validate(text1);
    validate(text2);
    concat.innerText = `${text1.value} ${text2.value}`
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 3
// ##################################################################

function generate() {
  const showNums = document.getElementById('showNums');
  const ul = document.createElement('ul');

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

function generateAdd() {
  const showNums1000 = document.getElementById('showNums1000');
  let suma = 0;
  for(let i = 1; i <= 1000; i ++) { suma += i; }
  suma = suma.toLocaleString();
  showNums1000.innerText = `La sumatoria de los numeros entre 1 y 1000 es de: ${suma}`;
}

// ##################################################################
//                        Ejercicio Numero 5
// ##################################################################

function showAdd() {
  const inpNum = document.getElementById('inpNum');
  const showAddImpar = document.getElementById('showAddImpar');

  try {
    validate(inpNum);
    let num = Number(inpNum.value);
    if (num > 500) { throw `El valor ${num} NO es valido`; }
    let suma = 0;
    for(let i = num; i <= 500; i++) {
      if (i % 2 != 0) { suma += i; }
    }
    suma = suma.toLocaleString();
    showAddImpar.innerText = `La sumatoria de los numeros impares entre ${inpNum.value} y 500 es: ${suma}`;
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 6
// ##################################################################

function evaluarTipo() {
  const showType = document.getElementById('showType');
  const typeText = document.getElementById('typeText');

  try {
    validate(typeText);
    if (Number(typeText.value)) {
      if (Number(typeText.value) > 0) {
        let num = String(typeText.value % 10);
        showType.innerText = `El valor es de tipo Númerico ${num.length == 1 ? 'Entero' : 'Flotante'}`;
      } else {
        let num = String(typeText.value % 10);
        showType.innerText = `El valor es NEGATIVO de tipo 
          Númerico ${num.length == 2 ? 'Entero' : 'Flotante'}`;
      }
    } else if (typeText.value == 'true' || typeText.value == 'false') {
      showType.innerText = 'El valor es de tipo Booleano - true or false';
    } else {
      showType.innerText = 'El valor es de tipo String - Cadena de Texto';
    }
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 7
// ##################################################################

function generatePrimos() {  
  const inpNumPrimo = document.getElementById('inpNumPrimo');
  const showPrimos = document.getElementById('showPrimos');

  try {
    validate(inpNumPrimo);
    let num = validateNum(inpNumPrimo);
    let count = 0;
    const ul = document.createElement('ul');
    showPrimos.innerText = `---> Números Primos entre 1 y ${num}`;    
    showPrimos.append(ul);

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
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 8
// ##################################################################

function generateSquart() {
  const showSquart = document.getElementById('showSquart');
  const ul = document.createElement('ul');

  for(let i = 1; i <= 100; i++) {
    showSquart.innerText = '';
    showSquart.append(ul);
    const li = document.createElement('li');
    li.innerText = `Raiz cuadrada de ${i} : ${Math.sqrt(i)}`;
    ul.append(li);
  }
}

// ##################################################################
//                        Ejercicio Numero 9
// ##################################################################

function generateImpar() {
  const showImpar = document.getElementById('showImpar');
  const ul = document.createElement('ul');

  showImpar.innerText = '';
  showImpar.append(ul);
  for(let i = 1; i < 1000; i++) {
    if (i % 2 != 0) {
      const li = document.createElement('li');
      li.innerText = i;
      ul.append(li);
    }
  }
}

// ##################################################################
//                        Ejercicio Numero 10
// ##################################################################

function generatePares() {
  const inpParDes = document.getElementById('inpParDes');
  const showPares = document.getElementById('showPares');

  try {
    validate(inpParDes);
    let num = validateNum(inpParDes);
    if (num > 2) {
      const ul = document.createElement('ul');
      showPares.innerText = `--> Pares Comprendidos entre ${num} y 2`;
      showPares.append(ul);
      for (let i = num; i >= 2; i--) {
        if (i % 2 == 0) {
          const li = document.createElement('li');
          li.innerText = i;
          ul.append(li);
        }
      }      
    } else { 
      inpParDes.focus();
      throw `Ingrese un valor mayor a 2, ${num} No es valido`; 
    }
  } catch (error) { alert(error); }
}

// ##################################################################
//                        Ejercicio Numero 11
// ##################################################################

function fibonacci() {
  
  const showFibo = document.getElementById('showFibo');
  const ul = document.createElement('ul');
  showFibo.innerText = '';
  showFibo.append(ul);

  let a = 1, b = 0, c = 0;

  for (let i = 0; i <= 100; i++) {
    const li = document.createElement('li'); 
    li.innerText = c.toLocaleString(); 
    ul.append(li); // 0 1 1 2
    c = a + b; // 1 1 2 3
    a = b; // 0 1 1 2
    b = c; // 1 1 2 3
  }
}

// ##################################################################
//                        Ejercicio Numero 12
// ##################################################################

function factorial() {  
  const numFactor = document.getElementById('numFactor');
  const showFactor = document.getElementById('showFactor');

  try {
    validate(numFactor);
    let num = validateNum(numFactor);
    let factor = 1;
    const ul = document.createElement('ul');
    showFactor.innerText = `------------------- Factoriales entre 1 y ${num}`;
    showFactor.append(ul);

    for(let i = 1; i <= num; i++) {
      for(let j = 1; j <= i; j ++) {
        factor *= j;
      }
      const li = document.createElement('li');
      li.innerText = `Factorial de ${i} : ${factor.toLocaleString()}`;
      ul.append(li);
      factor = 1;
    }
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 13
// ##################################################################

function factorialOne() {
  const numFactorOne = document.getElementById('numFactorOne');
  const showFactorOne = document.getElementById('showFactorOne');
  
  try {
    validate(numFactorOne);
    let num = validateNum(numFactorOne);    
    let factor = 1;
    for (let i = 1; i <= num; i++) {
      factor *= i;
    }
    showFactorOne.innerText = `El Factorial de ${num} es : ${factor.toLocaleString()}`;
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 14
// ##################################################################

function mayorMenor() {
  const numsArray = document.getElementById('numsArray');
  const showMayMen = document.getElementById('showMayMen');
  
  try {
    validate(numsArray);
    const ul = document.createElement('ul');
    showMayMen.innerText = `--- De los numeros ingresados se tiene que: `;
    showMayMen.style = 'text-align: left;';
    showMayMen.append(ul);
    
    let nums = numsArray.value.split(' ').sort((a, b) => a - b);
    nums = nums.filter((e) => e !== '');
    console.log(nums);
    nums.forEach(element => {   
      if (!Number(element)) { 
        numsArray.focus();
        throw `
          El valor ingresado '${element}' No 
          corresponde a un valor Númerico`; 
      }
    });
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');

    item1.innerText = `Número Mayor: ${nums[nums.length - 1]}`;
    ul.append(item1);
    item2.innerText = `Número Menor: ${nums[0]}`;
    ul.append(item2);
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 15
// ##################################################################

function potencia() {
  const numPoten = document.getElementById('numPoten');
  const showPoten = document.getElementById('showPoten');

  try {
    validate(numPoten);
    const num = validateNum(numPoten);
    const res = Math.pow(2, num).toLocaleString('es-ES');
    showPoten.innerText = `> 2 Elevado a la ${num} es : ${res}`;
  } catch (e) { alert(e); }
}

// ##################################################################
//                        Ejercicio Numero 16
// ##################################################################

function elevado() {
  const numBase = document.getElementById('numBase');
  const numEleva = document.getElementById('numEleva');
  const showResult = document.getElementById('showResult');

  try {
    validate(numBase); 
    validate(numEleva); 
    const num1 = Number(numBase.value);
    const num2 = Number(numEleva.value);
    if (num1 > 0 && num2 > 0) {
      const res = Math.pow(num1, num2).toLocaleString();
      showResult.innerText = `> ${num1} Elevado a la ${num2} es : ${res}`;
    } else {
      throw `El valor Ingresado No es valido, el valor Debe ser mayor a 0`;
    }    
  } catch (e) { alert(e); }
}

// #######################################################################

function validate(valor) {
  if (valor.value == '') {
    valor.focus();
    throw 'Ingrese un valor en el campo correspondiente';
  }
}
function validateNum(valor) {
  let num = Number(valor.value);
  if (num < 0) {
    valor.focus();
    throw `El numero ingresado ${num} No es valido, Ingrese un valor Positivo`;
  } else if (String(num % 10).length > 1) {
    valor.focus();
    throw `El numero ingresado ${num} No es valido, Ingrese un valor Entero`;
  }
  return num;
}