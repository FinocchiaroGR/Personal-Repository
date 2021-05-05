const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));


const rutasIncidentes = require('./routes/incidentes');

app.use('/incidentes', rutasIncidentes);

app.get('/', (request, response, next) => {
    response.send('Bienvenido a el apartado de Incidentes JURASIC PARK - ir a localhost3000/incidentes/incidentes');
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404)
    response.send('Lo Sentimos, Página Inexistente.');
});

app.listen(3000);