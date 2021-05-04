const recomendaciones = [
    {
        reco: 'Blue Buffalo Wilderness'
    }
];

const db = require('../util/database');

module.exports = class Recomendaciones {

    constructor(reco) {
        this.reco = reco;
    }

    save() {
        return db.execute('INSERT INTO recomendaciones (reco) VALUES (?)',
        [this.reco]
        );
    }

    static fetchAll(){
        return db.execute('SELECT * FROM recomendaciones');
    }
};