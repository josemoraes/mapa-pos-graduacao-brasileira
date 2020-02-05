import axios from 'axios';

const GoogleMapsApi = axios.create({
  baseURL:'https://maps.googleapis.com/maps/api/place',
});

export default GoogleMapsApi;