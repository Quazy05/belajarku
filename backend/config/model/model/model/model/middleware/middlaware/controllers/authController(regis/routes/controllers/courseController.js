const Course = require('../models/Course');

exports.createCourse = async (req,res) => {
  const { title, description } = req.body;
  try {
    const course = new Course({ title, description, instructor: req.user._id, coverUrl: req.file?.path });
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCourses = async (req,res) => {
  const courses = await Course.find().populate('instructor','name email');
  res.json(courses);
};
