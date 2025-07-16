const axios = require('axios');
require('dotenv').config();

const apiClient = axios.create({
  baseURL: process.env.INSTANCE,
  headers: {
    'Authorization': `Bearer ${process.env.TOKEN}`,
    'Accept': 'application/json'
  }
});

module.exports = apiClient;
