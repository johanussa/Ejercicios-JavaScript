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

let productos = [
    { nombre: 'TV Samsung', precio: 250, unidades: true },
    { nombre: 'Watch Huawei', precio: 50, unidades: false },
    { nombre: 'Computador HP', precio: 300, unidades: true },
    { nombre: 'Tablet Lenovo', precio: 70, unidades: false },
];

let filtro = productos.filter(element => element.precio >= 50 && !element.unidades);
console.log(filtro);
let filtro2 = productos.filter(element => element.precio >= 50 && element.unidades);
console.log(filtro2);

/* .join() = Retorna una cadena que une todos los elementos por el separador 
    pasado por parametro */
    
console.log(array.join(" - ")); // Johan - Milena - Sebastian - Laura - Misael - Maria - Ana

let showValues = (array, separador = ' - ') => {	// Este seria un ejemplo trabajando con objetos
    let values = array.map(e => Object.values(e).join(separador));
    console.log(Object.keys(array[0]).join(separador));	  // nombre - precio - unidades
    values.forEach(e => console.log(e));	// TV Samsung - 250 - true ...
}
showValues(productos);

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
    .findIndex() = Retorna el indice o posicion del elemento que se esta buscando, pero este puede 
    iterar objetos por lo que recibe un callback para realizar la busqueda, sino encuentra el elemento este 
    retorna el valor de -1
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
    .splice() = Me permite eliminar o modificar un campo de un array u objeto este recibe dos parametros, 
    el primero el indice del dato a eliminar o modificar, y el segundo la cantidad de registros que 
    se eliminaran o modificaran, en este caso solo 1, si el elemento se va a modificar, recibe un tercer
    parametro, el cual es el dato a ingresar en ese espacio
*/

// Eliminar el registro con id = 1
person.splice(index, 1);
console.log(person);

// Modificar un valor en un array
let nombres = ['Johan', 'Laura', 'Esteban', 'Maria'];
nombres.splice(index, 1, 'Milena');
console.log(nombres);	// (4) ['Johan', 'Laura', 'Milena', 'Maria']

/* .map() = Devuelve un nuevo array que contiene los resultados tras haber sido tratados por la funcion 
    que se proporciona por parametro, funciona principalmente para modificar datos del arreglo */

var numeros = [ 1,2,3,6,2,3,1,5,4 ];
var estudiantes = ['Johan', 'Jhon', 'Sebastian', 'Maria', 'Laura'];

let asistencia = estudiantes.map(e => ({ nombre: e, asistio: true }));
console.log(asistencia);

let arrayNew = numeros.map(function(x) {
    return x * x;
});
console.log(arrayNew);

let productos = [
    { nombre: 'TV Samsung', precio: 250 },
    { nombre: 'Watch Huawei', precio: 50 },
    { nombre: 'Computador HP', precio: 300 }
];

let addIVA = productos.map(element => ({ ...element, IVA: 0.19 }));
let productsIVA = addIVA.map(element => element.precio * element.IVA);

console.log(productos);
console.log(addIVA);
console.log(productsIVA);

/* .forEach() = No retorna otro array, itera sobre el array seleccionado en cada elemento u objeto, En este ejemplo
   agregamos datos en un nuevo arreglo pero sin que se repita alguno de ellos */

var nums = [ 1,2,3,6,2,3,1,5,4 ];
newA = [];

nums.forEach((e) => {
    if (newA.indexOf(e) === -1) {
        newA.push(e);  // Agrega el elemento al final del array
    }
});
console.log(newA.sort((a, b) => a - b)); // [ 1, 2, 3, 4, 5, 6 ]

// .sort() = El metodo sort() nos ayuda a ordenar un arreglo, peros es algo torpe sin ayuda

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

/* .reduce() = me permite reducir el arreglo a un solo valor de cualquier tipo, numerico o string o un objeto, recibe un callback
 * como parametro y un valor que inicializa la variable contadora, el callback recibe dos parametros, uno con la variable que sirve como 
 * varable contadora, y seguido de la variable que representa cada elemento del array, en este ejemplo se calcula el promedio de 
 * numeros del array determinado. */ 

let numeros = [ 1,2,3,6,2,3,1,5,4 ];	// Promedio de los numeros del array
let promedio = numeros.reduce((prom, numero) => prom + numero / numeros.length, 0);
console.log(promedio); // 3

let edades = [ 22, 23, 21, 19, 18, 21, 22, 23, 23, 19, 24, 21, 22 ];

let contador = edades.reduce((acum, edad) => {	// Tambien podremos almacenar los datos en un objeto, en los [] creamos la propiedad
    if (acum[edad]) { acum[edad] ++; }		// En el cual almacenamos el numero de la edad, y las veces que este se repite
    else { acum[edad] = 1; }			// Si no esta almacenada la propiedad edad(valor iterado) se agrega, sino se aumenta su valor
    return acum;
}, {});		// { '18': 1, '19': 2, '21': 3, '22': 3, '23': 3, '24': 1 }

let entries = Object.entries(contador);		// Transformamos el objeto en un array el cual podremos iterar 

entries.forEach(e => {			// [ [ '18', 1 ], [ '19', 2 ], [ '21', 3 ], [ '22', 3 ], [ '23', 3 ], [ '24', 1 ] ]
    let datos = `${e[0]} = `;		// Y mostramos en pantalla la cantidad de * correspondientes al valor de veces repetidas
    for (let i = 0; i < e[1]; i++) {
        datos += '* ';
    }
    console.log(datos);		// 18 = * 19 = * * 21 = * * * 22 = * * * 23 = * * * 24 = *  
    datos = '';
});

let ventas = [
    { nombre: 'Pantalon', precio: 15, ventas: 8 },
    { nombre: 'Camisa', precio: 10, ventas: 14 },
    { nombre: 'Vestido', precio: 35, ventas: 7 },
    { nombre: 'Zapatillas', precio: 150, ventas: 3 }
];
let total = 0;
let datos = ventas.reduce((acum, venta) => {
    total += venta.precio * venta.ventas;
    acum.Total = `$ ${total} Dollares`;
    acum[venta.nombre] = `$ ${venta.precio * venta.ventas}`;
    return acum;
}, {});

console.log(datos);	// { Total: '$ 955 Dollares', Pantalon: '$ 120', Camisa: '$ 140', Vestido: '$ 245', Zapatillas: '$ 450' }

let estudiantes = [
    { nombre: 'Johan', edad: 20, activo: true },
    { nombre: 'Sebastian', edad: 28, activo: true },
    { nombre: 'Laura', edad: 24, activo: false },
    { nombre: 'Maria', edad: 42, activo: true },
    { nombre: 'Omar', edad: 25, activo: false },
];

let data = estudiantes.reduce((acum, estud) => {
    if (estud.activo) { acum.matriculado ++; }
    else { acum.noMatriculado ++; }
    return acum;			// NO OLVIDAR EL RETURN !!!
}, { matriculado: 0, noMatriculado: 0 });

console.log(data);	// { matriculado: 3, noMatriculado: 2 }

/* .some() = El busca un elemento que coincida con el argumento requerido y si encuentra al menos una coincidencia
   este devuelve true, sino hay ninguna devuelve false */

let some = estudiantes.some(e => e.edad < 18);
console.log(some);	// false
let some = estudiantes.some(e => e.edad === 25);
console.log(some);	// true

/* .every() = = a diferencia de some que sera verdadera si al menos encuentra una coincidencia, every sera true si 
   todos los registros que se encuentran en el array cumplen con el argumento requerido */

let every = estudiantes.every(e => e.edad > 18);   // Todos los registros son mayores a 18 años
console.log(every);		// true

/* .find() = Me permite buscar un elemento en el array que este necesitando, solo devuelve la primer coincidencia
   si no encuentra el dato requerido, este retorna undifined, si quiero retornar todas las coincidencias, deberemos 
   utilizar la funcion filter() que si devulve todos los valores que coincidan */

let find = estudiantes.find(e => e.nombre === 'Maria');		// Buscar el dato con el nombre de 'Maria'
console.log(find);		// { nombre: 'Maria', edad: 42, activo: true }

/* .includes() = nos sirve para determinar si en el areglo hay un elemento en especifico retornando true or false 
   recibe como parametro el valor especifico a buscar, tambien podemos evaluar partes de cadenas de texto */

let mascotas = ['perro', 'gato', 'pez', 'conejo'];
let res = mascotas.includes('gato');
console.log(res);	// true

let palabra = 'computador';
let res = palabra.includes('a');
console.log(res);	// true

let res = palabra.includes('h');
console.log(res);	//false

// Este metodo es sensible a mayusculas y minusculas por tanto 'j' es diferente de 'J'

let data = [
    { nombre: 'Johan', edad: 25, programa: 'software' },
    { nombre: 'Sebasian', edad: 54, programa: 'sistemas' },
    { nombre: 'Diana', edad: 20, programa: 'soldadura' },
    { nombre: 'Laura', edad: 24, programa: 'software' },
    { nombre: 'Maria', edad: 28, programa: 'sistemas' },
];
let filter = (word) => {
    return data.filter(e => e.nombre.includes(word));
    // return data.filter(e => e.nombre.toLowerCase().includes(word.toLowerCase()));
    // convierte la palabra en minuscula para ser comparada tambien la otra en minuscula
}
let res = filter('ana');
console.log(res);	// { nombre: 'Diana', edad: 20, programa: 'soldadura' }

/* .concat() = Este método me permite concatenar dos arreglos */

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 0];

let arrayFinal = array1.concat(array2);
console.log(arrayFinal);	// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Tambien podemos utilizar el spread operator para concatenar arrays 
let array3 = [...array1, ...array2];
console.log(array3);	// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] y da el mismo resultado

/* .slice() = Este método permite retorna una copia parcial o completa de otro array, retorna un array nuevo
   recibe dos parametros, el primero indica desde donde quiere comenzar a pasar elementos, y el segundo es la 
   posicion final de hasta donde se quiere cortar y NO incluye esa posicion va hasta n - 1, No modifica el array original */

let estudiantes = [ 'Johan', 'Sandra', 'Mauricio', 'Javier', 'William', 'Laura', 'Lorena' ];
let copia = estudiantes.slice(2, 4);
console.log(copia);	// [ 'Mauricio', 'Javier' ]

