const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        "status": "Run successfully",
        "students": [{
            "stu_id": 1,
            "stu_name": "Abc",
            "mobile_no": 1234567891,
            "city": "DCb"
        }],
        "messages": "Retrive Successfully"
    })
});

app.post('/student', (req, res) => {
    res.json({
        "status": "Run successfully",
        "students": {
            "stu_name": req.body.stu_name,
            "mobile_no": req.body.mobile_no,
            "city": req.body.city
        },
        "messages": "Insert Successfully"
    })

});

app.get("/student/:stu_id", (req, res) => {
    const id = req.params.stu_id;
    res.json({
        "status": "Run successfully",
        "students": [{
            "stu_id": id,
            "stu_name": "Abc",
            "mobile_no": 1234567891,
            "city": "DCb"
        }],
        "messages": "Retrive Successfully"
    })

})

app.put("/student", (req, res) => {
    res.json({
        "status": "Run successfully",
        "students": {
            "stu_id": req.body.stu_id,
            "stu_name": req.body.stu_name,
            "mobile_no": req.body.mobile_no,
            "city": req.body.city
        },
        "messages": "Updated Successfully"
    })
});

app.delete("/student", (req, res) => {
    res.json({
        "stud_id": req.body.stu_id,
        "messages": "Delete Successfully"
    })
});

app.listen(3000, () => {
    console.log("Run Successfully")
});