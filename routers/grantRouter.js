const router = require("express").Router();

const grants = require("../models/grantModel.js");

// Get all grants
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

// Get grant by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  grants
    .getGrantById(id)
    .then(grants => {
      if (grants) {
        res.status(200).json(grants);
      } else {
        res
          .status(404)
          .json({ message: "The grant with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "failed to load grant by id" });
    });
});

// Add a grant
router.post("/", (req, res) => {
  const grant = req.body;

  grants
    .addGrant(grant)
    .then(grant => {
      res.status(201).json(grant);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "There was an error adding the grant." });
    });
});

module.exports = router;
