const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');

const cartsSchema= new Schema({
   
    photo:  {
        type: String,
      },
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
},{versionKey:false, timestamps:true});

cartsSchema.post('save', handleMongooseError);

const Cart = model('cart', cartsSchema);

module.exports = Cart;