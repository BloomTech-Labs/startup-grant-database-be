const Favorites = require('../models/favorites.model');

async function allFavorites(req, res, next) {
  try {
    const favorites = await Favorites.find();
    res.json(favorites);
  } catch (error) {
    next(error);
  }
}

async function getFavoriteById(req, res, next) {
  const { auth_id } = req.params;
  try {
    const favorite = await Favorites.findBy({ auth_id });
    if (favorite.length > 0) {
      res.json(favorite[0]);
    } else {
      res
        .status(404)
        .json({ message: `The Favorite with id:${auth_id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

async function addFavorite(req, res, next) {
  const newFavorite = { ...req.body, auth_id: req.user.sub };
  try {
    await Favorites.add(newFavorite);
    const newFavoriteList = await Favorites.find(req.body.auth_id);
    res.status(201).json(newFavoriteList);
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
