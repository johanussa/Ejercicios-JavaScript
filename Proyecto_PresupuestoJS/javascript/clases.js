class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion.toUpperCase();
        this._valor = valor;
    }
    get descripcion() { return this._descripcion; }
    set descripcion(descripcion) { this._descripcion = descripcion; }
    get valor() { return this._valor; }
    set valor(valor) { this._valor = valor; }
}

class Ingreso extends Dato {
    static contador = 0;
    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contador;
    }
    get id() { return this._id; }
}

class Egreso extends Dato {
    static contador = 0;
    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Egreso.contador;
    }
    get id() { return this._id; }
}

const ingresos = [
    new Ingreso('Sueldo mes', 2500000),
    new Ingreso('Arriendo apto', 500000)
];
const egresos = [
    new Egreso('Cuota apto', 600000),
    new Egreso('Comida', 500000),
    new Egreso('Servicios', 400000)
];