const student = require('./../model/student.model')

exports.store = async (req, res) => {
    try {
        
        const student2 = await student.create(req.body);
        console.log(student2);
         res.status(200).json(student2);
    }
    catch(error)
    {
        res.status(500).json({error : error.message});
    }

}

exports.index = async (req, res) => {
    const stud =  await student.find({});
    res.json(
        stud       
    )
}
exports.show = async (req, res) => {
    const {_id} = req.params;
    const stu_id = await student.findById(_id);
    res.json({    
             stu_id
    })

}

exports.update = (req, res) => {
    res.json({
        "status": "Run successfully",
        "students": {
            
                "id": "10",
                     "name": "Hannah Lee",
                     "program": "Sociology",
                     "enrollment_number": "SO2024010",
                     "dob": "2001-04-23",
                     "blood_group": "A-",
                     "mobile": "+8899001122",
                     "email": "hannah.lee@example.com",
                     "address": "707 Hemlock Street, Springfield, IL, 62704, USA"
             
        },
        "messages": "Updated Successfully"
    })
}
exports.delete = async (req, res) => {
    const {_id} = req.params;
    console.log(_id);
    const stu_id = await student.findByIdAndDelete(_id);
}