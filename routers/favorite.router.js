const router = require('express').Router();
const {
  addFavorite,
  allFavorites,
  getFavoriteById,
  removeFavorite,
} = require('../controllers/favorites.controller');

router
  .get('/:id/favorites', allFavorites)
  .get('/favorites/:id', getFavoriteById)
  .post('/favorites', addFavorite)
  .delete('/favorites/:id', removeFavorite);

module.exports = router;
