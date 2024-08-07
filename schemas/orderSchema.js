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

const orderSchema = Joi.object({
    _id: Joi.string().required(),
    photo: Joi.string().uri().required(),
    name: Joi.string(), 
    price: Joi.number().required(),
     suppliers: Joi.string(),
    stock: Joi.string(),
    category: Joi.string(),
    discription: Joi.object(),
    reviews: Joi.array(),
    quantity: Joi.number().required(),
});

// Створення основної схеми для всього payload
const shippingInfoSchema = Joi.object({
    namecustomer: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    address: Joi.string().required(),
    paymentMethod: Joi.string().valid('Cash On Delivery', 'Bank').required(),
    orders: Joi.array().items(orderSchema).required(),
});

// const createFinishOrderSchema = Joi.object({

//     _id: Joi.string(), 
//     photo: Joi.string(), 
//     name: Joi.string(), 
//     price: Joi.string(),
//     suppliers: Joi.string(),
//     stock: Joi.string(),
//     category: Joi.string(),
//     discription: Joi.object(),
//     reviews: Joi.array(),
//     quantity: Joi.number(), 

//     namecustomer:Joi.string(),
//     address: Joi.string(),
//     phone: Joi.string(),
//     email: Joi.string(),
//     paymentMethod:Joi.string(),
// })

module.exports= {createOrderSchema, updateOrderSchema, shippingInfoSchema}

