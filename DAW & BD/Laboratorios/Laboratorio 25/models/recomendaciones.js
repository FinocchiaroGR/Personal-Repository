const db = require('../util/database');

module.exports = class Recomendaciones {

    constructor(reco, imagen) {
        this.reco = reco,
        this.imagen = imagen;
    }

    save() {
        return db.execute('INSERT INTO recomendaciones (reco, imagen) VALUES (?, ?)',
        [this.reco, this.imagen]
        );
    }

    static fetchAll(){
        return db.execute('SELECT * FROM recomendaciones');
    }

    static delete(reco) {
        return db.execute('DELETE FROM recomendaciones WHERE reco = ?', [reco]);
    }
};