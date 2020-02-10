const publicRoutes = require('./routes.public');

module.exports = server => {
    server.use('/', publicRoutes);
}
