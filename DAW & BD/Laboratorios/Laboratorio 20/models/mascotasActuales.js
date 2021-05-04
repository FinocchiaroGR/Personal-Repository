const db = require('../util/database');

module.exports = class Perros {

    constructor(nombre, imagen, contenido) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.contenido = contenido;
    }

    save() {
        return db.execute('INSERT INTO mascotasActuales (nombre, imagen, contenido) VALUES (?, ?, ?)',
        [this.nombre, this.imagen, this.contenido]
        );
    }

    static fetchAll(){
       return db.execute('SELECT * FROM mascotasActuales');
            
    }

    static fetchMaia(){
        return db.execute('SELECT * FROM `mascotasActuales` WHERE `nombre` LIKE "Maia"');
    }

    static fetchHara(){
        return db.execute('SELECT * FROM `mascotasActuales` WHERE `nombre` LIKE "Hara"');
    }
};