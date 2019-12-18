const router = require("express").Router();
const middleware = require('../auth/middleware.js');
const grants = require("../models/grantModel.js");

// ==========GET: get all grants==========
router.get("/", (req, res) => {
  grants
    .getGrants()
    .then(grants => {
      res.status(200).json(grants);
    })
    .catch(error => {
      res.status(500).json({ message: "Error retrieving all grants" });
    });
});

// ==========GET: get specific grants==========
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
//added middleware that checks for an authorized user token before allowing post
// middleware, 
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
//added middleware that checks for an authorized user token before allowing post
//middleware,
router.post("/suggestion",  (req, res) => {
  const suggestion = req.body;

  grants
    .addSuggestion(suggestion)
    .then(suggestion => { 
      res.status(201).json(suggestion);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the suggestion." });
    });
});

module.exports = router;
