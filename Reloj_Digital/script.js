const date = document.getElementById('date');
const hour = document.getElementById('hour');

let options = {
    dateStyle: 'full',
    timeZone: 'America/Bogota'
}
// { timeStyle: 'full' } Mostrar la hora en formato completo

date.innerText = new Intl.DateTimeFormat('es-CO', options).format(new Date);
hour.innerText = new Date().toLocaleTimeString('es-CO'); 
setInterval(() => hour.innerText = new Date().toLocaleTimeString('es-CO'), 1000);
