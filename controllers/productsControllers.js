const Product = require('../model/poducts.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const HttpError = require('../helpers/HttpError.js');

const getAllProducts = async (req, res, next) => {

    const allProducts = await Product.find();
    
    res.status(200).json(allProducts)  
   
};

const getProductById=async (req, res) => {
    // const {_id} = req.user;
    const {id} = req.params;
    const productById =  await Product.findById(id)

    if (!productById){
          throw HttpError(404)
    }
     res.status(200).json(productById);
};

module.exports = {
    getAllProducts: ctrlWrapper(getAllProducts),
    getProductById:ctrlWrapper(getProductById)
}