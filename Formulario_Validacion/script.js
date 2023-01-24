'use strict'
const formulario = document.forms['formulario'];
const expresiones = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, Números, Guiones
    name: /^[a-zA-ZÁ-ÿ\s]{3,40}$/, // Letras, espacios, acentos
    password: /^.{4,12}$/,     // 4 a 12 caracteres
    email: /^\w+\@(misena|soy\.sena)\.edu\.co$/, 
    phone: /^\d{7,14}$/    // 7 a 14 digitos
}
const states = {
    user: false,
    name: false,
    password: false,
    email: false,
    phone: false,
    terminos: false
}
formulario.addEventListener('input', (e) => {
    let name = e.target.name;
    let valor = e.target.value;

    const options = {
        user: () => validarData('user', valor),
        name: () => validarData('name', valor),
        password: () => { validarData('password', valor); confirmPass(); },
        password2: () => confirmPass(),
        email: () => validarData('email', valor),
        phone: () => validarData('phone', valor),
        terminos: () => states.terminos = e.target.checked ? true : false
    }
    if (options[name]) { options[name](); }
});
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Object.values(states).some(e => e === false)) {
        document.querySelector('#form_message').style.display = 'block';
        document.querySelector('#form_message').style.boxShadow = '0px 0px 10px 5px #f66060';
        setTimeout(() => { 
            document.querySelector('#form_message').style.boxShadow = 'none';
        }, 500);
        let campo = Object.entries(states).find(e => e[1] === false)[0];
        alert(`Debe llenar el campo ${campo}`);
        document.getElementById(campo).focus();
    } else {
        formulario.reset();   
        document.querySelector('#form_message').style.display = 'none';
        document.querySelector('#form_message_ok').style.display = 'block';   
        document.querySelectorAll('.form_correct').forEach(e => {
            e.classList.remove('form_correct');
        });        
        setTimeout(() => { 
            document.querySelector('#form_message_ok').style.display = 'none';  
        }, 4000); 
    }
});
const validarData = (name, valor) => {
    if (expresiones[name].test(valor)) {
        applyChanges(name, true);
        states[name] = true;
    } else {
        applyChanges(name, false);
        states[name] = false;
    }
}
const applyChanges = (name, bool) => {
    if (bool) {
        document.getElementById(`group_${name}`).classList.remove('form_incorrect');
        document.getElementById(`group_${name}`).classList.add('form_correct');
        document.querySelector(`#group_${name} i`).classList.remove('bi-x-circle-fill');
        document.querySelector(`#group_${name} i`).classList.add('bi-check-circle-fill');
        document.querySelector(`#group_${name} p`).style.display = 'none';
    } else {
        document.getElementById(`group_${name}`).classList.remove('form_correct');
        document.getElementById(`group_${name}`).classList.add('form_incorrect');
        document.querySelector(`#group_${name} i`).classList.remove('bi-check-circle-fill');
        document.querySelector(`#group_${name} i`).classList.add('bi-x-circle-fill');
        document.querySelector(`#group_${name} p`).style.display = 'block';
    }
}
const confirmPass = () => {
    let pass = document.getElementById('password').value;
    let pass2 = document.getElementById('password2').value;

    if (states.password && pass2) {
        if (pass === pass2) { applyChanges('pass2', true); } 
        else { applyChanges('pass2', false); }
    }
}