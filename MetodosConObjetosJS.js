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
