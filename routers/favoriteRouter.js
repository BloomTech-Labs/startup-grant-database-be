const router = require("express").Router();
const grants = require("../models/grantModel.js");

// ========== POST: posts new favorite ==========
router.post("/", (req, res) => {
  
    const newFavorite = req.body;

    if (!newFavorite.grant_id) {
      res.status(404).json({ message: 'Favorite cannot be left blank.' })
    } else if (!newFavorite.auth_id ) {
      res.status(404).json({ message: 'Auth_id cannot be left blank.' })
    } else {
      grants.addFavorite(newFavorite)
      .then(favorites => {
        console.log('REQ BODY in then', favorites)
         res.status(201).json(favorites);
      })
      .catch(error =>{
        res.status(501)
        .json({message: "There was an error adding the favorite."})
      });
    }
  });
  
  // ========== GET: all favorites for a user ==========
  router.get("/myFavorites/:id", (req, res) => {
    console.log(req.params.id);
    const authId = req.params.id;
    // if(!authId) {
    //   res.status(404).json({ message: 'userAuth_id cannot be left blank.' })
    // } else {
       grants
      .getFavorites(id)
      .then(favorite => {
        res.status(200).json(favorite);
      })
      .catch(error => {
        res.status(500).json({ message: "Error retrieving all the favorite grants" });
      });
    // }
  });
  
  
  // ========== DELETE: a favorite ==========
  router.delete("/myFavorites/:id", (req, res) => {
    const { id } = req.params;
    grants
      .removeFavorite(id)
      .then(favorite => {
        if (favorite) {
          res.status(200).json(favorite);
        } else {
          res.status(404).json({
            message: "The favorite with the specified ID does not exist or you already deleted it."
          });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "There was an error removing the favorite grant." });
      });
  });

  module.exports = router;
