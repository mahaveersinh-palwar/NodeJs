const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());

const router = require('./router/student.router');



mongoose.connect("mongodb+srv://mahaveersinh:Mahaveersinh111@mahaveersinh.et7cz.mongodb.net/Abc"
  // ,
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // }
);

app.use('/api', router)

app.listen(4000, () =>
{
    console.log("Run SuccessFully")
})



