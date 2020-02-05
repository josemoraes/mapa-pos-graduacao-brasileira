const axios = require("axios");
const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place',
});
module.exports = {
  api
};