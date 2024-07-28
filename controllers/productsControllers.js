const Product = require('../model/poducts.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const HttpError = require('../helpers/HttpError.js');


// const getAllProducts = async (req, res, next) => {
//     const { page = 1, limit = 12 } = req.query; // Получаем параметры пагинации из запроса
//     const skip = (page - 1) * limit; // Рассчитываем количество пропускаемых записей

//     const allProducts = await Product.find().skip(skip).limit(parseInt(limit));
//     const totalProducts = await Product.countDocuments(); // Общее количество продуктов для вычисления количества страниц
    
//     res.status(200).json({ 
//         products: allProducts, 
//         totalPages: Math.ceil(totalProducts / limit), 
//         currentPage: parseInt(page) 
//     });
// };

const getAllProducts = async (req, res, next) => {
    const { page = 1, limit = 12, keyword } = req.query; // Получаем параметры пагинации и ключевое слово из запроса
    const skip = (page - 1) * limit; // Рассчитываем количество пропускаемых записей

    let query = {};
    if (keyword) {
        query = { name: { $regex: keyword, $options: 'i' } }; // Используем регулярное выражение для поиска по ключевому слову
    }

    const allProducts = await Product.find(query).skip(skip).limit(parseInt(limit));
    const totalProducts = await Product.countDocuments(query); // Общее количество продуктов для вычисления количества страниц
    
    res.status(200).json({ 
        products: allProducts, 
        totalPages: Math.ceil(totalProducts / limit), 
        currentPage: parseInt(page) 
    });
};

// const getAllProducts = async (req, res, next) => {
//     try {
//         const { page = 1, limit = 12, keyword } = req.query; // Получаем параметры пагинации и ключевое слово из запроса
//         const skip = (page - 1) * limit; // Рассчитываем количество пропускаемых записей

//         let query = {};
//         if (keyword) {
//             query = { name: { $regex: keyword, $options: 'i' } }; // Используем регулярное выражение для поиска по ключевому слову
//         }

//         // Логирование для отладки
//         console.log('Query:', query);
//         console.log('Skip:', skip);
//         console.log('Limit:', limit);

//         const allProducts = await Product.find(query).skip(skip).limit(parseInt(limit));
//         const totalProducts = await Product.countDocuments(query); // Общее количество продуктов для вычисления количества страниц

//         // Логирование результатов для отладки
//         console.log('Found Products:', allProducts.length);
//         console.log('Total Products:', totalProducts);

//         res.status(200).json({
//             products: allProducts,
//             totalPages: Math.ceil(totalProducts / limit),
//             currentPage: parseInt(page)
//         });
//     } catch (error) {
//         next(error);
//     }
// };

const getProductById=async (req, res) => {
    const {id} = req.params;
    const productById =  await Product.findById(id)

    if (!productById){
          throw HttpError(404)
    }
     res.status(200).json(productById);
};

// const getAllProductsKeyWord = async (req, res, next) => {
//     const { keyword, page = 1, limit = 12 } = req.query; // Получаем параметры запроса
//     const skip = (page - 1) * limit; // Рассчитываем количество пропускаемых записей

//     const query = keyword 
//         ? { name: { $regex: keyword, $options: 'i' } } // Фильтрация по ключевому слову, если оно есть
//         : {};

//     const allProducts = await Product.find(query).skip(skip).limit(parseInt(limit));
//     const totalProducts = await Product.countDocuments(query); // Общее количество продуктов для вычисления количества страниц

//     res.status(200).json({ 
//         products: allProducts, 
//         totalPages: Math.ceil(totalProducts / limit), 
//         currentPage: parseInt(page) 
//     });
// };

module.exports = {
    getAllProducts: ctrlWrapper(getAllProducts),
    getProductById:ctrlWrapper(getProductById),
    // getAllProductsKeyWord:ctrlWrapper(getAllProductsKeyWord),
}