const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Order = require('../model/orders.js');

const getOrders = async (req, res, next) => {

    const allOrders = await Order.find();
    
    res.status(200).json(allOrders);  
};  

module.exports = {
    getOrders: ctrlWrapper(getOrders),

}