const express = require('express');
const Product  = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');  // Destructure and import the controller functions

/*These routes handle CRUD operations for products, 
with each route linked to its respective controller 
function to manage requests for getting, creating, updating, 
and deleting products based on the product ID.*/

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);

// update  a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);


module.exports = router;