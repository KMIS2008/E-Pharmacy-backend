const Product = require('../model/poducts');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const HttpError = require('../helpers/HttpError.js');

const getAllProducts = async (req, res, next) => {

    const allProducts = await Product.find();
    
    res.status(200).json(allProducts)  
   
};

module.exports = {
    getAllProducts: ctrlWrapper(getAllProducts),

}