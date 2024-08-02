const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Cart = require('../model/carts.js');

const getCarts = async (req, res, next) => {

    const allCarts = await Cart.find();
    
    res.status(200).json(allCarts);  
};  

module.exports = {
    getCarts: ctrlWrapper(getCarts),

}