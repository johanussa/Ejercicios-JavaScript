/* => Metodo assign(); -> Copia el objeto referenciado en el segundo parametro, 
   en el objeto referenciado en el primero: */

var objeto = {};
var objeto2 = {
    Nombre: "Johan Ussa",
    Edad: 23
}
Object.assign(objeto, objeto2);
console.log(objeto2);

// -> { Nombre: 'Johan Ussa', Edad: 23 }

/* => Metodo entries() -> Retorna un array con los pares clave valor */

var objeto = {
    Nombre: "Johan",
    Apellido: "Ussa",
    Edad: 23
}

var arrayObj = Object.entries(objeto);
console.log(arrayObj);

// -> [ [ 'Nombre', 'Johan' ], [ 'Apellido', 'Ussa' ], [ 'Edad', 23 ] ]

/* => Metodo .find() = Retorna true o false si el parametro que le enviamos se encuentra 
   entre las propiedades del objeto */

var articulos = [
    { nombre: "Computador", valor: 2600 },
    { nombre: "Portatil", valor: 3200 },
    { nombre: "Celular", valor: 1200 },
    { nombre: "Mouse", valor: 750 },
    { nombre: "Teclado", valor: 860 },
    { nombre: "Monitor", valor: 1400 },
];

articulos.find((element) => {
    return element.nombre === "Mouse";
}); // {nombre: 'Mouse', valor: 750} - Retorna la primera ocurrencia, para traer mas elementos 
//     es conveniente usar el metodo filter() que retorna todos los elementos que cumplan la condicion

articulos.filter((element) => {
	return element.valor <= 1000;
}); // (2) [{…}, {…}] - 0 : {nombre: 'Mouse', valor: 750} - 1 : {nombre: 'Teclado', valor: 860}

var artCaros = articulos.some((element) => {  // Funcion que retorna true o false
	return element.valor >= 3000;	  // dependiendo si se cumple o no la condicion
}); 
// Retor solamente valores true o false, en este caso retorna true, ya que si hay 
// articulos cuyo valor es mayor o igual a 3000, es como si se le preguntara:
// Hay elementos cuyo valor es mayor o igual a 3000? -> true

/* => Metodo getOwnPropertyDescriptors() -> Retorna un objeto con la descripcion 
      de todas las propiedades que posee el objeto */ 

var objeto = {
    Nombre: "Johan",
    Apellido: "Ussa",
    Edad: 23
}

console.log(Object.getOwnPropertyDescriptors(objeto));
// -> 
	{ 
  	  Nombre: {
	    value: 'Johan',
	    writable: true,
	    enumerable: true,
	    configurable: true
	  },
	  Apellido: {
	    value: 'Ussa',
	    writable: true,
	    enumerable: true,
	    configurable: true
	  },
	  Edad: { value: 23, writable: true, enumerable: true, configurable: true }
	}  
/* => getOwnPropertyDescriptor() -> Retorna la descripcion de la propiedad enviada por parametro */

console.log(Object.getOwnPropertyDescriptor(objeto, "Apellido"));

// -> { value: 'Ussa', writable: true, enumerable: true, configurable: true }

/* => Metodo getOwnPropertyNames(objeto)); Retorna un array con los nombres de las claves del objeto */

console.log(Object.getOwnPropertyNames(objeto));

// -> [ 'Nombre', 'Apellido', 'Edad' ]

/* => Metodo hasOwnProperty() Retorna un Bool si la propiedad enviada por parametro
      se encuentra en el objeto  */

console.log(objeto.hasOwnProperty("Edad"));

// -> true

/* => Metodo keys() : Devuelve un array con el nombre de las claves del objeto proporcionado */

console.log(Object.keys(objeto));

// -> [ 'Nombre', 'Apellido', 'Edad' ]

/* => Metodo Object.values() : Retorna un array con los valores de las claves del objeto */

console.log(Object.values(objeto));

// -> [ 'Johan', 'Ussa', 23 ]
