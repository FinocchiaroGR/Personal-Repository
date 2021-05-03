const recomendaciones = [
    {
        reco: 'Blue Buffalo Wilderness'
    }
];

module.exports = class Recomendaciones {

    constructor(reco) {
        this.reco = reco;
    }

    save() {
        recomendaciones.push(this);
    }

    static fetchAll(){
        return recomendaciones;
    }
};