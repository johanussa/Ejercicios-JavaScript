function start() {
    const showPresup = document.getElementById('presupuesto');
    const ingre = ingresos.reduce((suma, e) => suma += e._valor, 0);
    const egre = egresos.reduce((suma, e) => suma + e._valor, 0);
    showPresup.innerText = `${formatCurrent(ingre - egre)}`;
    document.getElementById('ingresos').innerText = `+ ${formatCurrent(ingre)}`;
    document.getElementById('egresos').innerText = `- ${formatCurrent(egre)}`;
    document.getElementById('porcentEgre').innerText = `${formatPorcent(egre / ingre)}`;
    document.getElementById('porcentIngre').innerText = `${formatPorcent(1 - egre / ingre)}`;
    showIngresos(ingre);
    showEgresos(egre);
}
start();

function showIngresos(total) {
    const ulIngre = document.getElementById('ulIngre');
    ulIngre.innerText = '';
    ingresos.forEach(e => {
        ulIngre.innerHTML += `
        <li class="spanEgreIngre">
            <span class="btnDelete" onclick="deleteData(${e._id}, 1)" title="Eliminar">
                &#x274c</span>${e._descripcion}
            <span class="span">${formatPorcent(e._valor / total)}</span>
            <span class="green">+ ${formatCurrent(e._valor)}</span>                            
        </li><hr>`;
    });
}
function showEgresos(total) {
    const ulEgre = document.getElementById('ulEgre');
    ulEgre.innerText = '';
    egresos.forEach(e => {
        ulEgre.innerHTML += `
        <li class="spanEgreIngre">${e._descripcion}
            <span class="btnDelete" onclick="deleteData(${e._id}, 0)" title="Eliminar">
                &#x274c</span>
            <span class="span">${formatPorcent(e._valor / total)}</span>
            <span class="red">- ${formatCurrent(e._valor)}</span>
        </li><hr>`;
    });
}
const formAdd = document.forms['formAdd'];
formAdd.addEventListener('submit', addData);

function addData(e) {
    e.preventDefault();
    if (formAdd['selecType'].value === 'Ingreso') {
        const newData = new Ingreso(formAdd[1].value, +formAdd[2].value);
        ingresos.push(newData);
    } else {
        const newData = new Egreso(formAdd[1].value, +formAdd[2].value);
        egresos.push(newData);
    }
    Swal.fire(
        'Informacion Registrada!',
        'Registro Exitoso',
        'success'
    );
    formAdd['inpDes'].value = '';
    formAdd[2].value = '';
    start();
}
function deleteData(id, table) {
    Swal.fire({
        title: `Seguro Desea eliminar el ${(table) ? 'Ingreso' : 'Egreso'} ${id}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            if (table) {
                const i = ingresos.findIndex(e => e._id === id);
                ingresos.splice(i, 1);
            } else {
                const i = egresos.findIndex(e => e._id === id);
                egresos.splice(i, 1);
            }
            Swal.fire(
                'Eliminado!',
                `El registro ${id} Ha sido Eliminado`,
                'success'
            );
            setTimeout(() => { start(); }, 1200);
        }
    });
}
function formatCurrent(value) {
    let options = {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2
    }
    return new Intl.NumberFormat('es-CO', options).format(value);
}
function formatPorcent(value) {
    let options = {
        style: 'percent',
        minimumFractionDigits: 2
    }
    return new Intl.NumberFormat('es-CO', options).format(value);
}