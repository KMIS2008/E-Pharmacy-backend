const express = require ("express");
const ctrl = require('../controllers/productsControlers');

const validateBody = require ('../helpers/validateBody.js');
const schema = require ('../schemas/contactsSchemas.js');
const isValidId = require ('../middlewares/isValidId.js');

const productRouter = express.Router();

productRouter.get("/", ctrl.getAllProducts);
productRouter.get("/:id", isValidId, ctrl.getProductById);

module.exports = productRouter;