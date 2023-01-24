const title = document.getElementById('title');
const colorPal = document.getElementById('colorPal');
const ulColors = document.getElementById('ulColors');
const container = document.getElementById('container');
const saveColor = document.getElementById('saveColor');
const valueColor = document.getElementById('valueColor');
const cantColors = document.getElementById('cantColors');

const storageValue = localStorage.getItem('colorValue') || '#000000';
const dataColors = JSON.parse(localStorage.getItem('colors')) || [];

const loadData = (value) => {
    valueColor.innerText = value.toUpperCase();
    container.style.background = value;
    colorPal.value = value;
    title.style.color = value;
}
loadData(storageValue);
const loadColors = () => {
    if (dataColors.length) {
        ulColors.innerText = '';
        cantColors.innerText = dataColors.length;

        dataColors.forEach(e => {
            const li = document.createElement('li');
            li.innerText = e;
            li.style.background = e;
            ulColors.append(li);
        });
    }
}
loadColors();

saveColor.addEventListener('click', () => {
    dataColors.push(colorPal.value);
    localStorage.setItem('colors', JSON.stringify(dataColors));
    loadColors();
});
colorPal.addEventListener('input', (e) => loadData(e.target.value));
colorPal.addEventListener('change', () => localStorage.setItem('colorValue', colorPal.value.toUpperCase()));
