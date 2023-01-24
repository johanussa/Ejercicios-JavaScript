/* 
  async - await en JavaScript = Son subprocesos que nos permiten realizar funciones sin alterar la ejecucion 
  secuencial del programa, y permite que si un subproceso necesita de algo de tiempo para su correcto funcionamiento
  este no irrumpa la ejecucion del codigo, sino que de manera que en un segundo plano se ejecute y cuando termine 
  se incorpora a la ejeccion normal nuevamente
*/

// CallBacks - Forma antigua: cb = CallBack

const getData = (cb, cbError) => {
    if (!true) {
        setTimeout(() => {
            cb({
                nombre: 'Johan',
                apellido: 'Ussa'
            });
        }, 3000);
    } else { cbError(new Error('Data Not Found!')); }
}

const printData = (data) => console.log(data);
const errorHadler = (error) => console.log(error);

getData(printData, errorHadler);

// Promesas = ayudan a controlar las funciones que necesiten ser ejecutadas en un segundo plano 
// estas se ejecutan con un callback y sus respuestas se manejan a traves de .then() y .catch()
// donde la primera obtiene la respuesta de manera exitosa, y la segunta captura el error si se presenta

const data = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Johan Sebastian',
                apellido: 'Ussa Rubio'
            });
        }, 3000);
    } else { reject('Data Not Found!'); }
});
const data2 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Laura Valentina',
                apellido: 'Gonzalez'
            });
        }, 2000);
    } else { reject('Data Not Found!'); }
});

console.log('Inicio ...');
data(false)
    .then((data) =>  {
        console.log(data);
        return data2(true);
    })
    .then((data2) => console.log(data2))
    .catch((err) => console.log(err));
console.log('Fin ...');

// async - await = Permite realizar los procesos asincronos de una manera mas legible y ordenada
// awiat solo funciona si existe un async
// ya no necesitamos del .then() o el .catch(), ahora capturamos los errores a traves del try.. catch()..

const showData1 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Johan Sebastian',
                apellido: 'Ussa Rubio'
            });
        }, 3000);
    } else { reject('Data 1 Not Found!'); }
});
const showData2 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Laura Valentina',
                apellido: 'Gonzalez'
            });
        }, 2000);
    } else { reject('Data 2 Not Found!'); }
});

const data = async () => {
    try {
        let data = await showData1(false);
        console.log(data);
        data = await showData2(true);
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

data();







