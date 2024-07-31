const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError')

const orderSchema= new Schema({
   
    photo:  {
        type: String,
      },
    name:  {
        type: String,
      },
    email:  {
        type: String,
      },
    price:  {
        type: String,
      },
    products:  {
        type: String,
      },
    phone:  {
        type: String,
      },
    address:  {
        type: String,
      },
},{versionKey:false, timestamps:true});

orderSchema.post('save', handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;