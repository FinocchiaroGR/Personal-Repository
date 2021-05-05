const db = require('../util/database');

module.exports = class Incidentes {

    constructor(lugar, tipo) {
        this.lugar = lugar;
        this.tipo = tipo;
    }

    save() {
        return db.execute('INSERT INTO incidentes (lugar, tipo) VALUES (?, ?)',
        [this.lugar, this.tipo]
        );
    }

    static fetchAll(){
       return db.execute('SELECT * FROM incidentes');      
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM `incidentes` WHERE `id` = ?', [id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM mascotas WHERE id = ?', [id]);
    }
};