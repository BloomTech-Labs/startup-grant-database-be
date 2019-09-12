const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;
