const exprees = require('express');
const tokenMiddleware = require('./../authnection');
const studentController = require('../controller/student.controller')
const router = exprees.Router();

router.get('/',tokenMiddleware,studentController.index);
router.post('/student', tokenMiddleware,studentController.store);
router.get('/student/:_id', studentController.show);
router.put('/student', studentController.update);
router.delete('/del/:_id', studentController.delete);

module.exports = router;