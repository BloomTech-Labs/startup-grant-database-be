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

// Update a grant
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  admin
    .updateGrant(changes, id)
    .then(grant => {
      if (grant) {
        res.status(200).json(grant);
      } else {
        res
          .status(404)
          .json({ message: "The grant with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error modifying the grant." });
    });
});

// Remove a grant
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  admin
    .removeGrant(id)
    .then(grant => {
      if (grant) {
        res.status(200).json(grant);
      } else {
        res
          .status(404)
          .json({ message: "The grant with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error removing the grant." });
    });
});

// Remove a suggestion
router.delete("/suggestion/:id", (req, res) => {
  const { id } = req.params;
  admin
    .removeSuggestion(id)
    .then(suggestion => {
      if (suggestion) {
        res.status(200).json(suggestion);
      } else {
        res
          .status(404)
          .json({
            message: "The suggestion with the specified ID does not exist."
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error removing the grant." });
    });
});

module.exports = router;
