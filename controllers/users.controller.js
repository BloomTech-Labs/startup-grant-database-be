const axios = require('axios');

const requestBody = {
  client_id: process.env.M2M_CLIENT_ID,
  client_secret: process.env.M2M_CLIENT_SECRET,
  audience: process.env.M2M_AUDIENCE,
  grant_type: 'client_credentials',
};

const baseUrl = `https://${process.env.DOMAIN}/api/v2`;

async function getToken() {
  const res = await axios.post(
    `https://${process.env.DOMAIN}/oauth/token`,
    requestBody
  );
  return `Bearer ${res.data.access_token}`;
}

async function axiosWithAuth() {
  const token = await getToken();
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: token,
    },
  });
}

function getData(url) {
  return axiosWithAuth().get(url);
}

async function findAllUsers(req, res, next) {
  try {
    const users = await getData('/users');
    res.json(users.data);
  } catch (error) {
    next(error);
  }
}

async function findUser(req, res, next) {
  const { sub } = req.user;
  try {
    const userData = await getData(`/users/${sub}`);
    const roleData = await getData(`/users/${sub}/roles`);
    res.json({ ...userData.data, roles: roleData.data });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { sub } = req.user;
  try {
    const updatedUser = await axiosWithAuth().patch(`/users/${sub}`, req.body);
    const roleData = await getData(`/users/${sub}/roles`);
    res.status(200).json({ ...updatedUser.data, roles: roleData.data });
  } catch (error) {
    next(error);
  }
}

async function getAllRoles(req, res, next) {
  try {
    const roles = await getData(`/roles`);
    res.json(roles.data);
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
};
