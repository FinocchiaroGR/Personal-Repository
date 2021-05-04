const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('login');
    });
};

exports.getNewUser = (request, response, next) => {
    response.render('nuevo_usuario', {
        csrfToken: request.csrfToken(),
        error: request.session.error === undefined ? false : request.session.error,
        titulo: "Nuevo usuario"
    });
};


exports.postNewUser = (request, response, next) => {
    const usuario = new Usuario(request.body.username, request.body.nombre, request.body.password);
    
    request.session.error = undefined;

    usuario.save()
        .then(() => {
            response.redirect('/');
        })
        .catch( err => {
            console.log(err);
            request.session.error = "Ingresa otro nombre de usuario";
            response.redirect('new');    
        });
};

exports.getLogin = (request, response, next) => {
    response.render('login', {
        csrfToken: request.csrfToken(),
        error: request.session.error === undefined ? false : request.session.error,
        titulo: "Login"
    });
};


exports.postLogin = (request, response, next) => {

    request.session.error = undefined;

    Usuario.fetchOne(request.body.username)
        .then(([rows]) => {
            bcrypt.compare(request.body.password, rows[0].password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = rows[0].username;
                        return request.session.save(err => {
                            response.redirect('/');
                        });
                    }
                    request.session.error = 'Usuario y/o contraseña incorrectos';
                    response.redirect('login');
                }).catch(err => {
                    request.session.error = 'Usuario y/o contraseña incorrectos';
                    response.redirect('login');
                });
        })
        .catch(err => {
            console.log(err);
            request.session.error = 'Usuario y/o contraseña incorrectos';
            response.redirect('login');
        });
};