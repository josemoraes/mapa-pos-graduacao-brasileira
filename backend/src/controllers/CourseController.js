const Course = require("../models/Course");

module.exports = {
  async store(req, res) {
    const { place_id } = req.body;
    const { location } = req.body;
    const { name } = req.body;
    const { formatted_address } = req.body;
    const { formatted_phone_number } = req.body;
    const { website } = req.body;
    const { courses } = req.body;

    try {
      let course = await Course.findOne({place_id});

      if(!course){
        course = await Course.create({
          place_id,
          location,
          name,
          formatted_address,
          formatted_phone_number,
          website,
          courses
        });
      }
      return res.json(course);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
