const { required } = require('joi');
const mongoose = require('mongoose');

const studenSchema = new mongoose.Schema({
  name:{
    type: String,
    required : true,
  },
  program: {
    type: String,
    required : true,
  },
  enrollment_number:{
    type: String,
    required : true,
  },
  dob:{
    type: String,
    required : true,
  },
blood_group :{
    type: String,
    required : true,
}
,  mobile:{
    type: Number,
    required : true,
  },

  email:{
    type: String,
    required : true,
  },
address:{
    type: String,
    required : true,
}
});

const student = mongoose.model('students',studenSchema);
module.exports = student;