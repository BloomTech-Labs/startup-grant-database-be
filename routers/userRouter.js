const router = require("express").Router();
// const bcrypt = require("bcryptjs");

const Users = require("../models/userModel");

// ==========POST: check to see if there is an existing email, create one if not==========
router.post("/", async (req, res) => {
  const {email} = req.body;
  try {
      const foundUser = await Users.findBy({email});
      console.log(foundUser);
      if (foundUser.length > 0) {
          return res.json(foundUser[0]);
      }
      const [newUser] = await Users.add({email});
      res.status(201).json(newUser);
  } catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
});

// ==========GET: get specific user by ID==========

router.get("/:id", (req, res) => {
  const { user } = req.params.email;

  users
    .getUserByEmail(user)
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

router.put("/:id", async (req, res) => {
  const {id} = req.params;
  try {
      const [updatedUser] = await Users.update(id, req.body);
      res.json(updatedUser);
  } catch(error) {
      res.status(500).json(error);
  }
});

// put request to User
// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const changes = req.body;

//   if (!id) {
//     res.status(404).json({ message: "No user found with requested ID" });
//   }
//   user
//     .updateUser(id, changes)
//     .then(res => {
//       res.status(200).json(res);
//     })
//     .catch(err => {
//       res.status(500).json({ message: "User could not be updated" });
//     });
// });

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: "No user found with requested ID" });
  }
  user
    .removeUser(id)
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => {
      res.status(500).json({ message: "User could not be removed" });
    });
});

module.exports = router;
