const axios = require('axios');
const { config, getToken } = require('../data/auth0.config');

async function findAllUsers(req, res, next) {
  const token = await getToken();
  try {
    const users = await axios.get('/users', config(token));
    res.json(users.data);
  } catch (error) {
    next(error);
  }
}

async function findUser(req, res, next) {
  const { sub } = req.user;
  const token = await getToken();
  try {
    const userData = await axios.get(`/users/${sub}`, config(token));
    const roleData = await axios.get(`/users/${sub}/roles`, config(token));
    res.json({ ...userData.data, roles: roleData.data });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { sub } = req.user;
  const token = await getToken();
  try {
    const updatedUser = await axios.patch(
      `/users/${sub}`,
      req.body,
      config(token)
    );
    const roleData = await axios.get(`/users/${sub}/roles`, config(token));
    res.status(200).json({ ...updatedUser.data, roles: roleData.data });
  } catch (error) {
    next(error);
  }
}

async function getAllRoles(req, res, next) {
  const token = await getToken();
  try {
    const roles = await axios.get(`/roles`, config(token));
    res.json(roles.data);
  } catch (error) {
    next(error);
  }
}

async function promoteModerator(req, res, next) {
  const token = await getToken();
  const { userId } = req.params;
  const { roleId } = req.body;
  try {
    const body = { roles: [roleId] };
    const response = await axios.post(
      `/users/${userId}/roles`,
      body,
      config(token)
    );
    res.status(response.status);
  } catch (error) {
    next(error);
  }
}

async function demoteModerator(req, res, next) {
  const { userId } = req.params;
  const { roleId } = req.body;
  const token = await getToken();
  try {
    const body = { roles: [roleId] };
    const response = await axios.post(
      `/users/${userId}/roles`,
      body,
      config(token)
    );
    res.status(response.status);
  } catch (error) {
    next(error);
  }
}

// async function deleteUser(req, res, next) {
//   const { id } = req.params;
//   try {
//     const foundUser = await Users.findBy({ id });
//     if (foundUser.length > 0) {
//       const count = await Users.remove(id);
//       res.json(count);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     next(error);
//   }
// }

module.exports = {
  findAllUsers,
  findUser,
  updateUser,
  getAllRoles,
  promoteModerator,
  demoteModerator,
};
