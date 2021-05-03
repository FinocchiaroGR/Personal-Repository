const trucos = [
    {
        truco: 'A Atrapar un Frisbee'
    }
];

module.exports = class Truco {

    constructor(truco) {
        this.truco = truco;
    }

    save() {
        trucos.push(this);
    }

    static fetchAll(){
        return trucos;
    }
};