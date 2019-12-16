const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const grantRouter = require("./routers/grantRouter.js");
const userRouter = require("./routers/userRouter.js");
const adminRouter = require("./routers/adminRouter.js");

// Auth0's authentication for all users
const middleware = require("./auth/middleware.js");

// Our own custom middleware to check if user is admin
const adminMiddleware = require("./auth/adminMiddleware.js");

server.use(cors());
server.use(helmet());
server.use(express.json());

// Routes
server.use("/api/grants", grantRouter);
server.use("/user", userRouter);
// Implement middleware on our protected admin route
//new note

server.use("/api/admin", middleware, adminMiddleware, adminRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;
