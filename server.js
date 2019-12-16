const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const bodyParser = require("body-parser");

const grantRouter = require("./routers/grantRouter.js");
const userRouter = require("./routers/userRouter.js");
const adminRouter = require("./routers/adminRouter.js");
//This is replacing our middleware
// Auth0's authentication for all users
const middleware = require("./auth/middleware.js");
const jwtAuthz = require("express-jwt-authz");

// Our own custom middleware to check if user is admin
// const adminMiddleware = require("./auth/adminMiddleware.js");
//checkAllScopes: false,
const checkScopesAdmMod = jwtAuthz(
  ["get:adminLocal", "get:adminProduction", "get:adminStaging"]);

server.use(cors());
server.use(helmet());
server.use(express.json());
// enable the use of request body parsing middleware
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
server.use("/api/grants", grantRouter);
server.use("/user", userRouter);
// Implement middleware on our protected admin route This is working with test token globally!!!
server.use("/api/admin", middleware, checkScopesAdmMod, adminRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://founder-grants.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: '{"client_id":"ZM4o3vmqz9Mju6q4qDDU9hyY7PmlxOyz","client_secret":"","audience":"urn:auth0-authz-api","grant_type":"client_credentials"}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://founder-grants.us8.webtask.io/adf6e2f2b84784b57522e3b19dfc9201/api/permissions',
//   headers: { authorization: 'Bearer ' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
module.exports = server;
