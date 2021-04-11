const perros = [
    {nombre: 'Maia', imagen: 'https://www.pdsa.org.uk/media/7892/husky-gallery-outdoors-1-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132179622120000000', 
    contenido: 'Maia Maiesta de Finocchiaro, es mi mascota actualmente. Su nombre es uno de los nombres de la diosa de la primavera griga. A pesar de ser Husky, es la perra mas cariñosa que he tenido, es inteligente, y sabe aullar, sentarse, acostarse, dar la pata, y pararse en dos patas para chocarme la mano en comando, o con señales con las manos'}, 
    {nombre: 'Nala', imagen: 'https://www.dogalize.com/wp-content/uploads/2016/12/border-collie-black-white.jpg',
    contenido: 'Nala era una Border Collie, fue mi primera perra desde los 2 años, y vivio por 18. Por Nala yo crei que todos los perros eran sumamente inteligentes, que entendian muy bien lo que los humanos decian, ya que Nala sin enseñarle nada, sabia todo, tanto que mi papá pensaba que solo le hacia falta hablar como nosotros. Sabia: sentarse, dar la pata, acostarse, seguirme sin correa, heel, ladrar, mostrar la pansa, y aprendio desde chiquita a atrapar el frisbee en el aire por comando, o simple instinto.',
    nota: ' Los Border Collies son considerados los perros mas inteligentes en el mundo, comparando las razas que la gente piensa que son los mas inteligentes(Pastor aleman, Golden retriever) como si fuesen humanos normales con un empleo y familia, y el Border Collie como un cientifico de la NASA'}, 
];

const trucos = [];

const http = require('http');
const server = http.createServer( (request, response) => {

    console.log(request.url);
  
    if(request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>');
        response.write('<h1>Mis Mascotas</h1>');
        response.write('<ul>');
        for(let perro of perros) {
            response.write('<li><a href="/' + perro.nombre + '">' + perro.nombre + '</a></li>');
        }
        response.write('</ul>');
        response.write('<a href="/trucos">Recomendacion de Trucos</a></body></html>');
        response.end();
    } else if (request.url === '/Maia') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[0].nombre+'</title></head><body>');
        response.write('<h1>'+perros[0].nombre+'</h1>');
        response.write('<table><tr><td><img alt="Imagen de Lobo Siberiano" src="'+perros[0].imagen+'"></td><td>');
        response.write('<p style="text-align:center">' + perros[0].contenido + '</p>' + '</td></tr></table></body></html>');
        response.end();
    } else if (request.url === '/Nala') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[1].nombre+'</title></head><body>');
        response.write('<h1>'+perros[1].nombre+'</h1>');
        response.write('<table><tr><td><img alt="Imagen de Border Collie" src="'+perros[1].imagen+'"></td><td>');
        response.write('<p style="text-align:center;">' + perros[1].contenido + perros[1].nota + '</p>' + '</td></tr></table></body></html>');
        response.end();
    } else if (request.url === '/trucos' && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Trucos</title></head><body>');
        response.write('<h1>Dime que otros trucos deberia enseñarle a Maia</h1>');
        response.write('<form action="/trucos" method="POST">');
        response.write('Recomendacion: <input type="text" name="recomendacion"><br>');
        response.write('<input type="submit" name="enviar" value="Trucos"><br>');
        response.write('</form>');
        response.write('</body></html>');
        response.end();
    } else if (request.url === '/trucos' && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_truco = datos_completos.split('=')[1].split('&')[0];

            console.log(nuevo_truco);
            trucos.push(nuevo_truco);
            const file_system = require('fs');
            file_system.writeFileSync('trucos.txt', trucos.toString());

            response.statusCode = 302;
            response.setHeader('Location', '/');
            response.end();
        });

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Página no disponible</title></head><body>');
        response.write('<h1>Página no disponible - Error 404</h1>');
        response.write('</body></html>');
        response.end();
    }
  
  });
  
  server.listen(10000);