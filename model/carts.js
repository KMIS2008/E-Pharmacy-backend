const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');
// const { ObjectId } = mongoose.Schema.Types;

const cartsSchema= new Schema({
    _id: { type: String},

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
      category: {type: String,},

      quantity: {type: Number,},

      reviews: {type: String,},

      discription: {type: String,},
      
},{versionKey:false, timestamps:true});

cartsSchema.post('save', handleMongooseError);

const Cart = model('cart', cartsSchema);

module.exports = Cart;