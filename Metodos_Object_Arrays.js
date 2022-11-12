let data = [
    {
        Nombre: 'Johan',
        Apellido: 'Ussa',
        Edad: 25
    },
    {
        Nombre: 'Laura',
        Apellido: 'Gonzalez',
        Edad: 22
    },
    {
        Nombre: 'Maria',
        Apellido: 'Rubio',
        Edad: 50
    },
    {
        Nombre: 'Jhon',
        Apellido: 'Umbasia',
        Edad: 12
    }
];

const developers = [
    {
        id: 1,
        name: 'Johan',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux']
    },
    {
        id: 2,
        name: 'Maria',
        skills: ['HTML', 'CSS', 'Java', 'NodeJs']
    },
    {
        id: 3,
        name: 'Andres',
        skills: ['VueJS', 'CSS', 'JavaScript', 'React', 'Redux']
    },
];

data.forEach(e => {
    document.write('Nombre: ', e.Nombre, ' ', e.Apellido, '<br/>');
});

const newObject = data.map(({Nombre, Apellido, Edad}) => ({
    Usuario : `${Nombre} ${Apellido}`,
    Edad
}))
    .filter(e => e.Edad > 18)
    .sort((a, b) => a - b)
    .reduce((promedio, e) => promedio + e.Edad / 3, 0); 

// Se pueden agregar mas metodos que se apliquen a esa misma variablelas que se requieran
// En este caso se filtra que los resultados sean mayores a 18 y ademas 
// Se ordena el objeto alfabeticamente
// Se tiene el promedio de la edad

console.log(newObject);

const arrayFilter = data.filter(e => e.Nombre !== "Johan");
console.log(arrayFilter);

const arrayFind = data.find(e => e.Edad < 18);
console.log(arrayFind);

const result = data.reduce((total, e) => {
    return (total + e.Edad) / data.length;
}, 0);

// const result = data.reduce((total, e) => total += e.Edad, 0);
console.log(result);

/* 
.reduce() esta funcion sirve para reducrir o filtrar datos que queremos
que sean parte de un uevo arreglo, por ejemplo aqui del objeto developers
que contiene datos de personas desarrolladoras y que tienen unas habilidades especiales
se quiere que se muestre solo las habilidades con las que se cuenta este grupo de trabajo
para ello usamos esta funcion que recibe 2 parametros, 1 es el acumulador en donde se
iran almacenando los contenidos de las habilidades y para ello se usa la propiedad spread operator 
para copiar solo los contenidos de estos elementos, luego con el metodo new Set() haremos que 
este nuevo objeto que se esta contruyendo no se repitan los elementos sino que solo aparezca un 
resultado de cada uno ya que alli se repiten varias veces, como esto se convierte en un objeto de tipo Set, 
lo convertimos nuevamente a un arreglo con el objeto Array.from()
*/

const skills = developers.reduce((allSkills, e) => {
    return Array.from(new Set([...allSkills, ...e.skills]));
}, []);

console.log(Array.isArray(skills));

for(e of skills) {
    console.log(e);
}

const newData = {
    Nombre: 'Johan',
    Apellido: 'Ussa',
    Edad: 25
};

const find = data.find(e => e.Nombre === newData.Nombre);
if(!find) { data.push(newData); }

// Set me permite crear nuevos contenidos donde no se repitan elementos dentro del mismo 
// Esto se convierte en elemento de tipo Set, pero se puede convertir en un arreglo con 
//  el objeto Array y su metodo .from()

const totalData = Array.from(new Set([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 2, 5, 2]));
console.log(totalData); 

/* Metodo sort() para ordenar objetos - aqui ordenamos el objeto data por sus edades de menor a mayor
por parametro se envian dos argumentos, a que es la primera posicion del objeto y b es el segundo
asi los compara y cuando es mayor devuelve 1 y sino -1 de esta forma la funcion ordena el objeto
Es lo mismo decir que si a un numero le resta otro si queda residuo sera porque el primer numero es mayor
*/

//const dataSort = data.sort((a, b) => a.Edad > b.Edad ? 1 : -1);
const dataSort = data.sort((a, b) => a.Edad - b.Edad);
console.log(dataSort);
const nums = [1,5,6,9,8,12,14,8,3];
const numsSort = nums.sort((a, b) => a - b); // Ordenar numeros
console.log(numsSort);

/*
 Metodo some() Me sirve cuando necesito saber si existe una propiedad o un dato dentro del objeto
 sin necesidad de que retorne un array o un elemento sino solo un true o false si el elemento esta o no
 retorna true si algun elemento cumple con la condicion 
*/

let findData = data.some((e) => e.Nombre === "Johann");
console.log(findData);
findData = data.some(e => e.Edad < 18);
console.log(findData); 

/*
 Metodo every() sirve para indicar que todos los elementos del objeto cumplan esa condicion
 NO solo alguno como lo hace some() que si solo un elemento cumple la condicion es true
 En este metodo la condicion debe cumplirse en todos los elementos
*/

const findEvery = data.every(e => e.Edad > 18);
console.log(findEvery); 
// => false ya que no todos los usuarios son mayores de 18 años
const every = data.every(e => e.Nombre.includes('J'));
console.log(every);
// => false ya que evalua si en el nombre todos contienen la letra J

/*
async / await : Solicitar datos a un Backend 
biblioteca fetch de JS que permite entrar a una direccion en internet 
JSON placeholder permite poder tener datos de ejemplos entrar en Resources y en post 
y nos redirecciona a una pagina en donde nos devuelve datos tipo JSON 
*/

// let dataJson = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(dataJson);
// retorna una Promise{} porque estas consultas toman tiempo 

const ul = document.createElement('ul');
document.body.append(ul);

// Esta es la forma antigua de realizar consultas 

// let dataJson = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json()) // esta conversion es asincrona
//     .then((data) => {  // y la respuesta se recibe aqui
//         data.map(e => { 
//             const li = document.createElement('li');
//             li.innerText = e.title;
//             ul.append(li);
//         });
//     }); 

// Forma moderna de hacer petiiones a un servidor con async await

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    data.forEach(e => {
        const li = document.createElement('li');
            li.innerText = e.title;
            ul.append(li);
    });
}

loadData();
