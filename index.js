const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');       // Import the Product model
const productRoute = require("./routes/product.route.js");  // Import the product routes 
const app = express();    // Create an instance of an Express application

// middleware
app.use(express.json());  // Middleware to parse incoming JSON requests and make the data available in `req.body`
app.use(express.urlencoded({extended: false}));  // Middleware to parse URL-encoded data (from forms). `extended: false` means it doesn't support nested objects.

// routes 
app.use('/api/products', productRoute);   // Use the `productRoute` for any requests that start with `/api/products`

app.get('/', (req, res) => {
   res.send("Hello from Node API Updates 2 ");
});



// Connect to MongoDB using Mongoose
mongoose.connect("mongodb+srv://shan17032002:mxpoyso0yOzlrITz@backenddb.asyim.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
     
})
.catch(() => {
    console.log("Connection Failed!");
 }
);


/*---------initial code which is now in the controller----------*/

/* app.get('/api/products', async (req, res) => {
  
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch(error) {
    res.status(500).json({message: error.message});
  }

}); */

/* app.get('/api/product/:id', async (req, res) => {
  
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);

  } catch(error) {
    res.status(500).json({message: error.message});
  }

}); */


/* app.post('/api/products', async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch(error) {
      res.status(500).json({message: error.message});
    }
}); */

// update a product

/* app.put('/api/product/:id', async (req, res) => {
  
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if(!product){
      return res.status(404).json({message: "Product Not Found"});
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

  } catch(error) {
    res.status(500).json({message: error.message});
  }

}); */

// delete a product

/* app.delete('/api/product/:id', async (req, res) => {
  
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if(!product){
      return res.status(404).json({message: "Product Not Found"});
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json({message: "Product Deleted Successfully!"});

  } catch(error) {
    res.status(500).json({message: error.message});
  }

}); */




