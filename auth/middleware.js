const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
// require('dotenv').config();

// The audeinces need to match on the FE and BE in order for the .env variables to work correctly.
// See auth.congif.json in FE to align correctly.
let audience = process.env.AUDIENCE;
let domain = process.env.DOMAIN;


// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  // Audience is actually just a bananna term, used to identify the request in Auth0.
  // This can be changed in the Auth0 dashboard.
  audience: audience,
  issuer: `https://${domain}/`,
  algorithms: ["RS256"]
});

module.exports = checkJwt;
