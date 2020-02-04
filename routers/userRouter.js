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
  const user = req.body;

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
// ==========UPDATE: update specific user by ID==========

router.update("/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  users
    .updateUser(id, user)
    .then(user => {
      if (user){
        res.status(200).json(user);
      }
      else {
        res.status(404).json({message: "the user with that ID does not exist"})
      }
    })
    .catch(err => {
      res.status(500).json({message: "failed to update user"});
    });

});

module.exports = router;
