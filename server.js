const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const bodyParser = require("body-parser");

const grantRouter = require("./routers/grantRouter.js");
const userRouter = require("./routers/userRouter.js");
const adminRouter = require("./routers/adminRouter.js");
const favoriteRouter = require('./routers/favoriteRouter.js');
//This is replacing our middleware
// Auth0's authentication for all users
const middleware = require("./auth/middleware.js");
const jwtAuthz = require("express-jwt-authz");

//checkAllScopes: false
const checkScopesAdmMod = jwtAuthz(["get:adminLocal", "get:adminProduction", "get:adminStaging"]);
//make this array hidden variable & give those to heroku


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
// Implement Auth0 middleware on our protected admin route This is working with test token globally!!!
server.use("/api/admin", middleware, checkScopesAdmMod, adminRouter);
server.use("/api/favorites", middleware, favoriteRouter );

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;
