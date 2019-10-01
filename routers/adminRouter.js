const router = require("express").Router();
const jwt = require("jsonwebtoken");

const admin = require("../models/adminModel.js");

// Get All Grants including un-reviewed ones
// router.get("/", (req, res) => {
//   admin
//     .getReviewedGrant()
//     .then(grants => {
//       res
//         .status(200)
//         .json({
//           message: "Here are the grants that need to be reviewed!",
//           grants
//         });
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Oh no! Something went wrong!", error });
//     });
// });

router.get("/", (req, res) => {
  admin
    .find()
    .then(grant => {
      res.json(grant);
    })
    .catch(err => res.status(500).json({ message: "bummer", err }));
});

router.put("/:id", (req, res) => {});

module.exports = router;
