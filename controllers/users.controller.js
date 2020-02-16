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

const config = token => ({
  baseURL: baseUrl,
  headers: {
    Authorization: token,
  },
});

function getData(url, token) {
  return axios.get(url, config(token));
}

async function findAllUsers(req, res, next) {
  const token = await getToken();
  try {
    const users = await axios.get('/users', {
      baseURL: baseUrl,
      headers: {
        Authorization: token,
      },
    });
    res.json(users.data);
  } catch (error) {
    next(error);
  }
}

async function findUser(req, res, next) {
  const { sub } = req.user;
  const token = await getToken();
  try {
    const userData = await axios.get(`/users/${sub}`, {
      baseURL: baseUrl,
      headers: { Authorization: token },
    });
    const roleData = await axios.get(`/users/${sub}/roles`, {
      baseURL: baseUrl,
      headers: { Authorization: token },
    });
    res.json({ ...userData.data, roles: roleData.data });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { sub } = req.user;
  try {
    const updatedUser = await axios.patch(
      `/users/${sub}`,
      req.body,
      `/users/${sub}`,
      { baseURL: baseUrl, headers: { Authorization: token } }
    );
    const roleData = await axios.get(`/users/${sub}/roles`, {
      baseURL: baseUrl,
      headers: { Authorization: token },
    });
    res.status(200).json({ ...updatedUser.data, roles: roleData.data });
  } catch (error) {
    next(error);
  }
}

async function getAllRoles(req, res, next) {
  const token = await getToken();
  try {
    const roles = await axios.get(`/roles`, {
      baseURL: baseUrl,
      headers: {
        Authorization: token
      }
    });
    res.json(roles.data);
  } catch (error) {
    next(error);
  }
}

async function promoteModerator(req, res, next) {
  const { userId } = req.params;
  const { roleId } = req.body;
  try {
    const body = { roles: [roleId] };
    const response = await axiosWithAuth().post(`/users/${userId}/roles`, body);
    res.status(response.status);
  } catch (error) {
    next(error);
  }
}

async function demoteModerator(req, res, next) {
  const { userId } = req.params;
  try {
    const body = { roles: [''] };
    const response = await axiosWithAuth().delete(
      `/users/${userId}/roles`,
      body
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
