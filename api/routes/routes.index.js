const publicRoutes = require('./routes.public');
const privateRoutes = require('./routes.private');
const adminRoutes = require('./routes.admin');
const moderatorRoutes = require('./routes.moderator');
const restricted = require('../middleware/restricted.middleware');
const adminRestricted = require('../middleware/adminRestricted.middleware');
const moderatorRestricted = require('../middleware/moderatorRestricted.middleware');

module.exports = server => {
  server.use('/', publicRoutes);
  server.use('/api', restricted, privateRoutes);
  server.use('/api', restricted, moderatorRestricted, moderatorRoutes);
  server.use('/api', restricted, adminRestricted, adminRoutes);
};
