const express = require ("express");
const storenearestRouter = express.Router();
const ctrl = require('../controllers/storesControllers');


storenearestRouter.get("/", ctrl.getStoresNearest);

module.exports = storenearestRouter;