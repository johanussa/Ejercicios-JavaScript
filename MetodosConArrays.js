/* .filter() = Retorna un array que contiene los resultados que cumplen con 
    la funcion indicada que se pasa por parametro */
    
var array = ["Johan", "Milena", "Sebastian", "Laura", "Misael", "Maria", "Ana"];
var array2 = new Array("Lorena", "Jhon", "Andres"); // Otra forma de definir un arreglo

var newA = array.filter(function(x) {
    return x.length > 5;
});

console.log(newA); // [ 'Milena', 'Sebastian', 'Misael' ]

// Otra forma de utilizar .filter() = con una funcion tipo flecha

const libreriasJS = ['react', 'redux', 'vue', 'D3', 'Chart'];
const filtrarLibrerias = libreriasJS.filter((item) => item !== 'react');
console.log(filtrarLibrerias); // [ 'redux', 'vue', 'D3', 'Chart' ]

/* .join() = Retorna una cadena que une todos los elementos por el separador 
    pasado por parametro */
    
console.log(array.join(" - ")); // Johan - Milena - Sebastian - Laura - Misael - Maria - Ana

/* .indexOf() = Retorna la primera posicion en la que aparezca el valor 
    proporcionado por parametro, si el resultado es infructuoso retorna -1 
    tiene un segundo parametro opcional que indica desde que posicion 
    comenzar a buscar - Es sensible a mayusculas y minusculas */
    
console.log(array.indexOf("Laura")); // 3
console.log(array.indexOf("Martha")); // -1
    
/* .lastIndexOf() = Retorna la ultima posicion en la que aparezca el valor 
    proporcionado por parametro retorna -1 sino se encontro, y se busca desde 
    el final hasta el principio, su segundo parametro opcional y se le puede 
    indicar desde que posicion comenzar a buscar */

var array3 = new Array("Pedro", "Pablo", "Pedro", "Perez", "Pedro");
console.log(array3.lastIndexOf("Pedro")); // 4

/* .map() = Devuelve un nuevo array que contiene los resultados tras haber 
    sido tratados por la funcion que se proporciona por parametro */

var nums = [ 1,2,3,6,2,3,1,5,4 ];
newA = [];

nums.map((e) => {
    if (newA.indexOf(e) == -1) {
        newA.push(e);  // Agrega el elemento al final del array
    }
});
console.log(newA.sort()); // [ 1, 2, 3, 4, 5, 6 ]

// El metodo sort() nos ayuda a ordenar un arreglo, peros es algo torpe sin ayuda

var a = new Array(13, 43, 200, 3, 1);  // Se declara un array en desorden
var fnSort = function(a, b) { return a - b; }  	// Esta funcion le permite al metodo 
						// ordenar de forma apropiada
console.log(a.sort(fnSort));  // [ 1, 3, 13, 43, 200 ]

newA = nums.map(function(x) {
    return x * x;
});
console.log(newA); // [ 1, 4, 9, 36, 4, 9, 1, 25, 16 ]
    
/* .pop() = Elimina y devuelve el ultimo elemento de un array */ 

console.log(newA.pop()); // 16
console.log(newA.pop()); // 25

/* .push() = A�ade el elemento al final del objeto y retorna el array resultante */

const array1 = new Array(5, 10, 15, 27);
console.log(array1.push(94));
console.log(array1.push(12));
console.log(array1);  // [ 5, 10, 15, 27, 94, 12 ]

/* .reverse() = Retorna el array en orden inverso */

console.log(array1.reverse()); // [ 12, 94, 27, 15, 10, 5 ]
    
    
    
    
    
    
    
    
    
    
    