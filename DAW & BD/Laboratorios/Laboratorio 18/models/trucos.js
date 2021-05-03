const trucos = [
    {
        truco: 'A Atrapar un Frisbee'
    }
];

const db = require('../util/database');

module.exports = class Truco {

    constructor(truco) {
        this.truco = truco;
    }

    save() {
        return db.execute('INSERT INTO trucos (truco) VALUES (?)',
        [this.truco]
        );
    }

    static fetchAll(){
        return db.execute('SELECT * FROM trucos');
    }
};