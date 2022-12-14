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

/*
    .findIndex() = Retorna el indice del elemento que se esta buscando, pero este puede 
    iterar objetos por lo que recibe un callback para realizar la busqueda
*/

let person = [
	{ id: 1, nombre: 'Johan', apellido: 'Ussa' },
	{ id: 2, nombre: 'Sebastian', apellido: 'Mendez' },
	{ id: 3, nombre: 'Laura', apellido: 'Arania' }
];
const index = person.findIndex(e => e.id === 2);
console.log(index);  // Retorna -> 1

// Como ya se obtuvo el indice del elemento lo podremos eliminar si queremos 
// para eso esta el metodo .splice() que me permite eliminar un registro en este caso

/*
    .splice() = Me permite eliminar un campo de un array u objeto Recibe dos parametros, 
    el primero el indice del dato a eliminar, y el segundo la cantidad de registros que 
    se eliminaran, en este caso solo 1
*/

// Eliminar el registro con id = 1

person.splice(index, 1);
console.log(person);

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

/* .push() = Añade el elemento al final del objeto y retorna el array resultante */

const array1 = new Array(5, 10, 15, 27);
console.log(array1.push(94));
console.log(array1.push(12));
console.log(array1);  // [ 5, 10, 15, 27, 94, 12 ]

/* .reverse() = Retorna el array en orden inverso */

console.log(array1.reverse()); // [ 12, 94, 27, 15, 10, 5 ]
 
/* .shift() = .pop() siempre elimina el último elemento de un arreglo. ¿Qué tal si quieres eliminar el primero?
Ahí es donde entra .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último. */

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

// removedFromOurArray tendrá una cadena con valor Stimpson y ourArray tendrá ["J", ["cat"]].

/* .unshift() No solo puedes desplazar (shift) elementos del comienzo de un arreglo, también puedes des-desplazar (unshift) 
elementos al comienzo de un arreglo. Por ejemplo añadir elementos delante del arreglo.
.unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del arreglo, unshift() 
añade el elemento al principio del arreglo.*/
    
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

// Después del shift, ourArray tendrá el valor ["J", "cat"]. Después del unshift, ourArray tendrá el valor ["Happy", "J", "cat"].    
    
    
    
    
    
    
    
