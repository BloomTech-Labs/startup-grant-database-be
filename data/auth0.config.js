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

module.exports = { config, getToken };
