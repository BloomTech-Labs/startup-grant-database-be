const router = require("express").Router();
const grants = require("../models/grantModel.js");

// ========== POST: posts new favorite ==========
router.post("/", async (req, res) =>{
  
    // const favorite = req.body;
    const authId = req.body.userAuth_id;

    try {
      const changed = await grants.getFavorites(authId);
      // res.send({changed})
      if (authId) {
        res.status(200).json(changed);
      } else {
        res
          .status(404)
          .json({ message: "Favorite can not be blank." });
      }
    } catch (error) {
      res
      .status(500)
      .json({ message: "Error adding all the favorite grants" });
    }
  
  //   grants.addFavorite(favorite)
  //   .then(favorite => {
  //     res.status(201).json(favorite);
  //   })
  //   .catch(error =>{
  //     res.status(500)
  //     .json({message: "There was an error adding the favorite."})
  //   });
  });
  
  // ========== GET: all favorites for a user ==========
  router.get("/myFavorites", async (req, res) => {

    const authId = req.body.userAuth_id;

    try {
      const changed = await grants.getFavorites(authId);
      // res.send({changed})
      if (authId) {
        res.status(200).json(changed);
      } else {
        res
          .status(404)
          .json({ message: "The favorite does not exist." });
      }
    } catch (error) {
      res
      .status(500)
      .json({ message: "Error retrieving all the favorite grants" });
    }

    // grants
    //   .getFavorites(authId)
    //   .then(favorite => {
    //     console.log('fav', favorite);
    //     res.status(200).json(favorite);
    //   })
    //   .catch(error => {
    //     res.status(500).json({ message: "Error retrieving all the favorite grants" });
    //   });
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
            message: "The favorite with the specified ID does not exist."
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
