const Product = require('../models/product.model.js');

// Controller function to get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});     // Fetch all products from the database
        res.status(200).json(products);              // Send the list of products as a JSON response with a 200 (OK) status
      } catch(error) {
        res.status(500).json({message: error.message});   // Send a 500 (Internal Server Error) status if something goes wrong
      }

};

// Controller function to get a specific product by ID
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;     // Extract the product ID from the request parameters
        const product = await Product.findById(id);
        res.status(200).json(product);
    
      } catch(error) {
        res.status(500).json({message: error.message});
      }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch(error) {
        res.status(500).json({message: error.message});
      }
  
};

// Controller function to update an existing product by ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body); // Update the product in the database with the new data from the request body
    
        if(!product){
          return res.status(404).json({message: "Product Not Found"}); // If the product is not found, send a 404 (Not Found) status
        }
    
        const updatedProduct = await Product.findById(id); // Fetch the updated product from the database
        res.status(200).json(updatedProduct);
    
      } catch(error) {
        res.status(500).json({message: error.message});
      }
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);  // Delete the product from the database by ID
    
        if(!product){
          return res.status(404).json({message: "Product Not Found"});
        }
    
        const updatedProduct = await Product.findById(id);
        res.status(200).json({message: "Product Deleted Successfully!"});
    
      } catch(error) {
        res.status(500).json({message: error.message});
      }
    
};


// Export the controller functions so they can be used in the route definitions
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};