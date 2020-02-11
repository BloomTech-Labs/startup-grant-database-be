const publicRoutes = require('./routes.public');
const privateRoutes = require('./routes.private');
const restricted = require('../middleware/restricted.middleware');

module.exports = server => {
    server.use('/', publicRoutes);
    server.use('/api', restricted, privateRoutes);
};
