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
      res.status(500).json({ message: "Oh no, something went wrong", error });
    });
});

// ==========GET: get specific user by auth ID==========
router.get("/", (req, res) => {
  const user = req.headers;

  users
    .getUserByAuthId(user.auth_id)
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

// router.post("/register", (req, res) => {
//   let user = req.body;
//   const hash = bcrypt.hashSync(user.password, 12);
//   user.password = hash;

//   users
//     .addUser(user)
//     .then(passHash => {
//       res.status(201).json(passHash);
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ message: "Oh no, something went wrong", error });
//     });
// });

// router.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   users
//     .findUserBy({ username })
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         res.status(200).json({ message: "Welcome" });
//       } else {
//         res.status(401).json({ message: "Incorrect login info" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Error logging in." });
//     });
// });

module.exports = router;
