/*  
    Otra opcion a getElementById(); y podremos elegir el elemento no solo por 
    el Id, .querySelector("") nos permite elegir entre #id - .clases - etiquetas(h1)
    para seleccionar el elemento. y .querySelectorAll("") nos permite Selecciona todos los elementos que coincidan con el parametro enviado
*/

document.querySelector(""); 
document.querySelectorAll(""); 

/*  
    A console.log({}); se le ouede enviar un objeto como parametro con todos 
    los elementos que queremos mostrar y los imprimira como objetos 
*/

console.log({   
    var1,       
    var2,       
    var3
});

innerHTML = ''; // Permite agregar etiquetas HTML dentro 
innerText = ''; // No permite HTML, solo texto

/*
    getAttribute("class") = para leer los atributos del elemento, o buscar si 
    cuenta con alguno determinado <h1 class="verde">Titulo</h1> 
    setAttribute("class", "rojo") para modificar un atributo o una clase
*/

h1.getAttribute("class"); 
h1.setAttribute("class", "rojo");

// Agregar clases y removerlas 

h1.classList.add("verde");
h1.classList.remove("rojo");
h1.classList.toggle("verde"); 
h1.classList.contains("verde"); 

// .toggle() = Dependiendo si se tiene la clase o no se añade o se quita
// .contains() = Retorna true o false si el contenedor cuenta con la clase 
// enviada por parametro 

input.value = "12345"; // Asignar valor a un input
input.value = Nos permite ver el contenido o el valor del elemento

/* 
    Crear elementos en el HTML, por el parametro le podremos enviar cualquier
    etiqueta HTML que deseemos agregar = "span" "h1" "label" y este de forma
    automatica hara apertura y cierre de esta. 
*/

const img = document.createElement("img"); // Creamos una etiqueta imagen
img.setAttribute("src", "./asserts/imagen.jpg"); // Crear atributo y elegir imagen
contain.append(img); 

/* 
    .append() = Agrega imagen a contenedor HTML "contain" que ya existia
    esta funcion no elimina el contenido que alli se encuentre, sino despues de 
    este contenido agregara el elemento, se puede agregar antes de esta linea 
    algo como contain.innerHTML = ""; un string vacio y ahora si ingresa el 
    contenido de 0 sin contenido adicional
*/

/* 
    .addEventListener(); // Funcion que me permite capturar eventos de un 
    elemento en particular, recibe dos parametros, el primero es el evento
    que va a recibir, como un "click" - "change" y el segundo parametro sera
    llamar a una funcion (sin los parentesis) o alli se puede declarar una funcion
    anonima o de tipo flecha
*/

btn.addEventListener("click", btnOnClick);

/*
    event.preventDefault() = Es un metodo que nos permite que al tratar con 
    formularios, no se recargue la pagina al momento de dar click en el boton 
    que este tenga, por defecto HTML transfoma el boton que haya en un <form>
    y lo convertira de tipo submit, el cuela lo que hara sera hacer que la pagina 
    se recarguey con este metodo evitaremos esa accion
*/

event.preventDefault();
form.addEventListener("submit", nomFuncion);  // Escuchar accion de un formulario

