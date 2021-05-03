exports.getHome = (request, response, next) => {
    response.render('home', {
        titulo: "Lab 15"
    });
};
