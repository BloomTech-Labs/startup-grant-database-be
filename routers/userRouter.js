const router = require("express").Router();
const {findUser, updateUser, deleteUser} = require('../controllers/users.controller');

const Users = require("../models/userModel");

router
    .post('/', findUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser);

module.exports = router;
