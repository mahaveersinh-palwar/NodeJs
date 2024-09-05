const express = require('express');
const router = express.Router();
const Eventcontroller = require('../Controllers/EventController');

router.get('/Event',Eventcontroller.getAllEvents)
router.get('/Event/:_id',Eventcontroller.getEventById)
router.post('/Event',Eventcontroller.createEvent)
router.put('/Event/:_id',Eventcontroller.updateEvent)
router.delete('Event/:_id',Eventcontroller.deleteEvent)

module.exports = router;