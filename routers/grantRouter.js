const router = require("express").Router();
const grantModel = require("../models/grantModel.js");
// Get all grants
router.get("/", (req, res) => {
  grantModel
    .getGrants()
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

  grantModel
    .getGrantsById(id)
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

module.exports = router;
