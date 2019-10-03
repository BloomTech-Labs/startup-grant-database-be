const router = require("express").Router();

const grants = require("../models/grantModel.js");

// ==========GET: retrieve all grants==========
router.get("/", (req, res) => {
  grants
    .getGrants()
    .then(grants => {
      res.status(200).json(grants);
    })
    .catch(error => {
      res.status(500).json({ message: "Oh no! Something went wrong!", error });
    });
});

// ==========GET: retrieve specific grants==========
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

// ==========POST: posts new grant==========
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

// ==========POST: posts new grant suggestion==========
router.post("/suggestion", (req, res) => {
  const suggestion = req.body;

  grants
    .addSuggestion(suggestion)
    .then(grant => {
      res.status(201).json(suggestion);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the suggestion." });
    });
});

module.exports = router;
