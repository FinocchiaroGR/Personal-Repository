const db = require('../util/database');

module.exports = class Perros {

    constructor(nombre, imagen,contenido,nota) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.contenido = contenido;
        this.nota = nota;
    }

    save() {
        return db.execute('INSERT INTO mascotasPasadas (nombre, imagen, contenido, nota) VALUES (?, ?, ?, ?)',
        [this.nombre, this.imagen, this.contenido, this.nota]
        );
    }

    static fetchAll(){
        return db.execute('SELECT * FROM mascotasPasadas');
    }
};