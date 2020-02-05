
const api = require("../config/api");
const googleMapsApiKey = require("../config/googleMapsApiKey");

module.exports = {
  async index(req, res) {
    console.log("API", api);
    console.log("Input > ", req.query.place);
    console.log("API Key > ", googleMapsApiKey);

    const data = await api.api.get(
      `/autocomplete/json?input=${req.query.place}&types=establishment&key=AIzaSyBrNIjx3bA87ec3ZAh0DwYP9KV4Guih83k`
    );
    return res.json(data.data);
    /*api.get(
      `/autocomplete/json?input=${req.query.place}&types=establishment&key=${googleMapsApiKey}`
    ).then(response => {
      console.log("Retorno > ",response.data);
      return res.json(data);
    })
    .catch(error => {
      console.log("Google error > ", error.message);
      res.status(500).json({error: error.message});
    });*/
  }
};