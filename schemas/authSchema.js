const Joi = require('joi');

const registrSchema = Joi.object({
    password: Joi.string().required(), 
    email: Joi.string().required(),
    name:Joi.string(),
    phone:Joi.string(),
});

// const emailSchema = Joi.object({
//     email: Joi.string().required(),
// })

module.exports = {registrSchema, 
    // emailSchema
};