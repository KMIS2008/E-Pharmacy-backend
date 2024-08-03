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
})

 const updateOrderSchema = Joi.object({
    photo: Joi.string().required(), 
    name: Joi.string().required(), 
    address: Joi.string().required(),
    products: Joi.string().required(),
    price: Joi.string().required(),
    status: Joi.string().required(),
    order_date: Joi.string().required(), 
    updatedAt: Joi.string()
})

module.exports= {createOrderSchema, updateOrderSchema}

