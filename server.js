const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const grantRouter = require("./routers/grantRouter.js");
const userRouter = require("./routers/userRouter.js");
const adminRouter = require("./routers/adminRouter.js");
const middleware = require("./auth/middleware.js");

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/api/admin", middleware, adminRouter);
server.use("/api/grants", grantRouter);
server.use("/user", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;
