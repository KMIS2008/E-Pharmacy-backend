const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');

const orderSchema= new Schema({
  _id: { type: String},

  name:  {
      type: String,
    },
  price:  {
      type: String,
    },
  suppliers:  {
      type: String,
    },
  stock:  {
      type: String,
    },
    category: {type: String,},

    quantity: {type: Number,},

    namecustomer: {type: String,},

    address:{type: String,},

    phone:{type: String,},

    email:{type: String,},

},{versionKey:false, timestamps:true});

orderSchema.post('save', handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;