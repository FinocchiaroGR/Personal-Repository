const perros = [
    {
        nombre: 'Nala', 
        imagen: 'https://www.dogalize.com/wp-content/uploads/2016/12/border-collie-black-white.jpg',
        contenido: 'Nala era una Border Collie, fue mi primera perra desde los 2 años, y vivio por 18. Por Nala yo crei que todos los perros eran sumamente inteligentes, que entendian muy bien lo que los humanos decian, ya que Nala sin enseñarle nada, sabia todo, tanto que mi papá pensaba que solo le hacia falta hablar como nosotros. Sabia: sentarse, dar la pata, acostarse, seguirme sin correa, heel, ladrar, mostrar la pansa, y aprendio desde chiquita a atrapar el frisbee en el aire por comando, o simple instinto.',
        nota: ' Los Border Collies son considerados los perros mas inteligentes en el mundo, comparando las razas que la gente piensa que son los mas inteligentes(Pastor aleman, Golden retriever) como si fuesen humanos normales con un empleo y familia, y el Border Collie como un cientifico de la NASA'
    }
];

module.exports = class Perros {

    constructor(nombre, imagen,contenido,nota) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.contenido = contenido;
        this.nota = nota;
    }

    save() {
        perros.push(this);
    }

    static fetchAll(){
        return perros;
    }
};