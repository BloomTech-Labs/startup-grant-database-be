const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const grantRouter = require("./routers/grantRouter.js");
const authRouter = require("./routers/authRouter.js");

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/api/grants", grantRouter);
server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;
