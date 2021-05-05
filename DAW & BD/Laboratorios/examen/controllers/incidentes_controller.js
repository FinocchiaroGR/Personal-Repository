const Incidentes = require('../models/incidentes');

exports.getIncidentes = (request, response, next) => {
    response.setHeader('Set-Cookie', 'B="Bienvenido"; HttpOnly');

    Incidentes.fetchAll()
        .then(([rows]) => {
            console.log(rows);                          //quitar
            response.render('lista_incidentes', {
                incidentes: rows,
                titulo: 'Lista de Incidentes Recientes'
            });
        })
        .catch(err => {
            console.log(err);
        });
};


exports.getIncidente = (request, response, next) => {
    
    const id = request.params.incidente_id;

    Incidentes.fetchOne(id)
        .then(([rows]) => {
            response.render('lista_incidentes', { 
                incidentes: rows, 
                titulo: "Lista de Incidente",
            });
        })
        .catch(err => {
            console.log(err)
        });     
};


exports.getNewIncidentes = (request, response, next) => {
    response.render('nuevo_incidente', { 
        titulo: "Nuevo Incidente" 
    });
};

exports.postNewIncidentes = (request, response, next) => {
    console.log(request.body.selTipo);
    console.log(request.body.selLugar);

    const incidente = new Incidentes(request.body.selLugar, request.body.selTipo);

    incidente.save()
        .then(() => {
            request.session.ultima_adopcion = request.body.nombre;
            response.redirect('/incidentes');
        }).catch( err => {
            console.log(err);
            response.redirect('/incidentes/nuevo-incidente');    
        });
};