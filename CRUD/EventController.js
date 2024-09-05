const Event = require('../Models/EventModel');

//create event
exports.createEvent = async (req,res)=>{
    try
    {
        const newEvent = await Event.create(req.body);
        newEvent.save();
        res.status(201).json(
            {
              status:'success',
              data:newEvent,
              message: 'New Event Create Successfully'   
            }
        );

    }
    catch(error)
    {
        res.status(400).json(
            {
                status : 'error',
                message : 'Error Occured While Creating Event',
                error : error.message
            }
        );
    }
};

//Get All The Events
exports.getAllEvents = async (req,res)=>
{
    try{
         const events = await Event.find();
         res.status(200).json({
            status : 'success',
            data : events,
         });
    }
    catch(error)
    {
        res.status(500).json({
            status : 'error',
            message : 'Error Occured While Fetching Events',
            error : error.message
        });
    }
};

//get the event by id
exports.getEventById = async (req,res)=>
{    const { _id } = req.params;
    try{
        const eventById = await Event.findById(_id);
        res.status(201).json(eventById);
    }
    catch(error)
    {
        res.json({
          status : 'error',
            message : 'Error Occured While Fetching Events',
            error : error.message  
        })
    }
};

//update an Event
exports.updateEvent = async (req,res)=>
{
    const { _id } = req.params;
    const { title, description, start_time, end_time, location, organizer, capacity } = req.body;

    try {
        // Find the event by ID and update
        const updatedEvent = await Event.findByIdAndUpdate(
            _id,{ title, description, start_time, end_time, location, organizer, capacity },
            { new: true, runValidators: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({
                 error: 'Event not found' 
                });
        }

        res.json({
             status : 'success',
             data : updatedEvent,
             message : 'Event update Successfully'
        });
    } catch (error) 
    {
        res.status(400).json({
             error: 'Invalid request',
              message: error.message 
            });
    }
};

//delete an event
exports.deleteEvent = async (req,res) =>
{   const { _id } = req.params;
    try{
        const event = await Event.findByIdAndDelete(_id);
        if(!event)
        {
            return res.status(404).json({
                status : 'error',
                message : 'Event Not Found'
            });
        }
        else{
            return res.status(204).json({
                status : 'Success',
                message : 'Event Deleted Successfully'
            });
        }
    }
    catch(error)
    {
        res.status(500).json({
            status : 'error',
            message : 'Failed To Delete An Event',
            error : error.message
        });
    }
}