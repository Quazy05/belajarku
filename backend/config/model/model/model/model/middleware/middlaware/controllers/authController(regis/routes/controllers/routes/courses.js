const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { createCourse, getCourses } = require('../controllers/courseController');

router.get('/', getCourses);
router.post('/', auth, upload.single('cover'), createCourse);

module.exports = router;
