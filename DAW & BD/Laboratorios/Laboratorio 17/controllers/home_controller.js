exports.getHome = (request, response, next) => {
    response.setHeader('Set-Cookie', 'Bienvenido="Bienvenido a mis mascotas"; HttpOnly');
    response.render('home', {
        titulo: "Lab 17"
    });
};
