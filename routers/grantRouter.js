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
router.post("/", middleware, (req, res) => {
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
router.post("/suggestion", middleware, (req, res) => {
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

// // ==========POST: posts new favorite==========
// router.post("/favorites", middleware, (req, res) =>{
//   const favorite = req.body;

//   grants.addFavorite(favorite)
//   .then(favorite => {
//     res.status(201).json(favorite);
//   })
//   .catch(error =>{
//     res.status(500)
//     .json({message: "There was an error adding the favorite."})
//   });
// });

// // ==========GET: all favorites for a user==========
// router.get("/favorites", middleware, (req, res) => {
//   const authId = req.body.auth_id;
//   grants
//     .getFavorites(authId)
//     .then(favorite => {
//       console.log('fav', favorite);
//       res.status(200).json(favorite);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Error retrieving all the favorite grants" });
//     });
// });


// // ==========DELETE: a favorites==========
// router.delete("/favorites/:id", (req, res) => {
//   const { id } = req.params;
//   grant
//     .removeFavorite(id)
//     .then(favorite => {
//       if (favorite) {
//         res.status(200).json(favorite);
//       } else {
//         res.status(404).json({
//           message: "The favorite with the specified ID does not exist."
//         });
//       }
//     })
//     .catch(error => {
//       res
//         .status(500)
//         .json({ message: "There was an error removing the favorite grant." });
//     });
// });

module.exports = router;
