const express = require('express');
const app = express();

app.use(express.json());
//import routers
const router = require('./router/student.route');
app.use('/api', router)
    //implement routers


app.listen(3000, () => {
    console.log("Run Successfully")
})