const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const bodyParser = require('body-parser');

const grantRouter = require("./routers/grantRouter.js");
const userRouter = require("./routers/userRouter.js");
const adminRouter = require("./routers/adminRouter.js");
//This is replacing our middleware
// Auth0's authentication for all users
const middleware = require("./auth/middleware.js");
const jwtAuthz = require("express-jwt-authz"); 

// Our own custom middleware to check if user is admin
const adminMiddleware = require("./auth/adminMiddleware.js");
const checkScopesAdmMod = jwtAuthz(['get:adminLocal', 'get:adminProduction', 'get:adminStaging'] , { checkAllScopes: false });

server.use(cors());
server.use(helmet());
server.use(express.json());
// enable the use of request body parsing middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
server.use("/api/grants", grantRouter);
server.use("/user", userRouter);
// Implement middleware on our protected admin route This is working with test token globally!!!
server.use("/api/admin", middleware, adminMiddleware, adminRouter);
//managem

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

// var request = require("request");

// var options = {
//   method: 'POST',
//   url: 'https://founder-grants.auth0.com/oauth/token',
//   headers: {'content-type': 'application/x-www-form-urlencoded'},
//   form: {
//     grant_type: 'client_credentials',
//     client_id: 'F7IQ07DmUMWVnqKE0D34lJx67vAd3a2e',
//     client_secret: 'YOUR_CLIENT_SECRET',
//     audience: 'https://founder-grants.auth0.com/api/v2/'
//   }
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

module.exports = server;