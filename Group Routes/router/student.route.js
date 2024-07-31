const express = require('express');
const studentController = require('../controller/student.controller');
const router = express.Router();
const studentvalidation = require('../validation/studentvalidator');

router.get('/', studentController.index);
router.post('/student',studentvalidation.createstudent,studentController.show);
router.get("/student/:stu_id",studentController.show);
router.put("/student", studentController.update);
router.delete("/student", studentController.delete);

module.exports = router;