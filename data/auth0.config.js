const axios = require('axios');

const requestBody = {
  client_id: process.env.M2M_CLIENT_ID,
  client_secret: process.env.M2M_CLIENT_SECRET,
  audience: process.env.M2M_AUDIENCE,
  grant_type: 'client_credentials',
};

const baseUrl = `https://${process.env.DOMAIN}/api/v2`;

const config = token => ({
  baseURL: baseUrl,
  headers: {
    Authorization: token,
  },
});

async function getToken() {
  const res = await axios.post(
    `https://${process.env.DOMAIN}/oauth/token`,
    requestBody
  );
  return `Bearer ${res.data.access_token}`;
}

async function getTestToken() {
  try {
    const response = await axios.post(
      `https://${process.env.DOMAIN}/oauth/token`,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        form: {
          grant_type: 'password',
          username: process.env.TEST_USERNAME,
          password: process.env.TEST_PASSWORD,
          audience: process.env.TEST_AUDIENCE,
          client_id: process.env.CLIENT_ID_TEST,
          client_secret: process.env.CLIENT_SECRET_TEST,
        },
      }
    );
    console.log(response.data);
    return `Bearer ${response.data.access_token}`;
  } catch (error) {
    console.log('Error Response in GetTestToken: %j', error);
  }
}

module.exports = { config, getToken, getTestToken };
