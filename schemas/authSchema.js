const Joi = require('joi');

const registrSchema = Joi.object({
    password: Joi.string().required(), 
    email: Joi.string().required(),
    name:Joi.string().required(),
    phone:Joi.string().required(),
});

const emailSchema = Joi.object({
    email: Joi.string().required(),
})

module.exports = {registrSchema, emailSchema};