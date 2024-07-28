const Product = require('../model/poducts.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const HttpError = require('../helpers/HttpError.js');

const getAllProducts = async (req, res, next) => {

    const { page = 1, limit = 12 } = req.query; // Получаем параметры пагинации из запроса
    const skip = (page - 1) * limit; // Рассчитываем количество пропускаемых записей

    const allProducts = await Product.find().skip(skip).limit(parseInt(limit));
    const totalProducts = await Product.countDocuments(); // Общее количество продуктов для вычисления количества страниц
    
    res.status(200).json({ 
        products: allProducts, 
        totalPages: Math.ceil(totalProducts / limit), 
        currentPage: parseInt(page) 
    });
};

module.exports = {
    getAllProducts: ctrlWrapper(getAllProducts),
    getProductById:ctrlWrapper(getProductById)
}