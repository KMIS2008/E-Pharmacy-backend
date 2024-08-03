const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Cart = require('../model/carts.js');


const getCarts = async (req, res, next) => {

    const allCarts = await Cart.find();
    
    res.status(200).json(allCarts);  
};  

const addCarts = async(req, res, next)=>{
    // const {_id: owner}=req.user;
    const newContact = await Cart.create({...req.body, 
        // owner
    });
   
    res.status(201).json(newContact);
}

const deleteCart = async (req, res) => {
    // const {_id} = req.user;
    const {id} = req.params;
    const delCart = await Cart.findByIdAndDelete(id);
    // const delCart = await Cart.findOneAndDelete({
    //     _id: id,
    //     owner: _id
    // });
   
    if (!delCart){
        throw HttpError(404)
    } 
    res.status(200).json(delCart);
};

module.exports = {
    getCarts: ctrlWrapper(getCarts),
    addCarts:ctrlWrapper(addCarts),
    deleteCart:ctrlWrapper(deleteCart)
}