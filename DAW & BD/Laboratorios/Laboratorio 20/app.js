const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'qwertyuioplllkjjhgfdsazxcvbnmujntgvedx', 
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(csrfProtection); 

const rutasMisMascotasActuales = require('./routes/mis-mascotas-actuales');
const rutasMisMascotasPasadas = require('./routes/mis-mascotas-pasadas');
const rutasTrucosEnsenar = require('./routes/trucos-a-ensenar');
const rutaRecomendacion = require('./routes/recomendacion-de-comida-para-perros');
const homeController = require('./controllers/home_controller');
const rutasUsuarios = require('./routes/usuarios')
const isAuth = require('./util/is-auth.js');



//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.use('/mis-mascotas-actuales', rutasMisMascotasActuales);
app.use('/mis-mascotas-pasadas', rutasMisMascotasPasadas);
app.use('/trucos-a-ensenar', rutasTrucosEnsenar);
app.use('/recomendacion-de-comida-para-perros', rutaRecomendacion)
app.use('/usuarios', rutasUsuarios)

app.get('/', isAuth, homeController.getHome);

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404)
    response.send('Lo Sentimos, Página Inexistente.');
});

app.listen(3000);