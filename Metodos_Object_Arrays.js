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
data.push(newData);

// const find = data.find(e => e.Nombre === newData.Nombre);
// if(!find) { data.push(newData); }

// Set me permite crear nuevos contenidos donde no se repitan elementos dentro del mismo 
// Esto se convierte en elemento de tipo Set, pero se puede convertir en un arreglo con 
//  el objeto Array y su metodo .from()

const totalData = Array.from(new Set([1,2,3,4,5,6,7,8,7,6,5,4,2,5,2]));

console.log(totalData);
