const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const StoresNearest = require('../model/stores.js');

const getStoresNearest = async (req, res, next) => {

    const allStoresNearest = await StoresNearest.find();
    
    res.status(200).json(allStoresNearest);  
};  


module.exports = {
    getStoresNearest: ctrlWrapper(getStoresNearest),
}