const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(username, nombre, password) {
        this.username = username;
        this.nombre = nombre;
        this.password = password;
    }

    save() {
        return bcrypt.hash(this.password, 12)
            .then( (password) => {
                return db.execute('INSERT INTO usuarios (username, nombre, password) VALUES (?, ?, ?)',
                    [this.username, this.nombre, password]
                );
            })
            .catch(err => {
                console.log(err);
                throw Error("Nombre de usuario duplicado");
            });
    }

    static fetchAll(){
       return db.execute('SELECT * FROM usuarios');
            
    }

    static fetchOne(username){
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
             
     }
};