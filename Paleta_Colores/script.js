const colorPal = document.getElementById('colorPal');
const container = document.getElementById('container');
const valueColor = document.getElementById('valueColor');

valueColor.innerText = colorPal.value;
container.style.background = colorPal.value;

colorPal.addEventListener('input', (e) => {
    valueColor.innerText = colorPal.value.toUpperCase();
    container.style.background = colorPal.value;
});