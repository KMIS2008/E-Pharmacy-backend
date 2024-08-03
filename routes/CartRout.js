const express = require ("express");
const ctrl= require('../controllers/cartsContollers');
const schema = require ('../schemas/orderSchema.js');
const validateBody = require ('../helpers/validateBody.js');
const isValidId = require('../middlewares/isValidId');

const cartRouter=express.Router();

cartRouter.get("/", ctrl.getCarts);

cartRouter.post("/", validateBody(schema.createOrderSchema), ctrl.addCarts);

cartRouter.delete("/:id", isValidId, ctrl.deleteCart);

module.exports = cartRouter;