const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
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

router.post('/student', (req, res) => {
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

router.get("/student/:stu_id", (req, res) => {
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

router.put("/student", (req, res) => {
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

router.delete("/student", (req, res) => {
    res.json({
        "stud_id": req.body.stu_id,
        "messages": "Delete Successfully"
    })
});
module.exports = router;