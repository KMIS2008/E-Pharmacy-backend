const express = require ("express");
const ctrl= require('../controllers/cartsContollers');

const cartRouter=express.Router();

cartRouter.get("/", ctrl.getCarts);

module.exports = cartRouter;