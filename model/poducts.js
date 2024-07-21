const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError')

const productSchema= new Schema({
   
    photo:  {
        type: String,
      },
    name:  {
        type: String,
      },
    suppliers:  {
        type: String,
      },
    stock:  {
        type: String,
      },
    price:  {
        type: String,
      },
    category:  {
        type: String,
      },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
},{versionKey:false, timestamps:true});

productSchema.post('save', handleMongooseError);

const Product = model('product', productSchema);

module.exports = Product;