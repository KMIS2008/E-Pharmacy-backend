const Joi = require('joi');

 const createOrderSchema = Joi.object({

    _id: Joi.string().required(), 
    photo: Joi.string().required(), 
    name: Joi.string().required(), 
    // address: Joi.string().required(),
    price: Joi.string().required(),
    suppliers: Joi.string().required(),
    stock: Joi.string(),
    category: Joi.string(),
    discription: Joi.object(),
    reviews: Joi.array(),
    quantity: Joi.number(),
})

 const updateOrderSchema = Joi.object({
    _id: Joi.string().required(), 
    quantity: Joi.number(),
})

module.exports= {createOrderSchema, updateOrderSchema}

