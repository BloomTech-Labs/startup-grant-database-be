const axios = require('axios');
const Users = require('../models/user.model');

const requestBody = {
  client_id: process.env.M2M_CLIENT_ID,
  client_secret: process.env.M2M_CLIENT_SECRET,
  audience: process.env.M2M_AUDIENCE,
  grant_type: 'client_credentials',
};

async function getToken() {
  const res = await axios.post(
    `https://${process.env.DOMAIN}/oauth/token`,
    requestBody
  );
  return `Bearer ${res.data.access_token}`;
}

async function findAllUsers(req, res, next) {
  const token = await getToken();
  try {
    const response = await axios.get(`https://${process.env.DOMAIN}/api/v2/users`, {
      headers: { Authorization: token },
    });
    res.json(response.data);
  } catch (error) {
    next(error);
  }
}

async function findUser(req, res, next) {
  const { email } = req.body;
  try {
    const foundUser = await Users.findBy({ email });
    if (foundUser.length > 0) {
      return res.json(foundUser[0]);
    }
    const [newUser] = await Users.add(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { id } = req.params;
  try {
    const foundUser = await Users.findBy({ id });
    if (foundUser.length > 0) {
      const updatedUser = await Users.update(id, req.body);
      res.json(updatedUser[0]);
    } else {
      return res.status(404).json({ message: 'User was not found' });
    }
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const { id } = req.params;
  try {
    const foundUser = await Users.findBy({ id });
    if (foundUser.length > 0) {
      const count = await Users.remove(id);
      res.json(count);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  findAllUsers,
  findUser,
  updateUser,
  deleteUser,
};
