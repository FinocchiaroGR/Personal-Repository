const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasMisMascotasActuales = require('./routes/mis-mascotas-actuales');
const rutasMisMascotasPasadas = require('./routes/mis-mascotas-pasadas');
const rutasTrucosEnsenar = require('./routes/trucos-a-ensenar');

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});
app.use('/mis-mascotas-actuales', rutasMisMascotasActuales);
app.use('/mis-mascotas-pasadas', rutasMisMascotasPasadas);
app.use('/trucos-a-ensenar', rutasTrucosEnsenar);

app.get('/', (request, response, next) => {
    response.send('<html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab12</title></head><body><h1>Lab 12 - Mis Mascotas</h1><ul><li><a href="/mis-mascotas-actuales/mascotas">Mis Mascotas Actuales</a></li><li><a href="/mis-mascotas-pasadas/mascotas">Mis Mascotas Pasadas</a></li><li><a href="/trucos-a-ensenar/nuevo-truco">Trucos a Enseñar</a></li></ul></body></html>');
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404)
    response.send('Lo Sentimos, Página Inexistente.'); //Manda la respuesta
});

app.listen(3000);