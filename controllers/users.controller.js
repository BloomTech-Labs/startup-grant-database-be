const axios = require('axios');

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
    const response = await axios.get(
      `https://${process.env.DOMAIN}/api/v2/users`,
      {
        headers: { Authorization: token },
      }
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
}

async function findUser(req, res, next) {
  const { sub } = req.user;
  const token = await getToken();
  console.log(req.user);
  try {
    const response = await axios.get(
      `https://${process.env.DOMAIN}/api/v2/users/${sub}`,
      {
        headers: { Authorization: token },
      }
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  console.log('req user', req.user);
  const { sub } = req.user;
  const token = await getToken();
  try {
    const foundUser = await axios.patch(
      `https://${process.env.DOMAIN}/api/v2/users/${sub}`, req.body,
      {
        headers: { Authorization: token },
      }
    );
    console.log(foundUser)
   res.status(202).json({message: 'its working!'})
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
};
