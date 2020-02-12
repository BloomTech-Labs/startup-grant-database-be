const Favorites = require('../models/favorites.model');

async function allFavorites(req, res, next) {
  const { id } = req.params;
  try {
    const favorites = await Favorites.find(id);
    res.json(favorites);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getFavoriteById(req, res, next) {
  const { id } = req.params;
  try {
    const favorite = await Favorites.findBy({ id });
    if (favorite.length > 0) {
      res.json(favorite[0]);
    } else {
      res
        .status(404)
        .json({ message: `The Favorite with id:${id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

async function addFavorite(req, res, next) {
  try {
    const [favorite] = await Favorites.add(req.body);
    res.status(201).json(favorite);
  } catch (error) {
    next(error);
  }
}

async function removeFavorite(req, res, next) {
  const { id } = req.params;
  try {
    const count = await Favorites.remove(id);
    if (count > 0) {
      res.json(count);
    } else {
      res
        .status(404)
        .json({ message: `The Favorite with id:${id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { allFavorites, getFavoriteById, addFavorite, removeFavorite };
