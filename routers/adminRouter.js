const router = require("express").Router();
const jwt = require("jsonwebtoken");

const admin = require("../models/adminModel.js");

// Get All Grants including un-reviewed ones
router.get("/", (req, res) => {
  grants
    .getGrant()
    .then(grants => {
      res.status(200).json({ message: "Here are the grants!", grants });
    })
    .catch(error => {
      res.status(500).json({ message: "Oh no! Something went wrong!", error });
    });
});

module.exports = router;
