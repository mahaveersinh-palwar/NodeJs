const mongoose = require('mongoose');

//make a schema for event 
const eventSchema = new mongoose.Schema({
   title :{
    type : String,
    require: true
   },
   description:{
    type : String,
    require: true
   },
   start_time:{
    type : Date,
    require: true
   },
   end_time:{
    type : Date,
    require: true
   },
   location:{
    type : String,
    require: true
   },
   organizer:{
    type : String,
    require: true
   },
   capacity:{
      type: Number,
      require : true
   }
});

const Event = mongoose.model('Events',eventSchema);
module.exports = Event;
