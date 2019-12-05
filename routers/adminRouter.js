const router = require("express").Router();

const admin = require("../models/adminModel.js");

// ==========GET: get all grants==========
router.get("/", (req, res) => {
  admin
    .getGrantsAdmin()
    .then(grants => {
      res.status(200).json(grants);
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an error retrieving the grants" })
    );
});

// ==========PUT: update a grant==========
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
console.log(changes);
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

// ==========DELETE: remove a grant==========
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

// ==========DELETE: remove a suggestion for a grant==========
router.delete("/suggestion/:id", (req, res) => {
  const { id } = req.params;
  admin
    .removeSuggestion(id)
    .then(suggestion => {
      if (suggestion) {
        res.status(200).json(suggestion);
      } else {
        res.status(404).json({
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
