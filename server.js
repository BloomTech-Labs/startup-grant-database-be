const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const bodyParser = require('body-parser');

const grantRouter = require("./routers/grantRouter.js");
const userRouter = require("./routers/userRouter.js");
const adminRouter = require("./routers/adminRouter.js");

// Auth0's authentication for all users
const middleware = require("./auth/middleware.js");
const jwtAuthz = require("express-jwt-authz"); //jwtAuthz(['batch:upload'])

// Our own custom middleware to check if user is admin
// const adminMiddleware = require("./auth/adminMiddleware.js");

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
server.use("/api/admin", middleware, jwtAuthz(['get:grants'] , { checkAllScopes: true }), adminRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;