const joi = require('joi');

exports.createstudent = (req,res,next)=>{
    const studentschema = joi.object(
        {
            "username":joi.string().required(),
            "password":joi.number().required(),
            "email":joi.string().email().required(),

        }
    );

    const {error} = studentschema.validate(req.body);
    if (error) {
        return res.json({ message : error.details[0].message });
    }

    next();
}