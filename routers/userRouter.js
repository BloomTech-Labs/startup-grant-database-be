const router = require("express").Router();
// const bcrypt = require("bcryptjs");

const users = require("../models/userModel.js");

// ==========POST: post new user==========
router.post("/", (req, res) => {
  let user = req.body;

  users
    .addUser(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json({ message: "Error adding user" });
    });
});

// ==========GET: get specific user by ID==========
router.get("/", (req, res) => {
  const user = req.headers;

  users
    .getUserById(user.id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to load user." });
    });
});

// put request to User
router.put('/:id', (req , res) => {
  const changes = req.body
  const id = req.params.id
  if (!id) {
    res.status(404).json({ message: "No user found with requested ID"})
  }
  user.updateUser(id, changes)
    .then(res => {
      res.status(200).json(res)
    })
    .catch(err => {
      res.status(500).json({ message: "User could not be updated"})
    })

})

module.exports = router;
