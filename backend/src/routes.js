const express = require('express');
const CourseController = require('./controllers/CourseController');
const MapController = require('./controllers/MapController');

const routes = express.Router();

routes.post('/courses', CourseController.store);

routes.get('/maps', MapController.index);

module.exports = routes;