const jwtAuthz = require('express-jwt-authz');

module.exports = jwtAuthz([
  'get:adminLocal',
  'get:adminProduction',
  'get:adminStaging',
]);
