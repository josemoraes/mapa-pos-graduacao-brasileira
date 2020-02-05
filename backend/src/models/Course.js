const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  place_id: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  name: String,
  formatted_address: String,
  formatted_phone_number: String,
  website: String,
  courses: [String],
});

module.exports = mongoose.model('Course', CourseSchema);